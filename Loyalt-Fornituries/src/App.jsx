import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
export default function App() {
  return (
    <div className='container px-28'>
      <Navbar/>
      <h1>Menu principal</h1>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}
