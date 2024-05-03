import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import gadgetSale from '../../../assets/images/Banners/phong-ngu-1.jpg';
import kitchenSale from '../../../assets/images/Banners/phong-ngu-2.jpg';
import poco from '../../../assets/images/Banners/phong-ngu-3.jpg';
import realme from '../../../assets/images/Banners/ban-lam-viec-1.jpg'
import fashionSale from '../../../assets/images/Banners/ban-lam-viec-3.jpg';
import oppo from '../../../assets/images/Banners/phong-khach-1.jpg';
import React from "react";

export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon />
    </div>
  )
}

export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  )
}

const Banner = () => {

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: <PreviousBtn />,
    // nextArrow: <NextBtn />,
  };

  const banners = [gadgetSale, kitchenSale, poco, fashionSale, realme, oppo];

  return (
    <>
      <section className="h-48 sm:h-80 w-full rounded-sm shadow relative overflow-hidden">
        <Slider {...settings}>
          {banners.map((el, i) => (
            <img draggable="false" className="h-44 sm:h-80 w-full object-cover" src={el} alt="banner" key={i} />
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Banner;
