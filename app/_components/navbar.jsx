'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";

import { FaHandshake } from 'react-icons/fa';
import { IoMdMenu } from "react-icons/io";
import { LiaShippingFastSolid } from 'react-icons/lia';

import { BiSolidCategory } from "react-icons/bi";

import { FaHome } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";
import { RiLoginBoxFill } from "react-icons/ri";
import { MdInstallMobile } from "react-icons/md";

const Navbar = () => {

    const [side, setSide] = useState({
        wL: 0,
        wG: 0
    })



    const onSide = () => {
        setSide({ wL: 70, wG: 100 })
    }

    const offSide = () => {
        setSide({ wL: 0, wG: 0 })
    }


    return (
        <div className=' '>

            <div className={`w-[${side.wL}%] h-full fixed z-50 bg-black duration-200 cursor-pointer select-none overflow-hidden`}>
                <div className='bg-white '>
                    <div className='flex flex-col items-center pt-4'>
                        <p className='text-primary'>حمل التطبيق الان</p>
                    </div>
                    <h1 className=' text-[.8rem] px-4 py-2 w-[300px] '>جرب تحميل لتحصل على افضل العروض و اعلاع على منتجاتنا المتنوعة و توصل بي أحدث العروض</h1>
                </div>
                <ul className=" bg-black text-white ">
                    <li className='flex gap-2 text-[1.3rem] px-4 p-2 hover:bg-primary'>
                        <FaHome className='text-[1.5rem]' />
                        <p>الصفحة الرئيسية</p>
                    </li>
                    <li className='flex gap-2 text-[1.3rem] px-4 p-2 hover:bg-primary '>
                        <BiSolidCategory className='text-[1.5rem]' />
                        <p>التصنيفات</p>
                    </li>
                    <li className='flex gap-2 text-[1.3rem] px-4  p-2 hover:bg-primary'>
                        <MdOutlineOpenInNew className='text-[1.5rem]' />
                        <p>الأٌحدث</p>
                    </li>
                    <li className='flex gap-2 text-[1.3rem]  px-4 p-2 hover:bg-primary'>
                        <RiLoginBoxFill className='text-[1.5rem]' />
                        <p>التسجيل</p>
                    </li>
                    <li className='flex gap-2 text-[1.3rem] px-4 p-2 hover:bg-primary'>
                        <MdInstallMobile className='text-[1.5rem]' />
                        <p>تحميل التطبيق</p>
                    </li>
                </ul>
            </div>

            <div className={`w-[${side.wG}%] h-screen fixed top-0 left-0  bg-[#ffffff67] z-40`} onClick={offSide}>

            </div>


            <div className='bg-white flex items-center justify-center h-[2rem] '>
                <p className='text-[13px] text-center '>المدن الكبرى توصيل في أقل من 24 ساعة</p>
            </div>

            <div className='bg-secondary'>
                <div className='flex justify-between items-center px-4 h-[3rem] bg-black'>
                    <IoMdMenu className='text-white text-[1.3rem]' onClick={onSide} />
                    <h1 className='text-white text-[1.5rem]  bg-black'>Mirac</h1>
                </div>
                <div className='p-[.5rem] relative '>
                    <input type="text" placeholder='بحث...' className='w-full rounded-3xl h-[2.6rem] pr-[1.3rem] outline-none ' />
                    <div className=' absolute top-0 left-[1rem] rounded-2xl flex items-center p-[1rem] bg-black h-[2rem] mt-[.8rem]'>
                        <CiSearch className=' text-white text-[1.5rem] ' />
                    </div>
                </div>
            </div>
            {/* 
            <div className='p-4 pt-0'>
                <ul className=' text-white flex gap-4'>
                    <li className='border-b-2 border-white pb-1'>الجميع</li>
                    <li>طقم</li>
                    <li>اليد و العنق</li>
                    <li>نبالة</li>
                    <li>براسلي</li>
                    <li>كورميط</li>
                </ul>
            </div> */}


            <div className='flex justify-between p-4'>
                <div className='flex flex-col items-center'>
                    <Image src={"/img/photo1.png"} width={50} height={50} />
                    <p>نبالة</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Image src={"/img/img5.jpg"} className='rounded-full' width={50} height={50} />
                    <p>رادكو</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Image src={"/img/photo3.png"} width={50} height={50} />
                    <p>سوطوار</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Image src={"/img/photo4.png"} width={50} height={50} />
                    <p>براسلي</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Image src={"/img/photo6.png"} width={50} height={50} />
                    <p>طقم</p>
                </div>
                <div className='flex flex-col items-center'>
                    <Image src={"/img/photo5.png"} width={50} height={50} />
                    <p>أطفال</p>
                </div>
            </div>



            <div className='h-[2rem] bg-black'>

            </div>

            <div className='p-2  bg-[#ffffff]'>
                <div className='bg-[#f7e5cf]'>
                    <div className='w-full h-[5rem]  flex items-center '>
                        <div className='w-full flex items-center gap-3 p-4'>
                            <FaHandshake className='text-[2rem]' />
                            <div>
                                <p className='font-semibold'>الدفع عن استلام</p>
                                <p className='text-[13px]'> مع امكانية فتح العلبة </p>
                            </div>
                        </div>
                        <div className='border-l-[1px]  border-black h-[50%]'></div>
                        <div className='w-full flex items-center gap-3 p-4' >
                            <LiaShippingFastSolid className='text-[2rem]' />
                            <div >
                                <p className='font-semibold'>التوصيل مجاني </p>
                                <p className='text-[13px]'>جميع المدن المغربية</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Navbar
