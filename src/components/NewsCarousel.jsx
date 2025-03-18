import React from "react";
import NewsCard from "./NewsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute right-[95%] max-lg:right-[92%]  top-1/2 transform -translate-y-1/2 z-10 bg-black p-3 rounded-full hover:bg-hover cursor-pointer transition"
      >
        ◀
      </button>
    );
  };
  
  // Custom Next Arrow
  const CustomNextArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute left-[95%] max-lg:left-[92%] top-1/2 transform -translate-y-1/2 z-10 bg-black p-3 rounded-full hover:bg-hover cursor-pointer transition"
      >
        ▶
      </button>
    );
  };
const NewsCarousel = () => {
  
  const settings={
    dots:false,
   nextArrow:<CustomNextArrow/>,
   prevArrow:<CustomPrevArrow/>,
    infinite:true,
    speed:200,
    slidesToShow:3,
    slidesToScroll:1,
    autoplaySpeed:1000,
    autoplay:true,
 
    responsive: [
        {
          breakpoint: 1024, // Tablets
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768, // Mobile landscape
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 480, // Mobile portrait
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            dots:true
          },
        },
      ],
  }
  const newsData = [
    {
      date: "Jan 10, 2025",
      image: "/src/assets/news1.jpg", 
      heading: "How diamonds are cleaned?",
    },
    {
      date: "Jan 11, 2025",
      image: "/src/assets/news2.jpg",
      heading: "Best ways to store diamonds",
    },
    {
      date: "Jan 12, 2025",
      image: "/src/assets/news6.jpg",
      heading: "Why diamonds lose shine?",
    },
    {
      date: "Jan 13, 2025",
      image: "/src/assets/news4.jpg",
      heading: "Choosing the perfect diamond",
    },
    {
      date: "Jan 14, 2025",
      image: "/src/assets/news3.jpg",
      heading: "Diamond certification guide",
    },
  ];

  return (
    <div className="">
        <div className="">
<Slider {...settings}>
    {
        newsData.map((news,i)=>{
            return <NewsCard date={news.date} key={i} image={news.image} heading={news.heading}/>
        })
    }
</Slider>
</div>
    </div>
  )
}

export default NewsCarousel
