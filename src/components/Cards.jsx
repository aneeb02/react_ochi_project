import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen flex items-center p-10 gap-10 font-montreal'>
      <div className="cardcontainer w-1/2 h-[65vh]">
        <div className="card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
          <button className='absolute left-10 bottom-10 rounded-full bg-slate-500 px-3 py-1 tracking-tighter'> &copy; 2019-2024</button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[65vh] flex gap-10 ">
        <div className="card relative w-full h-full bg-[#0f3c36] rounded-xl flex items-center justify-center">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute left-10 bottom-10 rounded-full bg-slate-500 px-3 py-1 tracking-tighter'> RATING 5.0</button>
        </div>
        <div className="card relative w-full h-full bg-[#0f3c36] rounded-xl flex items-center justify-center">
          <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
          <button className='absolute left-10 bottom-10 rounded-full bg-slate-500 px-3 py-1 tracking-tighter'> BOOTCAMP</button>

        </div>
      </div>

      
    </div>
  )
}

export default Cards
