import React from 'react'
import symbole from '../assets/symbol.svg'
import bespoke from '../assets/bespoke.png'
import { webdev } from '../Constant'

const Development = () => {
    return (
        <section className='container mx-auto'>
            <div className='flex flex-col items-center justify-center p-5'>
                <div className='flex items-center flex-col'>
                    <img src={symbole} className='w-20 object-contain' />
                    <h2 className='text-[36px]'>Web Development</h2>
                    <p className='text-[26px]'></p>
                    <button className='text-[16px]'>View</button>
                </div>

                <div>
                    <img src={bespoke} className='object-contain' />
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-[32px]'>Web Technologies</h2>
                    <p className='text-lg'>Driven by a fascination in everything that's "web", we invest our time in acquiring and honing the diverse range of skills needed to ensure our website technology is at the cutting edge. From the design of user interfaces all the way through to data architecture we're
                         continually designing, developing, 
                         testing and evolving our websites, 
                         and the technology that runs them. 
                        We provide our web design and development services nationally and internationally to broad range of clients and industries. </p>
                </div>

                <div className='grid lg:grid-cols-4 mt-10 gap-5'>
                   {
                    webdev.map((item,id)=>(
                         <div className='flex flex-col items-center justify-center text-wrap gap-2 text-center'>
                            <img src={item.img} className='w-20'/>
                            <h2>{item.heading}</h2>
                            <p>{item.desc}</p>
                        </div>
                    ))
                   }
                </div>
            </div>
        </section>
    )
}

export default Development