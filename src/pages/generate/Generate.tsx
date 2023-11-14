import DataForm from "./DataForm";
import useStore from "@/lib/state/store";
import ReportPage from "./ReportPage";
import { useLiveQuery } from "dexie-react-hooks";
import db from "@/lib/models/db";

export default function Generate() {
  const { acedamicDetail, schoolDetails, studentData, header, setLoading } =
    useStore();

  useLiveQuery(async () => {
    setLoading(true);

    const acedata = await db.acedamicDetail.toArray();
    const schooldata = await db.schoolDetails.toArray();

    const studentdata = await db.studentData.toArray();
    const headerdata = await db.header.toArray();

    if (
      acedata.length > 0 &&
      schooldata.length > 0 &&
      studentdata.length > 0 &&
      headerdata.length > 0
    ) {
      useStore.setState({
        acedamicDetail: acedata[0],
        schoolDetails: schooldata[0],
        studentData: studentdata,
        header: headerdata[0],
      });
    }

    setLoading(false);
  }, []);

  return (
    <>
      {acedamicDetail && schoolDetails && studentData && header ? (
        <ReportPage />
      ) : (
        <DataForm />
      )}
    </>
  );
}
