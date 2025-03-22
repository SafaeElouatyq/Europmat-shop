import React, { useEffect, useState } from 'react'
import { FaSearch,FaHeart,FaShoppingCart,FaMapMarkerAlt } from 'react-icons/fa'
import { IoPerson } from 'react-icons/io5'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-scroll'
import { FaXmark,FaBars,FaPhoneVolume } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Header = () => {
  useEffect(()=>{
        AOS.init({
          offset:100,
          durationi:500,
          easing:'ease-in-out'
        });
        AOS.refresh();
      })
  const [isMeunOpen,setisMeunOpen]=useState(false);
  const toggleMenu=()=>{
    setisMeunOpen(!isMeunOpen);
  }
  const closeMenu=()=>{
    setisMeunOpen(false);
  }
  const navItems=[
    {
      link:'Home',path:'hero'
    },
    {
      link:'About',path:'category'
    },
    {
      link:'Products',path:'Products'
    },
    {
      link:'Testimonials',path:'testimonials'
    },
    {
      link:'Contact',path:'contact'
    },
  ]
  return (
    <>
    <div className="w-full px-16 py-2 bg-themeyellow lg:flex hidden justify-between items-center gap-6">
    <h1 className='text-sm font-semibold flex justify-center items-center gap-2'><FaPhoneVolume className='size-[18px] '/><a href="tel:+212665616663">+212 665-616663</a></h1>
    <h1 className='text-sm font-semibold flex justify-center items-center gap-2'><FaMapMarkerAlt className='size-[18px] '/><a href="https://maps.app.goo.gl/Fqv9RnG2DxH4nEV76">Adresse</a></h1>
    <h1 className='text-sm font-semibold flex justify-center items-center gap-2'><FaWhatsapp   className='size-[18px] '/><a href="https://wa.me/212665616663">Contact with me on WhatsApp</a><span>
      </span></h1>
    </div>
    <nav className='w-full bg-gray-100 flex justify-between items-center gap-1 lg:px-16 px-6 py-5 sticky top-0 z-50'>
      <h1 className='text-themepurple font-bold lg:text-[30px] text-3xl underline italic '>Europmat Shop</h1>
      <ul className='lg:flex justify-center items-center gap-10 hidden'>
      {navItems.map(({link,path})=>(
        <Link key={path} className='text-black text-sm uppercase font-semibold
        cursor-pointer px-4 py-2 rounded-lg hover:bg-themepurple hover:text-white' to={path} spy={true} offset={-100} smooth={true}>
          {link}
        </Link>
      ))}
      </ul>
      <div id='Header-icons'  className="lg:flex hidden justify-center items-center gap-4 text-black
      ">
        <FaSearch className='w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurple'/>
        <IoPerson className='w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurple'/>
        <FaHeart className='w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurple'/>
        <div className="relative">
          <FaShoppingCart className='w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-themepurple '/>
          {/* <div className="bg-themepurple hover:bg-themeyellow px-3 py-1 text-white hover:text-black rounded-full absolute -top-[24px] -right-[15px] text-[14px] font-bold">5</div> */}
        </div>
      </div>
      {/* mobile menu starts here */}
      <div className="flex justify-center items-center lg:hidden mt-3 " onClick={toggleMenu}>
        <div className=""
        >
          {isMeunOpen ? <FaXmark className='text-themepurple text-3xl cursor-pointer'/>:<FaBars  className='text-themepurple text-3xl cursor-pointer'/>}
        </div>
        <div className={`${isMeunOpen ? 'flex':'hidden'} w-full h-fit bg-themepurple p-4 absolute top-[80px] left-0`} onClick={closeMenu}>
          <ul className='flex flex-col justify-center items-center gap-2 w-full'>
            {navItems.map(({link,path})=>(
              <Link key={path} className='text-white uppercase font-semibold cursor-pointer p-3 rouded-lg hover:bg-themeyellow hover:text-black w-full text-center' to={path} spy={true} offset={-100} smooth={true}>
                {link}

              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
