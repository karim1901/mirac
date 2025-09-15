'use client'
import React, { useEffect, useState } from 'react'

const page = () => {

    const [code, setCode] = useState("")
    const [codeSend, setCodeSend] = useState("")

    const verifyCode = () => {

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
                    <p className='p-4 text-[1.5rem] w-full text-center '> ادخل رمز التاكيد </p>
                    <input type="number" className='w-full h-[2rem] outline-none border-[1px] border-orange-300 pr-4 ' placeholder=' رمز' value={code} onChange={({ target }) => setCode(target.value)} />
                    <p className='text-[.8rem]'>سوف يتم اسال رمز في واتساب</p>
                    <button className='text-white w-full p-3 rounded-md mt-4 bg-primary' onClick={verifyCode}>دخول</button>
                </div>
            </div>
        </div>
    )
}

export default page
