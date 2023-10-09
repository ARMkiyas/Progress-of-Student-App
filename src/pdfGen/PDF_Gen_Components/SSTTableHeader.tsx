import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    backgroundColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    textAlign: "center",
    fontStyle: "bold",
    flexGrow: 1,
  },
  subjectrow: {
    width: "70%",
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  // qty: {
  //   width: "10%",
  //   borderRightColor: borderColor,
  //   borderRightWidth: 1,
  // },
  // rate: {
  //   width: "15%",
  //   borderRightColor: borderColor,
  //   borderRightWidth: 1,
  // },
  valuerow: {
    width: "30%",
  },
});

const SSTTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.subjectrow}>Subjects</Text>

    {/* <Text style={styles.rate}>Marks</Text> */}
    <Text style={styles.valuerow}>Marks</Text>
  </View>
);

export default SSTTableHeader;
