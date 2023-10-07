import { View, StyleSheet } from "@react-pdf/renderer";
import SSTTableHeader from "./PDF_Gen_Components/SSTTableHeader";
import SSTTableRow from "./PDF_Gen_Components/SSTTableRow";
import SSTTableBlankSpace from "./PDF_Gen_Components/SSTTableBlankSpace";
import SSTTableFooter from "./PDF_Gen_Components/SSTTableFooter";

const tableRowsCount = 11;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#bff0fd",
  },
});

const StudentSubjectTable = ({ invoice }) => (
  <View style={styles.tableContainer}>
    <SSTTableHeader />
    <SSTTableRow items={invoice.items} />
    <SSTTableBlankSpace rowsCount={tableRowsCount - invoice.items.length} />
    <SSTTableFooter items={invoice.items} />
  </View>
);

export default StudentSubjectTable;
