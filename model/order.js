import mongoose from "mongoose";


const { Schema } = mongoose


const schemaOrder  = new Schema({
    nameProduct:{
        type:String,
        require:[true,"name product is required"]
    },
    nameClient :{
        type:String,
        required:[true,"name client is Required"]
    },
    phone:{
        type:String,
        required:[true,"phone is required"]
    },
    city:{
        type:String,
        required:[true,"city is Required"]
    },
    address:{
        type:String,
        required:[true,"address is required"]
    },
    quantity:{
        type:String,
        required:[true,"quantity is required"]
    },
    price:{
        type:Number,
        required:[true , "price is required"]
    },
    status:{
        type:String,
        enum:["confirm","new","waite","cancel"],
        default:"new"
    },
    thumbnail:{
        type:String,
        required:[true , "thumbnail is required"]
    }
},{timestamps:true})


const Order  = mongoose.models.order || mongoose.model("order" , schemaOrder)

export default Order