import Order from "@/model/order";
import { NextResponse } from "next/server";






export async function PUT(req,{params}) {
    try {
        const {id } = params
        const {action } = await req.json()
        const order = await Order.updateOne({_id:id},{status:action})
        return NextResponse.json(order)
    } catch (error) {
        return NextResponse.json({error:error.message})
    }
}