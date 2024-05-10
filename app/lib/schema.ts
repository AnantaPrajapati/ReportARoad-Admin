import mongoose from "mongoose";

const ReportSchema =  new mongoose.Schema({

    userId: Object, 
    location:String,
    images: [String],    
    severity: String,
    desc: String,
    status:  String,  

});

export const Report = mongoose.models.reports || mongoose.model("reports", ReportSchema);





