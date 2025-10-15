'use client';
import React from 'react';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,DialogClose,} from './dialog';
import ShowFilter from '../forms/ShowFilter';
interface FiltersModalProps {
  children: React.ReactNode;
  onApply: () => void;
  onClear: () => void;
}
const FiltersModal: React.FC<FiltersModalProps> = ({ children, onApply, onClear }) => {
  return (
    <DialogContent className="w-full h-[90vh] rounded-3xl p-7">
      <DialogHeader>
        <DialogTitle>Filter by</DialogTitle>
      </DialogHeader>
          {children} 
      <DialogFooter>
         <button onClick={onClear} className="text-sm font-medium text-red">Clear Filter</button>
        <DialogClose asChild>
           <button  onClick={onApply} className='bg-[#01161d] text-white px-10 py-3 rounded-xl text-sm font-semibold cursor-pointer'>Apply Changes</button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default FiltersModal;
