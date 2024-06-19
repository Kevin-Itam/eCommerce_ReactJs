import './App.css'
import { Outlet } from 'react-router-dom'
import Navshop from './Components/Navshop'
export default function App() {
  return (
    <div>
      <Navshop/>
      <h1>Menu principal</h1>
      <Outlet/>
    </div>
  )
}
