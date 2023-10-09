import { View, StyleSheet } from "@react-pdf/renderer";
import SSTTableHeader from "./PDF_Gen_Components/SSTTableHeader";
import SSTTableRow from "./PDF_Gen_Components/SSTTableRow";
import SSTTableBlankSpace from "./PDF_Gen_Components/SSTTableBlankSpace";
import SSTTableFooter from "./PDF_Gen_Components/SSTTableFooter";
import { TStudentData } from "@/lib/types";

const tableRowsCount = 11;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#bff0fd",
  },
  footercont: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#bff0fd",
    height: 24,
    fontSize: 12,
    fontStyle: "bold",
  },
});

const StudentSubjectTable = ({
  studentData,
}: {
  studentData: TStudentData;
}) => (
  <View style={styles.tableContainer}>
    <SSTTableHeader />
    <SSTTableRow items={studentData.subjects} />
    <SSTTableBlankSpace
      rowsCount={tableRowsCount - studentData.subjects.length}
    />

    {/* <SSTTableRow items={invoice.items} />
    <SSTTableBlankSpace rowsCount={tableRowsCount - invoice.items.length} />
    <SSTTableFooter items={invoice.items} /> */}
  </View>
);

export default StudentSubjectTable;
