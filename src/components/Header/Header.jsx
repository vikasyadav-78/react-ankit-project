import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri";


function Header() {
    return (
        <>
            <header className='shadow sticky z-50 top-0'>

                <div className="bg-[#262626] text-white px-4 lg:px-6 py-2.5">
                    <div className='flex justify-between'>
                        <Link to='/' className='flex items-center '>
                            <img className='mr-3 h-8 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLiKm04s5vniZdkRwoDzH3A0PKfSoDk855u69d-l0tdLgporrhfZegU-TWxAwsxLyIRc&usqp=CAU" alt="Logo" />
                            <p className='font-semibold me-5'>Envato market</p>
                        </Link>
                        <Link to='#' className='font-semibold text-sm bg-[#7aa93c] hover:bg-[#86ff7b] hover:text-black  px-5 py-2.5 rounded-lg text-white mr-2'>Buy Now</Link>
                    </div>
                </div>
                <div className='mt-3'>
                    <marquee behavior="" direction="left" >Name</marquee>
                </div>


                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className='flex flex-wrap items-center justify-between w-auto max-w-screen-xl'>
                        <Link to='/' className='flex items-center'>
                            <img className='mr-3 h-12 w-30' src="https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/logo.svg" alt="Logo" />
                        </Link>

                        <div className='flex items-center lg:order-2'>
                            <Link to='#' className='font-medium text-sm mr-2 py-3 px-5'>Log in</Link>
                            <Link to='#' className='font-medium text-sm bg-orange-700 hover:bg-orange-800 px-5 py-2.5 rounded-lg text-white mr-2'>Get Started</Link>
                        </div>
                        <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1' id="mobile-menu-2">
                            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:gap-8 lg:mt-0' >
                                <li>
                                    <NavLink to='/' className={({ isActive }) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive ? "text-orange-700" : "text-gray-700"}`} >
                                        <div className='flex items-center'>
                                            <p>HOME</p>
                                            <p><RiArrowDropDownLine className='text-2xl' /></p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/shop' className={({ isActive }) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive ? "text-orange-700" : "text-gray-700"}`}>
                                         <div className='flex items-center'>
                                            <p>SHOP</p>
                                            <p><RiArrowDropDownLine className='text-2xl' /></p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/categories' className={({ isActive }) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive ? "text-orange-700" : "text-gray-700"}`}>
                                         <div className='flex items-center'>
                                            <p>CATEGORIES</p>
                                            <p><RiArrowDropDownLine className='text-2xl' /></p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/product' className={({ isActive }) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive ? "text-orange-700" : "text-gray-700"}`}>
                                        <div className='flex items-center'>
                                            <p>PRODUCT</p>
                                            <p><RiArrowDropDownLine className='text-2xl' /></p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/pages' className={({ isActive }) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive ? "text-orange-700" : "text-gray-700"}`}>
                                        <div className='flex items-center'>
                                            <p>PAGES</p>
                                            <p><RiArrowDropDownLine className='text-2xl' /></p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/blog' className={({ isActive }) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive ? "text-orange-700" : "text-gray-700"}`}>
                                        <div className='flex items-center'>
                                            <p>BLOG</p>
                                            <p><RiArrowDropDownLine className='text-2xl' /></p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact' className={({ isActive }) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${isActive ? "text-orange-700" : "text-gray-700"}`}>CONTACT</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </>
    );
}

export default Header
