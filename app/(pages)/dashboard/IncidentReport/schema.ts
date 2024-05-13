import mongoose from "mongoose";

const IncidentReportSchema =  new mongoose.Schema({

    userId: Object, 
    location:String,
    image: String,    
    title: String,
    desc: String,  

});

export const IncidentReport = mongoose.models.incidents || mongoose.model("incidents", IncidentReportSchema);





