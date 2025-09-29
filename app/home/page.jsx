
import Image from 'next/image'
import React from 'react'

import { LiaShippingFastSolid } from "react-icons/lia";
import { FaHandshake } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Link from 'next/link';
import axios from 'axios';

const Home = async () => {

    let products = []

    try {
        const res = await fetch("https://miracs.vercel.app/api/admin/product", {
            cache: "no-store",          // يمنع التخزين المؤقت
          });


          if (!res.ok) throw new Error("خطأ في الجلب");
          products = await res.json();

    } catch (error) {
        console.log(error.message)
    }



    return (
        <div >


            <div className='grid  2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3  p-2 mx-auto'>
                {
                    products.map((item, index) => {
                        return <Link href={`/product/${item._id}`} key={index}><div className=' hover:shadow-md rounded-md' >
                            <img src={item.thumbnail} className='h-[12rem] w-full object-cover' alt='img' />
                            <div className='px-1  '>
                                <p className='text-[.8rem] p-1 pb-0 truncate text-gray-600 '>{item.description}</p>
                                <div className='flex justify-between items-center'>
                                    <p className='text-[.9rem] truncate'>{item.title}</p>
                                    <div className='flex text-[.9rem] text-primary'>
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                        <IoIosStar />
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='bg-primary text-white rounded-3xl w-[3rem] h-[1.5rem] flex items-center justify-center'>
                                        <MdOutlineAddShoppingCart />
                                    </div>

                                    <div className='flex items-center gap-2 mt-2' dir='ltr' >
                                        <p className='font-semibold truncate'>{item.price - 1} DH</p>
                                        <p className='text-gray-300 line-through text-[.9rem] truncate'>{item.price + 50} DH</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </Link>
                    })
                }


            </div>
        </div>
    )
}

export default Home
