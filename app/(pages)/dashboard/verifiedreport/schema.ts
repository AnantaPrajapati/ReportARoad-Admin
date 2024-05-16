import mongoose from "mongoose";

const AssignReportSchema =  new mongoose.Schema({
    // reportId: Object,
    manpower: String,
    budget: String,
    time: String,
    status:  String,  
    image: String,
       
});

export const Resources = mongoose.models.resources || mongoose.model("resources", AssignReportSchema);





