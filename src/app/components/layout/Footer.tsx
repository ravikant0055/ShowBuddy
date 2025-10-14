import React from 'react'
import showbuddy from "../../../../public/ShowBuddyWhite.svg"
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='flex flex-col w-full bg-[#0d0d10] py-5 px-5 h-[300px]'>
      <div>
        <Image src={showbuddy} alt="logo" className='w-[200px]'/>
      </div>

    </div> 
  )
}

export default Footer;
