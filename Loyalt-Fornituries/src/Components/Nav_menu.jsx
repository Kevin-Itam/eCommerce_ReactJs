import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Nav_menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna o estado entre aberto e fechado
  };

  return (
    <div className='flex flex-col justify-end'> 
      {/* Ícone de Menu */}
      <div onClick={toggleMenu} className="cursor-pointer flex justify-end">
        <FontAwesomeIcon icon={faBars} size="2x" />
      </div>

      {/* Menu Lateral */}
      <div
        className={`relative z-50 w-96 h-full bg-gray-800 text-white transform ${
          isMenuOpen ? 'translate-x-0 block' : 'translate-x-full hidden'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h2 className="text-lg font-bold">Menu</h2>
          <ul className="mt-4 space-y-2">
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
