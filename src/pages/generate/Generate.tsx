
import DataForm from "./DataForm";
import { useStore } from "@/lib/store";



export default function Generate() {

  const {acedamicDetail,schoolDetails,studentData} = useStore();




  return (
    <>
    {
      acedamicDetail && schoolDetails && studentData ? <h1>students data</h1> : <DataForm />
    }
    </>
  );
}
