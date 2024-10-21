import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
export default function App() {
  return (
    <div className='container px-28'>
      <Navbar/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}
