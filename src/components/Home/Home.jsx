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
                        <div className="absolute inset-0 flex items-center text-white text-center">
                            <div>
                                <h1 className="text-4xl font-bold">Welcome to My Website</h1>
                                <p className="mt-4 text-lg">Explore our awesome content here</p>
                                <button className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/revslider_2.jpg"
                            className="absolute block w-full h-full object-cover top-0 left-0"
                            alt="..."
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                            <div>
                                <h1 className="text-4xl font-bold">Slide Two Title</h1>
                                <p className="mt-4 text-lg">Another cool slide description</p>
                            </div>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="https://demo2.wpopal.com/olight/wp-content/uploads/2025/04/revslider_5.jpg"
                            className="absolute block w-full h-full object-cover top-0 left-0"
                            alt="..."
                        />
                        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
                            <div>
                                <h1 className="text-4xl font-bold">Last Slide Heading</h1>
                                <p className="mt-4 text-lg">Final message goes here</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                </div>
            </div>
        </>
    );
}

export default Home;
