import Order from "@/model/order";
import { connectDB } from "@/utils/connectDb";
import { NextResponse } from "next/server";


connectDB()


export async function POST(req) {
    try {

        const data = await req.json()

        const order = await Order.create(data)
        console.log(data)

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



// export async function PUT(req){
//     try {

//         const orders = await Order.updateMany( { $or: [{ thumbnail: { $exists: false } }, { thumbnail: "" }] },
//             {
//               $set: {
//                 thumbnail:
//                   "https://res.cloudinary.com/dytahk5uz/image/upload/v1761128408/products-images/WhatsApp_Image_2025-10-22_at_11-1761128408245_zor7gt.jpg",
//               },
//             })
//         const order = await Order.find()

//         return NextResponse.json(order)
        
//     } catch (error) {
//         console.log(error.message)
//         return NextResponse.json({error:error.message})
//     }
// }
