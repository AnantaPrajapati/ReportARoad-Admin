"use server"

import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { IncidentReport } from "./schema";

export async function getIncidentReports () {
    await mongoose.connect("mongodb://127.0.0.1:27017/ReportARoad");
    const incidents = await IncidentReport.find(); 
    // console.log(reports);
    return incidents;
}

export default async function notifyUser(reportId: string, comment: string) {
    // console.log('report');
try{
    const results = await fetch(`http://localhost:3000/notifyUser?userId=${reportId}`, {method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment}),
      
    })
    if (!results.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await results.json();
      return data; 
    } catch (error) {
      console.error("Error fetching data:", error);
      return null; 
    }
}
