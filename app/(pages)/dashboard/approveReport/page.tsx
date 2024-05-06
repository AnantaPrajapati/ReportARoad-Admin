// "use client";
// import { reportsData } from "@/app/lib/placeholder-data";
import { approvedReportHeaders } from "@/app/lib/schema";
import DynamicTable from "@/components/ui/dynamic-table";

export default async function Page() {

const results = await fetch("http://localhost:3000/getApprovedReports")
const allreports = await results.json();
const data =  allreports.reports;

  return (
    <div>
      <DynamicTable headers={approvedReportHeaders} data={data} />
    </div>
  );
}
