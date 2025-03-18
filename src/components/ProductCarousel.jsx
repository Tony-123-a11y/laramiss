import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const ProductCarousel = ({ products }) => {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows:true,
          dots:true
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows:true,
          dots:true
        },
      },
    ],
  };

  return (
    <div className="mx-auto px-4  h-full">
      <Slider {...settings} className="list-none">
        
       {
        products.map((product,i)=>{
           return <Card product={product} current={i} border={'border-r-4'}/>
        })
      }
      
      </Slider>
    </div>
  );
};

export default ProductCarousel;
