import React from "react";
import img from "../src/img/pattern-bg-3.jpg";
import { GiLightBulb } from "react-icons/gi";
import { TbMessageCode } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

const Info = () => {
  return (
    <>
      <section className="bg-bgfooter z-0 relative py-20">
        <div  style={{ backgroundImage: `url(${img})` }} className="absolute w-full inset-0 opacity-20 z-[-1]"></div>
        <div className="container">
          <div className="flex flex-wrap justify-between">
            <div className="px-3 text-center w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-7 lg:mb-0">
              <div
                className="p-8 border border-footerarrow bg-bgfooter bg-opacity-30 border-opacity-25 border-t-[0.25rem] rounded-br-lg rounded-bl-lg"
                style={{ borderTopColor: "rgba(9, 175, 244)" }}
              >
                <GiLightBulb className="text-[48px] text-footerarrow mx-auto mb-4" />
                <p className="text-[48px] leading-[77px] font-Jost font-semibold text-white">
                  750<span className="ml-1">+</span>
                </p>
                <span className="text-white opacity-85 font-Jost lg:text-[16px] xl:text-[20px]">
                  Finished Projects
                </span>
              </div>
            </div>
            <div className="px-3 text-center w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-7 lg:mb-0">
              <div
                className="p-8 border border-footerarrow  bg-bgfooter bg-opacity-30 border-opacity-25 border-t-[0.25rem] rounded-br-lg rounded-bl-lg"
                style={{ borderTopColor: "rgba(9, 175, 244)" }}
              >
                <TbMessageCode className="text-[48px] text-footerarrow mx-auto mb-4" />
                <p className="text-[48px] leading-[77px] font-Jost font-semibold text-white">
                  23<span className="ml-1">+</span>
                </p>
                <span className="text-white opacity-85 font-Jost lg:text-[16px] xl:text-[20px]">
                  Created Jobs
                </span>
              </div>
            </div>
            <div className="px-3 text-center w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-7 lg:mb-0">
              <div
                className="p-8 border bg-bgfooter bg-opacity-30 border-footerarrow border-opacity-25 border-t-[0.25rem] rounded-br-lg rounded-bl-lg"
                style={{ borderTopColor: "rgba(9, 175, 244)" }}
              >
                <FaRegUser  className="text-[48px] text-footerarrow mx-auto mb-4" />
                <p className="text-[48px] leading-[77px] font-Jost font-semibold text-white">
                  200<span className="ml-1">+</span>
                </p>
                <span className="text-white opacity-85 font-Jost lg:text-[16px] xl:text-[20px]">
                  Happy Customers
                </span>
              </div>
            </div>
            <div className="px-3 text-center w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-7 lg:mb-0">
              <div
                className="p-8 border bg-bgfooter bg-opacity-30 border-footerarrow border-opacity-25 border-t-[0.25rem] rounded-br-lg rounded-bl-lg"
                style={{ borderTopColor: "rgba(9, 175, 244)" }}
              >
                <TbTargetArrow  className="text-[48px] text-footerarrow mx-auto mb-4" />
                <p className="text-[48px] leading-[77px] font-Jost font-semibold text-white">
                  28<span className="ml-1">+</span>
                </p>
                <span className="text-white opacity-85 font-Jost lg:text-[16px] xl:text-[20px]">
                  Years Of Exprience
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
