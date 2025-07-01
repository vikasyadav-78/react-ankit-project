import React from 'react';
import Header from '../Header/Header';

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
        </>
    );
}

export default Home;
