import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import Arrow from './Arrow';
import { motion } from 'framer-motion';

function LandingPage() {
  return ( 
    <div data-scroll data-scroll-section data-scroll-speed="0.5s" className='w-full h-screen bg-zinc-900 border-t-2'>
      <div className="textstructure mt-28 px-16">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div key={index} className="masker font-grotesk">
              <div className='flex items-center w-fit'>
                {index === 1 && 
                  (<motion.div 
                    initial={{width: 0}} 
                    animate={{width: "8vw"}} 
                    transition={{ease:[0.5, 0, 0.25, 1], duration: 1.2}} 
                    
                    className='mr-[1vw] w-[8vw] h-[5vw] relative -top-[-1.2vw] bg-red-100 rounded-md '></motion.div>
                )}
                <h1 className='pt-[0.5vw] -mb-[1vw] text-[8.5vw] uppercase leading-[0.8] tracking-normal font-semibold'>{item}</h1>
              </div>
            </div>
          )
        })}
      </div>
      <div className='border-t-2 border-zinc-700 mt-24 flex justify-between py-5 px-16'>
        {["For public and private companies", "From the first pitch to IPO"].map(item => {
          return <span className='font-montreal text-md tracking-tight leading-none'>{item}</span>
        })}

        <div className='start font-montreal flex gap-4 items-center justify-center'>
          <div className="rounded-full border-[1px] border-zinc-600 px-4 py-1 font-light text-md uppercase">
            <p>Start The Project</p>
          </div>

          <Arrow/>

        </div>
      </div>
     
    </div>
  )
}

export default LandingPage
