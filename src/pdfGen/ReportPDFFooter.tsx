import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    padding: 10,
  },
  reportTitle: {
    fontSize: 9,
    textAlign: "left",
    textTransform: "capitalize",
  },
  signatureTitle: {
    fontSize: 12,
    textAlign: "right",
    paddingRight: 28,
  },
  botton: {
    fontSize: 7,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 5,
  },
});

type ReportPDFFooterprop = {
  schoolAddress: string;
  phone: string;
  email: string;
};

const ReportPDFFooter = ({
  schoolAddress,
  phone,
  email,
}: ReportPDFFooterprop) => (
  <view>
    <View style={styles.titleContainer}>
      <Text style={styles.reportTitle}>School Address : {schoolAddress}</Text>
      <Text style={styles.reportTitle}>School Phone : {phone}</Text>
      <Text style={styles.reportTitle}>School Email : {email}</Text>
      <Text style={styles.signatureTitle}>Principal Signature</Text>
    </View>

    <view style={styles.botton}>
      <Text>Powered By : </Text>
      <Text>School Management System</Text>
    </view>
  </view>
);

export default ReportPDFFooter;
