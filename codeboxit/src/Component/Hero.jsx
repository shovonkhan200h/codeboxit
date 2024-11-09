import React from 'react'
import ipad from '../assets'

const Hero = () => {
  return (
    
      <div className='w-full lg:h-screen bg-black text-white relative'>
        
        <div className='w-full grid items-center justify-center text-center lg:absolute -top-5'>
          <h2 className='text-[36px] lg:text-[60px]'>Web designers & developers</h2>
          <p className='text-[26px]'>Specialists in CMS & ecommerce since 2022</p>
          <button className='text-[16px]'>+</button>
        </div>

        <div className='w-full flex items-center justify-center lg:absolute lg:-bottom-10 lg:left-0'>
          <img src={ipad} className='object-contain w-[850px]'/>
        </div>

      </div>
    
  )
}

export default Hero