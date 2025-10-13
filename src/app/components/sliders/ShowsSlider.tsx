"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from 'swiper/modules';
import MovieCard from '../ui/MovieCard';
import data from "../../_data/data.json";
import ShowCard from '../ui/ShowCard';

interface Show {
  id: number;
  image: string;
  name: string;
  date: string;
  time: string;
  price: string;
  venue: string;
  location: string;
}

const ShowsSlider = () => {
  return (
    <div>
        <Swiper 
          slidesPerView={5} 
          spaceBetween={20} 
          autoplay={{ delay: 1000 }} 
          >
            {data.shows?.map((show: Show) => (
                <SwiperSlide key={show.id} className='py-2'>
                    <ShowCard show={show} />
                </SwiperSlide>
            ))} 
        </Swiper>
    </div>
  )
}

export default ShowsSlider;
