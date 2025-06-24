import React, { useEffect, useState } from 'react'
import { BsCart, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'
const themes={
    winter:"winter",
    dracula:"dracula"
}
const getThemeFromLocalStorage=()=>{
    return localStorage.getItem('theme'||themes.winter)
}
const Navbar = () => {
    const [theme,setTheme]=useState(getThemeFromLocalStorage())
    const handleTheme=()=>{
        const {dracula,winter}=themes
        const newTheme=theme===winter?dracula:winter
        setTheme(newTheme)
    }
    useEffect(()=>{
    document.documentElement.setAttribute("data-theme",theme)
    localStorage.setItem('theme',theme)
    },[theme])
  return (
    <nav className='bg-base-200'>
        <div className="navbar align-element">
            <div className="navbar-start">
                <NavLink to={'/'} className='hidden lg:flex btn btn-primary text-3xl items-center'>C</NavLink>
                <div className="dropdown">
                    <label className='btn btn-ghost lg:hidden' tabIndex={0}>
                        <FaBars className='w-6 h-6'/>
                    </label>
                    <ul tabIndex={0} className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 w-52 rounded-box'>
                        <NavLinks/>
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                    <ul className='menu menu-horizontal'>
                        <NavLinks/>
                    </ul>
            </div>
            <div className="navbar-end">
                <label className='swap swap-rotate'>
                    <input type='checkbox' onChange={handleTheme} />
                    <BsSunFill className='swap-off w-4 h-4'/>
                    <BsMoonFill className='swap-on w-4 h-4'/>
                </label>
                <NavLink to={'/cart'} className={'btn btn-ghost btn-circle btn-md ml-4'}>
                <div className=' indicator'>
                <BsCart className='w-6 h-6'/>
                <span className=' badge badeg-sm badge-primary indicator-item'>0</span>
                </div>
                </NavLink>

            </div>
        </div>

    </nav>
  )
}

export default Navbar