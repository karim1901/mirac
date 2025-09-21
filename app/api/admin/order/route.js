import Order from "@/model/order";
import { connectDB } from "@/utils/connectDb";
import { NextResponse } from "next/server";


connectDB()


export async function POST(req) {
    try {

        const data = await req.json()



        const order = await Order.create(data)
        console.log(order)
        return NextResponse.json(order)
        
    } catch (error) {
        return NextResponse.json({message:error.message})
    }
}




export async function GET(req){
    try {

        const orders = await Order.find()

        return NextResponse.json(orders)
        
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({error:error.message})
    }
}