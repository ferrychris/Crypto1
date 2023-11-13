import React from 'react'
import binancemob from '../images/binancemob.svg'
import frame from '../images/frame.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import advert1 from '../images/advert1.jpg'
import 'w3-css/w3.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Bsection = () => {
    return (
        <div className='mt-[40px]  bg '>
            <div data-aos="flip-left" className=' px-[50px] py-[50px] flex flex-wrap md:space-x-80 bg-black'>
                <img src={binancemob} alt="" className='h-[440px] w-[220px]' />
                <div >
                    <p className='text-4xl font-bold'>Trade on the Go<br />
                        AnyWhere, Anytime.</p>
                    <div className='flex'>
                        <img src={frame} alt="" className='w-[220px] h-[240px] mt-4' />
                        <div className='mt-[90px] ml-4'>
                            <p className='text-2xl text-blue-400'>Scan to Download the App <br />
                                <span className='text-2xl  text-bold'>IOS or Android</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[40px]'>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <img src={advert1} alt="" className='w-[60%]' />
                    </SwiperSlide>
                    <SwiperSlide>

                    </SwiperSlide>
                    <SwiperSlide>

                    </SwiperSlide>
                    ...
                </Swiper>

            </div>

        </div>
    )
}


export const Accordion = () => {
    function myFunction(id) {
        var x = document.getElementById(id);
        if (x.className.indexOf("w3-show") == -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }
    return (
       
                <div className='ml-[60px] mr-[50px] mt-9'>
                    <div>
                        <button onclick="myFunction('Demo1')" class="w3-button w3-block w3-left-align">
                        What is a cryptocurrency exchange?</button>

                        <div id="Demo1" class="w3-container w3-hide">
                            <p>Some text..</p>
                        </div>
                    </div>
                    <div>
                    <button onclick="myFunction('Demo1')" class="w3-button w3-block w3-left-align">
                    What products does Binance provide?</button>

                <div id="Demo1" class="w3-container w3-hide">
                    <p>Some text..</p>
                </div>
                <div>
                <button onclick="myFunction('Demo1')" class="w3-button w3-block w3-left-align">
                How to buy Bitcoin and other cryptocurrencies on Binance</button>

                <div id="Demo1" class="w3-container w3-hide">
                    <p>Some text..</p>
                </div>
                </div>
                    </div>
                </div>

                )
}



export const Lasthero = () => {
  return (
    <div className='text-center space-y-5 py-5 mt-10 bg-black'>
        <p className='text-2xl text-white  font-bold'>For Verified Users</p>
        <p className='text-3xl font-bold'>Get up to <span className='text-yellow-400'>100 USDT</span> in rewards</p>
        <button className='text-2xl bg-yellow-500 px-4 py-3 rounded-lg'>Start Trading</button>
    </div>
  )
}


export const Foooter = () => {
  return (
    <div className='mt-5'>

    <hr/>
    <div className='text-center text-bold'>
        
        Binance X @2023
    </div></div>
  )
}


