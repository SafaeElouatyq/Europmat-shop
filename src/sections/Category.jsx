
import React, { useEffect } from 'react'
import cat1 from '../assets/assets/cat1.jpg'
import cat2 from '../assets/assets/cat2.png'
import cat3 from '../assets/assets/cat3.webp'
import cat4 from '../assets/assets/cat4.avif'
import cat5 from '../assets/assets/cat5.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Category = () => {

   useEffect(()=>{
      AOS.init({
        offset:100,
        durationi:500,
        easing:'ease-in-out'
      });
      AOS.refresh();
    })
  return (
    <div  className='w-full bg-gray-100 lg:px-20 px-5 pt-[130px] pb-[80px] flex lg:flex-row flex-col justify-center items-center gap-20'>
      <div data-aos="zoom-in" data-aos-delay="50" className='lg:w-[15%] w-full flex flex-col justify-center lg:items-start items-center gap-[20px]'>
        <h1 className='text-themepurple text-xl font-semibold text-center'>Favorites item</h1>
        <h1 className='text-black font-semibold text-[42px] leading-[50px] lg:text-start text-center'>Popular Category</h1>

        <button className='bg-themepurple hover:bg-themeyellow text-white hover:text-black px-8 py-3 rounded-lg font-semibold mt-[60px]'>VIEW ALL</button>

      </div>
      <div className="lg:w-[85%] w-full grid lg:grid-cols-5 grid-cols-1 justify-center items-start gap-10">
        <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-center gap-6'>
          <img src={cat1} alt=""  className='rounded-full cursor-pointer'/>
          <h1 className='text-black text-xl font-semibold hover:text-themepurple cursor-pointer '>Rayonnage</h1>
        </div>

        <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-6'>
          <img src={cat2} alt=""  className='rounded-full cursor-pointer'/>
          <h1 className='text-black text-xl font-semibold hover:text-themepurple cursor-pointer'>Frigidaire</h1>
        </div>

        <div data-aos="zoom-in" data-aos-delay="300" className='flex flex-col justify-center items-center gap-6'>
          <img src={cat3} alt=""  className='rounded-full cursor-pointer'/>
          <h1 className='text-black text-xl font-semibold hover:text-themepurple cursor-pointer'>Fran</h1>
        </div>

        <div data-aos="zoom-in" data-aos-delay="400" className='flex flex-col justify-center items-center gap-6'>
          <img src={cat4} alt=""  className='rounded-full cursor-pointer'/>
          <h1 className='text-black text-xl font-semibold hover:text-themepurple cursor-pointer'>Patisserie</h1>
        </div>

        <div data-aos="zoom-in" data-aos-delay="500" className='flex flex-col justify-center items-center gap-6'>
          <img src={cat5} alt=""  className='rounded-full cursor-pointer'/>
          <h1 className='text-black text-xl font-semibold hover:text-themepurple cursor-pointer'>Klima</h1>
        </div>
        
      </div>
    </div>
  )
}
