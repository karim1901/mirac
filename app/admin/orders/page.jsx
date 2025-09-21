"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const page = () => {

  const [orders, setOrders] = useState([])

  const getOrder = async () => {
    try {
      const res = await axios.get("/api/admin/order")
      console.log(res.data)
      setOrders(res.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getOrder()
  }, [])


  return (
    <div dir='ltr' className='p-4'>
      <div className='flex gap-2 text-[.8rem] '>
        <button>New Orders</button>
        <button>Orders Comfirmed</button>
        <button>Orders Waiting</button>
        <button>Cancelling</button>
      </div>

      <div className='mt-4'>
        {
          orders.map(item => {

            return <div className='border-[1px] border-primary w-full  p-4  rounded-md' key={item._id}>
              <div className='flex'>
                <img src="/images/newRadco0.jpg" className='w-[100px] h-[100px]  object-cover' alt="" />
                <p className='text-[5rem]'>{item.nameProduct}</p>
              </div>



              <table>
                <thead>
                  <tr>
                    <td>Name Client </td>
                    <td className='w-[20px] text-center'>:</td>
                    <td>{item.nameClient}</td>
                  </tr>
                  <tr>
                    <td>Phone </td>
                    <td className='w-[20px] text-center'>:</td>
                    <td>{item.phone}</td>
                  </tr>
                  <tr>
                    <td>City </td>
                    <td className='w-[20px] text-center'>:</td>
                    <td>{item.city}</td>
                  </tr>
                  <tr>
                    <td>Address </td>
                    <td className='w-[20px] text-center'>:</td>
                    <td>{item.address}</td>
                  </tr>
                  <tr>
                    <td>Price </td>
                    <td className='w-[20px] text-center'>:</td>
                    <td>{item.price}</td>
                  </tr>
                </thead>
              </table>



              <div className='flex gap-4 mt-4 items-center'>
                <button className='p-2 bg-primary text-white rounded-lg'>Confime</button>
                <button className='p-2 bg-yellow-300 text-white rounded-lg'>Waiting</button>
                <button className='p-2 bg-red-500 text-white rounded-lg'>Cancel</button>
                <FaWhatsapp style={{ fontSize: '20px', color: 'green', cursor: 'pointer' }} />
              </div>

            </div>
          })
        }

      </div>

    </div>
  )
}

export default page
