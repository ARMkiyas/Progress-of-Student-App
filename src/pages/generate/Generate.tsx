import DataForm from "./DataForm";
import useStore from "@/lib/store";
import ReportPage from "./ReportPage";

export default function Generate() {
  const { acedamicDetail, schoolDetails, studentData, header } = useStore();

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
