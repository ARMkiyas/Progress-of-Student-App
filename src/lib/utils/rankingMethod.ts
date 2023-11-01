import { TStudentData } from "../types"

// ranking method
const rankingMethod = (data: TStudentData[]) => {

    // sort the data according to the total mark 
    //js array sort method use quick sort algorithm which is O(nlogn) 
    const sortedarr = data.sort((a: TStudentData, b: TStudentData) => {
        return b.totalMark - a.totalMark
    })


    // set the rank to each student
    sortedarr.forEach((student: TStudentData, index) => {
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


export default rankingMethod