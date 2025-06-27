import React from "react";
import { GoDotFill } from "react-icons/go";
import img1 from "../src/img/2.png";
import { Link } from "react-router-dom";


const Choose = () => {
  return (
    <>
      <section className=" sm:-mt-10 lg1:py-16 xl:py-2 relative z-0 bg-bgfooter">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="content-block flex flex-col lg1:flex-row justify-between items-center gap-8 lg1:gap-12 xl:gap-16">
            
            {/* Image section - First on mobile, second on desktop (left side) */}
            <div className="w-full lg1:w-1/2 order-1 lg1:order-1">
              <div className="img-area flex justify-center lg1:justify-start">
                <div className="relative">
                  <img 
                    src={img1} 
                    alt="Why Choose Us" 
                    className="w-full h-auto max-w-xs sm:max-w-sm md1:max-w-md lg1:max-w-lg xl:max-w-xl object-contain" 
                  />
                </div>
              </div>
            </div>

            {/* Content section - Second on mobile, first on desktop (right side) */}
            <div className="w-full lg1:w-1/2 order-2 lg1:order-2">
              <div className="about-text">
                <div className="text relative">
                  
                  {/* Heading Section */}
                  <div className="heading mb-8 sm:mb-10 lg1:mb-12">
                    <div className="mb-6 sm:mb-8">
                      <span className="flex items-center justify-center lg1:justify-start gap-1 text-footerarrow font-Jost font-semibold text-sm sm:text-base mb-4 sm:mb-6">
                        <GoDotFill className="text-xs sm:text-sm" />
                        WHY CHOOSE US
                        <GoDotFill className="text-xs sm:text-sm" />
                      </span>
                      
                      <h2 className="font-Jost [word-spacing:2px] sm:[word-spacing:3px] text-2xl sm:text-3xl md1:text-4xl lg1:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight font-medium text-white text-center lg1:text-left">
                        Why Our Customers Choose
                        <span className="relative mx-1 sm:mx-2 text-footerarrow block sm:inline mt-2 sm:mt-0">
                          Working
                          <svg
                            width="156"
                            height="40"
                            viewBox="0 0 256 40"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute left-0 sm:left-[5%] top-full sm:top-[75%] w-full sm:w-auto hidden lg1:block"
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
                        <span className="block sm:inline mt-2 sm:mt-0">With Us</span>
                      </h2>
                    </div>
                    
                    <div className="mb-8 sm:mb-10 lg1:mb-12">
                      <p className="text-sm sm:text-base lg1:text-lg leading-relaxed font-Jost font-normal text-white opacity-85 text-center lg1:text-left max-w-2xl mx-auto lg1:mx-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        A officia molestiae dolorum tempora ut accusamus
                        cupiditate! Nesciunt tempora reiciendis libero
                        voluptate!
                      </p>
                    </div>
                    
                    {/* Features List */}
                    <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-10 lg1:mb-12">
                      
                      {/* Feature 1 */}
                      <div className="box-1 group">
                        <div className="box-info flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-4 sm:p-0">
                          <div className="text-3xl sm:text-4xl lg1:text-5xl font-Jost font-bold flex items-center text-footerarrow flex-shrink-0 self-center sm:self-start">
                            01.
                          </div>
                          <div className="info text-center sm:text-left">
                            <h5 className="mb-2 sm:mb-3 text-lg sm:text-xl lg1:text-2xl leading-tight font-Jost font-medium text-white">
                              Latest Technologies 
                            </h5>
                            <p className="text-sm sm:text-base leading-relaxed text-white opacity-85 font-Jost font-normal">
                              Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Aspernatur, iste
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Feature 2 */}
                      <div className="box-1 group">
                        <div className="box-info flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-4 sm:p-0">
                          <div className="text-3xl sm:text-4xl lg1:text-5xl font-Jost font-bold flex items-center text-footerarrow flex-shrink-0 self-center sm:self-start">
                            02.
                          </div>
                          <div className="info text-center sm:text-left">
                            <h5 className="mb-2 sm:mb-3 text-lg sm:text-xl lg1:text-2xl leading-tight font-Jost font-medium text-white">
                              Unique Solutions 
                            </h5>
                            <p className="text-sm sm:text-base leading-relaxed text-white opacity-85 font-Jost font-normal">
                              Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Aspernatur, iste
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Feature 3 */}
                      <div className="box-1 group">
                        <div className="box-info flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 p-4 sm:p-0">
                          <div className="text-3xl sm:text-4xl lg1:text-5xl font-Jost font-bold flex items-center text-footerarrow flex-shrink-0 self-center sm:self-start">
                            03.
                          </div>
                          <div className="info text-center sm:text-left">
                            <h5 className="mb-2 sm:mb-3 text-lg sm:text-xl lg1:text-2xl leading-tight font-Jost font-medium text-white">
                              Powerful Strategies
                            </h5>
                            <p className="text-sm sm:text-base leading-relaxed text-white opacity-85 font-Jost font-normal">
                              Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Aspernatur, iste
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center lg1:justify-start">
                      <Link
                        to="/about"
                        className="inline-block text-white transform duration-300 ease-in-out hover:bg-transparent hover:text-footerarrow font-Jost text-sm sm:text-base font-medium bg-footerarrow px-6 sm:px-8 lg1:px-10 py-3 sm:py-4 border-2 border-footerarrow rounded rounded-tr-2xl rounded-bl-2xl "
                      >
                        Get In Touch
                      </Link>
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

export default Choose;