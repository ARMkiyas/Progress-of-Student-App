import DataForm from "./DataForm";
import useStore from "@/lib/store";
import ReportPage from "./reportpage";

export default function Generate() {
  const { acedamicDetail, schoolDetails, studentData } = useStore();

  return (
    <>
      {acedamicDetail && schoolDetails && studentData ? (
        <ReportPage />
      ) : (
        <DataForm />
      )}
    </>
  );
}
