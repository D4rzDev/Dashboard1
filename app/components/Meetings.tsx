import React from 'react'
import { IoCalendarClearOutline } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdArrowRoundDown, IoMdArrowRoundUp } from "react-icons/io";
import Image from 'next/image';

const meeting =[
  {
    name:'Quickly Daily Meeting',
    date: 'Tue, 11 Jul',
    time: '8:00 am',
    type: 'Zoom',
    url:'/zoom.png'
  },
  {
    name:'Jane Onboarding',
    date: 'Tue, 11 Jul',
    time: '10:00 am',
    type:'Google Meet',
    url:'/meet.png'
  },
  {
    name:'Call with the new team',
    date: 'Tue, 11 Jul',
    time: '1:00 pm',
    type: 'Google Meet',
    url:'/meet.png'
  },
  {
    name:'Lead Developer Event',
    date: 'Tue, 11 Jul',
    time: '1:00 pm',
    type: 'Zoom',
    url:'/zoom.png'
  },
{
    name:'Team Meeting',
    date: 'Tue, 11 Jul',
    time: '3:00 pm',
    type: 'Zoom',
    url:'/zoom.png'
  },
  {
    name:'Project Meeting',
    date: 'Tue, 11 Jul',
    time: '5:00 pm',
    type: 'Meet',
    url:'/meet.png'
  },
   {
    name:'Quickly Daily Meeting',
    date: 'Tue, 11 Jul',
    time: '8:00 am',
    type: 'Zoom',
    url:'/zoom.png'
  },
  {
    name:'Jane Onboarding',
    date: 'Tue, 11 Jul',
    time: '10:00 am',
    type:'Google Meet',
    url:'/meet.png'
  },
  
]

const skills = [
    {
        name: 'NextJs',
        progress:'80%'
    },
    {
        name: 'Typecript',
        progress:'60%'
    },
    {
        name: 'Rest Apis',
        progress:'90%'
    },
    {
        name: 'Node Js',
        progress:'70%'
    },
    {
        name: 'Express',
        progress:'50%'
    },
]
export default function Meetings() {
  return (
    <div className='flex flex-col gap-4 w-full'>
        <div className=' flex flex-row items-center justify-between w-full'>
            <p className=' text-sm font-semibold'>Meetings</p>
            <div className=' grid place-items-center h-8 w-8 bg-white rounded-full'>
                <IoCalendarClearOutline size={15}/>
            </div>
            
        </div>
        <div className=' flex flex-col gap-2'>
                { meeting.map((meetings, index) => (
                    <div className=' flex items-center justify-between py-2 border-b-[1px] border-zinc-300' key={index}>
                        <div className=' flex flex-col gap-1'>
                            <p className=' text-xs text-zinc-500'>{meetings.date}</p>
                            <p className=' text-xs font-semibold'>{meetings.time}</p>
                        </div>
                        <div className=' flex flex-col gap-1 w-36 md:w-40 '>
                            <p className=' text-xs font-semibold'>{meetings.name}</p>
                            <div className=' flex items-center gap-2'>
                                <Image src={meetings.url} width={200} height={200} alt='img' className=' h-3 w-3 '/>
                               <p className=' text-xs text-zinc-500'>{meetings.type}</p>
                            </div>
                        </div>
                        <FiArrowUpRight size={15}/>
                    </div>
                ))}
                <p className=' flex items-center text-xs mt-2'>See All Meetings <MdKeyboardArrowRight size={15}/></p>
        </div>

        <div className=' flex flex-col gap-4'>
            <div className=' flex flex-col'>
                <p className=' text-sm font-semibold'>Developed Areas</p>
                <p className=' text-[.6em]'>Most common area of interest</p>
            </div>
            <div className=' flex flex-col gap-4'>
                { skills.map((skill, index) => (
                    <div className=' flex items-center justify-between' key={index}>
                        <p className=' text-xs font-semibold w-14'>{skill.name}</p>
                        <div className=' flex items-center gap-1 w-48'>
                            <div className=' h-2 w-48 rounded-xl bg-zinc-200'>
                                <div className={` h-2 w-[${skill.progress}] bg-sky-600 rounded-xl`}>

                                </div>
                            </div>
                            <p className=' text-[.6em]'>{skill.progress}</p>
                        </div>
                        <IoMdArrowRoundUp size={15}/>
                    </div>
                ))}

            </div>

        </div>
    </div>
  )
}
