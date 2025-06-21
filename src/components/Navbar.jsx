import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart, BsSunFill, BsMoonFill } from 'react-icons/bs';
import NavLinks from './NavLinks';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const themes = {
    winter: "winter",
    dracula: "dracula"
  };

  const getThemeFromLocalStorage = () => {
    return localStorage.getItem('theme') || themes.winter;
  };

  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const handleTheme = () => {
    const { dracula, winter } = themes;
    const newTheme = theme === winter ? dracula : winter;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element'>
        <div className="navbar-start">
          {/* Title */}
          <NavLink to='/' className='hidden lg:flex btn btn-primary text-3xl'>C</NavLink>
          
          {/* Dropdown */}
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <FaBarsStaggered className='w-6 h-6' />
            </label>
            <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 w-56 rounded-2xl'>
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className='navbar-center'>
          <ul className='hidden lg:flex menu menu-horizontal'>
            <NavLinks />
          </ul>
        </div>

        <div className='navbar-end'>
          {/* Theme toggle */}
          <label className='swap swap-rotate'>
            <input type="checkbox" onChange={handleTheme} />
            <BsSunFill className='swap-on w-4 h-4' />
            <BsMoonFill className='swap-off w-4 h-4' />
          </label>

          {/* Cart */}
          <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
            <div className='indicator'>
              <BsCart className='w-6 h-6' />
              <span className='badge badge-sm badge-primary indicator-item'>0</span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
