"use server"
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Signup } from "./schema";
export async function getUsers () {
    await mongoose.connect("mongodb://127.0.0.1:27017/ReportARoad");
    const signups = await Signup.find();
    // console.log(signups);
    return signups;
}