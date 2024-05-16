
import { getResources } from "../verifiedreport/action";
import ResourceTable from "@/components/resources/resourceTable";

export default async function Page(){
  const data = await getResources();
//   console.log("resources =", data);
  return (
    <ResourceTable tableData={data}/>
  )
} 
