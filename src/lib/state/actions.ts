
import { handleFileRead } from "../utils/datafilehandler";
import { TempStudentData, TempAcedamicData, TempSchoolData, TempHeaderData } from '../tempData/data';
import initialState from './initialState';
import db, { resetDatabase } from "@/lib/models/db"



// function for simulate delay for testing loading state 
const delay = async (delay = 1000, callback = () => { }) => {

    const delayPromise = ms => new Promise(res => setTimeout(res, ms))
    await delayPromise(delay)

    callback()
}

/*

simulate delay for testing loading state

const funcCallback = () => { console.info('msg WITH delay > 2') }

await delay(5000, funcCallback)

const data = await db.schoolDetails.toArray()

*/




const actions = (set) => ({

    async DataHandler(schoolDetails, acedamicDetail, studentData) {


        const data = await handleFileRead(studentData);

        console.log(data);


        await db.acedamicDetail.put(TempAcedamicData)
        await db.schoolDetails.put(TempSchoolData)
        await db.studentData.bulkPut(TempStudentData)
        await db.header.put(TempHeaderData)


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


    async updateSchool(schoolDetails) {

        const data = await db.schoolDetails.toArray()


        await db.schoolDetails.update(data[0].id, schoolDetails).then((updated) => {
            if (updated) {
                set({ schoolDetails })



            } else {

            }
        }).catch((err) => {
            console.log(err);


        })


    },


    async updateAcedamic(acedamicDetail) {
        const data = await db.acedamicDetail.toArray()
        await db.acedamicDetail.update(data[0].id, acedamicDetail).then((updated) => {
            if (updated) {
                set({ acedamicDetail })

            } else {

            }
        }).catch((err) => {
            console.log(err);

        })
    },


    setupdatebtnspinner(updatebtnspinner) { set({ updatebtnspinner: updatebtnspinner }) },





})



export default actions;