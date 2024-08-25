import React, { useRef, useState } from 'react';
import imgtest from '../assets/flamingos.jpg';
import imgtest2 from '../assets/florbonita.jpg';
export default function App() {
  return (
<div className="grid grid-cols-3 gap-4 auto-rows-fr">
      
      <div className="relative rounded-xl h-imgcard-h col-span-2 overflow-hidden group">
        <div className='text-white absolute top-3/4 left-0 z-10'>
          <button className='w-full'>Ilustratiion</button>
          <h1 className=''>texto fds</h1>
          <span className=''>data fodse</span>
        </div>
        <img className='w-full h-full object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-110' src={imgtest} alt="test" />
      </div>

      <div className="rounded-xl h-imgcard-h overflow-hidden group">
        <img className='w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110' src={imgtest2} alt="test" />
      </div>

      <div className="rounded-xl h-imgcard-h overflow-hidden group">
        <img className='w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110' src={imgtest2} alt="test" />
      </div>

      <div className="rounded-xl h-imgcard-h col-span-2 overflow-hidden group">
        <img className='w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110' src={imgtest} alt="test" />
      </div>

  </div>
    

  )
}
