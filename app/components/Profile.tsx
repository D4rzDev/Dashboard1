import React from 'react'
import { IoIosRefresh } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import { RiTimerLine } from "react-icons/ri";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import Image from 'next/image';


export default function Profile() {
   
  return (
    <div className=' flex flex-col w-[100%] md:flex-row md:w-full'>
        <div className='p-2 h-[350px] w-[100%] md:w-[40%]'>
            <div className=' flex flex-col justify-between p-6 w-full h-full rounded-3xl bg-white shadow-xl'>
                <div className=' flex flex-row justify-between'>
                    <p className=' text-xs font-semibold'>Profile</p>
                    <IoIosRefresh size={15}/>
                </div>
                <div className=' flex flex-col items-center justify-center'>
                    <div className=' relative grid place-items-center h-24 w-24 rounded-full mb-2 border-4 border-red-400'>
                        <div className=' h-20 w-20 rounded-full' style={{backgroundImage: `url('/profile.jpg')`, backgroundSize:'cover'}}>

                        </div>
                        <div className=' absolute grid place-items-center bottom-0 right-0 h-5 w-5 rounded-full bg-black '>
                            <FaStar size={10} color='white'/>
                        </div>
                    </div>
                    <h1 className=' text-sm font-semibold'>Jane Smith</h1>
                    <p className=' text-[10px]'>Front End Developer</p>
                </div>
                <div className=' flex flex-row items-center justify-center gap-4'>
                    <div className=' flex items-center justify-center gap-1 px-3 py-1 shadow-xl bg-zinc-50 rounded-full' >
                        <FaUserFriends size={12} color='#FA7D73'/>
                        <p className=' text-xs'>15</p>
                    </div>
                    <div className=' flex items-center justify-center gap-1 px-3 py-1 shadow-xl bg-zinc-50 rounded-full'>
                        <IoIosCheckmarkCircle size={12} color='#FA7D73'/>
                        <p className=' text-xs'>15</p>
                    </div>
                    <div className=' flex items-center justify-center gap-1 px-3 py-1 shadow-xl bg-zinc-50 rounded-full'>
                        <FaTrophy size={12} color='#FA7D73'/>
                        <p className=' text-xs'>15</p>
                    </div>
                </div>
            </div>
        </div>
         <div className=' flex flex-col gap-2 p-2 w-full md:w-[60%]'>
            <div className=' flex flex-row gap-2 h-[80%]'>
                <div className=' flex flex-col justify-between p-4 md:p-6 w-[50%] bg-red-400 rounded-3xl' style={{backgroundImage:`url('/gradient2.svg')`, backgroundSize:'cover'}}>
                    <div className=' flex flex-row w-full items-center justify-between'>
                        <p className=' text-xs font-semibold'>Prioritized Task</p>
                        <div className=' flex items-center justify-center h-8 w-8 rounded-xl bg-white bg-opacity-30'>
                            <RiTimerLine size={15}/>
                        </div>
                    </div>
                    <div>
                        <h1 className=' text-5xl font-medium'>85%</h1>
                        <p className=' text-xs'>Avg. Completed</p>
                    </div>
                </div>

                <div className=' flex flex-col justify-between p-4 md:p-6 w-[50%] bg-red-400 rounded-3xl' style={{backgroundImage:`url('/gradient1.svg')`, backgroundSize:'cover'}}>
                    <div className=' flex flex-row w-full items-center justify-between'>
                        <p className=' text-xs font-semibold'>Additional Task</p>
                        <div className=' flex items-center justify-center h-8 w-8 rounded-xl bg-white bg-opacity-30'>
                            <IoIosCheckmarkCircleOutline size={15}/>
                        </div>
                    </div>
                    <div>
                        <h1 className=' text-5xl font-medium'>56%</h1>
                        <p className=' text-xs'>Avg. Completed</p>
                    </div>
                </div>
              
            </div>
            <div className=' flex items-center justify-between p-6 h-[20%] bg-zinc-200 rounded-3xl'>
                <div>
                    <h1 className=' text-xs font-medium'>Trackers Connected</h1>
                    <p className=' text-[.6em]'>3 active connections</p>
                </div>

                <div className=' flex items-center gap-2'>
                    <div className=' relative flex items-center'>
                        <div className=' relative grid place-items-center left-5 h-8 w-8 rounded-full bg-white'>
                            <Image src='/figma.png' width={200} height={200} alt='figma' className=' h-4 w-4 rounded-full'/>
                        </div>
                        <div className=' relative grid place-items-center left-3 h-8 w-8 rounded-full bg-white'>
                            <Image src='/git.png' width={200} height={200} alt='figma' className=' h-4 w-4 rounded-full'/>
                        </div>
                        <div className=' relative grid place-items-center h-8 w-8 rounded-full bg-white'>
                            <Image src='/vs.png' width={200} height={200} alt='figma' className=' h-4 w-4 rounded-full'/>

                        </div>
                    </div>
                   
                    <HiOutlineDotsHorizontal size={15}/>
                </div>
               
            </div>
        </div>
    </div>
  )
}
