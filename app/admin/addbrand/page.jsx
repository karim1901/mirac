'use client'


import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';



const page = () => {

    const [brand , setBrand] = useState("")

    const handleClick = async()=>{
        console.log(brand)
        try {
            const data  = await axios.post("/api/admin/brand",{name:brand})
            console.log(data)
            toast.success("created brand seccessfully .")
        } catch (error) {
            console.log({ name:"error in create brand",error:error.message})
        }
    }


  return (
    <div dir='ltr' className='p-3'>
      <h1>Add Brand</h1>
      <input type="text" className='outline-none border-[1px] h-[2.5rem] rounded-md mt-3 pl-3 border-primary w-full' onChange={({target})=>{setBrand(target.value)}} />
      <button onClick={handleClick } className='bg-primary text-white w-full mt-4 p-3 rounded-lg'>Add brand</button>
    </div>
  )
}

export default page
