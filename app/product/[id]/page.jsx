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

const Product = () => {




    const product = [
        {
            product: "newRadco",
            price: "239",
            line: `https://mirac-stor.vercel.app/product/0`,
            description: `جبت لكم باك هماوي  بديل الذهب الأصلي 🔥
                   ✅الفنسيون ديال الدهب 
                  🚑مكديرش الحساسية
                  💦مكتخسر لا بالماء لا ريحة 💯
                  🚚التوصيل مجانا لباب الدار`,
            imgs: ["/images/newRadco0.jpg", "/images/newRadco1.jpg", "/images/newRadco2.jpg", "/images/newRadco3.jpg", "/images/newRadco3.jpg", "/images/newRadco4.jpg"],
            conf: ["212774848821"]
        },
        {
            product: "nbala",
            price: "199",
            line: `https://mirac-stor.vercel.app/product/1`,
            description: `<p> جبت لكم هاد الباك ديال نبالة بالخاتم ديالها بديل الذهب الأصلي 🔥 </p>
                  <p> ✅الفنسيون ديال الذهب </p>
                 <p> 🚑مكديرش الحساسية</p>
                  <p>💦مكتخسر لا بالماء لا ريحة 💯</p>
                  <p>🚚التوصيل مجانا لباب الدار </p> `,
                  imgs: ["/images/newRadco0.jpg", "/images/newRadco1.jpg", "/images/newRadco2.jpg", "/images/newRadco3.jpg", "/images/newRadco3.jpg", "/images/newRadco4.jpg"],
            conf: ["212774848821"]
        }

    ]

    return (
        <div className="xl:px-[7rem] max-w-[1500px] min-w-[360px] mx-auto" dir='ltr' >
            {/* <div className=" fixed w-full h-screen left-0 top-0 z-[1000]  " onClick={handleClick}> 

    </div> */}

            <div className="fixed z-[40] bottom-[3rem] ml-[2rem] bg-green-500 w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-full border-2 border-green-500 ">
                <FaWhatsapp
                    style={{ fontSize: '40px', color: 'white', cursor: 'pointer' }}
                />
            </div>


            <div className='md:grid grid-cols-2 hidden p-4'>

                <div className="  ">

                    <div className="flex flex-col ">
                        <div>
                            <SlideImg imgs={product[1].imgs} />
                        </div>
                        <div className='my-3  flex  gap-2 '>
                            {
                                product[1].imgs.map((item) => {
                                    return <Image src={item} width={100} height={100} className='w-[3rem]  h-[3rem] object-cover border-2 border-primary rounded-sm p-[.5px] ' alt="star" />
                                })
                            }
                            {/* <Image src="/images/louit2.jpg" width={100} height={100} className='w-[3rem]  h-[3rem] object-cover border-2 border-primary rounded-sm p-[.5px] ' alt="star" />
            <Image src="/images/louit3.jpg" width={100} height={100} className='w-[3rem]  h-[3rem] object-cover border-2 border-primary rounded-sm p-[.5px] ' alt="star" /> */}
                            {/* <Image src="/images/pro1111.jpg" width={100} height={100} className='w-[3rem]  h-[3rem] object-cover border-2 border-primary rounded-sm p-[.5px] ' alt="star"  /> */}
                        </div>
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
                        <span dangerouslySetInnerHTML={{ __html: product[1].description }} />

                        <div>
                            <Image src="/img/cado.png" width={100} height={100} className='w-[5rem]  h-[5rem] object-cover border-2 border-primary rounded-sm p-[.5px] ' alt="star" />
                            <p>باضافة الى هدية</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center px-3">

                        <div className=' flex items-center  gap-2'>
                            <h1 className='font-semibold text-primary text-[1.4rem] '>{product[1].price} DH </h1>
                            <p className='pt-[.3rem] text-gray-400 text-[.8rem] line-through'>{product[1].price + 70} DH</p>
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

                    <Form qty={1} product={product[1].product} />
                </div>
            </div>

            <div className='md:hidden'>

                <SlideImg imgs={product[1].imgs} />

                <div className='   p-[0.1px] '>

                    <div className="flex justify-between px-4 bg-gray-100 py-1">
                        <div className="font-semibold flex items-center gap-1 text-[.8rem]">
                            <LiaShippingFastSolid />
                            <h1>شحن مجاني لك</h1>

                        </div>
                        <p className="text-[.7rem] font-[300]">عرض محدود</p>
                    </div>

                    <div className='my-3 px-3 flex gap-2'>
                        {
                            product[1].imgs.map((item) => {
                                return <Image src={item} width={100} height={100} className='w-[3rem]  h-[3rem] object-cover border-2 border-primary rounded-sm p-[.5px] ' alt="star" />
                            })
                        }

                    </div>

                    <div className="px-3">
                        {/* <h1 className="text-[1.5rem] font-[300] " dir="rtl">{product[index].description}</h1> */}
                        <h1 className="text-[1.5rem] font-[300] " dir="rtl"><span dangerouslySetInnerHTML={{ __html: product[1].description }} /></h1>

                        <div>
                            <Image src="/img/cado.png" width={100} height={100} className='w-[5rem]  h-[5rem] object-cover border-2 border-primary rounded-sm p-[.5px] ' alt="star" />
                            <p className="text-[1.3rem]">باضافة الى هدية</p>
                        </div>
                    </div>


                    <div className="flex justify-between items-center px-3">

                        <div className=' flex items-center  gap-2'>
                            <h1 className='font-semibold text-primary text-[1.4rem] '>{product[1].price} DH </h1>
                            <p className='pt-[.3rem] text-gray-400 text-[.8rem] line-through'>{+(product[1].price) + 70} DH</p>
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



                    <Form qty={1} product={product[1].product} />

                </div>



            </div>


            <div className="flex flex-col ">
                {
                    product[1].imgs.map((item, index) => {
                        return <Image src={item} key={index} width={1500} height={500} className=" object-cover" />
                    })
                }


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
                {/* <Form qty={qty} product={product[index].product} /> */}


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
    )
}

export default Product
