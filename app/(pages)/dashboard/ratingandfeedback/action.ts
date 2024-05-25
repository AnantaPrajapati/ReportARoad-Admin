"use server"
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Rating } from "./schema";

export  async function getRatingandFeedback() {
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

export default async function ResponseRating(userId: string, comment: string) {
    try{
        const results = await fetch(`http://localhost:3000/ResponseRating?userId=${userId}`, {method: "POST",
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

    
export  async function DeleteRatingandfeedback(_id: string, comment: string) {
  try{
      const results = await fetch(`http://localhost:3000/deleteRating?_id=${_id}`, {method: "POST",
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