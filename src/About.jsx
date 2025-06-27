import React from "react";
import { GoDotFill } from "react-icons/go";
import { FaMedal } from "react-icons/fa6";
import img from "../src/img/signature-light.png";
import img1 from "../src/img/1.png";
import { IoLogoGameControllerB } from "react-icons/io";
import { TfiMapAlt } from "react-icons/tfi";
import { GrTechnology } from "react-icons/gr";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="pb-1 relative pt-20 z-0 bg-bgfooter">
        <div className="container">
          <div className="content-block mb-24 flex flex-col lg1:flex-row justify-between items-center">
            {/* Image section - shows first on mobile/tablet */}
            <div className="img px-3 order-1 lg1:order-2 mb-12 lg1:mb-0 w-full lg1:w-1/2">
              <div className="img-area flex justify-center lg1:justify-end">
                <div className="w-full max-w-xs sm:max-w-sm md1:max-w-md lg1:max-w-lg xl:max-w-xl">
                  <img
                    src={img1}
                    alt="About Us"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Content section - shows second on mobile/tablet */}
            <div className="row -mx-3 w-full lg1:w-1/2 order-2 lg1:order-1">
              <div className="about-text px-3">
                <div className="text relative py-12">
                  <div className="heading mb-6">
                    <div>
                      <span className="flex items-center justify-center lg1:justify-start gap-1 text-footerarrow font-Jost font-semibold text-[14px] sm:text-[16px] leading-6">
                        <GoDotFill />
                        ABOUT US
                        <GoDotFill />
                      </span>
                      <h2 className="font-Jost text-[28px] sm:text-[36px] md:text-[42px] lg1:text-[48px] mb-6 leading-[36px] sm:leading-[46px] md:leading-[54px] lg1:leading-[62px] font-medium text-white text-center lg1:text-left">
                        Trusted By Worldwide Clients Since
                        <span className="relative text-footerarrow">
                          1980
                          <svg
                            width="156"
                            height="40"
                            viewBox="0 0 256 40"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-[-10%] top-[75%] hidden lg1:block"
                          >
                            <path
                              d="M0 30 Q 100 0, 255 25"
                              stroke="#00AFFF"
                              strokeWidth="6"
                              fill="none"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                      </h2>
                    </div>
                    <div>
                      <p className="text-[16px] sm:text-[18px] mb-12 leading-[26px] sm:leading-[31px] font-Jost font-normal text-white opacity-85 text-center lg1:text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        A officia molestiae dolorum tempora ut accusamus
                        cupiditate! Nesciunt tempora reiciendis libero
                        voluptate!
                      </p>
                    </div>
                    <div>
                      <div className="row flex flex-wrap -mx-3">
                        <div className="box-1 px-3 w-full lg1:w-full xl:w-1/2 my-5 group">
                          <div className="box-info flex items-start justify-start">
                            <div className="text-[28px] sm:text-[32px] duration-300 group-hover:bg-footerarrow group-hover:text-white group-hover:border-footerarrow transition-transform group-hover:-translate-y-2 font-normal text-footerarrow p-3 mb-4 mr-5 bg-blog border border-blog rounded-[5px] flex-shrink-0">
                              <FaMedal />
                            </div>
                            <div className="info">
                              <h5 className="mb-3 text-[20px] sm:text-[24px] leading-6 sm:leading-7 font-Jost font-medium text-white">
                                First On Field
                              </h5>
                              <p className="mb-3 text-[14px] sm:text-[16px] leading-5 sm:leading-6 text-white opacity-85 font-Jost font-normal">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aspernatur, iste
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="box-2 px-3 w-full lg1:w-full xl:w-1/2 my-5 group">
                          <div className="box-info flex items-start justify-start">
                            <div className="text-[28px] sm:text-[32px] duration-300 group-hover:bg-footerarrow group-hover:text-white group-hover:border-footerarrow transition-transform group-hover:-translate-y-2 font-normal text-footerarrow p-3 mb-4 mr-5 bg-blog border border-blog rounded-[5px] flex-shrink-0">
                              <IoLogoGameControllerB />
                            </div>
                            <div className="info">
                              <h5 className="mb-3 text-[20px] sm:text-[24px] leading-6 sm:leading-7 font-Jost font-medium text-white">
                                Easy To Reach
                              </h5>
                              <p className="mb-3 text-[14px] sm:text-[16px] leading-5 sm:leading-6 text-white opacity-85 font-Jost font-normal">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aspernatur, iste
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="box-3 px-3 w-full lg1:w-full xl:w-1/2 my-5 group">
                          <div className="box-info flex items-start justify-start">
                            <div className="text-[28px] sm:text-[32px] duration-300 group-hover:bg-footerarrow group-hover:text-white group-hover:border-footerarrow transition-transform group-hover:-translate-y-2 font-normal text-footerarrow p-3 mb-4 mr-5 bg-blog border border-blog rounded-[5px] flex-shrink-0">
                              <TfiMapAlt />
                            </div>
                            <div className="info">
                              <h5 className="mb-3 text-[20px] sm:text-[24px] leading-6 sm:leading-7 font-Jost font-medium text-white">
                                Worldwide Services
                              </h5>
                              <p className="mb-3 text-[14px] sm:text-[16px] leading-5 sm:leading-6 text-white opacity-85 font-Jost font-normal">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aspernatur, iste
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="box-4 px-3 w-full lg1:w-full xl:w-1/2 my-5 group">
                          <div className="box-info flex items-start justify-start">
                            <div className="text-[28px] sm:text-[32px] duration-300 group-hover:bg-footerarrow group-hover:text-white group-hover:border-footerarrow transition-transform group-hover:-translate-y-2 font-normal text-footerarrow p-3 mb-4 mr-5 bg-blog border border-blog rounded-[5px] flex-shrink-0">
                              <GrTechnology />
                            </div>
                            <div className="info">
                              <h5 className="mb-3 text-[20px] sm:text-[24px] leading-6 sm:leading-7 font-Jost font-medium text-white">
                                24/7 Support
                              </h5>
                              <p className="mb-3 text-[14px] sm:text-[16px] leading-5 sm:leading-6 text-white opacity-85 font-Jost font-normal">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Aspernatur, iste
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col md1:flex-row flex-wrap mt-8 items-center md1:items-start">
                      <div className="btn w-full md1:w-1/2 mb-6 md1:mb-0">
                        <div className="box-info flex items-start justify-center md1:justify-start">
                          <Link
                            to="/about"
                            className="text-white transform duration-300 ease-in-out hover:bg-transparent hover:text-footerarrow font-Jost text-[14px] sm:text-[16px] font-medium bg-footerarrow px-6 sm:px-9 py-3 border-[2px] border-footerarrow rounded rounded-tr-[1rem] rounded-bl-2xl"
                          >
                            Get In Touch
                          </Link>
                        </div>
                      </div>

                      <div className="signature px-3 w-full md1:w-1/2 -mt-3">
                        <div className="box-info w-fit mx-auto md1:mx-0">
                          <div
                            className="sign w-[160px] sm:w-[200px] h-[56px] sm:h-[70px] bg-contain bg-no-repeat bg-center"
                            style={{ backgroundImage: `url(${img})` }}
                          ></div>
                          <div className="text-[14px] sm:text-[16px] leading-5 sm:leading-6 text-footerarrow font-Jost font-normal text-center">
                            CEO & Founder
                          </div>
                        </div>
                      </div>
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

export default About;