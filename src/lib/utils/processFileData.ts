import { Row } from "read-excel-file"
import { TStudentData, TStudentDetails, TSubject } from "../types"
import rankingMethod from "./rankingMethod"
import useStore from "@/lib/state/store"

export const studentDetailsOtherThenSubject = ['name', 'index']
export const calculatedData = ['total', 'avarage', 'rank']

// function for handling the data from the file, return the data in the format of TStudentData and calculate the total mark and avarage
const processFileData = async (rows: Row[]) => {

    let data: TStudentData[] = []

    // sperating header from data
    const header = rows.shift()


    data = rows.map((row: Row) => {
        let details: TStudentDetails = {
            name: '',
            index: '',
        }
        let sub: TSubject[] = []
        let total = 0

        // loop through each column and set the value to the object
        header?.forEach((column: string, index) => {
            if (studentDetailsOtherThenSubject.includes(column.trim())) {
                details[column.trim()] = String(row[index]).trim()
            }
            else {
                // check if the value is number or not if not then set it to 0 
                const temp = isNaN(row[index] as number) ? 0 : parseInt(row[index] as string) as number

                total = total + temp
                sub.push({ [column.trim()]: temp })

            }

        })


        return <TStudentData>{
            ...details, subjects: sub, total: total, avarage: total / Object.keys(sub).length
        }

    })


    // sort the data according to the total mark
    const RankedData = (rankingMethod(data))

    // set header to state for table header
    useStore.setState({ header: Array.prototype.concat(header, calculatedData) })


    return RankedData

}


export default processFileData;