import React from "react";
import { GoDotFill } from "react-icons/go";
import { HiArrowLongRight } from "react-icons/hi2";
import img from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import { CiBookmark } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";

const Blog = () => {
  return (
    <>
      <section className="bg-bgfooter py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
        <div className="container px-4 mx-auto">
          {/* Header section */}
          <div className="pricing-inner flex flex-col md:flex-row items-center justify-between flex-wrap gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
            <div className="inner-txt mb-4 md:mb-0 text-center md:text-left w-full md:w-auto">
              <span className="flex items-center justify-center md:justify-start text-footerarrow gap-1 leading-6 mb-2">
                <GoDotFill />
                BLOG
                <GoDotFill />
              </span>
              <h2 className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-Jost font-medium text-white">
                Latest News
              </h2>
            </div>
            <div className="plan-btn w-full md:w-auto">
              <a
                href="#"
                className="flex items-center text-white gap-2 md:gap-3 justify-center text-center py-2 px-4 md:py-3 md:px-9 bg-footerarrow text-sm sm:text-base md:text-lg xl:text-xl leading-7 font-Jost font-medium shadow-custom-blue transition-all duration-300 ease-in-out rounded-bl-[1rem] rounded-[0.25rem] rounded-tr-[1rem] border-2 border-transparent hover:bg-transparent hover:border-footerarrow hover:text-footerarrow w-full md:w-auto"
              >
                See All Plans <HiArrowLongRight />
              </a>
            </div>
          </div>

          {/* Blog posts grid */}
          <div className="flex flex-wrap -mx-3">
            {/* Blog Card 1 */}
            <div className="w-full sm:w-full md2:mx-16 md:mx-20 lg1:mx-32 lg:w-1/3 lg:mx-0 px-3 mb-6">
              <div className="bg-[rgba(34,139,230,0.15)] h-full group rounded overflow-hidden">
                <div className="post-box flex flex-col h-full">
                  <a href="#" className="block">
                    <div className="post-img w-full aspect-video overflow-hidden relative">
                      <img
                        src={img}
                        className="w-full h-full object-cover transition-all ease-in-out duration-500 group-hover:scale-110"
                        alt="Blog post"
                      />
                      <span className="absolute text-white bg-black bg-opacity-75 px-3 py-1 text-xs sm:text-sm top-3 left-3 right-auto font-Jost font-normal rounded-[5rem]">
                        05 sep 2022
                      </span>
                    </div>
                  </a>
                  <div className="post-summry p-3 sm:p-4 flex-grow flex flex-col">
                    <div className="post-info mb-2 flex flex-wrap gap-2 sm:gap-3">
                      <a
                        href="#"
                        className="flex items-center justify-center gap-1 font-Jost text-xs sm:text-sm leading-5 font-normal text-white opacity-40"
                      >
                        <CiBookmark className="text-footerarrow" />
                        Hosting
                      </a>
                      <a
                        href="#"
                        className="font-Jost text-xs sm:text-sm leading-5 font-normal text-white opacity-40"
                      >
                        |
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center gap-1 font-Jost text-xs sm:text-sm leading-5 font-normal text-white opacity-40"
                      >
                        <FaRegUser className="text-footerarrow" />
                        Allan Moore
                      </a>
                    </div>
                    <div className="post-text flex-grow flex flex-col">
                      <a href="#" className="post-link flex-grow flex flex-col">
                        <h2 className="mb-2 text-base sm:text-lg md:text-xl xl:text-2xl leading-tight font-Jost font-semibold text-white transition-all duration-400 hover:text-footerarrow">
                          How litespeed technology works to speed up your site
                        </h2>
                        <p className="mb-4 text-sm sm:text-base leading-relaxed font-Jost font-normal text-white">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Iure nulla dolorem, voluptates molestiae
                        </p>
                      </a>
                      <a
                        href="#"
                        className="group inline-flex w-fit items-center text-footerarrow gap-2 text-sm sm:text-base leading-6 font-Jost font-semibold mt-auto"
                      >
                        Read More
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          <HiArrowLongRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="w-full sm:w-full md2:mx-16 md:mx-20 lg1:mx-32 lg:w-1/3 lg:mx-0 px-3 mb-6">
              <div className="bg-[rgba(34,139,230,0.15)] h-full group rounded overflow-hidden">
                <div className="post-box flex flex-col h-full">
                  <a href="#" className="block">
                    <div className="post-img w-full aspect-video overflow-hidden relative">
                      <img
                        src={img2}
                        className="w-full h-full object-cover transition-all ease-in-out duration-500 group-hover:scale-110"
                        alt="Blog post"
                      />
                      <span className="absolute text-white bg-black bg-opacity-75 px-3 py-1 text-xs sm:text-sm top-3 left-3 right-auto font-Jost font-normal rounded-[5rem]">
                        05 sep 2022
                      </span>
                    </div>
                  </a>
                  <div className="post-summry p-3 sm:p-4 flex-grow flex flex-col">
                    <div className="post-info mb-2 flex flex-wrap gap-2 sm:gap-3">
                      <a
                        href="#"
                        className="flex items-center justify-center gap-1 font-Jost text-xs sm:text-sm leading-5 font-normal text-white opacity-40"
                      >
                        <CiBookmark className="text-footerarrow" />
                        Hosting
                      </a>
                      <a
                        href="#"
                        className="font-Jost text-xs sm:text-sm leading-5 font-normal text-white opacity-40"
                      >
                        |
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center gap-1 font-Jost text-xs sm:text-sm leading-5 font-normal text-white opacity-40"
                      >
                        <FaRegUser className="text-footerarrow" />
                        Allan Moore
                      </a>
                    </div>
                    <div className="post-text flex-grow flex flex-col">
                      <a href="#" className="post-link flex-grow flex flex-col">
                        <h2 className="mb-2 text-base sm:text-lg md:text-xl xl:text-2xl leading-tight font-Jost font-semibold text-white transition-all duration-400 hover:text-footerarrow">
                          How litespeed technology works to speed up your site
                        </h2>
                        <p className="mb-4 text-sm sm:text-base leading-relaxed font-Jost font-normal text-white">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Iure nulla dolorem, voluptates molestiae
                        </p>
                      </a>
                     <a
                        href="#"
                        className="group inline-flex w-fit items-center text-footerarrow gap-2 text-sm sm:text-base leading-6 font-Jost font-semibold mt-auto"
                      >
                        Read More
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          <HiArrowLongRight />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="w-full sm:w-full md2:mx-16 md:mx-20 lg1:mx-32 lg:w-1/3 lg:mx-0 px-3 mb-6 sm:mx-auto">
              <div className="bg-[rgba(34,139,230,0.15)] h-full group rounded overflow-hidden">
                <div className="post-box flex flex-col h-full">
                  <a href="#" className="block">
                    <div className="post-img w-full aspect-video overflow-hidden relative">
                      <img
                        src={img3}
                        className="w-full h-full object-cover transition-all ease-in-out duration-500 group-hover:scale-110"
                        alt="Blog post"
                      />
                      <span className="absolute text-white bg-black bg-opacity-75 px-3 py-1 text-xs sm:text-sm top-3 left-3 right-auto font-Jost font-normal rounded-[5rem]">
                        05 sep 2022
                      </span>
                    </div>
                  </a>
                  <div className="post-summry p-3 sm:p-4 flex-grow flex flex-col">
                    <div className="post-info mb-2 flex flex-wrap gap-2 sm:gap-3">
                      <a
                        href="#"
                        className="flex items-center justify-center gap-1 font-Jost text-xs sm:text-sm leading-5 font-normal text-white opacity-40"
                      >
                        <CiBookmark className="text-footerarrow" />
                        Hosting
                      </a>
                      <a
                        href="#"
                        className="font-Jost text-xs sm:text-sm leading-5 font-normal text-white opacity-40"
                      >
                        |
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center gap-1 font-Jost text-xs sm:text-sm leading-5 font-normal text-white opacity-40"
                      >
                        <FaRegUser className="text-footerarrow" />
                        Allan Moore
                      </a>
                    </div>
                    <div className="post-text flex-grow flex flex-col">
                      <a href="#" className="post-link flex-grow flex flex-col">
                        <h2 className="mb-2 text-base sm:text-lg md:text-xl xl:text-2xl leading-tight font-Jost font-semibold text-white transition-all duration-400 hover:text-footerarrow">
                          How litespeed technology works to speed up your site
                        </h2>
                        <p className="mb-4 text-sm sm:text-base leading-relaxed font-Jost font-normal text-white">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Iure nulla dolorem, voluptates molestiae
                        </p>
                      </a>
                     <a
                        href="#"
                        className="group inline-flex w-fit items-center text-footerarrow gap-2 text-sm sm:text-base leading-6 font-Jost font-semibold mt-auto"
                      >
                        Read More
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          <HiArrowLongRight />
                        </span>
                      </a>
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

export default Blog;
