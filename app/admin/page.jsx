'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {

  const router = useRouter()

  return (
    <div dir="ltr" className="p-4">
      <h1 className="">Dashborad</h1>
      <div className="mt-4 flex flex-col gap-4">
        <div className=" border-[1px] border-orange-400 rounded-lg p-4 hover:bg-primary hover:text-white " onClick={()=>{router.push("/admin/orders")}}>Orders</div>
        <div className=" border-[1px] border-orange-400 rounded-lg p-4 hover:bg-primary hover:text-white" onClick={()=>{router.push("/admin/addProduct")}}>Add Product</div>
        <div className=" border-[1px] border-orange-400 rounded-lg p-4 hover:bg-primary hover:text-white" onClick={()=>{router.push("/admin/addcategory")}}>Add category</div>
        <div className=" border-[1px] border-orange-400 rounded-lg p-4 hover:bg-primary hover:text-white" onClick={()=>{router.push("/admin/addbrand")}}>Add Brand</div>
      </div>
    </div>
  );
}
