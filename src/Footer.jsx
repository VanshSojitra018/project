import React from "react";
import img from "./img/footer-bg-1.jpg";
import img1 from "./img/logo-colored.png";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationOutline } from "react-icons/io5";
import { CiMobile2 } from "react-icons/ci";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="pt-8 sm:pt-12 lg:pt-16 relative z-0 bg-bgfooter">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="opacity-25 absolute inset-0 -z-[1] block"
        ></div>
        <div className="container px-4 mx-auto">
          <div className="foooter-row flex w-full flex-wrap mx-[-12px]">
            {/* About Column - Full width on small screens, 1/3 on larger screens */}
            <div className="w-full md:w-1/2 lg:w-[33.33333%] px-3 mb-8">
              <img src={img1} alt="img1" className="max-w-[180px] sm:max-w-[200px] mb-4 sm:mb-6 h-auto" />
              <div>
                <p className="text-[14px] sm:text-[16px] font-medium leading-[24px] sm:leading-[28px] text-white font-Jost mb-4 sm:mb-6 pr-0 md:pr-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatibus facere modi possimus dignissimos, aliquam nobis
                  eaque? Voluptatem magnam quisquam rem.
                </p>
              </div>

              <form className="flex flex-col space-y-3 sm:space-y-4">
                <label className="text-[15px] sm:text-[16px] font-normal text-white mb-[-15px] font-Jost">
                  Subscribe To Our News Letter
                </label>
                <div className="flex flex-col sm:flex-row w-full">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full flex-grow py-2 sm:py-3 px-3 sm:px-4 bg-gray-700 bg-opacity-50 text-white placeholder-gray-300 font-Jost rounded-t sm:rounded-t-none sm:rounded-tl sm:rounded-bl z-10 focus:border-none focus:outline-none text-[14px]"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-footerarrow text-white font-bold py-2 sm:py-3 px-3 sm:px-4 font-Jost rounded-b sm:rounded-b-none sm:rounded-tr sm:rounded-br transition duration-200 z-10"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mt-[-10px] z-10 font-Jost">
                  *We Will Not Share Your Personal Info
                </p>
              </form>
            </div>

            {/* Links Columns - 50% width on small screens (2 columns), traditional layout on larger screens */}
            <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-[16.6666667%] px-3 mb-6">
              <h2 className="text-[18px] lg:text-[20px] leading-6 font-Jost font-semibold text-white mb-4 sm:mb-6">
                Useful Links
              </h2>
              <div>
                <ul className="list-none p-0 m-0">
                  <li className="flex items-center gap-1 sm:gap-2 pb-2 sm:pb-4">
                    <HiMiniArrowLongRight className="text-footerarrow" />
                    <a
                      href="#"
                      className="text-white font-Jost text-[13px] sm:text-[14px] leading-5 sm:leading-6 font-medium duration-300 hover:pl-1"
                    >
                      Google
                    </a>
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2 pb-2 sm:pb-4">
                    <HiMiniArrowLongRight className="text-footerarrow" />
                    <a
                      href="#"
                      className="text-white font-Jost text-[13px] sm:text-[14px] leading-5 sm:leading-6 font-medium duration-300 hover:pl-1"
                    >
                      Dribbble
                    </a>
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2 pb-2 sm:pb-4">
                    <HiMiniArrowLongRight className="text-footerarrow" />
                    <a
                      href="#"
                      className="text-white font-Jost text-[13px] sm:text-[14px] leading-5 sm:leading-6 font-medium duration-300 hover:pl-1"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2 pb-2 sm:pb-4">
                    <HiMiniArrowLongRight className="text-footerarrow" />
                    <a
                      href="#"
                      className="text-white font-Jost text-[13px] sm:text-[14px] leading-5 sm:leading-6 font-medium duration-300 hover:pl-1"
                    >
                      Wikipedia
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-[16.6666667%] px-3 mb-6">
              <h2 className="text-[18px] lg:text-[20px] leading-6 font-Jost font-semibold text-white mb-4 sm:mb-6">
                Resources
              </h2>
              <div>
                <ul className="list-none p-0 m-0">
                  <li className="flex items-center gap-1 sm:gap-2 pb-2 sm:pb-4">
                    <HiMiniArrowLongRight className="text-footerarrow" />
                    <a
                      href="#"
                      className="text-white font-Jost text-[13px] sm:text-[14px] leading-5 sm:leading-6 font-medium duration-300 hover:pl-1"
                    >
                      Support
                    </a>
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2 pb-2 sm:pb-4">
                    <HiMiniArrowLongRight className="text-footerarrow" />
                    <a
                      href="#"
                      className="text-white font-Jost text-[13px] sm:text-[14px] leading-5 sm:leading-6 font-medium duration-300 hover:pl-1"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2 pb-2 sm:pb-4">
                    <HiMiniArrowLongRight className="text-footerarrow" />
                    <a
                      href="#"
                      className="text-white font-Jost text-[13px] sm:text-[14px] leading-5 sm:leading-6 font-medium duration-300 hover:pl-1"
                    >
                      Drivers
                    </a>
                  </li>
                  <li className="flex items-center gap-1 sm:gap-2 pb-2 sm:pb-4">
                    <HiMiniArrowLongRight className="text-footerarrow" />
                    <a
                      href="#"
                      className="text-white font-Jost text-[13px] sm:text-[14px] leading-5 sm:leading-6 font-medium duration-300 hover:pl-1"
                    >
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Column - Full width on small screens, 1/3 on larger screens */}
            <div className="w-full md:w-full lg:w-[33.3333333%] px-3 mb-6">
              <h2 className="text-[18px] lg:text-[20px] leading-6 font-Jost font-semibold text-white mb-4 sm:mb-6">
                Contact Information
              </h2>
              <div>
                <ul className="list-none p-0 m-0">
                  <div className="flex items-center gap-2 pb-3 sm:pb-4 mb-1 sm:mb-2">
                    <TfiEmail className="text-footerarrow text-[20px] sm:text-[24px]" />
                    <a
                      href="https://mail.google.com"
                      className="text-white font-Jost text-[13px] sm:text-[14px] leading-5 sm:leading-6 font-medium duration-300 hover:pl-1"
                    >
                      example@support.com
                    </a>
                  </div>

                  <div className="flex items-center gap-2 pb-3 sm:pb-4 mb-1 sm:mb-2">
                    <IoLocationOutline className="text-footerarrow text-[20px] sm:text-[24px]" />
                    <p className="text-white font-Jost text-[13px] sm:text-[14px] leading-5 sm:leading-6 font-medium duration-300 hover:pl-1">
                      5 xyz st., abc, alexandria, egypt.
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pb-3 sm:pb-4 mb-1 sm:mb-2">
                    <CiMobile2 className="text-footerarrow text-[20px] sm:text-[24px]" />
                    <a
                      href="tel:+7777901997"
                      className="text-white font-Jost text-[13px] sm:text-[14px] leading-5 sm:leading-6 font-medium duration-300 hover:pl-1"
                    >
                      +20123456789
                    </a>
                  </div>

                  <div className="py-2 sm:py-3">
                    <ul className="flex">
                      <li className="flex mr-2 sm:mr-3 w-7 h-7 sm:w-8 sm:h-8 text-[12px] sm:text-[14px] bg-footerarrow text-white items-center justify-center rounded hover:bg-white hover:text-footerarrow hover:-translate-y-1 transform duration-300 ease-in-out">
                        <a
                          href="#"
                          className="w-full items-center justify-center flex h-full"
                        >
                          <FaFacebookF />
                        </a>
                      </li>
                      <li className="flex mr-2 sm:mr-3 w-7 h-7 sm:w-8 sm:h-8 text-[12px] sm:text-[14px] bg-footerarrow text-white items-center justify-center rounded hover:bg-white hover:text-footerarrow hover:-translate-y-1 transform duration-300 ease-in-out">
                        <a
                          href="#"
                          className="w-full items-center justify-center flex h-full"
                        >
                          <FaYoutube />
                        </a>
                      </li>
                      <li className="flex mr-2 sm:mr-3 w-7 h-7 sm:w-8 sm:h-8 text-[12px] sm:text-[14px] bg-footerarrow text-white items-center justify-center rounded hover:bg-white hover:text-footerarrow hover:-translate-y-1 transform duration-300 ease-in-out">
                        <a
                          href="#"
                          className="w-full items-center justify-center flex h-full"
                        >
                          <FaInstagram />
                        </a>
                      </li>
                      <li className="flex mr-2 sm:mr-3 w-7 h-7 sm:w-8 sm:h-8 text-[12px] sm:text-[14px] bg-footerarrow text-white items-center justify-center rounded hover:bg-white hover:text-footerarrow hover:-translate-y-1 transform duration-300 ease-in-out">
                        <a
                          href="#"
                          className="w-full items-center justify-center flex h-full"
                        >
                          <FaXTwitter />
                        </a>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Copyright & Terms - Stack on mobile, side by side on larger screens */}
          <div className="flex flex-col md:flex-row -mx-3 items-center justify-between py-4 border-t border-gray-700 border-opacity-50">
            <div className="text-[12px] sm:text-[13px] text-white leading-5 font-Jost font-semibold px-3 mb-2 md:mb-0 text-center md:text-left">
              © 2024 Created by: <a href="#" className="hover:underline"> amin-themes</a>
            </div>
            <div className="px-3 text-white text-center md:text-right"> 
              <a href="#" className="text-[14px] sm:text-[16px] text-white leading-6 font-Jost font-semibold hover:underline">Terms of Use</a> | 
              <a href="#" className="text-[14px] sm:text-[16px] text-white leading-6 font-Jost font-semibold hover:underline"> Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;