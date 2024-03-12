import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation, Mousewheel } from 'swiper/modules';

import img1 from '../public/sl1.webp';
import img2 from '../public/sl2.webp';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';


const HomeSlider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper overflow-hidden rounded-xl"
            >
                <SwiperSlide className='relative rounded-xl overflow-hidden'>
                    <Image src={img2} alt='img1' className='w-full h-full rounded-xl overflow-hidden' />
                    <h1 className='flex items-center justify-center absolute w-[100%] h-[100%] text-center left-[50%] top-[50%] p-2 rounded-xl bg-black bg-opacity-50  text-white transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold'>SMART MAINTAINANCE</h1>
                </SwiperSlide>
                <SwiperSlide className='relative rounded-xl overflow-hidden'>
                    <Image src={img2} alt='img1' className='w-full h-full rounded-xl overflow-hidden' />
                    <h1 className='flex items-center justify-center absolute w-[100%] h-[100%] text-center left-[50%] top-[50%] p-2 rounded-xl bg-black bg-opacity-50 text-white transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold'>CENTRALIZED MONITORING</h1>
                </SwiperSlide>
                <SwiperSlide className='relative rounded-xl overflow-hidden'>
                    <Image src={img2} alt='img1' className='w-full h-full rounded-xl overflow-hidden' />
                    <h1 className='flex items-center justify-center absolute w-[100%] h-[100%] text-center left-[50%] top-[50%] p-2 rounded-xl bg-black bg-opacity-50 text-white transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold'>ENERGY CONSERVATION</h1>
                </SwiperSlide>
            </Swiper>
            </>
        );
    }


export default HomeSlider