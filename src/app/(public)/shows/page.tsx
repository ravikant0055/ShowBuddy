'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import ShowCard from '@/app/components/ui/ShowCard';
import FiltersModal from '@/app/components/ui/FiltersModal';
import { Dialog, DialogTrigger } from '@/app/components/ui/dialog';
import ShowFilter, { ShowFilterRef } from '@/app/components/forms/ShowFilter';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { setFilters, clearFilters } from '@/store/slices/showSlice';

const Page = () => {
  const dispatch = useDispatch<AppDispatch>()
  const filteredShows = useSelector((state: RootState) => state.shows.filteredShows)
  const currentFilters = useSelector((state: RootState) => state.shows.filters)

  // Ref to access ShowFilter state
  const filterRef = useRef<ShowFilterRef>(null)

  const handleApply = () => {
    if (filterRef.current) {
      const filters = filterRef.current.getFilters()
      dispatch(setFilters(filters))
    }
  }
  const handleClear = () => {
    dispatch(clearFilters())
  }

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
              <ShowFilter ref={filterRef} initialFilters={currentFilters}/>
            </FiltersModal>
          </Dialog>
        </div>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredShows?.map(show => (
          <Link href={`/shows/${show.id}`} key={show.id}>
            <ShowCard show={show}/>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Page
