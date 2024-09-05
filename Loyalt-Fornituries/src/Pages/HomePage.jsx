import Home_Grid from "../Components/GridHome"
import imgtest from '../assets/flamingos.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
export default function App() {
  return (
    <div>
      <Home_Grid/>
      <div className="grid grid-cols-3 grid-flow-col py-20">
        <div className="grid grid-rows-5 col-span-2 gap-8">

          <div className="grid grid-cols-3 gap-4 overflow-hidden rounded ">
            <div className="overflow-hidden rounded-xl"><a href="#"><img className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-110" src={imgtest} alt="card" /></a></div>
            <div className=" col-span-2 flex flex-col gap-6 pt-6 pb-6 ">
              <div><button className='bg-red-600 rounded px-4 transition-all duration-500 ease-in-out hover:bg-slate-700'>tag do card</button></div>
              
              <h1 className="break-words font-bold text-2xl text-black">
                <a href="#" className="transform transition-all duration-200 ease-in-out hover:underline underline-offset-0 hover:underline-offset-8">
                  texto random random do titulo do artigo
                </a>
              </h1>

              <div className="flex gap-2">
                <div className="flex text-sm leading-tight gap-2 italic"><FontAwesomeIcon icon={faUser}/><p>Nome do autor</p></div>
                <div className="flex text-sm leading-tight gap-2 italic"><FontAwesomeIcon icon={faCalendarDays}/><p>Data do artigo</p></div>
              </div>

              <p className="text-base">Previa do artigo ...</p>

                <div class="">
                  <a href="#" class="border-l-2 border-slate-600 p-2 transform transition-all duration-300 ease-in hover:bg-slate-600">
                    <span>Read More</span>
                  </a>
                </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 overflow-hidden ounded">
            <div className="overflow-hidden rounded-xl"><a href="#"><img className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-110" src={imgtest} alt="card" /></a></div>
            <div className=" col-span-2 flex flex-col gap-6 pt-6 pb-6">
              <div><button className=' bg-red-600 rounded px-4 transition-all duration-500 ease-in-out hover:bg-slate-700'>tag do card</button></div>
               
              <h1 className="break-words font-bold text-2xl text-black">
                <a href="#" className="transform transition-all duration-200 ease-in-out hover:underline underline-offset-0 hover:underline-offset-8">
                  texto random random do titulo do artigo
                </a>
              </h1>

              <div className="flex gap-2">
                <div className="flex text-sm leading-tight gap-2 italic"><FontAwesomeIcon icon={faUser}/><p>Nome do autor</p></div>
                <div className="flex text-sm leading-tight gap-2 italic"><FontAwesomeIcon icon={faCalendarDays}/><p>Data do artigo</p></div>
              </div>

              <p>Previa do artigo ...</p>
              
                <div class="">
                  <a href="#" class="border-l-2 border-slate-600 p-2 transform transition-all duration-300 ease-in hover:bg-slate-600">
                    <span>Read More</span>
                  </a>
                </div>

            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 overflow-hidden rounded">
            <div className="overflow-hidden rounded-xl"><a href="#"><img className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-110" src={imgtest} alt="card" /></a></div>
            <div className=" col-span-2 flex flex-col gap-6 pt-6 pb-6">
              <div><button className=' bg-red-600 rounded px-4 transition-all duration-500 ease-in-out hover:bg-slate-700'>tag do card</button></div>
              
              <h1 className="break-words font-bold text-2xl text-black">
                <a href="#" className="transform transition-all duration-200 ease-in-out hover:underline underline-offset-0 hover:underline-offset-8">
                  texto random random do titulo do artigo
                </a>
              </h1>

              <div className="flex gap-2">
                <div className="flex text-sm leading-tight gap-2 italic"><FontAwesomeIcon icon={faUser}/><p>Nome do autor</p></div>
                <div className="flex text-sm leading-tight gap-2 italic"><FontAwesomeIcon icon={faCalendarDays}/><p>Data do artigo</p></div>
              </div>

              <p>Previa do artigo ...</p>
              
                <div class="">
                  <a href="#" class="border-l-2 border-slate-600 p-2 transform transition-all duration-300 ease-in hover:bg-slate-600">
                    <span>Read More</span>
                  </a>
                </div>

            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 overflow-hidden rounded">
            <div className="overflow-hidden rounded-xl"><a href="#"><img className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-110" src={imgtest} alt="card" /></a></div>
            <div className=" col-span-2 flex flex-col gap-6 pt-6 pb-6">
              <div><button className=' bg-red-600 rounded px-4 transition-all duration-500 ease-in-out hover:bg-slate-700'>tag do card</button></div>
              
              <h1 className="break-words font-bold text-2xl text-black">
                <a href="#" className="transform transition-all duration-200 ease-in-out hover:underline underline-offset-0 hover:underline-offset-8">
                  texto random random do titulo do artigo
                </a>
              </h1>

              <div className="flex gap-2">
                <div className="flex text-sm leading-tight gap-2 italic"><FontAwesomeIcon icon={faUser}/><p>Nome do autor</p></div>
                <div className="flex text-sm leading-tight gap-2 italic"><FontAwesomeIcon icon={faCalendarDays}/><p>Data do artigo</p></div>
              </div>

              <p>Previa do artigo ...</p>
              
                <div class="">
                  <a href="#" class="border-l-2 border-slate-600 p-2 transform transition-all duration-300 ease-in hover:bg-slate-600">
                    <span>Read More</span>
                  </a>
                </div>

            </div>
          </div>        

          <div className="grid grid-cols-3 gap-4 overflow-hidden rounded">
            <div className="overflow-hidden rounded-xl"><a href="#"><img className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-110" src={imgtest} alt="card" /></a></div>
            <div className=" col-span-2 flex flex-col gap-6 pt-6 pb-6">
              <div><button className=' bg-red-600 rounded px-4 transition-all duration-500 ease-in-out hover:bg-slate-700'>tag do card</button></div>
               
              <h1 className="break-words font-bold text-2xl text-black">
                <a href="#" className="transform transition-all duration-200 ease-in-out hover:underline underline-offset-0 hover:underline-offset-8">
                  texto random random do titulo do artigo
                </a>
              </h1>

              <div className="flex gap-2">
                <div className="flex text-sm leading-tight gap-2 italic"><FontAwesomeIcon icon={faUser}/><p>Nome do autor</p></div>
                <div className="flex text-sm leading-tight gap-2 italic"><FontAwesomeIcon icon={faCalendarDays}/><p>Data do artigo</p></div>
              </div>

              <p>Previa do artigo ...</p>
              
                <div class="">
                  <a href="#" class="border-l-2 border-slate-600 p-2 transform transition-all duration-300 ease-in hover:bg-slate-600">
                    <span>Read More</span>
                  </a>
                </div>

            </div>
          </div>   

        </div>
        
        <div className="grid grid-rows-3 gap-8">
          <div className="bg-stone-500 rounded">01</div>
          <div className="bg-stone-500 rounded">02</div>
          <div className="bg-stone-500 rounded">03</div>
        </div>
      </div>
    </div>
  )
}
