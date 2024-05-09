import mongoose from "mongoose";

const SignupSchema =  new mongoose.Schema({

    firstname: String,
    lastname: String,
    username: String,
    email: String,
    role: String,
    city: String,
    verified: Boolean,

});

export const Signup = mongoose.models.signups || mongoose.model("signups", SignupSchema);
