import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  reportTitle: {
    fontSize: 12,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

const ReportPDFFooter = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>Thank you for your business</Text>
  </View>
);

export default ReportPDFFooter;
