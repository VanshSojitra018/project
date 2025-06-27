import React from 'react'
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import img from "../src/img/innerAbout.jpg";

const Introduction = ({title , title2}) => {
  return (
    <div>
       <section
              className="h-[100vh] sm:h-[80vh] md:h-[70vh] lg:h-[60vh] min-h-[500px] sm:min-h-[600px] md:min-h-[500px] lg:min-h-[60vh] bg-cover bg-center relative flex items-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute inset-0 bg-bgfooter opacity-75"></div>
              <div className="container px-4 sm:px-6 md:px-8 w-full">
                <div className="relative z-10 text text-center">
                  <h1 className="text-white font-Jost mb-2 sm:mb-3 md:mb-4 lg:mb-2 text-[28px] sm:text-[32px] sm1:text-[36px] md1:text-[40px] md:text-[44px] lg1:text-[48px] lg:text-[52px] xl:text-[56px] leading-[34px] sm:leading-[38px] sm1:leading-[42px] md1:leading-[46px] md:leading-[50px] lg1:leading-[54px] lg:leading-[58px] xl:leading-[67px] font-black text-center">
                    {title}
                  </h1>
                  <div className="flex justify-center">
                    <ul className="list-none flex items-center gap-2">
                      <li>
                        <Link
                          to="/"
                          className="text-white duration-300 hover:text-footerarrow text-[14px] sm:text-[15px] md:text-[16px] leading-5 sm:leading-5 md:leading-6 font-Jost font-semibold flex items-center gap-1 sm:gap-2"
                        >
                          <IoHome className="text-[14px] sm:text-[16px]" />
                          Home
                        </Link>
                      </li>
                      <li className="text-white text-[14px] sm:text-[15px] md:text-[16px] leading-5 sm:leading-5 md:leading-6 font-Jost font-semibold opacity-75">
                        {title2}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
    </div>
  )
}

export default Introduction
