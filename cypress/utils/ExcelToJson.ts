import {writeFileSync} from 'fs';
import * as XLSX from 'xlsx';
import * as path from 'path';
export default class ExcelToJson{

    convertXlsxToJson(filePath: string): string {
        const workbook = XLSX.readFile(filePath);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
    
        const fileName = path.basename(filePath, '.xlsx');
        const jsonFilePath = `./cypress/fixtures/${fileName}.json`;
        writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
    
        return jsonFilePath;
}
}