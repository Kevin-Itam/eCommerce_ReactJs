
import imgtest from '../assets/flamingos.jpg';
import imgtest2 from '../assets/florbonita.jpg';
export default function App() {
  return (
<div className="grid grid-cols-3 gap-4 auto-rows-fr">
            
  <div className="relative rounded-xl h-imgcard-h col-span-2 overflow-hidden group">
    <div className='flex flex-col w-full items-center p-4 text-white absolute top-3/4 z-10'>
      <div><button className='bg-red-600 rounded px-4 transition-all duration-500 ease-in-out hover:bg-slate-700'>Illustration</button></div>
      <div className=''>
        <h2 className='pt-3 break-words font-bold text-xl relative'>
          Ready To Go Home After The Sunset View?
        </h2>
        <span className="block w-0 h-0.5 bg-white relative left-1/2 bottom-0 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
      </div>
      <div><span className=''>November 18, 2021</span></div>
    </div>
    <img className='w-full h-full object-cover rounded-xl transform transition-transform duration-500 group-hover:scale-110' src={imgtest} alt="test" />
  </div>


  <div className="relative rounded-xl h-imgcard-h overflow-hidden group">
    <div className='flex flex-col w-full items-center p-4 text-white absolute top-3/4 z-10'>
      <div><button className='bg-red-600 rounded px-4 transition-all duration-500 ease-in-out hover:bg-slate-700'>Ilustration</button></div>
      <div className=''>
        <h2 className='pt-3 break-words font-bold text-xl'>Ready To Go Home?</h2>
        <span className="block w-0 h-0.5 bg-white relative left-1/2 bottom-0 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
      </div>
      <div><span className=''>November 18, 2021</span></div>
    </div>
    <img className='w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110' src={imgtest2} alt="test" />
  </div>

  <div className="relative rounded-xl h-imgcard-h overflow-hidden group">
    <div className='flex flex-col w-full items-center p-4 text-white absolute top-3/4 z-10'>
      <div><button className='bg-red-600 rounded px-4 transition-all duration-500 ease-in-out hover:bg-slate-700'>Ilustration</button></div>
      <div className=''>
        <h2 className='pt-3 break-words font-bold text-xl '>Ready To Go Home ?</h2>
        <span className="block w-0 h-0.5 bg-white relative left-1/2 bottom-0 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>  
      </div>
      <div><span className=''>November 18, 2021</span></div>
    </div>
    <img className='w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110' src={imgtest2} alt="test" />
  </div>

  <div className="relative rounded-xl h-imgcard-h col-span-2 overflow-hidden group">
    <div className='flex flex-col w-full items-center p-4 text-white absolute top-3/4 z-10'>
      <div><button className='bg-red-600 rounded px-4 transition-all duration-500 ease-in-out hover:bg-slate-700'>Ilustration</button></div>
      <div className=''>
        <h2 className='pt-3 break-words font-bold text-xl '>Ready To Go Home After The Sunset View?</h2>
        <span className="block w-0 h-0.5 bg-white relative left-1/2 bottom-0 transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
      </div>
      <div><span className=''>November 18, 2021</span></div>
    </div>
    <img className='w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110' src={imgtest} alt="test" />
  </div>
  <div className='col-span-3'>
    
  </div>
</div>

  )
}
