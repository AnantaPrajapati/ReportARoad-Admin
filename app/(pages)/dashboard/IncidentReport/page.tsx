import { getReports } from "@/app/lib/action"
import ReportTable from "@/components/ui/reports/ReportTable"
import IncidentReportTable from "@/components/incidentReport/incidentReportTable";
import { getIncidentReports } from "./action";

export default async function Page(){
  const data = await getIncidentReports();
  // console.log("incidents =", data);
  return (
    <IncidentReportTable  tableData={data}/>
  )
} 