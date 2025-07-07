import React, { useEffect, useState } from 'react'

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const [rotate2, setRotate2] = useState(0);
  useEffect(() =>{
    window.addEventListener("mousemove", (e) =>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let dX = mouseX - window.innerWidth / 2;
      let dY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(dY, dX) * (180 / Math.PI);
      setRotate(angle-180);
      // setRotate2(angle-180);
       
    })
  })

  return (
    <div className='w-full h-screen overflow-hidden relative'>
    <div data-scroll data-scroll-speed="-0.5" className='w-full h-full bg-[url("./public/eyes.jpg")] bg-center bg-cover'>
      <div className="absolute flex gap-12 text-black left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3">
        <div className='w-[15vw] h-[15vw] bg-slate-200 rounded-full flex items-center justify-center'>
          <div className='w-2/3 h-2/3 relative bg-slate-900 rounded-full'>
            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line w-full h-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <div className='w-10 h-10 bg-slate-200 rounded-full'></div>
            </div>
          </div>
        </div>
        <div className='w-[15vw] h-[15vw] bg-slate-200 rounded-full flex items-center justify-center'>
        <div className='w-2/3 h-2/3 relative bg-slate-900 rounded-full'>
            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line w-full h-10 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <div className='w-10 h-10 bg-slate-200 rounded-full'></div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  </div>
  
  )
}

export default Eyes
