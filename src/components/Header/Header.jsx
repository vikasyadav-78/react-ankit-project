import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { HiBars3CenterLeft } from "react-icons/hi2";





function Header() {
    return (
        <>
            <header className=' sticky z-50 top-0'>

                <div className="bg-[#262626] shadow-2xl border-b-black border-b-2 text-white px-4 lg:px-6 py-2.5">
                    <div className='flex justify-between'>
                        <Link to='/' className='flex items-center '>
                            <img className='mr-3 h-8 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLiKm04s5vniZdkRwoDzH3A0PKfSoDk855u69d-l0tdLgporrhfZegU-TWxAwsxLyIRc&usqp=CAU" alt="Logo" />
                            <p className='font-semibold me-5'>Envato market</p>
                        </Link>
                        <Link to='#' className='font-semibold text-sm bg-[#7aa93c] hover:bg-[#86ff7b] hover:text-black  px-5 py-2.5 rounded-lg text-white mr-2'>Buy Now</Link>
                    </div>
                </div>
                <div className='p-2 bg-[#22201d] text-white'>
                    <marquee behavior="" direction="left" >Name</marquee>
                </div>


                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className='flex flex-wrap items-center justify-between w-auto max-w-screen-xl'>
                        <Link to='/' className='flex items-center'>
                            <img className='mr-3 h-12 w-30' src="https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/logo.svg" alt="Logo" />
                        </Link>

                        <div className='flex items-center gap-2 lg:order-2'>
                            <NavLink to='/search' className={({ isActive }) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#dbaf36] lg:p-0 ${isActive ? "text-[#dbaf36]" : "text-gray-700"}`} ><IoSearch className='text-xl' /></NavLink>
                            <NavLink to='/shoping' className={({ isActive }) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#dbaf36] lg:p-0 ${isActive ? "text-[#dbaf36]" : "text-gray-700"}`} ><FaBagShopping className='text-xl' /></NavLink>
                            <NavLink to='/like' className={({ isActive }) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#dbaf36] lg:p-0 ${isActive ? "text-[#dbaf36]" : "text-gray-700"}`} ><FaRegHeart className='text-xl' /></NavLink>
                            <NavLink to='/profile' className={({ isActive }) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#dbaf36] lg:p-0 ${isActive ? "text-[#dbaf36]" : "text-gray-700"}`} ><FaRegUserCircle className='text-xl' /></NavLink>
                            <NavLink to='/bars' className={({ isActive }) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#dbaf36] lg:p-0 ${isActive ? "text-[#dbaf36]" : "text-gray-700"}`} ><HiBars3CenterLeft className='text-xl' /></NavLink>
                        </div>
                        <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1' id="mobile-menu-2">
                            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:gap-8 lg:mt-0' >
                                <li>
                                    <NavLink to='/' className={({ isActive }) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#dbaf36] lg:p-0 ${isActive ? "text-[#dbaf36]" : "text-gray-700"}`} >
                                        <div className='flex items-center'>
                                            <p>HOME</p>
                                            <p><RiArrowDropDownLine className='text-2xl' /></p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/shop' className={({ isActive }) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#dbaf36] lg:p-0 ${isActive ? "text-[#dbaf36]" : "text-gray-700"}`}>
                                        <div className='flex items-center'>
                                            <p>SHOP</p>
                                            <p><RiArrowDropDownLine className='text-2xl' /></p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/categories' className={({ isActive }) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#dbaf36] lg:p-0 ${isActive ? "text-[#dbaf36]" : "text-gray-700"}`}>
                                        <div className='flex items-center'>
                                            <p>CATEGORIES</p>
                                            <p><RiArrowDropDownLine className='text-2xl' /></p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/product' className={({ isActive }) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#dbaf36] lg:p-0 ${isActive ? "text-[#dbaf36]" : "text-gray-700"}`}>
                                        <div className='flex items-center'>
                                            <p>PRODUCT</p>
                                            <p><RiArrowDropDownLine className='text-2xl' /></p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/pages' className={({ isActive }) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#dbaf36] lg:p-0 ${isActive ? "text-[#dbaf36]" : "text-gray-700"}`}>
                                        <div className='flex items-center'>
                                            <p>PAGES</p>
                                            <p><RiArrowDropDownLine className='text-2xl' /></p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/blog' className={({ isActive }) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#dbaf36] lg:p-0 ${isActive ? "text-[#dbaf36]" : "text-gray-700"}`}>
                                        <div className='flex items-center'>
                                            <p>BLOG</p>
                                            <p><RiArrowDropDownLine className='text-2xl' /></p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact' className={({ isActive }) => `pr-4 pl-3 py-2 block border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#dbaf36] lg:p-0 ${isActive ? "text-[#dbaf36]" : "text-gray-700"}`}>CONTACT</NavLink>
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
