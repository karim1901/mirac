'use client'


import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';



const page = () => {

    const [category , setCategory] = useState("")

    const handleClick = async()=>{
        console.log(category)
        try {
            const data  = await axios.post("/api/admin/category",{name:category})
            console.log(data)
            toast.success("created category seccessfully .")
        } catch (error) {
            console.log({ name:"error in create category",error:error.message})
        }
    }


  return (
    <div dir='ltr' className='p-3'>
      <h1>Add Category</h1>
      <input type="text" className='outline-none border-[1px] h-[2.5rem] rounded-md mt-3 pl-3 border-primary w-full' onChange={({target})=>{setCategory(target.value)}} />
      <button onClick={handleClick } className='bg-primary text-white w-full mt-4 p-3 rounded-lg'>Add Category</button>
    </div>
  )
}

export default page
