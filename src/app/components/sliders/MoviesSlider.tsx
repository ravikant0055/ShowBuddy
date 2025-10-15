"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MovieCard from '../ui/MovieCard';
import data from "../../_data/data.json";
import { Movie } from '@/types';

const MoviesSlider = () => {
  return (
    <div>
        <Swiper slidesPerView={5} spaceBetween={20} autoplay={{ delay: 1000 }}>
            {data.movies?.map((movie:Movie) => (
                <SwiperSlide key={movie.id} className='py-2'>
                    <MovieCard movie={movie} />
                </SwiperSlide>
            ))} 
        </Swiper>
    </div>
  )
}

export default MoviesSlider;
