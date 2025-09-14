'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { CiSearch } from "react-icons/ci";

import { FaHandshake } from 'react-icons/fa';
import { IoMdMenu } from "react-icons/io";
import { LiaShippingFastSolid } from 'react-icons/lia';

import { BiSolidCategory } from "react-icons/bi";

import { FaHome } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";
import { RiLoginBoxFill } from "react-icons/ri";
import { MdInstallMobile } from "react-icons/md";
import { usePathname } from 'next/navigation';

const Navbar = () => {


    const path = usePathname()

    const refLift = useRef(null)
    const refright = useRef(null)


    useEffect(() => {
        console.log(refLift.current)
        console.log(refright.current)
    }, [])


    const onSide = () => {
        refLift.current.style.width = "70%"
        refright.current.style.width = "100%"
    }

    const offSide = () => {
        refLift.current.style.width = "0%"
        refright.current.style.width = "0%"
    }


    useEffect(() => {
        console.log(path.split("/")[1])
    }, [])


    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt(); // يظهر نافذة التثبيت
        const choiceResult = await deferredPrompt.userChoice;

        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
            setIsVisible(true); // نخفي الزر بعد التثبيت
        } else {
            console.log('User dismissed the install prompt');
        }

        setDeferredPrompt(null);
    };

    return (
        <div className=''>

            <div className={`${path.split("/")[1] == "admin" && "hidden"}`}>


                <div ref={refLift} className={`w-[0] h-full fixed z-50 bg-black duration-200 cursor-pointer select-none overflow-hidden`} >
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
                        <li className='flex gap-2 text-[1.3rem] px-4 p-2 hover:bg-primary' onClick={ handleInstallClick}>
                            <MdInstallMobile className='text-[1.5rem]' />
                            <p>تحميل التطبيق</p>
                        </li>
                    </ul>
                </div>

                <div ref={refright} className={`w-[0] h-screen fixed top-0 left-0  bg-[#ffffff67] z-40`} onClick={offSide}>

                </div>


                <div className='bg-white flex items-center justify-center h-[2rem] '>
                    <p className='text-[13px] text-center '>المدن الكبرى توصيل في أقل من 24 ساعة</p>
                </div>

                <div className='bg-secondary'>
                    <div className='flex justify-between items-center px-4 h-[3rem] bg-black'>
                        <IoMdMenu className='text-white text-[1.3rem]' onClick={onSide} />
                        <div className='text-white flex text-[1.3rem]  bg-black' dir='ltr'>
                            <p className='font-semibold'>M</p>
                            <p>irac</p>
                            <p className='font-semibold'>S</p>
                            <p>hop</p>
                        </div>
                    </div>
                    <div className='p-[.5rem] relative '>
                        <input type="text" placeholder='بحث...' className='w-full rounded-3xl h-[2.6rem] pr-[1.3rem] boxSearch outline-none ' />
                        <div className=' absolute top-0 left-[1rem] rounded-2xl flex items-center p-[1rem] bg-black h-[2rem] mt-[.8rem]'>
                            <CiSearch className=' text-white text-[1.5rem] ' />
                        </div>
                    </div>
                </div>


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




                {!isVisible && <div className='p-2 bg-black  text-white flex flex-col '>
                    <p className='text-center mb-2'>تحميل التطبيق</p>
                    <div className='p-3 bg-white rounded-xl text-black text-center '>
                        <h1 className=' text-[.8rem]'>جرب تحميل لتحصل على افضل العروض و اعلاع على منتجاتنا المتنوعة و توصل بي أحدث العروض</h1>
                        <div className='w-[10rem] rounded-xl box bg-primary hover:bg-orange-500 select-none mx-auto mt-2 flex gap-2 items-center p-2' onClick={ handleInstallClick}>
                            <div className='w-[2.5rem] h-[2.5rem] bg-black rounded-xl flex justify-center items-center'>
                                <p className='text-white text-[.9rem] '>MS</p>
                            </div>
                            <p className='text-white font-semibold'>تحميل التطبيق</p>
                        </div>
                    </div>
                </div>
                }



                <div className='p-2  bg-[#ffffff] '>
                    <div className='bg-[#f7e5cf] boxSearch'>
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


            <div className={`${!(path.split("/")[1] == "admin") && "hidden"}`} dir='ltr'>
                <div>
                    <h1>Admin</h1>
                </div>
            </div>

        </div>
    )
}

export default Navbar
