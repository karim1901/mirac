"use client"


import { useRouter } from 'next/navigation';
import React from 'react'
import { MdOutlineVerified } from "react-icons/md";



const page = () => {
    const router = useRouter()
  return (
    <div  className="flex items-center justify-center h-screen">
      <div>
        
      </div>
        <div className="flex flex-col items-center text-green-600">
            <MdOutlineVerified className="text-[3rem]"/>
            <p>تمت العملية بنجاح</p>
            <h1 onClick={()=>router.back()} className="text-primary cursor-pointer underline ">عودة الى الصفحة</h1>


        </div>
    </div>
  )
}

export default page
