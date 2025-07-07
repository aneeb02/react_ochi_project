import React from 'react'
import { motion } from "framer-motion"


function Marquee() {
  return (
    <div className='bg-[#125a50] w-full py-16 rounded-t-xl' >
      <div className="text uppercase border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap overflow-hidden">
        {[...Array(10)].map(( _, index) => {
          return (
            <motion.h1 key={index} className='text-[20vw] leading-none font-grotesk mb-2 pr-10' 
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 8}}>
              we are ochi
          </motion.h1>
        )
        })}
        
      </div>
    </div>
  )
}

export default Marquee
