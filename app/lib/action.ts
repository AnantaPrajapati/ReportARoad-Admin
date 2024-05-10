"use server"
import { Report } from "@/app/lib/schema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function getReports () {
    await mongoose.connect("mongodb://127.0.0.1:27017/ReportARoad");
    const reports = await Report.find();
    // console.log(reports);
    return reports;
}