import mongoose from "mongoose";

const NewsSchema =  new mongoose.Schema({
    title: String,   
    location:String,  
    image:String, 
    desc: String,
        
},{timestamps:true});

export const News = mongoose.models.news || mongoose.model('news',NewsSchema);



