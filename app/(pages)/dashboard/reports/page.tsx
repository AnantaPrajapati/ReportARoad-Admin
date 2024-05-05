// "use client";
// import { reportsData } from "@/app/lib/placeholder-data";
import { reportHeaders } from "@/app/lib/schema";
import CustomTable from "@/components/ui/custom-table";

export default async function Page() {

const results = await fetch("http://localhost:3000/admin/reports")
const allreports = await results.json();
const data =  allreports.reports;

  return (
    <div>
      <CustomTable headers={reportHeaders} data={data} />
    </div>
  );
}
