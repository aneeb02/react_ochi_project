import { motion } from 'framer-motion'
import React from 'react'
import Arrow from './Arrow'

function About() {
  return (
    <div className='font-montreal bg-green-300 text-black rounded-t-xl'>
      <div className="text-[3.8vw] w-[89%] leading-[1] py-20 px-10 font-light">
        Ochi is a strategic presentation agency for forward-thinking businesses that need to <u>raise funds</u>,  <u>sell prod­ucts</u>,  <u>ex­plain com­plex ideas</u>, and <u>hire great peo­ple</u>.
      </div>
      <div className='flex justify-between border-t-2 border-zinc-700 py-5 px-10 border-b-2 font-medium'>
        <div>
          <p>What you can expect:</p>
        </div>
        <div className='about w-[20%]'>
          <p>
            We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
            <br/> <br />
            We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
        </div>
        <div className='links mr-40'>
          <ul>
            {["instagram", "behance", "facebook", "linkedIn"].map((item, index) => {
              return (
                <li key={index} className='capitalize'>
                  <a href={`https://www.${item}.com`}><u>{item}</u></a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className='approach py-3 px-10 flex justify-between'>
        <div>
          <h1 className='text-[3vw] mb-3'>Our Approach:</h1>
          <button className='cursor-pointer bg-zinc-800 hover:bg-zinc-900 transition duration-300 w-[12vw] text-white text-md p-3 rounded-full uppercase flex justify-around items-center'>
            <a href="" className='mr-7'>Read More</a>
            <Arrow/>
          </button>
        </div>
        <div className='hover:scale-95 transition-all duration-700 rounded-lg bg-sky-200 w-1/2 h-[70vh]'>
        </div>
      </div>
     
    </div>
  )
}

export default About
