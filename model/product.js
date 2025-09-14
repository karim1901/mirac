import mongoose from "mongoose";


const { Schema } = mongoose


const schemaProduct  = new Schema({
    title:{
        type:String,
        required:[true,"title is required"],
    },
    description:{
        type:String,
        required:[true,"description is required"],
    },
    price:{
        type:Number,
        required:[true , "price is required"]
    },
    images:{
        type:Array,
        required:[true,"images is required"]
    },
    thumbnail:{
        type:String,
        required:[true,"thumbnail is required"]
    },
    category:{
        type:String,
        required:[true,"category is required"]
    },
    brand:{
        type:String,
        required:[true,"brand is required"]
    },
    color:{
        type:String,
    },
    gender:{
        type:String,
        enum:["all","female","male"],
        default:"all"
    },
    quantity:{
        type:Number,
        min:1
    },

},{timestamps:true})


const Product  = mongoose.models.product || mongoose.model("product" , schemaProduct)

export default Product