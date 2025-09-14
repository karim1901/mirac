import React from 'react'
import { LiaCartPlusSolid, LiaShippingFastSolid } from "react-icons/lia";

import { VscVerified } from "react-icons/vsc";
import { FaRegHandshake } from "react-icons/fa6";
import Image from 'next/image'
import { IoMdStar } from "react-icons/io";



import { FaWhatsapp } from 'react-icons/fa';
import SlideImg from '../_components/slideImg';
import Qty from '../_components/Qty';
import Form from '../_components/form';
import ProductItem from '../_components/productItem';
import axios from 'axios';
import ClickWhatsapp from '../_components/clickWhatsapp';

import Head from "next/head";
import ScrollY from '@/app/_components/ScrollY';


export async function generateMetadata({ params }) {
    try {
      const res = await fetch(`https://miracs.vercel.app/api/admin/product/${params.id}`);
      if (!res.ok) return { title: "Product" };
      const product = await res.json();
  
      return {
        description: product.description?.slice(0, 150) || "",
        icons: {
          icon: product.thumbnail // رابط للصورة (يمكن أن يكون رابط كامل أو مسار داخل public)
        },
        openGraph: {
          title: product.title,
          description: product.description?.slice(0,150),
          images: [product.thumbnail],
        },
        twitter: {
          card: "summary_large_image",
          images: [product.thumbnail],
        },
      };
    } catch (err) {
      return { title: "منتوج" };
    }
  }





