import mongoose from "mongoose";


const { Schema } = mongoose


const schemaBrand  = new Schema({
    name:{
        type:String,
        required:true,
        unique:[true,"brand name required"]

    }
},{timestamps:true})


const Brand  = mongoose.models.brand || mongoose.model("brand" , schemaBrand)

export default Brand