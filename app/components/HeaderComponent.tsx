import React from 'react'
import { PiUserLight } from "react-icons/pi";
import Image from 'next/image';

export default function HeaderComponent() {
  return (
    <div className=' flex justify-between w-full'>
        <div className=' flex gap-4'>
            <div className=' grid place-items-center h-10 w-10 rounded-full bg-sky-500'>
                <Image src='/logo.png' width={200} height={200} alt='logo' className=' h-6 w-6'/>
            </div>
            <div>
                <h1 className=' font-semibold'>Welcome, Jane</h1>
                <p  className=' text-xs'>Your personal dashboard overview.</p>
            </div>

        </div>
        <div className=' hidden md:flex flex-row gap-2'>
            <input type="text" placeholder='Search'  className=' px-4 text-xs rounded-full h-8 bg-[#E2E3E8]'/>
            <div className=' flex items-center justify-center h-8 w-8 rounded-full bg-white'>
                <PiUserLight size={15}/>
            </div>
        </div>
    </div>
  )
}
