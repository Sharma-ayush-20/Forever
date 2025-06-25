import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets.js'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.jsx'

function Navbar() {

    const [visible, setVisible] = useState(false)
    const { setShowSearch, getCartCount } = useContext(ShopContext)

  return (
    <div className='flex justify-between items-center py-5 font-medium'>
        {/* left side logo  */}
        <Link to='/'>
            <img src={assets.logo} className='w-36' alt="" />
        </Link>
        
        {/* middle elements  */}
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to="/" className="flex flex-col items-center gap-1">
                <p>HOME</p>
                <hr className='w-2/4 bg-gray-700 border-none h-[1.5px] hidden'/>
            </NavLink>
            <NavLink to="/collection" className="flex flex-col items-center gap-1">
                <p>COLLECTION</p>
                <hr className='w-2/4 bg-gray-700 border-none h-[1.5px] hidden' />
            </NavLink>
            <NavLink to="/about" className="flex flex-col items-center gap-1">
                <p>ABOUT</p>
                <hr className='w-2/4 bg-gray-700 border-none h-[1.5px] hidden' />
            </NavLink>
            <NavLink to="/contact" className="flex flex-col items-center gap-1">
                <p>CONTACT</p>
                <hr className='w-2/4 bg-gray-700 border-none h-[1.5px] hidden' />
            </NavLink>
        </ul>
        {/* right side elements  */}
        <div className='flex items-center gap-6'>
            {/* search icon  */}
            <img src={assets.search_icon} alt="" className='w-5 cursor-pointer' onClick={() => setShowSearch(prev => !prev)}/>
            {/* user profile + dropdown menu  */}
            <div className='group relative'>
                <Link to='/login'><img src={assets.profile_icon} alt="" className='w-5 cursor-pointer'/></Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            {/* cart icon  */}
            <Link to="/cart" className='relative'>
                <img src={assets.cart_icon} alt="" className='w-5 min-w-5'/>
                <p className='absolute text-white right-[-5px] bottom-[-5px] bg-black leading-4 aspect-square rounded-full text-[10px] w-4 text-center'>{getCartCount()}</p>
            </Link>

            {/* mobile side middle elements  */}
            <img src={assets.menu_icon} className='sm:hidden w-5 cursor-pointer' alt="" onClick={() => setVisible(true)}/>
        </div>

        {/* Sidebar menu for small screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div className='flex items-center gap-4 p-3 cursor-pointer' onClick={() => setVisible(false)}>
                    <img src={assets.dropdown_icon} alt="" className='h-4 rotate-180'/>
                    <p>Back</p>
                </div>
                {/* middle elements  */}
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to="/">HOME</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to="/collection">COLLECTION</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to="/about">ABOUT</NavLink>
                <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to="/contact">CONTACT</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar