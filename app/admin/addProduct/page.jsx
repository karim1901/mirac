'use client';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { BiSolidUserCircle } from 'react-icons/bi';
import { MdOutlineCloudUpload, MdCancel } from 'react-icons/md';
import { MdOutlineCancel } from "react-icons/md";
import Loading from '../../loading';
import toast from 'react-hot-toast';


const AddPrduct = () => {
    const [imgs, setImgs] = useState([]);
    const [infoProduct, setInfoProduct] = useState({
        files: [],
        title: '',
        brand: '',
        category: '',
        price: '',
        description: '',
        gender: "",
        color:"",
        quantity:""
    });

    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    const cfcToken = "SDCdcsdc"



    const onHandleChangeInputImg = (event) => {
        const newFiles = Array.from(event.target.files);
        setInfoProduct(prev => ({ ...prev, files: [...prev.files, ...newFiles] }));

        const IMGS = newFiles.map(file => file && URL.createObjectURL(file));
        setImgs(prev => [...prev, ...IMGS]);
    };

    const deleteImg = (index) => {
        setImgs(prev => prev.filter((_, i) => i !== index));
        setInfoProduct(prev => ({
            ...prev,
            files: prev.files.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        console.log(infoProduct)

        e.preventDefault();
        setLoading(true)


        if (infoProduct.files.length === 0) {
            alert('Please upload at least one image.');
            return;
        }

        const formData = new FormData();
        infoProduct.files.forEach(file => formData.append('files', file));
        formData.append('data', JSON.stringify(infoProduct));




        console.log(infoProduct)


        axios.post('/api/admin/product', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                cfc_token: cfcToken
            },
        }).then(res => {
            setImgs([]);
            setInfoProduct({
                files: [],
                title: '',
                brand: '',
                category: '',
                price: '',
                description: '',
                gender: "",
                color:"",
                quantity:""
            });

            setLoading(false)
            toast.success("created product seccessfully .")

            console.log(res)
        }).catch(error => {
            console.log(error.message)
            toast.error("field create product.")
            setLoading(false)
        })

    };


    const getCategories = async () => {

        try {
            const res = await axios.get('/api/admin/category')
            console.log(res?.data?.data)
            setCategories(res?.data?.data)
        } catch (error) {
            console.log(error.message)
        }

    }





    const getBrands = async () => {

        try {
            const res = await axios.get('/api/admin/brand')
            setBrands(res?.data?.data)
        } catch (error) {
            console.log(error.message)
        }

    }

    useEffect(() => {
        getCategories()
        getBrands()
    }, [])

    return (
        <div className=' w-full min-h-screen p-[1rem] pb-[3rem] ' dir='ltr'>
            {loading && <Loading />}


            <h2 className='text-[1.3rem]  font-semibold'>Add New Product</h2>

            <div className=' mt-[2rem] '>
                <form className='' onSubmit={handleSubmit}>
                    <div className=' flex flex-col gap-4 items-center '>
                        <div className='relative border-primary border-dashed border-[1px] h-[2.5rem] rounded-md w-[15rem] flex justify-center items-center'>
                            <div className='flex gap-4 items-center'>
                                <MdOutlineCloudUpload className='text-primary' />
                                <p className='text-primary text-[0.8rem]'>Upload Image</p>
                            </div>
                            <input type="file" onChange={onHandleChangeInputImg} multiple className='text-white absolute opacity-0 top-0 left-0 w-full h-full' />
                        </div>

                        <div className='flex gap-4 h-[5rem]'>
                            {imgs.map((img, index) => (
                                <div key={index} className='bg-black3 relative'>
                                    <Image src={img} width={500} height={500} alt='img car' priority className='w-[5rem] object-contain h-[5rem]' />
                                    <MdCancel className='absolute text-4 text-black bg-white rounded-full top-[-.4rem] right-[-.4rem]' onClick={() => deleteImg(index)} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className=' flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-semibold '>Title</label>
                            <input type="text" className='h-[2.5rem] rounded-sm pl-4 outline-none bg-black4  border-[.5px] border-primary' name='title' value={infoProduct.title} onChange={({ target }) => setInfoProduct(prev => ({ ...prev, [target.name]: target.value }))} />
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor="" className='font-semibold '>Price</label>
                            <input type="text" className='h-[2.5rem] rounded-sm pl-4 outline-none bg-black4  border-[.5px] border-primary' name='price' value={infoProduct.price} onChange={({ target }) => setInfoProduct(prev => ({ ...prev, [target.name]: target.value }))} />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-semibold ' >Category</label>
                            <select
                                className='h-[2.5rem] rounded-sm pl-4 outline-none bg-black4 border-[.5px] border-primary'
                                name='category'
                                value={infoProduct.category}
                                onChange={({ target }) => setInfoProduct(prev => ({ ...prev, [target.name]: target.value }))}
                            >
                                <option value="">---</option>
                                {
                                    categories.map(item => {
                                        return <option key={item._id} value={item.name}>{item.name}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div className='flex flex-col '>
                            <label htmlFor="" className='font-semibold '>Brand</label>
                            <select
                                className='h-[2.5rem] rounded-sm pl-4 outline-none bg-black4 border-[.5px] border-primary'
                                name='brand'
                                value={infoProduct.brand}
                                onChange={({ target }) => setInfoProduct(prev => ({ ...prev, [target.name]: target.value }))}
                            >
                                <option value="">---</option>
                                {
                                    brands.map(item => {
                                        return <option key={item.name} value={item.name}>{item.name}</option>
                                    })
                                }
                            </select>

                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-semibold '>Gender</label>
                            <select
                                className='h-[2.5rem] rounded-sm pl-4 outline-none bg-black4 border-[.5px] border-primary'
                                name='gender'
                                value={infoProduct.gender}
                                onChange={({ target }) => setInfoProduct(prev => ({ ...prev, [target.name]: target.value }))}
                            >
                                <option value='all'>All</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>

                            </select>

                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-semibold '>Color</label>
                            <input type="text" className='h-[2.5rem] rounded-sm pl-4 outline-none bg-black4  border-[.5px] border-primary' name='color' value={infoProduct.color} onChange={({ target }) => setInfoProduct(prev => ({ ...prev, [target.name]: target.value }))} />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="" className='font-semibold '>Quantity</label>
                            <input type="text" className='h-[2.5rem] rounded-sm pl-4 outline-none bg-black4  border-[.5px] border-primary' name='quantity' value={infoProduct.quantity} onChange={({ target }) => setInfoProduct(prev => ({ ...prev, [target.name]: target.value }))} />
                        </div>

                    </div>

                    <div className='mt-4 flex flex-col'>
                        <label htmlFor="" className='font-semibold '>Description </label>
                        <textarea id="" className='h-[5rem] rounded-sm pl-4 pt-2 line-clamp-2 outline-none bg-black4 resize-none border-[.5px] border-primary ' name='description' value={infoProduct.description} onChange={({ target }) => setInfoProduct(prev => ({ ...prev, [target.name]: target.value }))}></textarea>
                    </div>
                    <button className='bg-primary text-white h-[2.5rem] rounded-md w-full font-semibold mt-4 mb-[10rem]'>Create New Product</button>
                </form>
            </div>
        </div>
    );
};





export default AddPrduct;
