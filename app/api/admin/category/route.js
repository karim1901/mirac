import Category from "@/model/category";
export const dynamic = 'force-dynamic';

import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

import { Buffer } from 'buffer';
import { connectDB } from "@/utils/connectDb";
import Product from "@/model/product";

 connectDB()

// تكوين Cloudinary باستخدام البيانات المخزنة في متغيرات البيئة
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// دالة لرفع الملف إلى Cloudinary
const uploadToCloudinary = (fileBuffer, fileName) => {
  return new Promise((resolve, reject) => {
    // إنشاء مسار تحميل إلى Cloudinary مع الإعدادات المحددة
    const uploadStream = cloudinary.uploader.upload_stream({
      invalidate: true,
      resource_type: "auto",
      filename_override: fileName,
      folder: "category-images",
      use_filename: true,
    }, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });

    // إرسال محتوى الملف إلى مسار التحميل
    uploadStream.end(fileBuffer);
  });
};

// دالة لمعالجة تحميل الصور وبيانات السيارة
const uploadImg = async (req) => {
  try {
    // استخراج البيانات من الطلب
    const formData = await req.formData();
    const files = formData.getAll('files');

    // التحقق من وجود ملفات للتحميل
    if (files.length === 0) {
      return NextResponse.json({
        success: false,
        message: "No files uploaded."
      });
    }

    // رفع كل ملف إلى Cloudinary والحصول على الروابط
    const fileResponses = await Promise.all(files.map(async (file) => {
      const buffer = Buffer.from(await file.arrayBuffer());
      const timestamp = Date.now();
      const originalName = file.name;
      const uniqueName = `${originalName.split('.')[0]}-${timestamp}`;
      const result = await uploadToCloudinary(buffer, uniqueName);
      return result.secure_url;
    }));

    // استخراج ومعالجة بيانات السيارة
    const data = formData.get('data');
    const categoryInfo = JSON.parse(data);

    // إرجاع بيانات السيارة مع روابط الصور
    return {
      ...categoryInfo,
      thumbnail: fileResponses[0]
    };
  } catch (error) {
    console.error('Error uploading files:', error);
    throw error;
  }
};





export async function POST(req) {


    try {

        const data = await uploadImg(req);
        const res  = await Category.create({name:data.category,...data})
        return NextResponse.json({status:200,data:res})
    } catch (error) {
        console.log({error:error.message})
        return NextResponse.json({error:error.message})
    }
}


export async function GET(request) {
    try {
        const data  = await Category.find()
        return NextResponse.json({status:200,data:data})
    } catch (error) {
        console({error:error.message})
        return NextResponse.json({error:error.message})
    }
}