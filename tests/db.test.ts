

import { DB, resetDatabase } from '@/lib/models/db';
import { TempAcedamicData, TempHeaderData, TempSchoolData, TempStudentData } from '@/lib/tempData/data';
import { describe, it, expect, beforeEach } from 'vitest';



describe('Test DB', () => {
    let db: DB;
    const dbname = "POSDB";
    const test = true;

    beforeEach(async () => {

        db = new DB(dbname, test);
        // Populate the database with mock data before each test
        await db.schoolDetails.put(TempSchoolData);
        await db.acedamicDetail.put(TempAcedamicData);
        await db.studentData.bulkPut(TempStudentData);
        await db.header.put(TempHeaderData);
    });


    it('should initialize properties correctly', async () => {
        const lengthofSTUdata = await db.studentData.toArray()
        expect(await db.schoolDetails.toArray()).toStrictEqual(Array(TempSchoolData));
        expect(await db.acedamicDetail.toArray()).toStrictEqual(Array(TempAcedamicData));
        expect(lengthofSTUdata.length).toBe(TempStudentData.length);
        expect(await db.header.toArray()).toStrictEqual(Array(TempHeaderData));

    });


    it('resetDatabase should clear all tables', async () => {
        await resetDatabase(db);
        const schoolDetailsCount = await db.schoolDetails.count();
        const acedamicDetailsCount = await db.acedamicDetail.count();
        const studentDataCount = await db.studentData.count();
        const blobstoreCount = await db.blobstore.count();

        expect(schoolDetailsCount).toBe(0);
        expect(acedamicDetailsCount).toBe(0);
        expect(studentDataCount).toBe(0);
        expect(blobstoreCount).toBe(0);
    });
});


