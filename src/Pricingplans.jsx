import React from "react";
import { GoDotFill } from "react-icons/go";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaUserAstronaut } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";
import { IoShapes } from "react-icons/io5";
import { Link } from "react-router-dom";

const Pricingplans = () => {
  return (
    <>
      <section className="bg-bgfooter pt-20">
        <div className="container px-4 mx-auto">
          <div className="pricing-inner flex flex-col md:flex-row items-center justify-between flex-wrap gap-6">
            <div className="inner-txt mb-6 md:mb-0 text-center md:text-left">
              <span className="flex items-center font-Jost font-semibold justify-center md:justify-start text-footerarrow gap-1 leading-6 mb-2">
                <GoDotFill />
                PRICING PLANS
                <GoDotFill />
              </span>
              <h2 className="mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Jost font-medium text-white">
                Affordable Pricing Plans
              </h2>
              <p className="text-white mb-5 text-base sm:text-lg md:text-xl leading-7 font-Jost font-normal opacity-65">
                Lorem ipsum dolor sit amet consectetur adipisicing elit Omnis{" "}
                <br className="hidden md:block" /> id atque dignissimos repellat
                quae ullam.
              </p>
            </div>
            <div className="plan-btn">
              <Link
                to="/PricingPlans"
                className="flex items-center text-white gap-3 justify-center text-center py-2 px-6 md:py-3 md:px-9 bg-footerarrow text-base sm:text-lg md:text-xl leading-7 font-Jost font-medium shadow-custom-blue transition-all duration-300 ease-in-out rounded-bl-[1rem] rounded-[0.25rem] rounded-tr-[1rem] border-2 border-transparent hover:bg-transparent hover:border-footerarrow hover:text-footerarrow"
              >
                See All Plans <HiArrowLongRight />
              </Link>
            </div>
          </div>

          <div className="mt-10 md:mt-16 flex flex-col md1:flex-row flex-wrap w-full justify-center sm1:gap-6 lg:gap-0 xl:justify-between">
            {/* Plan 1 - Free Plan */}
            <div className="flex items-center justify-center border border-footerarrow rounded-tr-lg rounded-tl-lg w-full sm1:w-[85%] md1:w-[100%] md2:w-[100%] md:w-[100%] lg1:w-[31%] lg:w-[30%] lg:mx-2 lg:mb-3 xl:w-[24%] xl:mx-0 xl:mb-0 mx-auto md1:mx-0">
              <div
                className="py-8 px-4 w-full"
                style={{ borderColor: "rgba(var(--clr-main-rgb), 0.35)" }}
              >
                <div className="plan-head flex flex-col items-center text-center relative">
                  <RiComputerLine className="text-footerarrow text-5xl sm:text-[4rem] opacity-75 mb-4" />

                  <h4 className="text-white text-xl sm:text-[24px] leading-7 font-Jost font-semibold mb-5">
                    Free Plan
                  </h4>

                  <div className="plan-price mb-0 p-0 flex flex-col items-center relative">
                    <div className="relative flex items-start">
                      <sup className="absolute -left-4 top-2 text-footerarrow text-xl sm:text-[24px] font-Jost font-medium">
                        $
                      </sup>
                      <h3 className="text-5xl sm:text-[64px] leading-[64px] font-semibold font-Jost text-white">
                        00
                      </h3>
                    </div>

                    <span className="relative text-base sm:text-[1.1rem] italic opacity-75 p-1 text-white inline-block after:content-[''] after:block after:h-[3px] after:w-full after:bg-footerarrow after:mt-[20px]">
                      Per Project
                    </span>
                  </div>
                </div>

                <div>
                  <ul className="plan-details py-4 mb-4 list-none">
                    <li className="relative py-3 text-sm sm:text-base font-Jost font-normal flex items-center justify-center">
                      <span className="text-white">
                        150 Lorem, lpsum Dolor.
                      </span>
                    </li>
                    <li className="relative py-3 text-sm sm:text-base font-Jost font-normal flex items-center justify-center">
                      <span className="text-white">
                        20 Lorem ipsum dolor sit.
                      </span>
                    </li>
                    <li className="relative py-3 text-sm sm:text-base font-Jost font-normal flex items-center justify-center">
                      <span className="text-white">Lorem ipsum dolor sit.</span>
                    </li>
                    <li className="relative py-3 text-sm sm:text-base font-Jost font-normal flex items-center justify-center">
                      <span className="text-white">
                        Free Lorem ipsum dolor.
                      </span>
                    </li>
                    <li className="relative py-3 text-sm sm:text-base font-Jost font-normal flex items-center justify-center">
                      <span className="text-white">
                        Added Lorem ipsum dolor.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="plan-btn">
                  <a
                    href="#"
                    className="flex items-center text-footerarrow gap-2 sm:gap-3 justify-center text-center py-2 px-6 sm:py-3 sm:px-9 bg-transparent text-base sm:text-[18px] leading-7 font-Jost font-medium shadow-custom-blue transition-all duration-300 ease-in-out rounded-bl-[1rem] rounded-[0.25rem] rounded-tr-[1rem] border-2 border-footerarrow hover:bg-footerarrow hover:text-white"
                  >
                    Select Plan
                  </a>
                </div>
              </div>
            </div>

            {/* Plan 2 - Standard Plan */}
            <div className="flex items-center justify-center border border-footerarrow rounded-tr-lg rounded-tl-lg w-full sm1:w-[85%] md1:w-[100%] md2:w-[100%] md:w-[100%] lg1:w-[31%] lg:w-[30%] lg:mx-2 lg:mb-3 xl:w-[24%] xl:mx-0 xl:mb-0 mx-auto md1:mx-0">
              <div
                className="py-8 px-4 w-full"
                style={{ borderColor: "rgba(var(--clr-main-rgb), 0.35)" }}
              >
                <div className="plan-head flex flex-col items-center text-center relative">
                  <FaUserAstronaut className="text-footerarrow text-5xl sm:text-[4rem] opacity-75 mb-4" />

                  <h4 className="text-white text-xl sm:text-[24px] leading-7 font-Jost font-semibold mb-5">
                    Standard Plan
                  </h4>

                  <div className="plan-price mb-0 p-0 flex flex-col items-center relative">
                    <div className="relative flex items-start">
                      <sup className="absolute -left-4 top-2 text-footerarrow text-xl sm:text-[24px] font-Jost font-medium">
                        $
                      </sup>
                      <h3 className="text-5xl sm:text-[64px] leading-[64px] font-semibold font-Jost text-white">
                        85
                      </h3>
                    </div>

                    <span className="relative text-base sm:text-[1.1rem] italic opacity-75 p-1 text-white inline-block after:content-[''] after:block after:h-[3px] after:w-full after:bg-footerarrow after:mt-[20px]">
                      Per Project
                    </span>
                  </div>
                </div>
                <div>
                  <ul className="plan-details py-4 mb-4 list-none">
                    <li className="relative py-3 text-sm sm:text-base font-Jost font-normal flex items-center justify-center">
                      <span className="text-white">
                        150 Lorem, lpsum Dolor.
                      </span>
                    </li>
                    <li className="relative py-3 text-sm sm:text-base font-Jost font-normal flex items-center justify-center">
                      <span className="text-white">
                        20 Lorem ipsum dolor sit.
                      </span>
                    </li>
                    <li className="relative py-3 text-sm sm:text-base font-Jost font-normal flex items-center justify-center">
                      <span className="text-white">Lorem ipsum dolor sit.</span>
                    </li>
                    <li className="relative py-3 text-sm sm:text-base font-Jost font-normal flex items-center justify-center">
                      <span className="text-white">
                        Free Lorem ipsum dolor.
                      </span>
                    </li>
                    <li className="relative py-3 text-sm sm:text-base font-Jost font-normal flex items-center justify-center">
                      <span className="text-white">
                        Added Lorem ipsum dolor.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="plan-btn">
                  <a
                    href="#"
                    className="flex items-center text-footerarrow gap-2 sm:gap-3 justify-center text-center py-2 px-6 sm:py-3 sm:px-9 bg-transparent text-base sm:text-[18px] leading-7 font-Jost font-medium shadow-custom-blue transition-all duration-300 ease-in-out rounded-bl-[1rem] rounded-[0.25rem] rounded-tr-[1rem] border-2 border-footerarrow hover:bg-footerarrow hover:text-white"
                  >
                    Select Plan
                  </a>
                </div>
              </div>
            </div>

            {/* Plan 3 - Pro Plan */}
            <div className="flex relative overflow-hidden items-center justify-center bg-footerarrow border border-footerarrow rounded-tr-lg rounded-tl-lg w-full sm1:w-[85%] md1:w-[100%] lg:w-[30%] lg:mx-2 lg:mb-3 md2:w-[100%] md:w-[100%] lg1:w-[31%] xl:w-[24%] xl:mx-0 xl:mb-0 mx-auto md1:mx-0">
              <span class="before: inline-block px-20 py-1 text-footerarrow bg-white absolute top-12 -right-16  left-auto font-extrabold text-[0.85rem] rotate-45">
                most popular
              </span>
              <div
                className="py-8 px-4 w-full"
                style={{ borderColor: "rgba(var(--clr-main-rgb), 0.35)" }}
              >
                <div className="plan-head flex flex-col items-center text-center relative">
                  <BsBoxSeam className="text-white text-5xl sm:text-[4rem] opacity-75 mb-4" />

                  <h4 className="text-white text-xl sm:text-[24px] leading-7 font-Jost font-semibold mb-5">
                    Pro Plan
                  </h4>

                  <div className="plan-price mb-0 p-0 flex flex-col items-center relative">
                    <div className="relative flex items-start">
                      <sup className="absolute -left-4 top-2 text-white text-xl sm:text-[24px] font-Jost font-medium">
                        $
                      </sup>
                      <h3 className="text-5xl sm:text-[64px] leading-[64px] font-semibold font-Jost text-white">
                        150
                      </h3>
                    </div>

                    <span className="relative text-base sm:text-[1.1rem] italic opacity-75 p-1 text-white inline-block after:content-[''] after:block after:h-[3px] after:w-full after:bg-white after:mt-[20px]">
                      Per Project
                    </span>
                  </div>
                </div>
                <div>
                  <ul className="plan-details py-4 mb-4 list-none">
                    <li className="relative py-3 text-sm sm:text-base font-Jost font-normal flex items-center justify-center">
                      <span className="text-white">
                        150 Lorem, lpsum Dolor.
                      </span>
                    </li>
                    <li className="relative py-3 text-sm sm:text-base font-Jost font-normal flex items-center justify-center">
                      <span className="text-white">
                        20 Lorem ipsum dolor sit.
                      </span>
                    </li>
                    <li className="relative py-3 text-sm sm:text-base font-Jost font-normal flex items-center justify-center">
                      <span className="text-white">Lorem ipsum dolor sit.</span>
                    </li>
                    <li className="relative py-3 text-sm sm:text-base font-Jost font-normal flex items-center justify-center">
                      <span className="text-white">
                        Free Lorem ipsum dolor.
                      </span>
                    </li>
                    <li className="relative py-3 text-sm sm:text-base font-Jost font-normal flex items-center justify-center">
                      <span className="text-white">
                        Added Lorem ipsum dolor.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="plan-btn">
                  <a
                    href="#"
                    className="flex items-center text-white gap-2 sm:gap-3 justify-center text-center py-2 px-6 sm:py-3 sm:px-9 bg-transparent text-base sm:text-[18px] leading-7 font-Jost font-medium shadow-custom-blue transition-all duration-300 ease-in-out rounded-bl-[1rem] rounded-[0.25rem] rounded-tr-[1rem] border-2 border-white hover:bg-white hover:text-footerarrow"
                  >
                    Select Plan
                  </a>
                </div>
              </div>
            </div>

            {/* Plan 4 - Ultimate Plan */}
            <div className="flex items-center justify-center border border-footerarrow rounded-tr-lg rounded-tl-lg w-full sm1:w-[85%] md1:w-[100%] md2:w-[100%] md:w-[100%] lg1:w-[31%] lg:w-[30%] lg:mx-2 lg:mb-3 xl:w-[24%] xl:mx-0 xl:mb-0 mx-auto md1:mx-0">
              <div
                className="py-8 px-4 w-full"
                style={{ borderColor: "rgba(var(--clr-main-rgb), 0.35)" }}
              >
                <div className="plan-head flex flex-col items-center text-center relative">
                  <IoShapes className="text-footerarrow text-5xl sm:text-[4rem] opacity-75 mb-4" />

                  <h4 className="text-white text-xl sm:text-[24px] leading-7 font-Jost font-semibold mb-5">
                    Ultimate Plan
                  </h4>

                  <div className="plan-price mb-0 p-0 flex flex-col items-center relative">
                    <div className="relative flex items-start">
                      <sup className="absolute -left-4 top-2 text-footerarrow text-xl sm:text-[24px] font-Jost font-medium">
                        $
                      </sup>
                      <h3 className="text-5xl sm:text-[64px] leading-[64px] font-semibold font-Jost text-white">
                        210
                      </h3>
                    </div>

                    <span className="relative text-base sm:text-[1.1rem] italic opacity-75 p-1 text-white inline-block after:content-[''] after:block after:h-[3px] after:w-full after:bg-footerarrow after:mt-[20px]">
                      Per Project
                    </span>
                  </div>
                </div>
                <div>
                  <ul className="plan-details py-4 mb-4 list-none">
                    <li className="relative py-3 text-sm sm:text-base font-Jost font-normal flex items-center justify-center">
                      <span className="text-white">
                        150 Lorem, lpsum Dolor.
                      </span>
                    </li>
                    <li className="relative py-3 text-sm sm:text-base font-Jost font-normal flex items-center justify-center">
                      <span className="text-white">
                        20 Lorem ipsum dolor sit.
                      </span>
                    </li>
                    <li className="relative py-3 text-sm sm:text-base font-Jost font-normal flex items-center justify-center">
                      <span className="text-white">Lorem ipsum dolor sit.</span>
                    </li>
                    <li className="relative py-3 text-sm sm:text-base font-Jost font-normal flex items-center justify-center">
                      <span className="text-white">
                        Free Lorem ipsum dolor.
                      </span>
                    </li>
                    <li className="relative py-3 text-sm sm:text-base font-Jost font-normal flex items-center justify-center">
                      <span className="text-white">
                        Added Lorem ipsum dolor.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="plan-btn">
                  <a
                    href="#"
                    className="flex items-center text-footerarrow gap-2 sm:gap-3 justify-center text-center py-2 px-6 sm:py-3 sm:px-9 bg-transparent text-base sm:text-[18px] leading-7 font-Jost font-medium shadow-custom-blue transition-all duration-300 ease-in-out rounded-bl-[1rem] rounded-[0.25rem] rounded-tr-[1rem] border-2 border-footerarrow hover:bg-footerarrow hover:text-white"
                  >
                    Select Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricingplans;
