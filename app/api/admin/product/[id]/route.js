import Product from "@/model/product";
import { connectDB } from "@/utils/connectDb";
import { NextResponse } from "next/server";



connectDB()


export async function GET(req,{params}) {
    try {

        const product = await Product.findById({_id:params.id})

        return NextResponse.json(product)
        
    } catch (error) {
        return NextResponse.json({error:error.message})
    }
}