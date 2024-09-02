import Home_Grid from "../Components/GridHome"
import imgtest from '../assets/flamingos.jpg';
import imgtest2 from '../assets/florbonita.jpg';
export default function App() {
  return (
    <div>
      <Home_Grid/>
      <div className="grid grid-cols-2 grid-flow-col py-20 gap-x-20">
        <div className="grid grid-rows-5 gap-8">

          <div className="grid grid-cols-2 gap-4 overflow-hidden rounded ">
            <div className="overflow-hidden rounded-xl"><a href="#"><img className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-110" src={imgtest} alt="card" /></a></div>
            <div className="flex flex-col gap-4 bg-slate-500 pt-6 ">
              <div><button className='bg-red-600 rounded-xl px-4 transition-all duration-500 ease-in-out hover:bg-slate-700'>tag do card</button></div>
              <h1 className="break-words font-bold text-xl">texto random do tiiitulo do artigo</h1>
              <div>qqquem fex e data do artigo</div>
              <p>previa do artigo</p>
              <div>leia mais com o link do artigo</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 overflow-hidden ounded">
            <div className="overflow-hidden rounded-xl"><a href="#"><img className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-110" src={imgtest} alt="card" /></a></div>
            <div className="bg-slate-500 pt-6">
              <div><button className=' bg-red-600 rounded-xl px-4 transition-all duration-500 ease-in-out hover:bg-slate-700'>tag do card</button></div>
              <h3>texto random do tiiitulo do artigo</h3>
              <div>qqquem fex e data do artigo</div>
              <p>previa do artigo</p>
              <div>leia mais com o link do artigo</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 overflow-hidden rounded">
            <div className="overflow-hidden rounded-xl"><a href="#"><img className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-110" src={imgtest} alt="card" /></a></div>
            <div className="bg-slate-500 pt-6">
              <div><button className=' bg-red-600 rounded-xl px-4 transition-all duration-500 ease-in-out hover:bg-slate-700'>tag do card</button></div>
              <h3>texto random do tiiitulo do artigo</h3>
              <div>qqquem fex e data do artigo</div>
              <p>previa do artigo</p>
              <div>leia mais com o link do artigo</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 overflow-hidden rounded">
            <div className="overflow-hidden rounded-xl"><a href="#"><img className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-110" src={imgtest} alt="card" /></a></div>
            <div className="bg-slate-500 pt-6">
              <div><button className=' bg-red-600 rounded-xl px-4 transition-all duration-500 ease-in-out hover:bg-slate-700'>tag do card</button></div>
              <h3>texto random do tiiitulo do artigo</h3>
              <div>qqquem fex e data do artigo</div>
              <p>previa do artigo</p>
              <div>leia mais com o link do artigo</div>
            </div>
          </div>        

          <div className="grid grid-cols-2 gap-4 overflow-hidden rounded">
            <div className="overflow-hidden rounded-xl"><a href="#"><img className="w-full h-full object-cover rounded-xl transform transition-transform duration-500 hover:scale-110" src={imgtest} alt="card" /></a></div>
            <div className="bg-slate-500 pt-6">
              <div><button className=' bg-red-600 rounded-xl px-4 transition-all duration-500 ease-in-out hover:bg-slate-700'>tag do card</button></div>
              <h3>texto random do tiiitulo do artigo</h3>
              <div>qqquem fex e data do artigo</div>
              <p>previa do artigo</p>
              <div>leia mais com o link do artigo</div>
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
