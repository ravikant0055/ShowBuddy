import Link from 'next/link'
import React from 'react'
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";
import data from '../../_data/data.json';
import ShowCard from '@/app/components/ui/ShowCard';
import FiltersModal from '@/app/components/ui/FiltersModal';
import { Dialog, DialogTrigger } from '@/app/components/ui/dialog';

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

const page = () => {
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
            <FiltersModal/>
          </Dialog>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.shows?.map((show: Show) => (
          <Link href={`/shows/${show.id}`} key={show.id}><ShowCard show={show}/></Link>
        ))}
      </div>

    </div>
  )
}

export default page
