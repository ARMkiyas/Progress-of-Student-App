import Dexie, { Table } from 'dexie';
import { TAcedamicDetails, TSchoolDetails, TStudentData } from '../types';


class DB extends Dexie {
    schoolDetails: Table<TSchoolDetails, number>
    acedamicDetail: Table<TAcedamicDetails, number>
    studentData: Table<TStudentData>
    header: Table<string[], number>

    constructor() {
        super("POSDB");
        this.version(1).stores({
            schoolDetails: "++id",
            acedamicDetail: "++id",
            studentData: "index",
            header: "++id"

        })
        this.schoolDetails = this.table("schoolDetails")
        this.acedamicDetail = this.table("acedamicDetail")
        this.studentData = this.table("studentData")
        this.header = this.table("header")

    }
}


const db = new DB();






export default db;

