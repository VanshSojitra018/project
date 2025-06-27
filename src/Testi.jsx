import React from "react";
import { GoDotFill } from "react-icons/go";
import testi from "../src/img/testi.jpg";
import img from "../src/img/test-1.png";
import img1 from "../src/img/test-2.png";
import img2 from "../src/img/test-3.png";

import Slider from "react-slick";

// Import Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testi = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 1, arrows: true } },
      { breakpoint: 1199, settings: { slidesToShow: 1, arrows: true } },
      { breakpoint: 1024, settings: { slidesToShow: 1, arrows: true } },
      { breakpoint: 991, settings: { slidesToShow: 1, arrows: true } },
      { breakpoint: 767, settings: { slidesToShow: 1, arrows: false } },
      { breakpoint: 639, settings: { slidesToShow: 1, arrows: false } },
      { breakpoint: 479, settings: { slidesToShow: 1, arrows: false } },
      { breakpoint: 375, settings: { slidesToShow: 1, arrows: false } },
      { breakpoint: 320, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  return (
    <section className="bg-bgfooter relative z-0 py-8 sm:py-12 md:py-16 lg:py-20">
      {/* Background Image */}
      <div
        style={{ backgroundImage: `url(${testi})` }}
        className="opacity-25 bg-cover bg-no-repeat bg-center bg-fixed absolute inset-0"
      ></div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="flex px-3 justify-center items-center gap-2 text-footerarrow font-Jost font-semibold text-sm sm:text-base">
            <GoDotFill className="text-xs sm:text-sm" />
            TESTIMONIALS
            <GoDotFill className="text-xs sm:text-sm" />
          </span>
          <h2 className="text-2xl sm:text-3xl md1:text-4xl lg:text-5xl xl:text-[48px] leading-tight sm:leading-normal md:leading-[50px] lg:leading-[62px] font-Jost font-medium text-white mb-3 mt-4">
            Customers Testimonials
          </h2>
        </div>

        {/* Slider */}
        <div className="max-w-sm sm1:max-w-md md1:max-w-lg md2:max-w-xl md:max-w-2xl lg1:max-w-3xl mx-auto">
          <Slider {...settings}>
            {/* Slide 1 */}
            <div className="flex items-center justify-center min-h-[250px] sm:min-h-[280px] md:min-h-[300px]">
              <div className="flex flex-col items-center text-center px-4 sm:px-6">
                <img
                  src={img}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[4.5rem] lg:h-[4.5rem] rounded-full border-2 sm:border-[3px] border-footerarrow mb-4 sm:mb-6 md:mb-8"
                  alt="Fairouz Mhmd"
                />
                <p className="text-base sm:text-lg md1:text-xl md2:text-2xl md:text-[24px] lg:text-[26px] xl:text-[28px] leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10 font-Jost font-light text-white italic mb-4 sm:mb-6 md:mb-8 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                  ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab,
                  corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.
                </p>
                <div>
                  <p className="text-base sm:text-lg md:text-xl lg:text-[20px] leading-6 sm:leading-7 md:leading-8 font-Jost font-normal text-white">
                    Fairouz Mhmd
                  </p>
                  <p className="text-sm sm:text-base lg:text-[16px] leading-5 sm:leading-6 text-white font-Jost font-normal opacity-75 mt-1">
                    Manager
                  </p>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="flex items-center justify-center min-h-[250px] sm:min-h-[280px] md:min-h-[300px]">
              <div className="flex flex-col items-center text-center px-4 sm:px-6">
                <img
                  src={img1}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[4.5rem] lg:h-[4.5rem] rounded-full border-2 sm:border-[3px] border-footerarrow mb-4 sm:mb-6 md:mb-8"
                  alt="Ali Khan"
                />
                <p className="text-base sm:text-lg md1:text-xl md2:text-2xl md:text-[24px] lg:text-[26px] xl:text-[28px] leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10 font-Jost font-light text-white italic mb-4 sm:mb-6 md:mb-8 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                  ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab,
                  corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.
                </p>
                <div>
                  <p className="text-base sm:text-lg md:text-xl lg:text-[20px] leading-6 sm:leading-7 md:leading-8 font-Jost font-normal text-white">
                    Ali Khan
                  </p>
                  <p className="text-sm sm:text-base lg:text-[16px] leading-5 sm:leading-6 text-white font-Jost font-normal opacity-75 mt-1">
                    Designer
                  </p>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="flex items-center justify-center min-h-[250px] sm:min-h-[280px] md:min-h-[300px]">
              <div className="flex flex-col items-center text-center px-4 sm:px-6">
                <img
                  src={img2}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[4.5rem] lg:h-[4.5rem] rounded-full border-2 sm:border-[3px] border-footerarrow mb-4 sm:mb-6 md:mb-8"
                  alt="Sarah Ahmed"
                />
                <p className="text-base sm:text-lg md1:text-xl md2:text-2xl md:text-[24px] lg:text-[26px] xl:text-[28px] leading-6 sm:leading-7 md:leading-8 lg:leading-9 xl:leading-10 font-Jost font-light text-white z-50 italic mb-4 sm:mb-6 md:mb-8 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                  ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab,
                  corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.
                </p>
                <div>
                  <p className="text-base sm:text-lg md:text-xl lg:text-[20px] leading-6 sm:leading-7 md:leading-8 font-Jost font-normal text-white">
                    Sarah Ahmed
                  </p>
                  <p className="text-sm sm:text-base lg:text-[16px] leading-5 sm:leading-6 text-white font-Jost font-normal opacity-75 mt-1">
                    Developer
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testi;