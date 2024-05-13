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
export default async function Signup(
  firstname: String, lastname: String, username: String, email: String, password: any, Cpassword: String, role: String, city: String
) {
  try {
    if (password !== Cpassword) {
      return { success: false, message: "Passwords don't match" };
    }
    const hashedPassword = await bcrypt.hash(password, 11);
    await mongoose.connect("mongodb://127.0.0.1:27017/ReportARoad");
    await User.create({ firstname, lastname, username, email, password: hashedPassword, Cpassword: hashedPassword, role, city });

    return NextResponse.json({ message: "User Registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error while registering user" }, { status: 500 });
  }
}

export async function userExist(email: String) {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ReportARoad");
    const user = await User.findOne({ email }).select("_id");
    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
  }
}


export async function submit(email: String, firstname: String, lastname: String, username: String, password: String, Cpassword: String, role: String, city: String) {
console.log("submit")
  try {
    console.log("Submitting signup form...");
    const resUserExits = await userExist(email);
    if (!resUserExits) {
      return;
    }
    const { user } = await resUserExits.json();
    if (user) {
      console.log("User exists");
      return;
    }

     
    const res = await Signup(
       firstname, lastname, username, email, password, Cpassword, role, city
    )

    // if (res.ok) {
    //   //  const form =e.target as HTMLFormElement;
    //   //  form.reset();

    // } else {
    //   console.log("Signup failed:", res.statusText);
    // }
  } catch (error) {
    console.error("Error during signup:", error);
  }
};
