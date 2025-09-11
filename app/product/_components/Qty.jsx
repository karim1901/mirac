'use client'

import React, { useState, useEffect } from 'react'

const Qty = ({setQty,qty}) => {
    const [timeLeft, setTimeLeft] = useState('')

    useEffect(() => {
        const checkAndSetTimer = () => {
            let endTime = localStorage.getItem('endTime')
            const now = new Date().getTime()

            if (!endTime || now > parseInt(endTime)) {
                // إذا لم يكن هناك وقت منتهي أو انتهى بالفعل، قم بتعيين وقت جديد (بعد يومين)
                endTime = now + 2 * 24 * 60 * 60 * 1000
                localStorage.setItem('endTime', endTime.toString())
            }

            const updateTimer = () => {
                const now = new Date().getTime()
                const distance = parseInt(endTime) - now

                if (distance < 0) {
                    // إذا انتهى الوقت، أعد تعيين المؤقت
                    checkAndSetTimer()
                } else {
                    // حساب الوقت المتبقي
                    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
                    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

                    setTimeLeft(`${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`)
                }
            }

            updateTimer()
            const timerId = setInterval(updateTimer, 1000)
            return () => clearInterval(timerId)
        }

        checkAndSetTimer()
    }, [])

    return (
        <div className="bg-orange-2 m-3 p-[2px] rounded-md ">
            <div className="flex text-[.8rem] justify-between px-4 text-white "> 
                <h1> Ends in</h1>
                <h1>{timeLeft}</h1>
            </div>
            <div className="bg-white rounded-md h-[4rem] p-2">
                <h1 className="text-[.8rem] font-semibold">لون : دهبية </h1>
                <div className="flex gap-4 mt-1 items-center">
                    <p className="text-[.8rem]">كيمية</p>
                    <div className="border-gray-400 flex ">
                        <div className="w-[2rem] flex justify-center items-center border-[1px] border-r-0 cursor-pointer" onClick={() => setQty(qty > 1 ? qty - 1 : qty)}>-</div>
                        <div className="w-[2rem] text-[.8rem] flex justify-center items-center border-[1px]">{qty}</div>
                        <div className="w-[2rem] flex justify-center items-center border-[1px] border-l-0 cursor-pointer" onClick={() => setQty(qty + 1)}>+</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Qty