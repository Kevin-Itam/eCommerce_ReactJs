import React, { useRef, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const inputRef = useRef(null);

  const handleBlur = (event) => {
    if (inputRef.current.value.trim() !== "") {
      event.preventDefault(); // Mantém o foco se o input não estiver vazio
      inputRef.current.focus();
    }
  };

  // UseEffect para manter o foco no input quando houver texto e o usuário clicar fora do navegador
  useEffect(() => {
    const handleWindowFocus = () => {
      if (inputRef.current && inputRef.current.value.trim() !== "") {
        inputRef.current.focus(); // Mantém o foco no input
      }
    };

    // Adiciona o listener quando a janela ganha foco
    window.addEventListener('focus', handleWindowFocus);

    // Remove o listener quando o componente desmonta
    return () => {
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, []);

  return (
    <nav className="flex flex-col gap-24 fixed w-full pt-20 pb-10 px-10 container">
      <div className="flex justify-between">
        <div className="relative left-2/4 -translate-x-1/2">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
      </div>
      <div className="">
        <div className='flex flex-row justify-between'>
          <ul className="flex flex-row gap-16 text-lg pt-4">
            <Link to="/"><li>Home</li></Link>
            <Link to="/shop"><li>Shop</li></Link>
            <Link to="/Cart"><li>Cart</li></Link>
            <Link to="/Login"><li>Login</li></Link>
          </ul>
          <div className="max-w-md  w-full">
            <form className="flex relative w-full justify-end">
              <input
                type="search"
                ref={inputRef}
                onBlur={handleBlur}
                className="peer cursor-pointer relative z-10 h-12 w-40 rounded-xl border border-gray-200 bg-transparent pl-5 outline-none focus:w-full focus:cursor-text focus:border-orange-300 focus:ring-orange-600  focus:pr-4 duration-300 items-center flex"
              />
              <div className="absolute inset-y-0 my-auto h-6 w-32 peer-focus:text-orange-500 pr-10">
                <div className="flex items-center gap-2 justify-center">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                  <span>Search</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

