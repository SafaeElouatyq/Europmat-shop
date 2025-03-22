import React, { useEffect } from 'react'
import insta1 from '../assets/assets/insta-1.webp'
import insta2 from '../assets/assets/insta-2.jpg'
import insta3 from '../assets/assets/insta-3.png'
import insta4 from '../assets/assets/insta-4.jpg'
import insta5 from '../assets/assets/insta-5.avif'
import insta6 from '../assets/assets/insta-6.avif'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Insta = () => {
  useEffect(()=>{
      AOS.init({
        offset:100,
        durationi:500,
        easing:'ease-in-out'
      });
      AOS.refresh();
    })
  return (
    <div className='w-full lg:px-20 px-5 py-[80px] bg-white flex flex-col justify-center items-center gap-4'>
      <h1 data-aos="zoome-in" data-aos-delay="100" className='text-themepurple text-xl font-semibold capitalize'>Our Facebook Marketplace</h1>
      <h1 data-aos="zoome-in" data-aos-delay="200" className='text-black font-semibold text-semibold text-[42px] leading-[50px] text-center capitalize'>Follow on Facebook </h1>
      <div data-aos="zoome-in" data-aos-delay="300" className="w-full grid lg:grid-cols-6 grid-cols-1 justify-center items-center gap-6 mt-8 ">
        <img src={insta1} alt="" className='rounded-lg' />
        <img src={insta2} alt="" className='rounded-lg' />
        <img src={insta3} alt="" className='rounded-lg' />
        <img src={insta4} alt="" className='rounded-lg' />
        <img src={insta5} alt="" className='rounded-lg' />
        <img src={insta6} alt="" className='rounded-lg' />
      </div>
      <button data-aos="zoome-in" data-aos-delay="400" className='bg-themepurple hover:bg-themeyellow text-white hover:text-black font-semibold px-8 py-3 rounded-lg mt-12 uppercase'><a href="https://www.facebook.com/share/1DPjR7685m/">Europmat</a></button>
    </div>
  )
}
