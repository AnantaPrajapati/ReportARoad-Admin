"use server"
import { Report } from "@/app/lib/schema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Resources } from "./schema";

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
        const updatedReport = await Report.findOneAndUpdate(
            { _id: reportId },
            { $set: newData },
            { new: true }
        );

        if (!updatedReport) {
            throw new Error("Report not found");
        }

        return updatedReport;
    } catch (error) {
        console.error("Error updating report:", error);
        return null;
    }
}



export default async function AssignReport(
    manpower: String,
    budget: String,
    time: String,
    status: String,
    image: String,
  ) {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/ReportARoad");
      await Resources.create({ manpower, budget, time, status, image  });
  
      return { success: true, message: "News created successfully" };
    } catch (error) {
      console.error("Error while creating news:", error);
      return { success: false, message: "Error while creating news" };
    }
  }
  
  export async function getResources () {
    await mongoose.connect("mongodb://127.0.0.1:27017/ReportARoad");
    const resources = await Resources.find(); 
    // console.log(reports);
    return resources;
}

export async function updateResourceReport(reportId: string, newData: any) {
    try {
        const updatedReport = await Resources.findOneAndUpdate(
            { _id: reportId },
            { $set: newData },
            { new: true }
        );
  
        if (!updatedReport) {
            throw new Error("Report not found");
        }
  
        return updatedReport;
    } catch (error) {
        console.error("Error updating report:", error);
        return null;
    }
  }
  