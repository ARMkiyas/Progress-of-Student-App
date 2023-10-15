import { z } from "zod";
import { SchoolDetailSchema, AcedamicDetailSchema, StudentDataschema } from "./schema";



// datafile handler types
export interface TSubject {
    [key: string]: number
}

export interface TStudentDetails {
    [key: string]: any   //string | number | undefined
}

export type TStudentData = {
    index?: number,
    totalMark: number,
    avarage: number,
    subjects: TSubject[],
    rank: number
} & TStudentDetails



// store types

export type TSchoolDetails = z.infer<typeof SchoolDetailSchema>
export type TAcedamicDetails = z.infer<typeof AcedamicDetailSchema>
export type TStudentDataFile = z.infer<typeof StudentDataschema>



export type TStoreActions = {

    DataHandler: (schoolDetails: TSchoolDetails, acedamicDetail: TAcedamicDetails, studentData: TStudentDataFile) => void,
    setLoading: (loading: boolean) => void
    setHeader: (header: string[]) => void
    resetDatabase: () => void
    searchAction: (search: string) => void
}

export type TStoreState = {
    schoolDetails: TSchoolDetails | undefined,
    acedamicDetail: TAcedamicDetails | undefined,
    studentData: TStudentData[] | undefined,
    loading: boolean,
    header: string[] | undefined
}



// types of pdf generators

export type TPDFGenProps = {
    schoolDetails: TSchoolDetails | undefined,
    acedamicDetail: TAcedamicDetails | undefined,
    studentData: TStudentData | undefined,
    TableHeader: string[] | undefined

}

