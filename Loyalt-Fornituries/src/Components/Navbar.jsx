import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className=' flex flex-col gap-28 fixed w-full py-16 justify-between container'>

      <div className='flex gap-10 items-center justify-between'>
        <div>
          <FontAwesomeIcon icon={faBars} size='2x' /> 
        </div>
        <div>
           <img src={logo} alt="logo" />
        </div>
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} size='2x'/>
          <input type="text" placeholder='Digite aqui ...' />
        </div>
      </div>

      <div className='flex flex-row gap-16 items-center justify-center'>
        <ul className=' relative flex flex-row gap-10'>
          <Link to="/"><li>Home</li></Link>
          <Link to="/shop"><li>Shop</li></Link>
          <Link to=""><li>CART</li></Link>
          <Link to=""><li>lOGIN</li></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
