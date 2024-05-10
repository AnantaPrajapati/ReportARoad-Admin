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
