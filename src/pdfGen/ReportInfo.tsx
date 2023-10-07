import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { TAcedamicDetails, TStudentData } from "@/lib/types";

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 20,
    fontSize: 14,
  },
  content: {
    border: "1px",
    borderBottom: 0,
    padding: 5,
    lineHeight: "0px",
  },
  viewrow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const ReportInfo = ({
  STDInfo,
  ACEInfo,
}: {
  STDInfo: TStudentData;
  ACEInfo: TAcedamicDetails;
}) => (
  <View style={styles.headerContainer}>
    <Text style={styles.content}>Name of the Student : {STDInfo.name}</Text>
    <View style={{ ...styles.viewrow, ...styles.content }} debug={true}>
      <Text> Index : {STDInfo.index}</Text>

      <Text> School year : {ACEInfo.SchoolYear}</Text>
    </View>

    <Text style={styles.content}> Grede : {ACEInfo.Grade}</Text>
    <Text style={styles.content}> Term : {ACEInfo.Term}</Text>
    <Text style={styles.content}> Teacher : {ACEInfo.ClassTeacherName}</Text>
    <Text style={styles.content}> Date : 2002/i2/01</Text>
  </View>
);

export default ReportInfo;
