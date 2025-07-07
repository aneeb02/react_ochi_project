import { motion } from 'framer-motion'
import { useState } from 'react';
import React from 'react'

function Featured() {

  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  
  return (
    <div className='w-full py-24 font-montreal'>
      <div className='w-full px-10 border-b-[1px] pb-14 border-zinc-700'>
        <h1 className='text-6xl tracking-tight'>Featured Projects</h1>
        
      </div>
      <div>
        <div className="cards w-full flex gap-10 p-14">
          <div 
            onMouseEnter={()=> setHover(true)} 
            onMouseLeave={()=> setHover(false)} 
            className="cardcont relative  w-1/2 h-[80vh]">
            <h1 className='absolute flex z-[9] left-full -translate-x-1/2 -translate-y-1/2 top-1/2 leading-none tracking-tight text-8xl text-green-300 font-grotesk opacity-1 hover:opacity-1'>
            {"FYDE".split('').map((item, index) => 
              <motion.span initial={{y:"100%", opacity:0}} 
              animate={hover ? {y:"0", opacity: 1} : {y:"100%"}} 
              transition={{ease: "easeInOut", delay: index * 0.02}} 
              className='inline-block'>{item}
              </motion.span>)}
            </h1>
            <div className="card w-full h-full bg-red-300 rounded-xl overflow-hidden hover:scale-95 transition-all duration-500">
            <img className= "w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
          </div>
          <div 
          onMouseEnter={()=> setHover2(true)} 
          onMouseLeave={()=> setHover2(false)} 
          className="cardcont relative w-1/2 h-[80vh]">
            <h1 className='absolute flex z-[9] right-full translate-x-1/2 -translate-y-1/2 top-1/2 leading-none tracking-tight text-8xl text-green-300 font-grotesk opacity-1 hover:opacity-1'>
              {"VISE".split('').map((item, index) =>  
              <motion.span initial={{y:"100%", opacity:0}} 
              animate={hover2 ? {y:"0", opacity: 1} : {y:"100%"}} 
              transition={{ease: "easeInOut", delay: index * 0.02}} 
              className='inline-block'>{item}
              </motion.span>)}
            </h1>

            <div className="card w-full h-full bg-red-300 rounded-xl overflow-hidden hover:scale-95  transition-all duration-500">
              <img className= "w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Featured