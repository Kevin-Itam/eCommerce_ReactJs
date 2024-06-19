import React from 'react'
import { Link } from 'react-router-dom'
import myImage from '../assets/logo.png'

const Navshop = () => {
  return (
    <div className=' flex fixed top-0 left-0 w-full px-64 py-8 justify-between'>

      <div className=' flex gap-10 items-center'>
        <img src={myImage} alt="logo" className=' h-10 relative' />
        <input className=' h-10 w-src rounded-r-2xl px-4' type="text" placeholder='DIGITE AQQUI O ITEM DA LOJA'/>
      </div>

      <div className=' flex flex-row items-center gap-16'>
        <ul className=' relative flex flex-row gap-10'>
          <Link to="/"><li>Home</li></Link>
          <Link to="/shop"><li>Shop</li></Link>
          <Link to="/shop"><li>CART</li></Link>
          <Link to="/shop"><li>lOGIN</li></Link>
        </ul>
        <ul className=''>Drop-Drawn</ul>
      </div>

    </div>
  )
}

export default Navshop
