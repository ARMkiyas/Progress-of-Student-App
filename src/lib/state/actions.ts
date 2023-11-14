
import { handleFileRead } from "../utils/datafilehandler";
import { TempStudentData, TempAcedamicData, TempSchoolData, TempHeaderData } from '../tempData/data';
import initialState from './initialState';
import db, { resetDatabase } from "@/lib/models/db"
import rankingMethod from "../utils/rankingMethod";
import { TStoreActions, TStudentData, Tblobstore } from "../types";
import ReportCardPdfMain from "@/pdfGen/ReportCardPdfMain";
import { pdf } from "@react-pdf/renderer";
import pdfGenMethod from "@/lib/pdfGenMethod";
import JSZip from 'jszip';
import { PDFDocument } from 'pdf-lib';
// function for simulate delay for testing loading state 
const delay = async (delay = 1000, callback = () => { }) => {

    const delayPromise = ms => new Promise(res => setTimeout(res, ms))
    await delayPromise(delay)

    callback()
}




async function mergePDFBlobs(blobstore: Tblobstore[]) {
    const mergedPdf = await PDFDocument.create();

    for (const blob of blobstore) {
        const arrayBuffer = await blob.blob.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);

        for (let i = 0; i < pdfDoc.getPageCount(); i++) {
            const [copiedPage] = await mergedPdf.copyPages(pdfDoc, [i]);
            mergedPdf.addPage(copiedPage);
        }
    }

    const mergedPdfBytes = await mergedPdf.save();
    return new Blob([mergedPdfBytes], { type: 'application/pdf' });
}





async function createZipFromBlobs(blobstore: Tblobstore[]) {
    const zip = new JSZip();

    for (const { id, blob } of blobstore) {
        const arrayBuffer = await blob.arrayBuffer();
        zip.file(`${id}.pdf`, arrayBuffer);
    }

    const zipBlob = await zip.generateAsync({ type: 'blob' });
    return zipBlob;
}
/*

simulate delay for testing loading state

const funcCallback = () => { console.info('msg WITH delay > 2') }

await delay(5000, funcCallback)

const data = await db.schoolDetails.toArray()

*/

const reRanking = (studentData: TStudentData, currentstate: TStudentData[]) => {
    let totalmark = 0
    studentData.subjects.forEach((subject) => {
        totalmark += Object.values(subject)[0]
    })
    const data = [...currentstate, { ...studentData, total: totalmark, avarage: totalmark / studentData.subjects.length }]
    const rerankedData = rankingMethod(data)

    return rerankedData
}


