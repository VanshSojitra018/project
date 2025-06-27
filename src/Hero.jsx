import React from "react";
import img from "../src/img/heroimg.jpg";
import { FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FaPlay } from "react-icons/fa";
import img1 from "../src/img/hero.png";

const Hero = () => {
  return (
    <section className="relative flex items-center max-h-[1280px] py-[30px] sm:py-[70px] md:py-[50px] lg:py-[100px] min-h-[90vh]">
      <div className="absolute inset-0 bg-hero opacity-90 z-10"></div>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="absolute inset-0 bg-cover bg-center opacity-80 z-0"
      ></div>
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(9, 175, 244, 0.3) 1px, transparent 1px)",
          backgroundSize: "1.25rem 1.25rem",
        }}
      ></div>

      <div className="animated overflow-y-hidden">
        <span
          className="dot absolute left-[10%] w-[1px] h-full top-0 z-10"
          style={{
            backgroundColor: "rgba(9, 175, 244, 0.15)",
            opacity: 1,
          }}
        ></span>
        <span
          className="dot absolute left-[20%] w-[1px] h-full top-0 z-10"
          style={{
            backgroundColor: "rgba(9, 175, 244, 0.15)",
            opacity: 1,
          }}
        ></span>
        <span
          className="dot absolute left-[30%] w-[1px] h-full top-0 z-10"
          style={{
            backgroundColor: "rgba(9, 175, 244, 0.15)",
            opacity: 1,
          }}
        ></span>
        <span
          className="dot absolute left-[40%] w-[1px] h-full top-0 z-10"
          style={{
            backgroundColor: "rgba(9, 175, 244, 0.15)",
            opacity: 1,
          }}
        ></span>
        <span
          className="dot absolute left-[50%] w-[1px] h-full top-0 z-10"
          style={{
            backgroundColor: "rgba(9, 175, 244, 0.15)",
            opacity: 1,
          }}
        ></span>
        <span
          className="dot absolute left-[60%] w-[1px] h-full top-0 z-10"
          style={{
            backgroundColor: "rgba(9, 175, 244, 0.15)",
            opacity: 1,
          }}
        ></span>
        <span
          className="dot absolute left-[70%] w-[1px] h-full top-0 z-10"
          style={{
            backgroundColor: "rgba(9, 175, 244, 0.15)",
            opacity: 1,
          }}
        ></span>
        <span
          className="dot absolute left-[80%] w-[1px] h-full top-0 z-10"
          style={{
            backgroundColor: "rgba(9, 175, 244, 0.15)",
            opacity: 1,
          }}
        ></span>
        <span
          className="dot absolute left-[90%] w-[1px] h-full top-0 z-10"
          style={{
            backgroundColor: "rgba(9, 175, 244, 0.15)",
            opacity: 1,
          }}
        ></span>
      </div>

      <div className="container z-50 px-4 mx-auto sm:mt-10 md:pt-[60px] lg:pt-[80px] xl:pt-3">
        <div className="flex flex-col lg:flex-row items-center w-full">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="mt-0 relative">
              <div className="hero-icon mb-2 md:mb-4">
                <div className="hero-icon-1 py-1 md:py-2">
                  <ul className="flex justify-center lg:justify-start list-none">
                    <li className="flex items-center justify-center">
                      <a
                        href="#"
                        className="mr-6 md:mr-8 text-white z-50 transition-transform duration-300 text-[16px] md:text-[18px] ease-in-out hover:-translate-y-1 hover:text-footerarrow"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li className="flex items-center justify-center">
                      <a
                        href="#"
                        className="mr-6 md:mr-8 text-white z-50 transition-transform duration-300 text-[16px] md:text-[18px] ease-in-out hover:-translate-y-1 hover:text-footerarrow"
                      >
                        <FaYoutube />
                      </a>
                    </li>
                    <li className="flex items-center justify-center">
                      <a
                        href="#"
                        className="mr-6 md:mr-8 text-white z-50 transition-transform duration-300 text-[16px] md:text-[18px] ease-in-out hover:-translate-y-1 hover:text-footerarrow"
                      >
                        <IoLogoInstagram />
                      </a>
                    </li>
                    <li className="flex items-center justify-center">
                      <a
                        href="#"
                        className="mr-6 md:mr-8 text-white z-50 transition-transform duration-300 text-[16px] md:text-[18px] ease-in-out hover:-translate-y-1 hover:text-footerarrow"
                      >
                        <FaXTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row flex flex-wrap -mx-3">
                <div className="col w-full px-3 text-center lg:text-left">
                  <div className="flex items-center gap-1 justify-center lg:justify-start text-footerarrow inset-0 z-50 font-Jost font-semibold text-[14px] md:text-[16px] leading-6">
                    <GoDotFill />
                    IT SOLUTIONS
                    <GoDotFill />
                  </div>
                  <h1 className="text-[28px] sm:text-[36px] md:text-[46px] lg:text-[56px] xl:text-[68px] leading-[1.2] md:leading-[1.2] lg:leading-[76px] font-Jost font-black text-white relative mt-2">
                    Providing Best Services & IT
                  </h1>
                  <span className="relative text-[28px] sm:text-[36px] md:text-[46px] lg:text-[56px] xl:text-[68px] leading-[1.2] md:leading-[1.2] lg:leading-[76px] font-Jost font-bold text-footerarrow">
                    Solutions
                    <svg
                      className="absolute left-0 -bottom-2 w-full h-2 md:h-3 lg:h-4"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 5 Q 2.5 0, 5 5 T 10 5 T 15 5 T 20 5 T 25 5 T 30 5 T 35 5 T 40 5 T 45 5 T 50 5 T 55 5 T 60 5 T 65 5 T 70 5 T 75 5 T 80 5 T 85 5 T 90 5 T 95 5 T 100 5"
                        stroke="#09aff4"
                        strokeWidth="4"
                        fill="transparent"
                      />
                    </svg>
                  </span>
                </div>
                <div className="col-1 flex w-full lg:w-[83.333333%] px-3 mt-3 md:mt-4 justify-center lg:justify-start">
                  <p className="mb-4 md:mb-6 text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] md:leading-[30px] font-Jost font-normal text-white text-center lg:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sed architecto dolorum inventore totam adipisci
                  </p>
                </div>
                <div className="col-2 flex px-3 justify-center lg:justify-start w-full">
                  <div className="inline-flex flex-row items-center flex-wrap justify-center">
                    <a
                      href="#"
                      className="mr-4 md:mr-6 text-[1rem] md:text-[1.15rem] min-w-[150px] md:min-w-[180px] text-footerarrow font-Jost leading-7 font-medium relative flex items-center justify-center text-center px-6 md:px-9 py-2 md:py-3 border-[2px] border-footerarrow rounded-[0.25rem] rounded-bl-[1rem] rounded-tr-[1rem] mb-4 sm:mb-0 transform duration-200 ease-in-out hover:bg-footerarrow hover:text-white"
                    >
                      Start Now
                    </a>
                    <div className="ml-0 md:ml-2">
                      <a href="#">
                        <div className="flex items-center justify-center">
                          <div
                            className="ply-btn relative rounded-[50%] p-[3px] md:p-[5px] cursor-pointer bg-footerarrow flex items-center justify-center w-[2.8rem] h-11 md:w-[3.5rem] md:h-14 origin-center transition-all duration-300 ease-in-out"
                            style={{
                              boxShadow:
                                "1px 1px 10px 5px rgba(var(--clr-dark-blue-rgb), 0.25)",
                            }}
                          >
                            <button className="ply-btn bg-footerarrow text-white px-3 rounded-[50%] flex items-center justify-center">
                              <FaPlay />
                            </button>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="mx-auto px-4">
              <div className="relative">
                <div>
                  <img
                    src={img1}
                    alt="Hero"
                    className="max-w-full h-auto mx-auto md:max-w-[90%] lg1:max-w-[85%] lg:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;