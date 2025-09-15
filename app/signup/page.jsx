'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const page = () => {

    const router = useRouter()
    const [phone, setPhone] = useState("")

    const goToVerify = () => {
        if(phone == ""){
            toast.error("خطأ في رقم الهاتف")
        }else{
            router.push("/signup/verifyNumberPhone")
        }
    }

    return (
        <div className={`flex flex-col  justify-center items-center h-screen px-4 w-full`} dir='ltr'>
            <div className='flex text-[1.3rem]  ' dir='ltr'>
                <p className='font-semibold'>M</p>
                <p>irac</p>
                <p className='font-semibold'>S</p>
                <p>hop</p>
            </div>
            <div>
                <div className='bg-white box w-full h-[400px] rounded-lg px-4 ' dir='rtl'>
                    <p className='p-4 text-[1.5rem] w-full text-center '>تسجيل الدخول</p>
                    <input type="number" className='w-full h-[2rem] outline-none border-[1px] border-orange-300 pr-4 ' placeholder='رقم الهاتف' value={phone} onChange={({ target }) => setPhone(target.value)} />
                    <button className='text-white w-full p-3 rounded-md mt-4 bg-primary' onClick={goToVerify}>دخول</button>
                </div>
            </div>
        </div>


    )
}

export default page
