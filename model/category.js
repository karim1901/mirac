import mongoose from "mongoose";


const { Schema } = mongoose


const schemaCategory  = new Schema({
    name:{
        type:String,
        required:true,
        unique:[true,"category name required"]
    }
},{timestamps:true})


const Category  = mongoose.models.category || mongoose.model("category" , schemaCategory)

export default Category