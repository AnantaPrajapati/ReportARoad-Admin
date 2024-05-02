"use client";
import { reportsData } from "@/app/lib/placeholder-data";
import { reportHeaders } from "@/app/lib/schema";
import ReportTable from "@/components/ui/custom-table";

export default function Page() {




  return (
    <div>
      <ReportTable headers={reportHeaders} tableData={reportsData} />
    </div>
  );
}
