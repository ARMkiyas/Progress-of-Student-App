export interface TSubject {
    [key: string]: number
}

export interface TStudentDetails {
    [key: string]: string | number
}

export type TStudentData = {
    totalMark: number,
    avarage: number,
    subjects: TSubject
} & TStudentDetails