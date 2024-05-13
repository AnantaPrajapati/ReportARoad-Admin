"use server"
import { Report } from "@/app/lib/schema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { User } from "./userSchema";


// export async function getReports () {
//     await mongoose.connect("mongodb://127.0.0.1:27017/ReportARoad");
//     const reports = await Report.find({ status: 'pending' }); 
//     // console.log(reports);
//     return reports;
// }
export default async function Signup(req: Request) {
try{

    const { firstname, lastname, username, email, password, cpassword, role, city } = await req.json();
    if (password !== cpassword) {
        return { success: false, message: "Passwords don't match" };
    }    
    const hashedPassword = await bcrypt.hash(password, 11);
    await mongoose.connect("mongodb://127.0.0.1:27017/ReportARoad");
    await  User.create({firstname, lastname, username, email, password: hashedPassword, cpassword: hashedPassword, role, city});  
   
    return NextResponse.json({ message: "User Registered"}, { status: 201});
    } catch (error) {
      return NextResponse.json({ message: "Error while registering user"}, { status: 500});
    }
}

