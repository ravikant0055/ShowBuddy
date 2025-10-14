'use client';
import React from 'react';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,DialogClose,} from './dialog';
import ShowFilter from '../forms/ShowFilter';
const FiltersModal = () => {
  return (
    <DialogContent className="w-full h-[90vh] rounded-3xl p-7">
      <DialogHeader>
        <DialogTitle>Filter by</DialogTitle>
      </DialogHeader>
      <ShowFilter/>
      <DialogFooter>
        <DialogClose asChild>
          <button  className="text-sm font-medium text-red">Clear Filter</button>
        </DialogClose>
        <button type="submit" className='bg-[#01161d] text-white px-10 py-3 rounded-xl text-sm font-semibold cursor-pointer'>Apply Changes</button>
      </DialogFooter>
    </DialogContent>
  );
};

export default FiltersModal;
