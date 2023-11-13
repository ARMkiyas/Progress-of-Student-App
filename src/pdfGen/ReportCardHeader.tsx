import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 20,
  },
  reportTitle: {
    fontSize: 25,
    fontStyle: "extrabold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  reportSubtitle: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  dateview: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 20,
  },
  reportDate: {
    fontSize: 8,
    textAlign: "center",
    marginBottom: 15,
  },
});

const ReportCardHeader = ({ title }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>{title}</Text>
    <Text style={styles.reportSubtitle}>Student Report Card</Text>
    <View style={styles.dateview}>
      <Text style={styles.reportDate}>
        Date :
        {new Date().toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </Text>
    </View>
  </View>
);
export default ReportCardHeader;
