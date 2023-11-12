import Dexie, { Table } from 'dexie';
import { TAcedamicDetails, TSchoolDetails, TStudentData, Tblobstore } from '../types';
import indexedDB from "fake-indexeddb"




export class DB extends Dexie {
    schoolDetails: Table<TSchoolDetails, number>
    acedamicDetail: Table<TAcedamicDetails, number>
    studentData: Table<TStudentData, string>
    header: Table<string[], number>
    blobstore: Table<Tblobstore, number>

    constructor(dbname: string, test: boolean = false) {
        super(dbname, { indexedDB: test ? indexedDB : window.indexedDB });
        this.version(1).stores({
            schoolDetails: "++id",
            acedamicDetail: "++id",
            studentData: "index,name",
            header: "++id",
            blobstore: "++id,id"

        })
        this.schoolDetails = this.table("schoolDetails")
        this.acedamicDetail = this.table("acedamicDetail")
        this.studentData = this.table("studentData")
        this.header = this.table("header")

    }
}


const db = new DB("POSDB");



export default db;


export const resetDatabase = (dbinstance = db) => {
    return dbinstance.transaction('rw', dbinstance.acedamicDetail, dbinstance.studentData, dbinstance.schoolDetails, dbinstance.header, dbinstance.blobstore, async () => {
        await Promise.all(dbinstance.tables.map(table => table.clear()));
    });
}

