
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Rating } from "./schema";

export async function getRatingandFeedback() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/ReportARoad");
        const rating = await Rating.find(); 
        // console.log(rating);
        return rating;
    } catch (error) {
        console.error("Error fetching ratings and feedback", error);
        return [];
    }
}
