import React from "react";
import { GoDotFill } from "react-icons/go";
import { HiArrowLongRight } from "react-icons/hi2";
import img1 from "../src/img/p-1.jpg"
import img2 from "../src/img/p-2.jpg"
import img3 from "../src/img/p-3.jpg"
import img4 from "../src/img/p-4.jpg"
import img5 from "../src/img/p-5.jpg"
import img6 from "../src/img/p-6.jpg"
import { Link } from "react-router-dom";



const Portfolio = () => {
  return (
    <>
      <section className="bg-bgfooter py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* heading */}
          <div className="port-inner mb-8 sm:mb-10 md:mb-12 flex flex-col md:flex-row items-center justify-between flex-wrap gap-4 sm:gap-6">
            <div className="inner-txt mb-4 sm:mb-6 md:mb-0 text-center md:text-left">
              <span className="flex items-center font-Jost font-semibold justify-center md:justify-start text-footerarrow gap-1 leading-6 mb-2">
                <GoDotFill />
                PORTFOLIO
                <GoDotFill />
              </span>
              <h2 className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-Jost font-medium text-white">
                Awesome Portfolio
              </h2>
            </div>
            <div className="plan-btn">
              <Link
              to="/portfolioGird"
                className="flex items-center text-white gap-2 sm:gap-3 justify-center text-center py-2 px-4 sm:py-2 sm:px-5 md:py-3 md:px-9 bg-footerarrow text-sm sm:text-base md:text-lg lg:text-xl leading-7 font-Jost font-medium shadow-custom-blue transition-all duration-300 ease-in-out rounded-bl-[1rem] rounded-[0.25rem] rounded-tr-[1rem] border-2 border-transparent hover:bg-transparent hover:border-footerarrow hover:text-footerarrow"
              >
                See More <HiArrowLongRight />
              </Link>
            </div>
          </div>

          {/* options */}
          <div className="px-2 sm:px-4">
            <ul className="px-0 sm:px-2 py-1 mb-6 sm:mb-8 list-none flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 md:gap-6">
              <li className="li-menu-1 relative">
                <a
                  href="#"
                  className="flex items-center justify-center text-footerarrow font-Jost text-base sm:text-lg md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal px-2 sm:px-3 md:px-4 py-1 sm:py-2"
                >
                  All
                </a>
              </li>
              <li className="li-menu relative">
                <a
                  href="#"
                  className="flex items-center justify-center text-white font-Jost text-base sm:text-lg md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal px-2 sm:px-3 md:px-4 py-1 sm:py-2 transform duration-300 ease-in-out hover:text-footerarrow"
                >
                  Mobile Apps
                </a>
              </li>
              <li className="li-menu relative">
                <a
                  href="#"
                  className="flex items-center justify-center text-white font-Jost text-base sm:text-lg md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal px-2 sm:px-3 md:px-4 py-1 sm:py-2 transform duration-300 ease-in-out hover:text-footerarrow"
                >
                  Cloud
                </a>
              </li>
              <li className="li-menu relative">
                <a
                  href="#"
                  className="flex items-center justify-center text-white font-Jost text-base sm:text-lg md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal px-2 sm:px-3 md:px-4 py-1 sm:py-2 transform duration-300 ease-in-out hover:text-footerarrow"
                >
                  Data Analaysis
                </a>
              </li>
              <li className="li-menu relative">
                <a
                  href="#"
                  className="flex items-center justify-center text-white font-Jost text-base sm:text-lg md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal px-2 sm:px-3 md:px-4 py-1 sm:py-2 transform duration-300 ease-in-out hover:text-footerarrow"
                >
                  Hosting
                </a>
              </li>
            </ul>

            {/* portfolio img */}
            <div className="mt-6 sm:mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                
                <div className="group">
                  <div className="relative">
                    <a href="#" className="relative z-[1] block">
                      <img
                        src={img1}
                        className="min-w-full object-cover h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] max-w-full rounded-md"
                        alt="Mobile Apps"
                      />
                    </a>
                    <div className="img-1-text  py-5 absolute hidden w-full group-hover:block h-auto left-0 bottom-[-1px] pt-8 z-[5]">
                      <h3 className="flex items-center text-base sm:text-lg md:text-[1.25rem] rounded-br-md absolute w-full max-w-full h-full pl-16 sm:pl-24 md:pl-24 pr-4 mb-2 bg-black opacity-75 text-white font-sans top-0 left-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                        Mobile Apps
                      </h3>
                      <HiArrowLongRight className="flex overflow-hidden items-center justify-center rounded-bl-md absolute left-0 top-0 w-max h-full px-3 sm:px-4 text-lg sm:text-xl md:text-[1.5rem] bg-footerarrow text-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out delay-300" />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="relative">
                    <a href="#" className="relative z-[1] block">
                      <img
                        src={img2}
                        className="min-w-full object-cover h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] max-w-full rounded-md"
                        alt="Mobile Apps"
                      />
                    </a>
                    <div className="img-1-text py-5 absolute hidden w-full group-hover:block h-auto left-0 bottom-[-1px] pt-8 z-[5]">
                      <h3 className="flex items-center text-base sm:text-lg md:text-[1.25rem] rounded-br-md absolute w-full max-w-full h-full pl-16 sm:pl-24 md:pl-24 pr-4 mb-2 bg-black opacity-75 text-white font-sans top-0 left-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                        Cloud
                      </h3>
                      <HiArrowLongRight className="flex overflow-hidden items-center justify-center rounded-bl-md absolute left-0 top-0 w-max h-full px-3 sm:px-4 text-lg sm:text-xl md:text-[1.5rem] bg-footerarrow text-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out delay-300" />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="relative">
                    <a href="#" className="relative z-[1] block">
                      <img
                        src={img3}
                        className="min-w-full object-cover h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] max-w-full rounded-md"
                        alt="Mobile Apps"
                      />
                    </a>
                    <div className="img-1-text py-5 absolute hidden w-full group-hover:block h-auto left-0 bottom-[-1px] pt-8 z-[5]">
                      <h3 className="flex items-center text-base sm:text-lg md:text-[1.25rem] rounded-br-md absolute w-full max-w-full h-full pl-16 sm:pl-24 md:pl-24 pr-4 mb-2 bg-black opacity-75 text-white font-sans top-0 left-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                        Data Analaysis
                      </h3>
                      <HiArrowLongRight className="flex overflow-hidden items-center justify-center rounded-bl-md absolute left-0 top-0 w-max h-full px-3 sm:px-4 text-lg sm:text-xl md:text-[1.5rem] bg-footerarrow text-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out delay-300" />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="relative">
                    <a href="#" className="relative z-[1] block">
                      <img
                        src={img4}
                        className="min-w-full object-cover h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] max-w-full rounded-md"
                        alt="Mobile Apps"
                      />
                    </a>
                    <div className="img-1-text py-5 absolute hidden w-full group-hover:block h-auto left-0 bottom-[-1px] pt-8 z-[5]">
                      <h3 className="flex items-center text-base sm:text-lg md:text-[1.25rem] rounded-br-md absolute w-full max-w-full h-full pl-16 sm:pl-24 md:pl-24 pr-4 mb-2 bg-black opacity-75 text-white font-sans top-0 left-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                        Hosting
                      </h3>
                      <HiArrowLongRight className="flex overflow-hidden items-center justify-center rounded-bl-md absolute left-0 top-0 w-max h-full px-3 sm:px-4 text-lg sm:text-xl md:text-[1.5rem] bg-footerarrow text-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out delay-300" />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="relative">
                    <a href="#" className="relative z-[1] block">
                      <img
                        src={img5}
                        className="min-w-full object-cover h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] max-w-full rounded-md"
                        alt="Mobile Apps"
                      />
                    </a>
                    <div className="img-1-text py-5 absolute hidden w-full group-hover:block h-auto left-0 bottom-[-1px] pt-8 z-[5]">
                      <h3 className="flex items-center text-base sm:text-lg md:text-[1.25rem] rounded-br-md absolute w-full max-w-full h-full pl-16 sm:pl-24 md:pl-24 pr-4 mb-2 bg-black opacity-75 text-white font-sans top-0 left-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                        SEO
                      </h3>
                      <HiArrowLongRight className="flex overflow-hidden items-center justify-center rounded-bl-md absolute left-0 top-0 w-max h-full px-3 sm:px-4 text-lg sm:text-xl md:text-[1.5rem] bg-footerarrow text-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out delay-300" />
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="relative">
                    <a href="#" className="relative z-[1] block">
                      <img
                        src={img6}
                        className="min-w-full object-cover h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] max-w-full rounded-md"
                        alt="Mobile Apps"
                      />
                    </a>
                    <div className="img-1-text py-5 absolute hidden w-full group-hover:block h-auto left-0 bottom-[-1px] pt-8 z-[5]">
                      <h3 className="flex items-center text-base sm:text-lg md:text-[1.25rem] rounded-br-md absolute w-full max-w-full h-full pl-16 sm:pl-24 md:pl-24 pr-4 mb-2 bg-black opacity-75 text-white font-sans top-0 left-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                        Other Category
                      </h3>
                      <HiArrowLongRight className="flex overflow-hidden items-center justify-center rounded-bl-md absolute left-0 top-0 w-max h-full px-3 sm:px-4 text-lg sm:text-xl md:text-[1.5rem] bg-footerarrow text-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out delay-300" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;