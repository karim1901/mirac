export const dynamic = 'force-dynamic';
import Image from 'next/image'
import React from 'react'

import { LiaShippingFastSolid } from "react-icons/lia";
import { FaHandshake } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Link from 'next/link';
import axios from 'axios';

const Home = async() => {

    let products = []
    
    try {
        const res = await axios.get("https://miracs.vercel.app/api/admin/product")

         products =res.data
    
    } catch (error) {
         products = [
            {
              _id: '68c55b41ede9c367b5567302',
              title: 'nbala',
              description: 'nabala',
              price: 200,
              images: [
                'https://res.cloudinary.com/dytahk5uz/image/upload/v1757764416/products-images/Screenshot_2024-10-16_115421-1757764414830_nqrbx9.png'
              ],
              thumbnail: 'https://res.cloudinary.com/dytahk5uz/image/upload/v1757764416/products-images/Screenshot_2024-10-16_115421-1757764414830_nqrbx9.png',
              category: 'نبالة',
              brand: 'miarcshop',
              color: 'حمراء',
              gender: 'female',
              quantity: 30,
              createdAt: '2025-09-13T11:53:37.960Z',
              updatedAt: '2025-09-13T11:53:37.960Z',
              __v: 0
            },
            {
              _id: '68c5cab8ede9c367b5567325',
              title: 'نبالة ',
              description: 'جبت لكم هاد الباك ديال نبالة بالخاتم ديالها بديل الذهب الأصلي 🔥\n' +
                '\n' +
                '✅الفنسيون ديال الذهب\n' +
                '\n' +
                '🚑مكديرش الحساسية\n' +
                '💦مكتخسر لا بالماء لا ريحة 💯\n' +
                '🚚التوصيل مجانا لباب الدار',
              price: 200,
              images: [
                'https://res.cloudinary.com/dytahk5uz/image/upload/v1757792952/products-images/nbala1-1757792951394_kieisy.jpg'
              ],
              thumbnail: 'https://res.cloudinary.com/dytahk5uz/image/upload/v1757792952/products-images/nbala1-1757792951394_kieisy.jpg',
              category: 'نبالة',
              brand: 'miarcshop',
              color: 'حمراء',
              gender: 'female',
              quantity: 30,
              createdAt: '2025-09-13T19:49:12.959Z',
              updatedAt: '2025-09-13T19:49:12.959Z',
              __v: 0
            }
          ]
    }



    return (
        <div >


            <div className='grid grid-cols-2 gap-3  p-2'>
                {
                    products.map((item, index) => {
                        return <Link href={`/product/${item._id}`} key={index}><div className=' hover:shadow-md rounded-md' >
                            <img src={item.thumbnail}  className='h-[12rem] w-full object-cover' alt='img'/>
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
                                        <p className='text-gray-300 line-through text-[.9rem] truncate'>{item.price+50} DH</p>
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
