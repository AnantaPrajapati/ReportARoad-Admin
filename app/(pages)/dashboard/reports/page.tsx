import { getReports } from "@/app/lib/action"
import ReportTable from "@/components/ui/reports/ReportTable"

export default async function Page(){
  const data = await getReports();
  console.log("reports =", data);
  return (
    <ReportTable tableData={data}/>
  )
} 