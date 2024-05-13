import { mongodbConnection } from "@/app/lib/db";
import { User } from "./userSchema";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req: Request){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/ReportARoad");
        const {email} = await req.json();
        const user =await User.findOne({email}).select("_id");
        console.log("user: ", user);
        return NextResponse.json({user});
    }catch(error){
        console.log(error);
    }
}