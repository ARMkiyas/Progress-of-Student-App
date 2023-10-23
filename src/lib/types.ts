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

    index?: string,
    totalMark: number,
    avarage: number,
    subjects: TSubject[],
    rank: number
} & TStudentDetails



// store types

export type TSchoolDetails = {
    id?: number,
} & z.infer<typeof SchoolDetailSchema>
export type TAcedamicDetails = {
    id?: number,
} & z.infer<typeof AcedamicDetailSchema>
export type TStudentDataFile = z.infer<typeof StudentDataschema>



export type TStoreActions = {

    DataHandler: (schoolDetails: TSchoolDetails, acedamicDetail: TAcedamicDetails, studentData: TStudentDataFile) => Promise<void>,
    setLoading: (loading: boolean) => Boolean
    setHeader: (header: string[]) => void
    resetDatabase: () => Promise<void>
    searchAction: (search: string) => Promise<void>
    updateSchool: (schoolDetails: TSchoolDetails) => Promise<boolean | void>
    updateAcedamic: (acedamicDetail: TAcedamicDetails) => Promise<boolean | void>
    setupdatebtnspinner: (updatebtnspinner: boolean) => void
}

export type TStoreState = {
    schoolDetails: TSchoolDetails | undefined,
    acedamicDetail: TAcedamicDetails | undefined,
    studentData: TStudentData[] | undefined,
    loading: boolean,
    header: string[] | undefined
    updatebtnspinner: boolean
}



// types of pdf generators

export type TPDFGenProps = {
    schoolDetails: TSchoolDetails | undefined,
    acedamicDetail: TAcedamicDetails | undefined,
    studentData: TStudentData | undefined,
    TableHeader: string[] | undefined

}

