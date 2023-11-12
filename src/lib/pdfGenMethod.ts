import { pdf } from "@react-pdf/renderer";
import ReportCardPdfMain from "@/pdfGen/ReportCardPdfMain";
import useStore from "./state/store";


export default async function pdfGenMethod() {

    const state = useStore.getState()

    const blob = await pdf(ReportCardPdfMain({ schoolDetails: state.schoolDetails, acedamicDetail: state.acedamicDetail, studentData: state.studentData[0], TableHeader: state.header }),).toBlob();

    const url = URL.createObjectURL(blob);

    return url


}