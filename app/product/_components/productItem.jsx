'use client'
import Image from 'next/image'
import React from 'react'

const ProductItem = ({product}) => {
    return (
        <div className='my-3  flex  gap-2 ' dir='rtl'>
            {
                product.images.map((item,index) => {
                    return <Image key={index} src={item} width={100} height={100} className='w-[3rem]  h-[3rem] object-cover border-2 border-primary rounded-sm p-[.5px] ' alt="star" />
                })
            }
        </div>
    )
}

export default ProductItem
