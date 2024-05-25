"use server"
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { News } from "./schema";
export async function getNews() {
    await mongoose.connect("mongodb://127.0.0.1:27017/ReportARoad");
    const news = await News.find();
    // console.log("news are", news);
    return news;
}

export default async function createNews(
  title: String,
  image: String,
  desc: String,
  location: String
) {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ReportARoad");
    await News.create({ title, image, desc, location });

    return { success: true, message: "News created successfully" };
  } catch (error) {
    console.error("Error while creating news:", error);
    return { success: false, message: "Error while creating news" };
  }
}

export  async function CrNews(title:string, location:string, image: string, desc: string) {
  try{
      const results = await fetch(`http://localhost:3000/createNews`, {method: "POST",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, location, image, desc}),
        
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


  export  async function DeleteNews(_id: string, comment: string) {
    try{
        const results = await fetch(`http://localhost:3000/DeleteNews?id=${_id}`, {method: "POST",
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
    