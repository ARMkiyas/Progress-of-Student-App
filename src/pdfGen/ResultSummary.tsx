import { View, StyleSheet, Text } from "@react-pdf/renderer";

import { TStudentData } from "@/lib/types";

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    marginTop: 24,

    width: "100%",
  },
  tableitmeview: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#bff0fd",
    height: 24,
  },
  tableitem: {
    width: "35%",
    paddingLeft: 8,
  },
});

const ResultSummary = ({ studentData }: { studentData: TStudentData }) => (
  <View style={styles.tableContainer}>
    <View style={{ ...styles.tableitmeview }}>
      <Text style={styles.tableitem}>Total Marks : {studentData.total}</Text>
      <Text
        style={{
          ...styles.tableitem,
          borderLeftColor: "#bff0fd",
          borderLeftWidth: 1,
        }}
      >
        Average : {studentData.avarage}
      </Text>
      <Text style={styles.tableitem}>Rank : {studentData.rank}</Text>
    </View>
    \
  </View>
);

export default ResultSummary;
