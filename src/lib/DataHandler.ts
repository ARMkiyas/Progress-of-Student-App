import { File } from "buffer";
import { handleFileRead } from "./datafilehandler";






export const dataHandler = (datafile: File) => {
    datafile && handleFileRead(datafile);
}