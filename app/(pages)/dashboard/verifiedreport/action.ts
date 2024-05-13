import { Report } from "@/app/lib/schema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function getVerifiedReports() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/ReportARoad");
        const reports = await Report.find({ status: 'approved' }); 
        // console.log(reports);
        return reports;
    } catch (error) {
        console.error("Error fetching reports:", error);
        return [];
    }
}
export async function updateReport(reportId: string, newData: any) {
    try {
      const response = await fetch(`http://localhost:3000/updateReport?reportId=${reportId}`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData), 
      });
  
      if (!response.ok) {
        throw new Error("Failed to update report");
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error updating report:", error);
      return null;
    }
  }
  
