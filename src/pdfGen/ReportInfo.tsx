import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { TAcedamicDetails, TStudentData } from "@/lib/types";

const styles = StyleSheet.create({
  headerContainer: {
    fontSize: 14,
    marginTop: 15,
  },
  content: {
    // border: "1px",
    borderBottom: 0,
    borderColor: "#344afe",
    padding: 5,
    lineHeight: "0px",
  },
  viewrow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  infovalue: {
    color: "#373640",
    fontWeight: "bold",
    fontStyle: "normal",
    textTransform: "capitalize",
  },
  infokeyheader: {
    color: "#435055",
    fontStyle: "italic",
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
    <View style={{ ...styles.viewrow, ...styles.content }}>
      <Text style={styles.infokeyheader}>
        Name of the Student :{" "}
        <Text style={styles.infovalue}>{STDInfo.name}</Text>
      </Text>
    </View>
    <View style={{ ...styles.viewrow, ...styles.content }}>
      <View style={{ width: "100%" }}>
        <Text style={styles.infokeyheader}>
          Index :<Text style={styles.infovalue}> {STDInfo.index}</Text>
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          // borderLeft: "1px",
          paddingLeft: "10px",
          borderColor: "#344afe",
        }}
      >
        <Text style={styles.infokeyheader}>
          School Year :
          <Text style={styles.infovalue}> {ACEInfo.SchoolYear}</Text>
        </Text>
      </View>
    </View>
    <View style={{ ...styles.viewrow, ...styles.content }}>
      <View style={{ width: "100%" }}>
        <Text style={styles.infokeyheader}>
          Grade :<Text style={styles.infovalue}> {ACEInfo.Grade}</Text>
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          // borderLeft: "1px",
          paddingLeft: "10px",
          borderColor: "#344afe",
        }}
      >
        <Text style={styles.infokeyheader}>
          Term :<Text style={styles.infovalue}> {ACEInfo.Term}</Text>
        </Text>
      </View>
    </View>
    <View style={{ ...styles.viewrow, ...styles.content }}>
      <Text style={styles.infokeyheader}>
        Teacher Name:
        <Text style={styles.infovalue}> {ACEInfo.ClassTeacherName}</Text>
      </Text>
    </View>
    <View style={{ ...styles.viewrow, ...styles.content }}>
      <Text style={styles.infokeyheader}>
        Date:<Text style={styles.infovalue}> 2002/12/01</Text>
      </Text>
    </View>
  </View>
);

export default ReportInfo;
