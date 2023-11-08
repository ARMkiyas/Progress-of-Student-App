import processFileData from '@/lib/utils/processFileData';
import { describe, it, expect } from 'vitest';

describe('processFileData', () => {
    it('should return an empty array when rows is empty', async () => {
        const rows = [];
        const result = await processFileData(rows);
        expect(result).toEqual([]);
    });

    it('should return an array of TStudentData when rows is not empty', async () => {
        const rows = [
            ['name', 'index', 'maths', 'science', 'English'],
            ['John', '1', '80', '90', '70'],
            ['Jane', '2', '60', '80', '70'],
        ];
        const result = await processFileData(rows);
        expect(result).toEqual([
            {
                name: 'John',
                index: '1',
                rank: 1,
                subjects: [
                    { maths: 80 },
                    { science: 90 },
                    { english: 70 },
                ],
                total: 240,
                avarage: 80,
            },
            {
                name: 'Jane',
                index: '2',
                rank: 2,
                subjects: [
                    { maths: 60 },
                    { science: 80 },
                    { english: 70 },
                ],
                total: 210,
                avarage: 70,
            },
        ]);
    });

    it('should calculate the total mark and average correctly', async () => {
        const rows = [
            ['name', 'index', 'maths', 'science', 'english'],
            ['John', '1', '80', '90', '70'],
        ];
        const result = await processFileData(rows);
        expect(result[0].total).toEqual(240);
        expect(result[0].avarage).toEqual(80);
    });

    it('should sort the data according to the total mark', async () => {
        const rows = [
            ['name', 'index', 'maths', 'science', 'english'],
            ['John', '1', '80', '90', '60'],
            ['Jane', '2', '70', '80', '90'],
        ];
        const result = await processFileData(rows);
        expect(result[0].name).toEqual('Jane');
        expect(result[1].name).toEqual('John');
    });
});