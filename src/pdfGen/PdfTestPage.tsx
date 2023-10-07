import { Fragment } from "react";
import ReportCardPdfMain from "./ReportCardPdfMain";
import { PDFViewer } from "@react-pdf/renderer";
import {
  TempStudentData,
  TempAcedamicData,
  TempSchoolData,
  TempHeaderData,
} from "@/lib/tempData/data";

export default function PdfTestPage() {
  return (
    <Fragment>
      <PDFViewer width={1000} height={800}>
        <ReportCardPdfMain
          TableHeader={TempHeaderData}
          acedamicDetail={TempAcedamicData}
          schoolDetails={TempSchoolData}
          studentData={TempStudentData[0]}
        />
      </PDFViewer>
    </Fragment>
  );
}
