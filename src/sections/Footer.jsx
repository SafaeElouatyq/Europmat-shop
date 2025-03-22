import React, { useEffect } from 'react'
import client1 from '../assets/assets/client1.png'
import client2 from '../assets/assets/client2.webp'
import client3 from '../assets/assets/client3.webp'
import client4 from '../assets/assets/client4.webp'

import google  from '../assets/assets/google.jpg'
import apple  from '../assets/assets/apple.jpg'
import pay1  from '../assets/assets/pay-1.jpg'
import pay2  from '../assets/assets/pay-2.jpg'
import pay3  from '../assets/assets/pay-3.jpg'
import pay4  from '../assets/assets/pay-4.jpg'
import { Link } from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa'
import { CiFacebook } from "react-icons/ci";

import AOS from 'aos';
import 'aos/dist/aos.css';

export const Footer = () => {
  useEffect(()=>{
      AOS.init({
        offset:100,
        durationi:500,
        easing:'ease-in-out'
      });
      AOS.refresh();
    })
  return (
    <div id='contact' className='w-full flex flex-col justify-center items-center'>
      {/* 1st box start here */}
      <div data-aos="zoom-in" data-aos-delay="100" className='w-full bg-gray-400 lg:px-20 px-10 py-8 grid lg:grid-cols-4 grid-cols-2 justify-center items-center gap-10'>
      <img src={client1} alt=""  className='w-[150px] opacity-90 cursor-pointer hover:opacity-100'/>
      <img src={client2} alt=""  className='w-[150px] opacity-90 cursor-pointer hover:opacity-100'/>
      <img src={client3} alt=""  className='w-[150px] opacity-90 cursor-pointer hover:opacity-100'/>
      <img src={client4} alt=""  className='w-[150px] opacity-90 cursor-pointer hover:opacity-100'/>
      
      </div>
      {/* 1st box ends here */}

      {/* 2nd box starts here */}
      <div className='w-full lg:px-20 px-5 py-[60px] bg-gray-100 grid lg:grid-cols-[,auto,auto,auto,auto,auto] grid-cols-1 justify-between items-start lg:gap-3 gap-10'>
        <div data-aos="zoom-in" data-aos-delay="100" className="flex flex-col justify-center items-start gap-10 grow">
          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className='text-4xl font-bold text-themepurple underline italic'>Europmat Shop</h1>
            <p className='text-gray-500 text-justify'>est une entreprise spécialisée dans la fourniture d’équipements <br /> essentiels pour les commerces, restaurants et hôtels. Elle propose <br />une large gamme de solutions professionnelles adaptées auxbr <br />

             besoins quotidiens des professionnels, allant des équipements <br /> modernes pour les cuisines aux systèmes de stockage et de <br />  présentation des marchandises.</p>
          </div>
          <div className="flex flex-col justify-center items-start gap-4">
            <h1 className='text-black text-xl font-semibold capitalize'>Downlod Our App</h1>
            <div className="flex justify-center items-center gap-4">
              <img src={google} alt="" />
              <img src={apple} alt="" />
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" className="">
          <h1 className='text-black text-xl font-semibold capitalize'>facebook links </h1>
          <ul className='mt-8 flex flex-col justify-center items-start gap-2'> 
            <li className='text-gray-500 cursor-pointer hover:text=black'><a href="https://www.facebook.com/share/1DPjR7685m/">Amime Chaibelain</a></li>
            <li className='text-gray-500 cursor-pointer hover:text=black'><a href="https://www.facebook.com/share/1DPjR7685m/">Europmat</a></li>
            <li className='text-gray-500 cursor-pointer hover:text=black'>Home</li>
            <li className='text-gray-500 cursor-pointer hover:text=black'>Home</li>
            
          </ul>
        </div>

        <div data-aos="zoom-in" data-aos-delay="200" className="">
          <h1 className='text-black text-xl font-semibold capitalize'>WhatsApp links</h1>
          <ul className='mt-8 flex flex-col justify-center items-start gap-2'> 
            <li className='text-gray-500 cursor-pointer hover:text=black'><a href="https://wa.me/212665111894">Amime Chaibelain</a></li>
            <li className='text-gray-500 cursor-pointer hover:text=black'><a href="https://wa.me/212665616663">Europmat</a></li>
            <li className='text-gray-500 cursor-pointer hover:text=black'>Home</li>
            <li className='text-gray-500 cursor-pointer hover:text=black'>Home</li>
            
          </ul>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200" className="">
          <h1 className='text-black text-xl font-semibold capitalize'>Instagram links</h1>
          <ul className='mt-8 flex flex-col justify-center items-start gap-2'> 
            <li className='text-gray-500 cursor-pointer hover:text=black'><a href="https://www.instagram.com/klimasan_maroc?igsh=MWVxZ2phdjRpcHVr">Amime Chaibelain</a></li>
            <li className='text-gray-500 cursor-pointer hover:text=black'><a href="https://www.instagram.com/klimasan_maroc?igsh=MWVxZ2phdjRpcHVr">Europmat</a></li>
            <li className='text-gray-500 cursor-pointer hover:text=black'>Home</li>
            <li className='text-gray-500 cursor-pointer hover:text=black'>Home</li>
            
          </ul>
        </div>
        
      </div>
      {/* 2nd box ends here */}

      {/* 3rd box this.state here */}
      <div className='w-full lg:px-20 px-5npy-[40px] bg-gray-100'>
      <hr className='border-gray-300 py-3' />
      <div className="w-full flex  lg:flex-row flex-col justify-between items-center lg:gap-4 gap-10">
        <div className="lg:w-[20%] w-full flex justify-center items-center gap-4">
          <img src={pay1} alt=""className='w-[50px] rounded-lg' />
          <img src={pay2} alt=""className='w-[50px] rounded-lg' />
          <img src={pay3} alt=""className='w-[50px] rounded-lg' />
          <img src={pay4} alt=""className='w-[50px] rounded-lg' />
        </div>
        <div className="lg:w-[60%] w-full flex lg:flex-row flex-col justify-center items-center gap-4 flex-grow">
          <h1 className='text-black font-semibold text-2xl'>Subscribe Newsletter</h1>
          <div className="">
            <input type="email" value="" placeholder='Enter valid email' className='lg:w-auto w-full capitalize px-6 py-3 rounded-l-lg' />
            <button type="button" className='bg-themepurple lg:w-auto w-full text-white hover:bg-themeyellow hover:text-black px-6 py-3 rounded-r-lg font-semibold'>SUBMIT</button>
          </div>
        </div>
        <div className="lg:w-[20%] w-full ">
          <p className='text-gray-500 lg:text-end text-center'>2025 Powered by Debug Entity</p>
           
        </div>
      </div>
      </div>
      {/* 3rd box ends Here */}
      {/* scroll to top buttton  */}
      <div id='icon-box' className="bg-themepurple text-white p-3 rounded-full hover:bg-themeyellow hover:text-black cursor-pointer fixed lg:bottom-6 right-6
      bottom-6">
<Link to="hero" spy={true} offset={-100} smooth={true}>
<FaArrowUp className='w-[35px] h-[35px]'/>
</Link>
      </div>
    </div>
  )
}
