import React, { useEffect } from 'react'
import banner1 from '../assets/assets/banner1.png'
import banner2 from '../assets/assets/banner2.png'
import banner3 from '../assets/assets/banner3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Types = () => {
  useEffect(()=>{
      AOS.init({
        offset:100,
        durationi:500,
        easing:'ease-in-out'
      });
      AOS.refresh();
    })
  return (
    <div  className='w-full lg:px-20 px-5 py-[80px] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-10'>
      <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col justify-center items-end gap-6 bg-cover p-10 rounded-lg" style={{backgroundImage:`url(${banner1})`}}>
        <h1 className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-lg'>Prix:1200DH</h1>
        <h1 className='text-4xl text-end text-white font-semibold'>Frigidaire
       <br/> KLIMASAN</h1>
        <button className='bg-themeyellow px-6 py-3 rounded-lg text-black  font-semibold'><a href="https://wa.me/212665616663?text=Frigidaire
        KLIMASAN">SHOP NOW</a></button>
      </div>

      <div data-aos="zoom-in" data-aos-delay="200" className="flex flex-col justify-center items-end gap-6 bg-cover p-10 rounded-lg" style={{backgroundImage:`url(${banner2})`}}>
        <h1 className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-lg'>Prix:1150DH</h1>
        <h1 className='text-4xl text-end text-white font-semibold'>FOUR A <br/>PIZZA</h1>
        <button className='bg-themeyellow px-6 py-3 rounded-lg text-black  font-semibold'><a href="https://wa.me/212665616663?text= FOUR A PIZZA">SHOP NOW</a></button>
      </div>

      <div data-aos="zoom-in" data-aos-delay="300" className="flex flex-col justify-center items-end gap-6 bg-cover p-10 rounded-lg" style={{backgroundImage:`url(${banner3})`}}>
        <h1 className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-lg'>Prix:7000DH</h1>
        <h1 className='text-4xl text-end text-white font-semibold'>Batteur<br/>20L 220V</h1>
        <button className='bg-themeyellow px-6 py-3 rounded-lg text-black  font-semibold'><a href="https://wa.me/212665616663?text=Batteur">SHOP NOW</a></button>
      </div>
    </div>
  )
}
