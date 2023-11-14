import { Page, Document, Image, StyleSheet } from "@react-pdf/renderer";
import ReportCardHeader from "./ReportCardHeader";
import ReportInfo from "./ReportInfo";
import StudentSubjectTable from "./StudentSubjectTable";
import ReportPDFFooter from "./ReportPDFFooter";
import { TPDFGenProps } from "@/lib/types";
import ResultSummary from "./ResultSummary";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: 20,
    backgroundColor: "#FEFAE0",
  },
  logo: {
    width: 74,
    height: 66,
    marginLeft: "auto",
    marginRight: "auto",
  },
  Contectview: {
    fontSize: 11,
    border: "1px",
    height: "100%",
    flexDirection: "column",
  },
  contentBody: {
    padding: 20,
    flexGrow: 1,
  },
});

const ReportCardPdfMain = ({
  schoolDetails,
  acedamicDetail,
  studentData,
  TableHeader,
}: TPDFGenProps) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <view style={styles.Contectview}>
          <ReportCardHeader title={schoolDetails.schoolname} />
          <view style={styles.contentBody}>
            <ReportInfo STDInfo={studentData} ACEInfo={acedamicDetail} />
            <StudentSubjectTable studentData={studentData} />
            <ResultSummary studentData={studentData} />
          </view>
          <ReportPDFFooter
            schoolAddress={schoolDetails.SchoolAddress}
            phone={schoolDetails.SchoolPhone}
            email={schoolDetails.SchoolEmail}
          />
        </view>
      </Page>
    </Document>
  );
};

export default ReportCardPdfMain;
