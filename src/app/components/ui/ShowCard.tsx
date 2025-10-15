import Image from 'next/image';
import React from 'react'

interface Show {
  id: number;
  image: string;
  name: string;
  displayDate: string;
  date: string;
  time: string;
  price: string;
  venue: string;
  location: string;
}

const ShowCard = ({show}: {show : Show}) => {
  return (
    <div className='flex flex-col rounded-xl w-full border overflow-hidden'>
          <Image src={show.image} alt={`${show.name} image`} width={300} height={450} className='w-full object-cover'/>
          <div className='flex flex-col py-3 px-3 space-y-1'>
             <p className='text-xs font-medium text-[#004688]'>{show.displayDate}, {show.time}</p>
             <h1 className='font-medium'>{show.name}</h1>
             <p className='text-xs font-medium'>{show.venue}, {show.location}</p>
          </div>
    </div>
  )
}

export default ShowCard;
