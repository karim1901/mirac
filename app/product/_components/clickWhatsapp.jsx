"use client"
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const ClickWhatsapp = ({product}) => {

    const phoneNumber = "212774848821"

    const message = `$ ${product.title} مرحبًا، أنا مهتم  https://miracs.vercel.app/product/${product._id}`

    const handleClick = () => {



        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        if (typeof window != "undefined") {
            window.open(url, '_blank');
        }
    };



    return (
        <div className="fixed z-[40] bottom-[3rem] ml-[2rem] bg-green-500 w-[3.5rem] h-[3.5rem] flex items-center justify-center rounded-full border-2 border-green-500 " onClick={handleClick}>
            <FaWhatsapp
                style={{ fontSize: '40px', color: 'white', cursor: 'pointer' }}
            />
        </div>

    )
}

export default ClickWhatsapp
