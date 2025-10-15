"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from 'swiper/modules';
import MovieCard from '../ui/MovieCard';
import data from "../../_data/data.json";
import ShowCard from '../ui/ShowCard';
import Link from 'next/link';
import { Show } from '@/types';

const ShowsSlider = () => {
  return (
    <div>
        <Swiper 
          slidesPerView={5} 
          spaceBetween={20} 
          autoplay={{ delay: 1000 }} 
          >
            {data.shows?.map((show: Show) => (
              <SwiperSlide  key={show.id} className='py-2'>
                <Link href={`/shows/${show.id}`}>
                  <ShowCard show={show} />
                </Link>   
              </SwiperSlide>  
            ))} 
        </Swiper>
    </div>
  )
}

export default ShowsSlider;
