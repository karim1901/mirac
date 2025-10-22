"use client"
import axios from 'axios'
import { set } from 'mongoose'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaWhatsapp } from 'react-icons/fa'

const page = () => {

  const [orders, setOrders] = useState([])
  const [search, setSearch] = useState("")
  const [btn, setBtn] = useState("new")
  const [loade, setLoade] = useState(true)

  const getOrder = async () => {
    try {
      const res = await axios.get("/api/admin/order")
      console.log(res.data)
      setOrders(res.data.reverse())
      setLoade(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getOrder()
  }, [])


  const updateStatus = async (id, action) => {
    try {
      setLoade(true)
      const respones = await axios.put(`/api/admin/order/${id}`, { action: action })
      getOrder()
    } catch (error) {
      console.log(error.message)
    }

  }


  const formatPhone = (phone) => {
    // إزالة أي رموز أو مسافات غير أرقام
    let digits = phone.replace(/\D/g, "");
  
    // إذا بدأ بـ 0 (مثل 0715581646) → استبدله بـ 212
    if (digits.startsWith("0")) {
      digits = "212" + digits.slice(1);
    }
  
    // إذا بدأ بـ 212/ أو يحتوي على '/' → نظّفه ليصبح 212XXXXXXXXX
    if (digits.startsWith("212") && digits.length > 12) {
      // في حال كان هناك رموز إضافية بعد 212
      digits = digits.slice(0, 12);
    }
  
    return digits;
  };
  

  const sendMessage = (phone) => {
    const phoneNumber = formatPhone(phone);
  
    // تحقق أنه يبدأ بـ 2126 أو 2127
    if (!/^212[67]\d{7,8}$/.test(phoneNumber)) {
      toast.error("رقم غير صالح")
    }
  
    const message = `سلام عليكم`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };
  
  
  return (
    <div dir='ltr' className='p-4 select-text'>
      <div className={`w-full h-screen fixed bg-[#0000001f] top-0 left-0 flex items-center justify-center ${!loade && "hidden"}`}>
        <span className="loader"></span>
      </div>

      <div className='flex justify-between text-[.8rem] '>
        <button onClick={() => { setBtn("new") }} className='focus:text-primary '>New Orders</button>
        <button onClick={() => { setBtn("confirem") }} className='focus:text-primary'>Orders Comfirmed</button>
        <button onClick={() => { setBtn("waite") }} className='focus:text-primary'>Orders Waiting</button>
        <button onClick={() => { setBtn("cancel") }} className='focus:text-primary'>Cancelling</button>
      </div>

      <div>
        <input type="text" placeholder='Search by number phone' className='border-[1px] border-primary mt-4 outline-none  w-full pl-4 h-[2.5rem] rounded-lg' name="search" onChange={({ target }) => { setSearch(target.value) }} />
      </div>

      <div className='mt-4 flex flex-col gap-4'>
        {
          orders.filter(item => item.phone.includes(search)).filter(item => item.status.includes(btn)).map(item => {

            return <div className='border-[1px] border-primary w-full  p-4  rounded-md' key={item._id}>
              <div className='flex'>
                <img src={item.thumbnail} className='w-[100px] h-[100px]  object-cover' alt="" />
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
                <button className='p-2 bg-primary text-white rounded-lg' onClick={() => { updateStatus(item._id, "confirem") }}>Confime</button>
                <button className='p-2 bg-yellow-300 text-white rounded-lg' onClick={() => { updateStatus(item._id, "waite") }}>Waiting</button>
                <button className='p-2 bg-red-500 text-white rounded-lg' onClick={() => { updateStatus(item._id, "cancel") }}>Cancel</button>
                <FaWhatsapp style={{ fontSize: '20px', color: 'green', cursor: 'pointer' }} onClick={() => { sendMessage(item.phone) }} />
              </div>

            </div>
          })
        }

      </div>

    </div>
  )
}

export default page
