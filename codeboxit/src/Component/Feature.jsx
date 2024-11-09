import React from 'react'
import ecommerce from '../assets/ecommerce.svg'
import touch from '../assets/touch.svg'
import webd from '../assets/web-design.png'
import webdd from '../assets/ecommerce-2.png'

const Feature = () => {
    return (
        <div className='lg:grid lg:grid-cols-2 text-white w-full'>
            <div className='bg-black container flex flex-col justify-center items-center text-center gap-10'>
                <div className='flex flex-col items-center p-5 w-full'>
                    <img src={touch} className='w-20' />
                    <h2 className='text-[36px]'>Website design</h2>
                    <p className='text-[26px]'>fully responsive & feature-rich websites</p>
                    <button className='text-[16px]'>View</button>
                </div>

                <div className='2xl:-ml-[500px]'>
                    <img src={webd} className='object-contain' />
                </div>
            </div>

            <div className='bg-gray-400 container flex flex-col justify-center items-center text-center gap-10'>
                <div className='flex flex-col items-center p-5 w-full'>
                    <img src={ecommerce} className='w-20' />
                    <h2 className='text-[36px]'>E-commerce</h2>
                    <p className='text-[26px]'>expertise built on industry experience</p>
                    <button className='text-[16px]'>View</button>
                </div>

                <div>
                    <img src={webdd} className='object-contain' />
                </div>
            </div>


        </div>
    )
}

export default Feature