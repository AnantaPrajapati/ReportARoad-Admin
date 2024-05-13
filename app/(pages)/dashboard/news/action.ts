"use server"
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { News } from "./schema";
export async function getUsers () {

    await mongoose.connect("mongodb://127.0.0.1:27017/ReportARoad");
    const news = await News.find();
    // console.log(signups);
    return news;
}


export default async function createNews(title: string, image: string, description: string, location: string) {
try{
    const results = await fetch(`http://localhost:3000/createNews`, {method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, image, description, location}),
      
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
