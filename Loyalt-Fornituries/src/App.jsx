import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
export default function App() {
  return (
    <div className='container'>
      <Navbar/>
      <h1>Menu principal</h1>
      <div className=' position: relative; '>
        <Outlet/>
      </div>
    </div>
  )
}
