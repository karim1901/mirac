import Brand from "@/model/brand";
import Category from "@/model/category";
import { connectDB } from "@/utils/connectDb";
import { NextResponse } from "next/server";

connectDB()


export async function POST(request) {
    try {
        const brand = await request.json()
        const data  = await Brand.create(brand)
        return NextResponse.json({status:200,data:data})
    } catch (error) {
        console({error:error.message})
        return NextResponse.json({error:error.message})
    }
}

export async function GET(request) {
    try {
        const data  = await Brand.find()
        return NextResponse.json({status:200,data:data})
    } catch (error) {
        console({error:error.message})
        return NextResponse.json({error:error.message})
    }
}