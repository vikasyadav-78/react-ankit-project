import React from 'react';
import Header from '../Header/Header';
import { GrDiamond } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { MdCompareArrows, MdOutlineRemoveRedEye } from "react-icons/md";



 
function Home() {
    return (
        <>
            <Header />
            <div id="default-carousel" className="relative w-full mt-0" data-carousel="slide">
                <div className="relative overflow-hidden" style={{ height: '110vh' }}>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/revslider_1.jpg" className="absolute block w-full h-full object-cover top-0 left-0" alt="..." />
                        <div className="absolute inset-0 p-8 flex items-center text-white">
                            <div>
                                <p className='font-bold'>OUR EARRINGS</p>
                                <h1 className="text-6xl font-medium mt-3 w-lg leading-14"> Find the Perfect Ring Make</h1>
                                <p className="mt-5 text-lg font-bold w-[70%]">Get lifted with the 21 Day Facial Gua Sha Challenge!</p>
                                <button className="cursor-pointer mt-10 px-6 py-2 bg-transparent border-1 font-bold transition delay-150 duration-300 ease-in-out hover:bg-[#dbaf36] hover:border-0 text-white rounded-lg"> Shop Now </button>
                            </div>
                        </div>
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/revslider_2.jpg" className="absolute block w-full h-full object-cover top-0 left-0" alt="..." />
                        <div className="absolute inset-0 p-8 flex items-center text-white">
                            <div>
                                <p className='font-bold'>LUXURY NECKLACE</p>
                                <h1 className="text-6xl font-medium mt-3 w-sm leading-14">Graceful & Eye-Catching Necklaces</h1>
                                <p className="mt-5 text-lg font-bold w-[70%]"> Get lifted with the 21 Day Facial Gua Sha Challenge!</p>
                                <button className="cursor-pointer mt-10 px-6 py-2 bg-transparent border-1 font-bold transition delay-150 duration-300 ease-in-out hover:bg-[#dbaf36] hover:border-0 text-white rounded-lg"> Shop Now </button>
                            </div>
                        </div>
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img src="https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/revslider_5.jpg" className="absolute block w-full h-full object-cover top-0 left-0" alt="..." />
                        <div className="absolute inset-0 p-8 flex items-center text-white">
                            <div>
                                <p className='font-bold'>PURELY HAND-CRAFTED</p>
                                <h1 className="text-6xl font-medium mt-3 w-lg leading-14"> Charm For Your Everyday </h1>
                                <p className="mt-5 text-lg font-bold w-[70%]">Get lifted with the 21 Day Facial Gua Sha Challenge!</p>
                                <button className="cursor-pointer mt-6 px-6 py-2 bg-transparent border-1 font-bold transition delay-150 duration-300 ease-in-out hover:bg-[#dbaf36] hover:border-0 text-white rounded-lg"> Shop Now </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" class="w-3 h-3 rounded-full cursor-pointer" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full cursor-pointer" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full cursor-pointer" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div>
            </div>

            <div className='grid grid-cols-2 overflow-hidden'>
                <div className='bg-cover bg-[50%] z-10 bg-no-repeat transform duration-700 ease-in-out hover:scale-[1.09] h-auto w-auto bg-[url(https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/h1_bn-1.jpg)]' style={{ padding: "60px 30px" }}>
                    <div style={{ height: '450px', width: '450px' }}>
                        <p>OUR EARRINGS</p>
                        <p className='text-3xl font-semibold w-50'>Add These To Your style Roster.</p>
                        <p className='opacity-60 mt-3 w-[50%]'>Grab the deal right now! you can get extra 15% off this season.</p>
                        <button className='font-semibold mt-3 bg-white px-3 py-2 rounded-lg cursor-pointer transform duration-500 hover:bg-[#dbaf36]'>Shop Now</button>
                    </div>
                </div>

                <div className='bg-cover bg-[50%] z-10 bg-no-repeat transform duration-700 ease-in-out hover:scale-[1.09] h-auto w-auto bg-[url(https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/h1_bn-2.jpg)]' style={{ padding: "60px 30px" }}>
                    <div style={{ height: '450px', width: '450px' }}>
                        <p>FAVORITE ITEMS</p>
                        <p className='text-3xl font-semibold w-50'>Unique Engagement Rings</p>
                        <p className='opacity-60 mt-3 w-[45%]'>From special antique diamonds to
                            one of-a-kind colored gemstones</p>
                        <button className='font-semibold mt-3 bg-white px-3 py-2 rounded-lg cursor-pointer transform duration-500 hover:bg-[#dbaf36]'>Shop Now</button>
                    </div>
                </div>
            </div>

            <div style={{ height: '106px' }}>
                <marquee behavior="left" direction="rigth">color in look</marquee>
            </div>


            <div className='overflow-hidden'>
                <div className='bg-no-repeat bg-center bg-cover p-5 h-screen w-full bg-[url(https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/h1_bg-2.jpg)] flex justify-center items-center transform duration-700 ease-in-out hover:scale-[1.09]'>
                    <div>
                        <div className='mt-10 text-center'>
                            <p className='text-[#dbaf36] text-5xl flex justify-center'><GrDiamond /></p>
                        </div>
                        <div className='text-center'>
                            <p className='mt-6 text-3xl font-semibold capitalize w-90 mx-auto'>Jewellery from the world’s finest designers</p>
                            <p className='mt-5 max-w-[600px] mx-auto'>
                                We believe in the power of jewelry — to tell a story, celebrate a moment, create or continue a tradition. There’s a wonder in wearing something made from the earth. Each Olight piece is crafted with ethically sourced precious metals to reflect our commitment to human rights and environmental sustainability.
                            </p>
                            <button className='font-bold border-b mt-5 cursor-pointer transform duration-700 ease-in-out hover:text-[#dbaf36]'>More About Us</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex justify-center items-center text-center mt-10'>
                <div>
                    <p className='font-semibold text-4xl'>Our Best Sellers</p>
                    <p className='mt-2 opacity-75 mx-auto'>
                        Our jewelry is made by the finest artists and carefully selected to reflect your style and personality
                    </p>
                </div>
            </div>


            <div className='overflow-auto overflow-y-hidden whitespace-nowrap scrollbar-hide mb-50'>
                <div className='flex justify-center'>
                    {Array.from({ length: 9 }).map((_, index) => 
                        <div key={index} className='group relative w-[260px] bg-white  p-5'>
                            <div className='relative overflow-hidden rounded-lg w-full h-[260px]'>
                                <img className='rounded-2xl w-full' src="https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/product_33-360x360.jpg" alt="earings" />
                                <div className='absolute top-1/3 right-[-60px] -translate-y-1/2 flex flex-col gap-3 opacity-0 group-hover:right-3 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                                    <p className='text-white bg-black/60 p-2 rounded-lg hover:bg-[#dbaf36] cursor-pointer'><FaHeart /></p>
                                    <p className='text-white bg-black/60 p-2 rounded-lg hover:bg-[#dbaf36] cursor-pointer'><MdCompareArrows /></p>
                                    <p className='text-white bg-black/60 p-2 rounded-lg hover:bg-[#dbaf36] cursor-pointer'><MdOutlineRemoveRedEye /></p>
                                </div>
                            </div>
                            <div className='text-center mt-4'>
                                <p className='text-sm text-gray-400 font-semibold'>ACCESSORIES, PEARLES</p>
                                <p className=' font-semibold mt-1'>Faded Grandeur Stud Earrings</p>
                                <p className='mt-1 text-yellow-500 text-sm'>⭐⭐⭐⭐⭐ (5 Reviews)</p>
                                <p className='font-bold text-lg mt-2 text-black group-hover:opacity-0 transition-opacity duration-300'>509.22$</p>
                            </div>
                            <div className='absolute left-1/2 bottom-[-50px] transform -translate-x-1/2 opacity-0 group-hover:bottom-1 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                                <button className='bg-white text-black px-5 py-2 rounded-lg border hover:bg-[#dbaf36] transition-all duration-300v hover:border-0'> Add to Cart </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>



        </>
    );
}

export default Home;
