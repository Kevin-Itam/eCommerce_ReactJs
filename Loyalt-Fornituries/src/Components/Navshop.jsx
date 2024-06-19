import React from 'react'
import { Link } from 'react-router-dom'
import myImage from '../assets/logo.png'

const Navshop = () => {
  return (
    <div className=' fixed top-0 left-0 w-full border p-10 '>
      <img src={myImage} alt="logo" className=' absolute h-8' />
      <ul className='  left-1/4 relative flex flex-row gap-10'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/shop"><li>Shop</li></Link>
        <Link to="/shop"><li>Shop</li></Link>
      </ul>
      <ul className=''></ul>
    </div>
  )
}

export default Navshop
