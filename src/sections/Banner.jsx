import React, { useEffect } from 'react'
import deal from '../assets/assets/deal-bg.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Banner = () => {
   useEffect(()=>{
      AOS.init({
        offset:100,
        durationi:500,
        easing:'ease-in-out'
      });
      AOS.refresh();
    })
  return (
    <div className='w-full lg:px-20 px-5 py-[80px]'>
      <div data-aos="zoom-in" data-aos-delay="100" className="w-full h-[300px] p-4
      rounded-lg bg-cover bg-center flex flex-col justify-center items-center gap-3"  style={{backgroundImage:`url(${deal})`}}>
        <h1 className='text-themeyellow text-xl font-semibold'>Everyday Shopping</h1>
        <h1 className='text-white font-bold text-[42px] leading-[50px]
        text-center'>Deal of the Day</h1>
      </div>

    </div>
  )
}
