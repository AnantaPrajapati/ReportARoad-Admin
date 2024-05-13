"use server"
import { Report } from "@/app/lib/schema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function getReports () {
    await mongoose.connect("mongodb://127.0.0.1:27017/ReportARoad");
    const reports = await Report.find({ status: 'pending' }); 
    // console.log(reports);
    return reports;
}

export default async function approveReport(reportId: string, comment: string) {
    console.log('report');
try{
    const results = await fetch(`http://localhost:3000/approveReport?userId=${reportId}`, {method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment }),
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

export async function disapproveReport(reportId: string, comment: string) {
  console.log('report');
try{
  const results = await fetch(`http://localhost:3000/disapproveReport?userId=${reportId}`,
 {method: "POST",
  headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ comment }),
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
