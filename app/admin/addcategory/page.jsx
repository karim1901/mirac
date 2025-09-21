'use client'

import Image from 'next/image';
import { BiSolidUserCircle } from 'react-icons/bi';
import { MdOutlineCloudUpload, MdCancel } from 'react-icons/md';
import { MdOutlineCancel } from "react-icons/md";


import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';



const page = () => {

  const [imgs, setImgs] = useState([]);

  const [infoCategory, setInfoCategory] = useState({
    files: [],
    category: ""
  })

  // const handleClick = async () => {
  //   console.log(infoCategory)
  //   try {
  //     const data = await axios.post("/api/admin/category", { name: category })
  //     console.log(data)
  //     toast.success("created category seccessfully .")
  //   } catch (error) {
  //     console.log({ name: "error in create category", error: error.message })
  //   }
  // }



  const cfcToken = "SDCdcsdc"



  const onHandleChangeInputImg = (event) => {
    const newFiles = Array.from(event.target.files);
    setInfoCategory(prev => ({ ...prev, files: [...prev.files, ...newFiles] }));

    const IMGS = newFiles.map(file => file && URL.createObjectURL(file));
    setImgs(prev => [...prev, ...IMGS]);
  };

  const deleteImg = (index) => {
    setImgs(prev => prev.filter((_, i) => i !== index));
    setInfoCategory(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    // setLoading(true)


    if (infoCategory.files.length === 0) {
      alert('Please upload at least one image.');
      return;
    }

    const formData = new FormData();
    infoCategory.files.forEach(file => formData.append('files', file));
    formData.append('data', JSON.stringify(infoCategory));


    // console.log(infoCategory)


    axios.post("/api/admin/category", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        cfc_token: cfcToken
      },

    }).then(res => {
      setImgs([]);
      setInfoCategory({
        files: [],
        category: ''
      });

      // setLoading(false)
      toast.success("created product seccessfully .")

      // console.log(res)
    }).catch(error => {
      console.log(error.message)
      toast.error("field create product.")
      // setLoading(false)
    })

  };

  // useEffect(()=>{console.log(imgs)},[imgs])


  return (
    <div dir='ltr' className='p-3'>
      <h1>Add Category</h1>
      {/* <input type="text" className='outline-none border-[1px] h-[2.5rem] rounded-md mt-3 pl-3 border-primary w-full' onChange={({ target }) => { setCategory(target.value) }} />
      <button onClick={handleClick} className='bg-primary text-white w-full mt-4 p-3 rounded-lg'>Add Category</button> */}

      <div className=' mt-[2rem] '>
        <form className='' onSubmit={handleSubmit}>
          <div className=' flex flex-col gap-4 items-center '>
            <div className='relative border-primary border-dashed border-[1px] h-[2.5rem] rounded-md w-[15rem] flex justify-center items-center'>
              <div className='flex gap-4 items-center'>
                <MdOutlineCloudUpload className='text-primary' />
                <p className='text-primary text-[0.8rem]'>Upload Image</p>
              </div>
              <input type="file" onChange={onHandleChangeInputImg} multiple className='text-white absolute opacity-0 top-0 left-0 w-full h-full' />
            </div>

            <div className='flex gap-4 h-[5rem]'>
              {imgs.map((img, index) => (
                <div key={index} className='bg-black3 relative'>
                  <Image src={img} width={500} height={500} alt='img car' priority className='w-[5rem] object-contain h-[5rem]' />
                  <MdCancel className='absolute text-4 text-black bg-white rounded-full top-[-.4rem] right-[-.4rem]' onClick={() => deleteImg(index)} />
                </div>
              ))}
            </div>
          </div>
          <div className=' flex flex-col gap-4'>
            <div className='flex flex-col'>
              <label htmlFor="" className='font-semibold '>Category</label>
              <input type="text" className='h-[2.5rem] rounded-sm pl-4 outline-none bg-black4  border-[.5px] border-primary' name='category' value={infoCategory.category} onChange={({ target }) => setInfoCategory(prev => ({ ...prev, [target.name]: target.value }))} />
            </div>
          </div>

          <button className='bg-primary text-white h-[2.5rem] rounded-md w-full font-semibold mt-4 mb-[10rem]'>Create New Categ</button>
        </form>
      </div>
    </div>
  )
}

export default page


