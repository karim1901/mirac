import Order from "@/model/order";
import { NextResponse } from "next/server";





export async function POST(req) {
    try {

        const data = await req.json()

        const order = await Order.create(data)
        
    } catch (error) {
        return NextResponse.json({message:error.message})
    }
}