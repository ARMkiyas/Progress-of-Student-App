import { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#90e5fc";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#bff0fd",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontStyle: "bold",
  },
  subjectrow: {
    width: "70%",
    textAlign: "left",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
    textTransform: "capitalize",
  },
  // qty: {
  //   width: "10%",
  //   borderRightColor: borderColor,
  //   borderRightWidth: 1,
  //   textAlign: "right",
  //   paddingRight: 8,
  // },
  // rate: {
  //   width: "15%",
  //   borderRightColor: borderColor,
  //   borderRightWidth: 1,
  //   textAlign: "right",
  //   paddingRight: 8,
  // },
  valuerow: {
    width: "30%",
    textAlign: "center",
    paddingRight: 8,
  },
});

const SSTTableRow = ({ items }) => {
  const rows = items.map((item) => (
    <View style={styles.row} key={Object.keys(item)[0]}>
      <Text style={styles.subjectrow}>{Object.keys(item)[0]}</Text>
      {/* <Text style={styles.qty}>{item.qty}</Text>
      <Text style={styles.rate}>{item.rate}</Text> */}
      <Text style={styles.valuerow}>{Object.values(item)}</Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default SSTTableRow;
