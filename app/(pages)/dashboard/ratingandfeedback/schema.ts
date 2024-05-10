import mongoose from "mongoose";

const RatingSchema =  new mongoose.Schema({
    reportId: { type: mongoose.Schema.Types.ObjectId, ref: "Report" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    images: [String], 
    location: String,
    rating: Number,    
    feedback: String,
}, { timestamps: true });

export const Rating = mongoose.models.ratingfeedbacks || mongoose.model("ratingfeedbacks", RatingSchema);
