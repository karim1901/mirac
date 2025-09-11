'use client';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // ✅ استيراد Autoplay
import 'swiper/css';

const SlideImg = ({ imgs }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      modules={[Autoplay]} // ✅ إضافة Autoplay للـ modules
      autoplay={{
        delay: 2000, // كل 2 ثواني
        disableOnInteraction: false, // يستمر حتى إذا المستخدم تدخل
      }}
    >
      {imgs.map((img, index) => (
        <SwiperSlide key={index}>
          <Image
            src={img}
            width={700}
            height={700}
            className="w-full min-h-[25rem] h-[25rem] sm:h-fit lg:h-[33rem] object-cover"
            alt="producImage"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideImg;
