import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 20,
  },
  reportTitle: {
    fontSize: 30,
    fontStyle: "extrabold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});

const ReportCardHeader = ({ title }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>Student Report Card</Text>
  </View>
);
export default ReportCardHeader;
