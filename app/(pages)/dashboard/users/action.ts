"use server"
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Signup } from "./schema";

export async function getUsers () {
    await mongoose.connect("mongodb://127.0.0.1:27017/ReportARoad");
    const signups = await Signup.find();
    console.log(signups);
    return signups;
}


export default async function DeleteUser(_id: string, comment: string) {
try{
    const results = await fetch(`http://localhost:3000/DeleteUser?userId=${_id}`, {method: "POST",
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
