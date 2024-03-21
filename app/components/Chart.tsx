"use client"
import React, { useEffect, useRef, PureComponent } from 'react'
import { LineChart, Line } from 'recharts';
import { MdOutlineKeyboardDoubleArrowUp, MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

export const Chart:React.FC = () => {
  const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


  return (
    <div className=' flex flex-col gap-4 p-2 w-full'>
        <div className=' flex items-center justify-between'>
            <div className=' flex flex-col'>
                <h1 className=' text-sm font-semibold'>Focusing</h1>
                <p className=' text-xs'>Productivity Analytics</p>
            </div>
            <div className=' px-3 py-2 bg-white rounded-full'>
                <h1 className=' text-xs'>Range: Last Month</h1>
                
            </div>
        </div>
        <div className=' flex flex-row gap-2 h-48'>
          <div className=' flex flex-col items-center justify-between text-[.8em] text-zinc-500'>
            <MdOutlineKeyboardDoubleArrowUp size={15} color='black'/>
            <p>Jan</p>
            <p className=' bg-sky-600 px-2 py-1 rounded-full text-white'>Feb</p>
            <p>March</p>
            <p>April</p>
            <MdOutlineKeyboardDoubleArrowDown size={15} color='black'/>
          </div>
          <LineChart width={800} height={200} data={data}>
             <Line type="monotone" dataKey="uv" stroke="#8884d8" />
             <Line type="monotone" dataKey="amt" stroke="#FF3F47" />
          </LineChart> 
        </div>
        <div className=' flex flex-row items-end justify-between'>
          <div className=' flex flex-row gap-4 items-center'>
            <div className=' flex items-center gap-1'>
              <div className=' h-3 w-3 bg-sky-600 rounded-sm'>

              </div>
               <p className=' text-xs'>Maximum of focus</p>
            </div>
            <div className=' flex items-center gap-1'>
              <div className=' h-3 w-3 bg-red-600 rounded-sm'>

              </div>
               <p className=' text-xs'>Maximum of focus</p>
            </div>
          </div>
          <div className=' flex flex-col items-center'>
            <h1 className=' text-4xl font-semibold'>48%</h1>
            <p className=' text-xs '>Avg.</p>
          </div>
        </div>

    </div>
  )
}
