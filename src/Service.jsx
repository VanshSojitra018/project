import React from "react";
import { GoDotFill } from "react-icons/go";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaCode } from "react-icons/fa";
import { FaConnectdevelop } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { GrDomain } from "react-icons/gr";
import { GrUserSettings } from "react-icons/gr";
import { ImSearch } from "react-icons/im";
import { PiStrategyLight } from "react-icons/pi";

const Service = () => {
  return (
    <section className="bg-bgfooter py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16">
          <div className="w-full lg:w-auto">
            <div className="flex items-center justify-center lg:justify-start text-footerarrow gap-2 md:mb-4">
              <GoDotFill className="text-sm" />
              <span className="font-semibold font-Jost text-sm md:text-base tracking-wider">SERVICES</span>
              <GoDotFill className="text-sm" />
            </div>
            <h2 className="text-[48px] font-Jost sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white mb-4 md:mb-6 text-center lg:text-left leading-tight">
              Services We Offer
            </h2>
            <p className="text-white/70 font-Jost text-base md:text-lg lg:text-xl leading-relaxed text-center lg:text-left max-w-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Omnis id atque dignissimos repellat quae ullam.
            </p>
          </div>
          
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <button className="flex items-center duration-500 hover:border-footerarrow hover:border-[2px] border-[2px] border-footerarrow hover:bg-transparent hover:text-footerarrow font-Jost gap-3 px-6 py-3 md:px-8 md:py-4 bg-footerarrow text-white text-base md:text-lg font-medium rounded-tl-lg rounded-br-lg rounded-tr rounded-bl ">
              See All Services 
              <HiArrowLongRight className="text-xl" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Web Development */}
          <div className="group border border-blue-500/30 rounded-lg p-6 lg:p-8 relative overflow-hidden before:absolute before:inset-0 before:bg-footerarrow before:w-0 before:transition-all before:duration-500 hover:before:w-full before:left-0">
            <div className="mb-6 relative z-10">
              <FaCode className="text-[48px] leading-[48px] text-footerarrow group-hover:text-white transition-colors duration-300 font-normal" />
            </div>
            
            <div className="mb-6 relative z-10">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
                Web Development
              </h3>
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.
              </p>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-footerarrow group-hover:text-white font-semibold text-base transition-colors duration-300 group relative z-10"
            >
              Read More 
              <GoArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Digital Marketing */}
          <div className="group border border-blue-500/30 rounded-lg p-6 lg:p-8 relative overflow-hidden before:absolute before:inset-0 before:bg-footerarrow before:w-0 before:transition-all before:duration-500 hover:before:w-full before:left-0">
            <div className="mb-6 relative z-10">
              <FaConnectdevelop className="text-[48px] leading-[48px] text-footerarrow group-hover:text-white transition-colors duration-300 font-normal" />
            </div>
            
            <div className="mb-6 relative z-10">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
                Digital Marketing
              </h3>
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.
              </p>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-footerarrow group-hover:text-white font-semibold text-base transition-colors duration-300 group relative z-10"
            >
              Read More 
              <GoArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* SaaS Products */}
          <div className="group border border-blue-500/30 rounded-lg p-6 lg:p-8 relative overflow-hidden before:absolute before:inset-0 before:bg-footerarrow before:w-0 before:transition-all before:duration-500 hover:before:w-full before:left-0">
            <div className="mb-6 relative z-10">
              <GrDomain className="text-[48px] leading-[48px] text-footerarrow group-hover:text-white transition-colors duration-300 font-normal" />
            </div>
            
            <div className="mb-6 relative z-10">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
                SaaS Products
              </h3>
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.
              </p>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-footerarrow group-hover:text-white font-semibold text-base transition-colors duration-300 group relative z-10"
            >
              Read More 
              <GoArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Apps Development */}
          <div className="group border border-blue-500/30 rounded-lg p-6 lg:p-8 relative overflow-hidden before:absolute before:inset-0 before:bg-footerarrow before:w-0 before:transition-all before:duration-500 hover:before:w-full before:left-0">
            <div className="mb-6 relative z-10">
              <GrUserSettings className="text-[48px] leading-[48px] text-footerarrow group-hover:text-white transition-colors duration-300 font-normal" />
            </div>
            
            <div className="mb-6 relative z-10">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
                Apps Development
              </h3>
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.
              </p>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-footerarrow group-hover:text-white font-semibold text-base transition-colors duration-300 group relative z-10"
            >
              Read More 
              <GoArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* SEO Services */}
          <div className="group border border-blue-500/30 rounded-lg p-6 lg:p-8 relative overflow-hidden before:absolute before:inset-0 before:bg-footerarrow before:w-0 before:transition-all before:duration-500 hover:before:w-full before:left-0">
            <div className="mb-6 relative z-10">
              <ImSearch className="text-[48px] leading-[48px] text-footerarrow group-hover:text-white transition-colors duration-300 font-normal" />
            </div>
            
            <div className="mb-6 relative z-10">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
                SEO Services
              </h3>
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.
              </p>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-footerarrow group-hover:text-white font-semibold text-base transition-colors duration-300 group relative z-10"
            >
              Read More 
              <GoArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Data Analysis */}
          <div className="group border border-blue-500/30 rounded-lg p-6 lg:p-8 relative overflow-hidden before:absolute before:inset-0 before:bg-footerarrow before:w-0 before:transition-all before:duration-500 hover:before:w-full before:left-0">
            <div className="mb-6 relative z-10">
              <PiStrategyLight className="text-[48px] leading-[48px] text-footerarrow group-hover:text-white transition-colors duration-300 font-normal" />
            </div>
            
            <div className="mb-6 relative z-10">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">
                Data Analysis
              </h3>
              <p className="text-white/80 text-base md:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellendus minima reiciendis nobis dolore obcaecati.
              </p>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-footerarrow group-hover:text-white font-semibold text-base transition-colors duration-300 group relative z-10"
            >
              Read More 
              <GoArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;