import { motion } from 'framer-motion'
import React from 'react'

function Arrow() {
  return (
      <motion.div 
          initial={{scale: 0}} 
          animate={{ scale: 0.3 }} 
          whileHover={{ scale: [null, 1.5, 1] }} //cool stuff!
          transition={{ ease: "linear", duration: 0.5, times: [0,0.5,1]}}
          class="w-9 h-9 rounded-full border-[1px] border-zinc-600 bg-white flex items-center justify-center">
            <svg fill="#000" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"></path>
            </svg>
      </motion.div>
  )
}

export default Arrow
