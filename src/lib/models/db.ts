import Dexie, { Table } from 'dexie';
import { TAcedamicDetails, TSchoolDetails, TStudentData } from '../types';


class DB extends Dexie {
    schoolDetails: Table<TSchoolDetails, number>
    acedamicDetail: Table<TAcedamicDetails, number>
    studentData: Table<TStudentData, number>
    header: Table<string[], number>

    constructor() {
        super("POSDB");
        this.version(1).stores({
            schoolDetails: "++id",
            acedamicDetail: "++id",
            studentData: "index,name",
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


export const resetDatabase = () => {
    return db.transaction('rw', db.acedamicDetail, db.studentData, db.schoolDetails, db.header, async () => {
        await Promise.all(db.tables.map(table => table.clear()));
    });
}

