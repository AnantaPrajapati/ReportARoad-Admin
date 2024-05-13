import mongoose, { Schema, models } from "mongoose";


const UserSchema =  new Schema({
    firstname:{
        type: String,
        lowercase: true,
        required: true

    },
    lastname:{
        type: String,
        lowercase: true,
        required: true
    },
    username:{
        type: String,
        lowercase: true,
        required: true,
        unique: true

    },
    email:{
        type: String,
        lowercase: true,
        required: [true, "email can't be empty"],
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "email format is not correct",
        ],
        unique: true,
    },
    password:{
        type: String,
        required: [true, "password is required"],
    },
    Cpassword:{
        type: String,
        required: [true, "password is required"],
    },
    role:{
        type: String,
        
    },
    city:{
        type: String,
    },
    verified:{
        type: Boolean,
        default: false,
        required: true,
    },
},{timestamps:true});


export const User = mongoose.models.signups || mongoose.model("signups", UserSchema);

