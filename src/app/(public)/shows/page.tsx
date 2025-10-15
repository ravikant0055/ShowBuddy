"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import data from '../../_data/data.json';
import ShowCard from '@/app/components/ui/ShowCard';
import FiltersModal from '@/app/components/ui/FiltersModal';
import { Dialog, DialogTrigger } from '@/app/components/ui/dialog';
import ShowFilter from '@/app/components/forms/ShowFilter';

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
  genre?: string; 
}

interface Filters {
  genres: string[];
  sort: string;
}


const page = () => {
  const [filters, setFilters] = useState<Filters>({ genres: [], sort: '' });
  const [filteredShows, setFilteredShows] = useState(data.shows);

  const handleApply = () => {
    let result = [...data.shows];

    // Example: Filter genres
    if (filters.genres.length > 0) {
      result = result.filter(show => filters.genres.includes(show.genre));
    }

    // Example: Sort
    if (filters.sort) {
      result = result.sort((a, b) => {
        switch (filters.sort) {
          case 'date':
            return new Date(a.date).getTime() - new Date(b.date).getTime();
          case 'pricel':
            return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
          case 'priceh':
            return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
          default:
            return 0;
        }
      });
    }


    setFilteredShows(result);
  };

  const handleClear = () => {
    setFilters({ genres: [], sort: '' });
    setFilteredShows(data.shows);
  };
  
  return (
    <div className='px-30 py-7 space-y-7'>
      <section className='space-y-4'>
        <h1 className="text-2xl font-bold text-slate-800">All Shows Near You</h1>
        <div className='flex justify-between'>
          <div className='flex gap-3'>
              <button className='bg-[#f3f3f6] rounded-xl px-4 py-1 text-xs font-medium cursor-pointer'>Today</button>
              <button className='bg-[#f3f3f6] rounded-xl px-4 py-1 text-xs font-medium cursor-pointer'>Tomorrow</button>
              <button className='bg-[#f3f3f6] rounded-xl px-4 py-1 text-xs font-medium cursor-pointer'>This Weekend</button>
              <button className='bg-[#f3f3f6] rounded-xl px-4 py-1 text-xs font-medium cursor-pointer'>Under 10 Miles</button>
              <button className='bg-[#f3f3f6] rounded-xl px-4 py-1 text-xs font-medium cursor-pointer'>Concerts</button>
              <button className='bg-[#f3f3f6] rounded-xl px-4 py-1 text-xs font-medium cursor-pointer'>Standup</button>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <button className="flex gap-2 items-center border rounded-xl px-4 py-1 text-xs font-medium cursor-pointer">
                <HiOutlineAdjustmentsHorizontal/>
                Filters
              </button>
            </DialogTrigger>
            <FiltersModal onApply={handleApply} onClear={handleClear}>
              <ShowFilter defaultFilters={filters}  onChange={(updatedFilters) => setFilters(updatedFilters)}/>
            </FiltersModal>
          </Dialog>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredShows?.map((show: Show) => (
          <Link href={`/shows/${show.id}`} key={show.id}><ShowCard show={show}/></Link>
        ))}
      </div>

    </div>
  )
}

export default page