const actions = (set, get) => ({

    async DataHandler(schoolDetails, acedamicDetail, studentData) {


        const data = await handleFileRead(studentData);

        console.log(data.length);

        await db.acedamicDetail.put(acedamicDetail)
        await db.schoolDetails.put(schoolDetails)
        await db.studentData.bulkPut(data)
        await db.header.put(get().header)


        return set({ schoolDetails, acedamicDetail, studentData: data })
    },

    setLoading(loading) { return set({ loading }) },

    setHeader(header) {
        return set({ header })
    },


    async resetDatabase() {

        await resetDatabase();
        return set({ ...initialState })
    },



    async searchAction(search) {

        console.log(search);


        if (search.trim() === '') {

            const data = await db.studentData.toArray()
            return set({ studentData: data })
        }


        const dataofindex = await db.studentData.where('index').startsWithIgnoreCase(search.trim()).toArray()
        const dataofname = await db.studentData.where('name').startsWithIgnoreCase(search.trim()).toArray()

        console.log(Array.prototype.concat(dataofindex, dataofname));


        return set({ studentData: Array.prototype.concat(dataofindex, dataofname) })


    },


    removetoast(id) {
        set(state => ({
            toast: state.toast.filter((item, index) => index !== id),
        }))
    },


    async updateSchool(schoolDetails) {

        const data = await db.schoolDetails.toArray()


        await db.schoolDetails.update(data[0].id, schoolDetails).then(async (updated) => {
            if (updated) {

                await db.blobstore.clear()
                set({ schoolDetails })

            } else {

            }
        }).catch((err) => {


            set(state => {
                return {
                    toast: [...state.toast, { message: 'Somthing went wrong check your', type: 'error' }]
                }
            })


        })


    },


    async getStudentDataById(id: string) {
        console.log(id);
        try {

            const data = await db.studentData.get(id)

            console.log(data);

            if (data) {
                return data
            }
        }
        catch (error) {
            console.log(error);
        }



    },


    async updateAcedamic(acedamicDetail) {
        const data = await db.acedamicDetail.toArray()
        await db.acedamicDetail.update(data[0].id, acedamicDetail).then(async (updated) => {
            if (updated) {
                await db.blobstore.clear()
                set({ acedamicDetail })

            } else {

            }
        }).catch((err) => {
            console.log(err);

        })
    },


    setupdatebtnspinner(updatebtnspinner) { set({ updatebtnspinner: updatebtnspinner }) },


    async addNewStudent(studentData: TStudentData) {
        let status = {
            status: false,
            message: '',
            type: "error"
        }

        try {

            set({ updatebtnspinner: true })

            const checkDuplidatedData = await db.studentData.where('index').equals(studentData.index.trim()).toArray()
            if (checkDuplidatedData.length > 0) {
                status = {
                    status: false,
                    message: 'Duplicate Index, the index number provided already exsist',
                    type: "error"
                }

            }
            else {

                const getstate = get().studentData
                const rerankedData = reRanking(studentData, getstate)
                const uploaded = await db.studentData.bulkPut(rerankedData)
                if (uploaded) {
                    await db.blobstore.clear()
                    status = {
                        status: true,
                        message: 'Successfully Adde New Student Data',
                        type: "success"
                    }
                    set({ studentData: rerankedData })
                }

            }


        } catch (error) {
            console.log(error);

            status = {
                status: false,
                message: "Somthing went wrong check your",
                type: "error"
            }

        }
        finally {
            console.log(status);
            set(state => ({
                updatebtnspinner: false,
                toast: [...state.toast, { message: status.message, type: status.type }]
            }))
            return status.status
        }



    },

    async updateStudentData(studentData: TStudentData, editId) {
        let status = {
            status: false,
            message: '',
            type: "error"
        }


        try {

            set({ updatebtnspinner: true })

            if (editId !== studentData.index) {
                const checkDuplidatedData = await db.studentData.where('index').equals(studentData.index.trim()).toArray()
                if (checkDuplidatedData.length > 0) {
                    status = {
                        status: false,
                        message: 'Duplicate Index, the index number provided already exsist, please check the index number',
                        type: "error"
                    }
                    return false
                }
            }

            await db.studentData.delete(editId)

            const alldata = await db.studentData.toArray()
            const rerankedData = reRanking(studentData, alldata)

            const update = await db.studentData.bulkPut(rerankedData)
            if (update) {
                await db.blobstore.clear()
                set({ studentData: rerankedData })
                status = {
                    status: true,
                    message: 'Successfully Updated',
                    type: "success"
                }

            }


        } catch (error) {
            console.log(error);
        } finally {
            console.log(status);
            set(state => ({
                updatebtnspinner: false,
                toast: [...state.toast, { message: status.message, type: status.type }]
            }))
            return status.status

        }


    },


    async deleteStudentData(index) {

        try {

            await db.studentData.delete(index)
            const data = await db.studentData.toArray()
            const rerankedData = rankingMethod(data)
            await db.studentData.bulkPut(rerankedData)

            await db.blobstore.clear()

            set({ studentData: rerankedData })


        } catch (error) {
            console.log(error);

        }

    },

    async getPDF(type, id) {
        try {
            set({ genpdfloadaing: true })
            const studata = get().studentData
            let blobstore = await db.blobstore.toArray()
            if (blobstore.length !== studata.length && studata.length > 0 && blobstore.length === 0) {

                const promises = studata.map(async (studentData) => {
                    const blob = await pdf(ReportCardPdfMain({ schoolDetails: get().schoolDetails, acedamicDetail: get().acedamicDetail, studentData: studentData, TableHeader: get().header }),).toBlob();
                    return { id: studentData.index, blob };
                });

                const tempdata = await Promise.all(promises);

                console.log(tempdata);

                if (tempdata.length === studata.length) {
                    await db.blobstore.bulkPut(tempdata)
                    blobstore = tempdata
                }



            }


            if (type === "allmultiple" || type === "allinone") {

                if (type === "allinone") {
                    const allReportinOne = await mergePDFBlobs(blobstore)
                    return allReportinOne
                }
                else if (type === "allmultiple") {
                    const zipBlob = await createZipFromBlobs(blobstore)
                    return zipBlob
                }

            } else if (type === "byId" && id) {
                const blobstore = await db.blobstore.get(id)
                return blobstore.blob
            }



        }
        catch (error) {
            console.log(error);
        }
        finally {
            set({ genpdfloadaing: false })
        }


    }


})



export default actions;