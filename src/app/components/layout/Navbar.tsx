import Link from 'next/link';
import React from 'react';
import { TbMessage } from "react-icons/tb";
import { VscBell } from "react-icons/vsc";
import { BiSearch } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import showbuddy from '../../../../public/ShowBuddy1.svg';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow px-4 py-3 flex justify-between items-center h-16">
      <div className="flex gap-5 items-center overflow-hidden">
        <Link href="/"><Image src={showbuddy} alt="showbuddy" className="object-cover w-[100px]" /></Link>
        <ul className="flex space-x-2">
          <Link href="/"><li className="font-medium text-sm bg-[#67dcf4] text-[#00272f] rounded-xl px-4 py-1">Explore</li></Link>
          <Link href="/buddies"><li className="font-medium text-sm rounded-xl px-4 py-1">Buddies</li></Link>
          <Link href="/movies"><li className="font-medium text-sm rounded-xl px-4 py-1">Movies</li></Link>
          <Link href="/shows"><li className="font-medium text-sm rounded-xl px-4 py-1">Shows</li></Link>
          <Link href="/cafes"><li className="font-medium text-sm rounded-xl px-4 py-1">Cafes</li></Link>
        </ul>
      </div>

      <div className="flex gap-5 items-center">
        <div className="flex items-center gap-2 bg-[#f7f7f7] rounded-xl px-3 w-[360px]">
          <BiSearch className="text-xl text-[#01353f]" />
          <input className="py-2 text-sm font-medium w-full" placeholder="Search buddy for movie, show and restaurants" />
        </div>

        <Link href="/" className="relative">
          <TbMessage className="text-2xl" />
          <div className="bg-[#f21111] absolute top-0 right-0 w-4 h-4 rounded-full text-white text-center text-xs flex items-center justify-center">0</div>
        </Link>
        <Link href="/"><VscBell className="text-xl" /></Link>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="bg-[#cfcfcf] p-2">
            <FaRegUser className="text-white text-sm" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
