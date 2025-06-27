import React from "react";
import Slider from "react-slick";
import img1 from "../src/img/ad-1.png";
import img2 from "../src/img/ad-2.png";
import img3 from "../src/img/ad-3.png";
import img4 from "../src/img/ad-4.png";
import img5 from "../src/img/ad-5.png";
import img6 from "../src/img/ad-6.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Advertise = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 9000,
    responsive: [
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 991, // lg1 breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767, // md breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 639, // md2 breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 479, // md1 breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 375, // sm1 breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 320, // sm breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="bg-footerarrow py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <h2 className="capitalize text-lg sm:text-xl md:text-2xl lg:text-[28px] font-Jost leading-6 sm:leading-7 md:leading-8 lg:leading-9 font-medium text-white opacity-35">
            trusted by over 500 clients around the world
          </h2>
        </div>
        <div className="max-w-full overflow-hidden">
          <Slider {...settings}>
            <div className="px-2 sm:px-3">
              <div className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[191px] mx-auto border rounded-lg bg-white p-1 sm:p-2">
                <a href="#" className="block">
                  <img 
                    src={img1} 
                    alt="Ad 1" 
                    className="w-full h-auto object-contain duration-300 ease-in-out grayscale hover:grayscale-0"
                  />
                </a>
              </div>
            </div>
            <div className="px-2 sm:px-3">
              <div className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[191px] mx-auto border rounded-lg bg-white p-1 sm:p-2">
                <a href="#" className="block">
                  <img 
                    src={img2} 
                    alt="Ad 2" 
                    className="w-full h-auto object-contain duration-300 ease-in-out grayscale hover:grayscale-0"
                  />
                </a>
              </div>
            </div>
            <div className="px-2 sm:px-3">
              <div className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[191px] mx-auto border rounded-lg bg-white p-1 sm:p-2">
                <a href="#" className="block">
                  <img 
                    src={img3} 
                    alt="Ad 3" 
                    className="w-full h-auto object-contain duration-300 ease-in-out  grayscale hover:grayscale-0"
                  />
                </a>
              </div>
            </div>
            <div className="px-2 sm:px-3">
              <div className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[191px] mx-auto border rounded-lg bg-white p-1 sm:p-2">
                <a href="#" className="block">
                  <img 
                    src={img4} 
                    alt="Ad 4" 
                    className="w-full h-auto object-contain duration-300 ease-in-out grayscale hover:grayscale-0"
                  />
                </a>
              </div>
            </div>
            <div className="px-2 sm:px-3">
              <div className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[191px] mx-auto border rounded-lg bg-white p-1 sm:p-2">
                <a href="#" className="block">
                  <img 
                    src={img5} 
                    alt="Ad 5" 
                    className="w-full h-auto object-contain duration-300 ease-in-out grayscale hover:grayscale-0"
                  />
                </a>
              </div>
            </div>
            <div className="px-2 sm:px-3">
              <div className="w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[191px] mx-auto border rounded-lg bg-white p-1 sm:p-2">
                <a href="#" className="block">
                  <img 
                    src={img6} 
                    alt="Ad 6" 
                    className="w-full h-auto object-contain duration-300 ease-in-out grayscale hover:grayscale-0"
                  />
                </a>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Advertise;