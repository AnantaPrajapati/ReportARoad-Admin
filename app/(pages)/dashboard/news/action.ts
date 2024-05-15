"use server"
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { News } from "./schema";
export async function getNews () {
    await mongoose.connect("mongodb://127.0.0.1:27017/ReportARoad");
    const news = await News.find();
    // console.log(signups);
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

