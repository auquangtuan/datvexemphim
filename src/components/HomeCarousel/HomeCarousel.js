import React from 'react'
import Slider from "react-slick";
import './HomeCarousel.css'
import BHD from '~/assets/img/BHD.png'
import GD from '~/assets/img/GD.png'
import JB from '~/assets/img/JB.png'
import NSK from '~/assets/img/NSK.jpg'
import TEL from '~/assets/img/TEL.png'
import NextArrow from '../Arrows/NextArrow';
import PrevArrow from '../Arrows/PrevArrow';
export default function HomeCarousel(props) {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }
  return (
    <div className='home_carousel'>
        <Slider {...settings}>
          <div>
            <img style={{width:"100%", height: '550px'}} src={BHD} alt='Image_Carousel'></img>
          </div>
          <div>
            <img style={{width:"100%", height: '550px'}} src={GD} alt='Image_Carousel'></img>
          </div>
          <div>
            <img style={{width:"100%", height: '550px'}} src={JB} alt='Image_Carousel'></img>
          </div>
          <div>
            <img style={{width:"100%", height: '550px'}} src={NSK} alt='Image_Carousel'></img>
          </div>
          <div>
            <img style={{width:"100%", height: '550px'}} src={TEL} alt='Image_Carousel'></img>
          </div>
        </Slider>
      </div>
  )
}
