import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import larb from "../assets/images/larb.jpg";
import kakum from "../assets/images/kakum.jpg";
import cape from "../assets/images/cape.jpg";

const HeroSection = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      // Example: Setting images directly
      setImages([
        larb,
        kakum,
        cape,
        // Add more images as needed
      ]);
    };

    fetchImages();
  }, []);

  // Settings for the slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="relative" style={{width:'100%', height:'90vh', overflow: 'hidden'}}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="w-full object-contain" />
          </div>
        ))}
      </Slider>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white z-10">
      <h1 className="text-4xl font-bold">Chale, Welcome to GH 🇬🇭</h1>

      </div>
    </div>
  );
};

export default HeroSection;
