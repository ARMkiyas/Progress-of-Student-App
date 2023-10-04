
import readXlsxFile from 'read-excel-file'
import { TSubject, TStudentDetails, TStudentData } from './types'
import Papa from 'papaparse';


export const handleFileRead = async (file: any) => {

    const fileType = file.name.split('.').pop().toLowerCase();

    console.log(fileType);

    let data: any

    if (fileType === 'xlsx') {

        const rows = await readXlsxFile(file)
        const header = rows.shift()
        data = rows.map((row: any) => {
            let details: TStudentDetails = {}
            let sub: TSubject = {}
            let total = 0

            header?.forEach((column: any, index: any) => {
                if (column === 'name' || column === 'index') {
                    details[column] = row[index]
                }
                else {
                    total = total + row[index]
                    sub[column] = row[index]
                }

            })


            return <TStudentData>{
                ...details, subjects: {
                    ...sub
                }, totalMark: total, avarage: total / Object.keys(sub).length
            }

        })


        const sortedarr = data.sort((a: any, b: any) => {
            return b.totalMark - a.totalMark
        })


        sortedarr.forEach((student: TStudentData, index: any) => {
            let temp = sortedarr[index - 1]
            if (temp && temp.totalMark === student.totalMark) {
                student.rank = temp.rank
            }
            else {
                student.rank = index + 1
            }

        })

        return sortedarr
    }
    else if (fileType === 'csv') {
        const data = await readCSV(file)
        console.log(data);
    }


}

const readCSV = async (csvFile: any) => {
    const csvData = csvFile
    return new Promise(resolve => {
        Papa.parse(csvData, {
            delimiter: ",",
            header: false,
            skipEmptyLines: true,
            dynamicTyping: true,
            transformHeader: function (h) {
                return h.trim();
            },
            complete: results => {
                resolve(results.data);
            }
        });
    });
};