const Product = async ({ params }) => {

    let product = []

    try {
        const res = await axios.get(`https://miracs.vercel.app/api/admin/product/${params.id}`)
        product = res.data

    } catch (error) {
        product = {
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
        }
    }







    return (
        <>
            <ScrollY y={245} />
            <Head>
                <title>{product.title}</title>
                <meta name="description" content={product.description?.slice(0, 150)} />
                <link rel="icon" href={product.thumbnail} />
            </Head>

            <div className="xl:px-[7rem] max-w-[1500px] min-w-[360px] p-2 mx-auto" dir='ltr' >

                <ClickWhatsapp product={product} />

                <div className='md:grid grid-cols-2 hidden p-4'>

                    <div className="  ">

                        <div className="flex flex-col ">
                            <div>
                                <SlideImg imgs={product.images} />
                            </div>
                            <ProductItem product={product} />
                        </div>
                    </div>

                    <div className=" ">

                        <div className="flex justify-between px-4 bg-gray-300 py-1 ">
                            <div className="font-semibold flex items-center gap-1 text-[.8rem]">
                                <LiaShippingFastSolid />
                                <h1>شحن مجاني لك</h1>
                            </div>
                            <p className="text-[.7rem] font-[300]">عرض محدود</p>
                        </div>

                        <div className="px-3 mt-3" >
                            {/* <h1 className="text-[1.5rem] font-[300]  ">{product[index].description}</h1> */}
                            <span dangerouslySetInnerHTML={{ __html: product.description }} />

                            <div>
                                <img src="/img/cado.png" className='w-[5rem]  h-[5rem] object-cover border-2 border-primary rounded-sm p-[.5px] ' alt="star" />
                                <p>باضافة الى هدية</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center px-3">

                            <div className=' flex items-center  gap-2'>
                                <h1 className='font-semibold text-primary text-[1.4rem] '>{product.price - 1} DH </h1>
                                <p className='pt-[.3rem] text-gray-400 text-[.8rem] line-through'>{product.price + 70} DH</p>
                            </div>

                            <div className="flex text-orange">
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                            </div>

                        </div>


                        {/* <Qty qty={qty} setQty={setQty} /> */}



                        <div className="flex flex-row justify-between gap-1 px-3 mt-4 font-semibold text-green-600 "  >
                            <div className="flex items-center gap-1 ">
                                <LiaShippingFastSolid />
                                <p className="text-[1rem]">شحن مجاني</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <VscVerified />
                                <p className="text-[1rem]">جودة و الضمان</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FaRegHandshake />
                                <p className="text-[1rem]">دفع عند استلام</p>
                            </div>
                        </div>

                        <Form qty={1} product={product.product} />
                    </div>
                </div>

                <div className='md:hidden'>

                    <SlideImg imgs={product.images} />

                    <div className='   p-[0.1px] '>

                        <div className="flex justify-between px-4 bg-gray-100 py-1">
                            <div className="font-semibold flex items-center gap-1 text-[.8rem]">
                                <LiaShippingFastSolid />
                                <h1>شحن مجاني لك</h1>

                            </div>
                            <p className="text-[.7rem] font-[300]">عرض محدود</p>
                        </div>

                        <ProductItem product={product} />


                        <div className="px-3">
                            {/* <h1 className="text-[1.5rem] font-[300] " dir="rtl">{product[index].description}</h1> */}
                            <h1 className="text-[1.5rem] font-[300] " dir="rtl"><span dangerouslySetInnerHTML={{ __html: product.description }} /></h1>

                            <div>
                                <img src="/img/cado.png" className='w-[5rem]  h-[5rem] object-cover border-2 border-primary rounded-sm p-[.5px] ' alt="star" />
                                <p className="text-[1.3rem]">باضافة الى هدية</p>
                            </div>
                        </div>


                        <div className="flex justify-between items-center px-3">

                            <div className=' flex items-center  gap-2'>
                                <h1 className='font-semibold text-primary text-[1.4rem] '>{product.price - 1} DH </h1>
                                <p className='pt-[.3rem] text-gray-400 text-[.8rem] line-through'>{+(product.price) + 70} DH</p>
                            </div>

                            <div className="flex">
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                                <IoMdStar />
                            </div>

                        </div>

                        {/* <Qty qty={qty} setQty={setQty} /> */}

                        <div className="flex  gap-1 justify-between px-3 mt-4 font-semibold text-green-600 " dir="rtl" >
                            <div className="flex items-center  gap-1">
                                <LiaShippingFastSolid />
                                <p className="text-[1rem]">شحن مجاني</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <VscVerified />
                                <p className="text-[1rem]">جودة و الضمان</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <FaRegHandshake />
                                <p className="text-[1rem]">دفع عند استلام</p>
                            </div>
                        </div>



                        {/* <Form qty={1} product={product.product} /> */}

                    </div>



                </div>


                <div className="flex flex-col ">
                    {
                        product.images.map((item, index) => {
                            return <img src={item} key={index} className=" object-cover" />
                        })
                    }





                </div>

                <div className=' min-h-[20rem] bg-blue-50 mt-[5rem] xl:px-[7rem] px-4 py-[2rem] flex flex-col items-center md:items-start md:flex-row  justify-between gap-4'>
                    <div className='w-[300px]   '>
                        <div>
                            <div className=' mr-[2.7rem] logo flex gap-3 items-center '>
                                <h1 className='flex relative cursor-pointer text-[1.5rem] font-semibold'><p className='font-[900] '>M</p>iracShop <p className='absolute right-[-2.7rem]  text-center w-[2.7rem] bg-primary text-white  text-[.8rem]  rounded-[20px]'>.com</p></h1>
                            </div>
                            <p className='text-[.8rem] text-gray-400 w-[20rem]'>"Discover fashion-forward finds at MiracShop where style meets savings."</p>
                        </div>
                    </div>
                    <div className='w-[300px]  '>
                        <h1 className='font-semibold'>Information</h1>

                        <ul className='text-[.9rem] text-gray-400 mt-2'>
                            <li>About Us</li>
                            <li>Contacts</li>
                            <li>FAQ</li>
                            <li>Shop</li>
                        </ul>
                    </div>

                    <div className='w-[300px]  '>
                        <h1 className='font-semibold'>Extras</h1>

                        <ul className='text-[.9rem] text-gray-400 mt-2' >
                            <li>Wishlist</li>
                            <li>Order Tracking</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>

                    </div>

                    <div className='w-[300px]  '>
                        <h1 className='font-semibold'>Subscribe to our newsletter</h1>
                        <div className='mt-2 flex items-center gap-2'>
                            <input type="text" placeholder='Email' className='h-[2rem] outline-none border-[1px] text-[.8rem] pl-4 ' />
                            <button className='text-[.8rem] bg-primary text-white px-2 rounded-2xl hover:bg-primary py-[.4rem] '>Subscrib</button>
                        </div>
                    </div>

                    <div className='w-[300px]  '>
                        <h1 className='font-semibold'>Have a Question?</h1>
                        <p className='text-[.9rem] mt-2'>Contact Us On </p>
                        <p className='text-[.9rem] text-primary font-semibold underline'>miracshop@gmail.com</p>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Product
