import { Movie } from '@/types';
import Image from 'next/image';
import React from 'react'

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div className='flex flex-col rounded-xl  border overflow-hidden'>
      <Image src={movie.image} alt={`${movie.name} image`} width={300} height={450} className='object-cover'/>
      <div className='flex flex-col py-3 px-3 space-y-1'>
         <h1 className='font-medium'>{movie.name}</h1>
         <p className='text-xs font-medium'>{movie.category} | {movie.language}</p>
      </div>
    </div>
  )
}

export default MovieCard;
