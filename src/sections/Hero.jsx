import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from '../assets/assets/headset.png'
import earbuds from '../assets/assets/earbuds.png'
import dslr from '../assets/assets/dslr.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrowsL:false
  };
  useEffect(()=>{
    AOS.init({
      offset:100,
      durationi:500,
      easing:'ease-in-out'
    });
    AOS.refresh();
  })
  return (
    <div id='hero' className='w-full flex justify-center items-center lg:h-[700px] h-[600px]'>
      <Slider className='w-full' {...settings} >
        <div>
          <div className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center" style={{backgroundImage:`url(${dslr})`}}>
            <h1 data-aos="zoom-in" data-aos-delay="50" className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl'>
            Get up to Discounts 80% Off
            </h1>
            <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white lg:text-[120px] text[60px]uppercase font-bold lg:leading-[120px] leading-[70px]'>réfrigérateur <br></br> Professionnels</h1>
            <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white text-2xl'>100% trusted<span className='text-themeyellow font-semibold'>Store Tools</span></h1>
            <button data-aos="zoom-in" data-aos-delay="200" className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold'><a href="https://wa.me/212665616663">ONLINE SHOP</a> </button>
          </div>
        </div>

        <div>
          <div className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center" style={{backgroundImage:`url(${earbuds})`}}>
            <h1 data-aos="zoom-in" data-aos-delay="50" className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl'>
              Get upto Discounts 80% Off
            </h1>
            <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white lg:text-[120px] text[60px]uppercase font-bold lg:leading-[120px] leading-[70px]'>Rayonnage  <br></br> Professionnel</h1>
            <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white text-2xl'>100% trusted<span className='text-themeyellow font-semibold'>Store Tools</span></h1>
            <button data-aos="zoom-in" data-aos-delay="200" className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold'><a href="https://wa.me/212665616663">ONLINE SHOP</a> </button>
          </div>
        </div>

        <div>
          <div className="w-full lg:px-20 px-5 lg:h-[700px] h-[600px] flex flex-col justify-center items-start gap-10 bg-cover bg-center" style={{backgroundImage:`url(${headset})`}}>
            <h1 data-aos="zoom-in" data-aos-delay="50" className='text-themeyellow border rounded-lg border-themeyellow px-6 py-2 text-xl'>
              Get upto Discounts 80% Off
            </h1>
            <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white lg:text-[70px] text[60px]uppercase font-bold lg:leading-[120px] leading-[70px]'>Everything you need <br></br> for a shop is here</h1>
            <h1 data-aos="zoom-in" data-aos-delay="100" className='text-white text-2xl'>100% trusted<span className='text-themeyellow font-semibold'>Store Tools</span></h1>
            <button data-aos="zoom-in" data-aos-delay="200" className='bg-themeyellow px-6 py-3 rounded-lg text-black font-semibold'><a href="https://wa.me/212665616663">ONLINE SHOP</a></button>
          </div>
        </div>

        

      </Slider>
    </div>
    
  )
}
