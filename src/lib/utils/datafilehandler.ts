
import readXlsxFile, { Row } from 'read-excel-file'
import { TStudentData } from '../types'
import readCSV from './readCSV';
import processFileData from './processFileData';


// function for handling the data from the file
export const handleFileRead = async (file: any) => {

    const fileType = file.name.split('.').pop().toLowerCase();


    let dataOut: TStudentData[] = []

    if (fileType === 'xlsx') {

        const rows = await readXlsxFile(file)
        console.log("xlsx", rows);

        dataOut = await processFileData(rows)

    }
    else if (fileType === 'csv') {
        const rows = await readCSV(file)

        dataOut = await processFileData(rows as Row[])

    }


    console.log(dataOut);


    return dataOut


}

