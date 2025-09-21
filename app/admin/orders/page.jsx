"use client"
import React from 'react'

const page = () => {
  return (
    <div dir='ltr' className='p-4'>
      <div className='flex gap-2 text-[.8rem] '>
        <button>New Orders</button>
        <button>Orders Comfirmed</button>
        <button>Orders Waiting</button>
        <button>Cancelling</button>
      </div>

      <div className='mt-4'> 
        <div className='border-[1px] border-primary w-full h-[400px] rounded-md'>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default page
