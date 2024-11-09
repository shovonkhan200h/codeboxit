import React from 'react'
import { Links } from '../Constant'
import { FiAlignCenter } from "react-icons/fi";
import { IoMdCall } from "react-icons/io";
import Dropdown from '../Utils/dropdown';

const Navbar = () => {
  return (
    <div className='flex justify-between lg:justify-between p-5 items-center lg:bg-black w-full lg:h-[90px] lg:text-white z-50'>
        <div>
            <h2>CodeBoxIt</h2>
        </div>

        <div className='lg:hidden flex gap-2'>
        <h2>MENU</h2>
        <FiAlignCenter className='text-[30px]'/>
        </div>

        <div className='hidden lg:flex gap-2'>
           {
            Links.slice(0,1).map(item=><a key={item.id} className='p-2 cursor-pointer hover:border-b hover:border-white text-[16px] text-[rgb(209,209,209)]'>{item.name}</a>)
           }

           <Dropdown/>

           {
            Links.slice(1,3).map(item=><a key={item.id} className='p-2 cursor-pointer hover:border-b hover:border-white text-[16px] text-[rgb(209,209,209)]'>{item.name}</a>)
           }

           <div className='flex items-center gap-2'>
           <IoMdCall />
           <p>07572535550</p>
            </div> 

        </div>
    </div>
  )
}

export default Navbar