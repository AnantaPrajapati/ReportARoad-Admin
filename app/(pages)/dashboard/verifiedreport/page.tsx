import { getReports } from "@/app/lib/action"
import ReportTable from "@/components/ui/reports/ReportTable"
import VerifiedReportTable from "@/components/ui/verifiedreport/VerifiedReportTable";
import { getVerifiedReports } from "./action";

export default async function Page(){
  const data = await getVerifiedReports();
//   console.log("reports =", data);
  return (
    <VerifiedReportTable tableData={data}/>
  )
} 