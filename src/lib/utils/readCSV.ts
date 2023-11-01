import Papa from 'papaparse';


const readCSV = async (csvFile: File) => {
    const csvData = csvFile
    return new Promise(resolve => {
        Papa.parse(csvData, {
            delimiter: ",",
            header: false,
            skipEmptyLines: true,
            dynamicTyping: true,
            transformHeader: function (h) {
                return h.trim();
            },
            complete: results => {
                resolve(results.data);
            }
        });
    });
};

export default readCSV;