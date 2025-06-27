import React, { useState } from 'react'
import { GoDotFill } from "react-icons/go";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Allfaq = () => {
    const [openIndex, setOpenIndex] = useState(null);
    
      const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
  return (
    <>
        <section className="bg-bgfooter py-12 sm:py-16 md:py-20 relative z-0">
        <div className="container px-4 sm:px-6">
          <div className="faq-heading relative mb-8 sm:mb-10 md:mb-12">
            <div className="text-center max-w-full">
              <span className="flex items-center justify-center gap-1 text-footerarrow font-Jost font-semibold text-[14px] sm:text-[16px] leading-5 sm:leading-6">
                <GoDotFill />
                FAQ
                <GoDotFill />
              </span>
              <h2 className="mb-3 capitalize text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[32px] sm:leading-[42px] md:leading-[52px] lg:leading-[63px] font-Jost text-white font-medium px-2 sm:px-4 md:px-0">
                frequently asked questions
              </h2>
            </div>
          </div>
          <div className="faq-section">
            <div className="-mx-2 sm:-mx-3 flex flex-wrap">
              {/* Left Column */}
              <div className="faq-1 w-full lg:w-[50%] flex-auto max-w-full px-2 sm:px-3">
                {/* Q1 */}
                <div className="card-1 p-3 sm:p-4 mb-2 bg-transparent border border-footerarrow border-opacity-35 rounded-[5px]">
                  <h5 className="flex items-center">
                    <button
                      onClick={() => toggleFAQ(1)}
                      className="capitalize text-left text-footerarrow w-full pr-3 sm:pr-5 py-[6px] text-[16px] sm:text-[18px] leading-6 sm:leading-7 font-Jost font-bold"
                    >
                      are your service easy to use?
                    </button>
                    {openIndex === 1 ? (
                      <FaMinus className="text-footerarrow flex-shrink-0 text-[14px] sm:text-[16px]" />
                    ) : (
                      <FaPlus className="text-footerarrow flex-shrink-0 text-[14px] sm:text-[16px]" />
                    )}
                  </h5>
                  {openIndex === 1 && (
                    <div className="card-body p-3 sm:p-4">
                      <p className="text-white text-[14px] sm:text-[16px] leading-5 sm:leading-6 font-Jost font-normal">
                        mhmd, Anim pariatur cliche reprehenderit, enim eiusmod
                        high life accusamus terry richardson ad squid. 3 wolf
                        moon officia aute, non cupidatat skateboard dolor
                        brunch. Food truck quinoa nesciunt laborum eiusmod.
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
                        squid single-origin coffee nulla assumenda shoreditch
                        et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table.
                      </p>
                    </div>
                  )}
                </div>

                {/* Q2 */}
                <div className="card-1 p-3 sm:p-4 mb-2 bg-transparent border border-footerarrow border-opacity-35 rounded-[5px]">
                  <h5 className="flex items-center">
                    <button
                      onClick={() => toggleFAQ(2)}
                      className="capitalize text-left text-footerarrow w-full pr-3 sm:pr-5 py-[6px] text-[16px] sm:text-[18px] leading-6 sm:leading-7 font-Jost font-bold"
                    >
                      will i receive future updates ?
                    </button>
                    {openIndex === 2 ? (
                      <FaMinus className="text-footerarrow flex-shrink-0 text-[14px] sm:text-[16px]" />
                    ) : (
                      <FaPlus className="text-footerarrow flex-shrink-0 text-[14px] sm:text-[16px]" />
                    )}
                  </h5>
                  {openIndex === 2 && (
                    <div className="card-body p-3 sm:p-4">
                      <p className="text-white text-[14px] sm:text-[16px] leading-5 sm:leading-6 font-Jost font-normal">
                        mhmd, Anim pariatur cliche reprehenderit, enim eiusmod
                        high life accusamus terry richardson ad squid. 3 wolf
                        moon officia aute, non cupidatat skateboard dolor
                        brunch. Food truck quinoa nesciunt laborum eiusmod.
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
                        squid single-origin coffee nulla assumenda shoreditch
                        et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table.
                      </p>
                    </div>
                  )}
                </div>

                {/* Q3 */}
                <div className="card-1 p-3 sm:p-4 mb-2 bg-transparent border border-footerarrow border-opacity-35 rounded-[5px]">
                  <h5 className="flex items-center">
                    <button
                      onClick={() => toggleFAQ(3)}
                      className="capitalize text-left text-footerarrow w-full pr-3 sm:pr-5 py-[6px] text-[16px] sm:text-[18px] leading-6 sm:leading-7 font-Jost font-bold"
                    >
                      is this services work in my country ?
                    </button>
                    {openIndex === 3 ? (
                      <FaMinus className="text-footerarrow flex-shrink-0 text-[14px] sm:text-[16px]" />
                    ) : (
                      <FaPlus className="text-footerarrow flex-shrink-0 text-[14px] sm:text-[16px]" />
                    )}
                  </h5>
                  {openIndex === 3 && (
                    <div className="card-body p-3 sm:p-4">
                      <p className="text-white text-[14px] sm:text-[16px] leading-5 sm:leading-6 font-Jost font-normal">
                        mhmd, Anim pariatur cliche reprehenderit, enim eiusmod
                        high life accusamus terry richardson ad squid. 3 wolf
                        moon officia aute, non cupidatat skateboard dolor
                        brunch. Food truck quinoa nesciunt laborum eiusmod.
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
                        squid single-origin coffee nulla assumenda shoreditch
                        et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column (Duplicate Questions) */}
              <div className="faq-2 w-full lg:w-[50%] flex-auto max-w-full px-2 sm:px-3 lg:block">
                {/* Q4 */}
                <div className="card-1 p-3 sm:p-4 mb-2 bg-transparent border border-footerarrow border-opacity-35 rounded-[5px]">
                  <h5 className="flex items-center">
                    <button
                      onClick={() => toggleFAQ(4)}
                      className="capitalize text-left text-footerarrow w-full pr-3 sm:pr-5 py-[6px] text-[16px] sm:text-[18px] leading-6 sm:leading-7 font-Jost font-bold"
                    >
                      are your service easy to use?
                    </button>
                    {openIndex === 4 ? (
                      <FaMinus className="text-footerarrow flex-shrink-0 text-[14px] sm:text-[16px]" />
                    ) : (
                      <FaPlus className="text-footerarrow flex-shrink-0 text-[14px] sm:text-[16px]" />
                    )}
                  </h5>
                  {openIndex === 4 && (
                    <div className="card-body p-3 sm:p-4">
                      <p className="text-white text-[14px] sm:text-[16px] leading-5 sm:leading-6 font-Jost font-normal">
                        mhmd, Anim pariatur cliche reprehenderit, enim eiusmod
                        high life accusamus terry richardson ad squid. 3 wolf
                        moon officia aute, non cupidatat skateboard dolor
                        brunch. Food truck quinoa nesciunt laborum eiusmod.
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
                        squid single-origin coffee nulla assumenda shoreditch
                        et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table.
                      </p>
                    </div>
                  )}
                </div>

                {/* Q5 */}
                <div className="card-1 p-3 sm:p-4 mb-2 bg-transparent border border-footerarrow border-opacity-35 rounded-[5px]">
                  <h5 className="flex items-center">
                    <button
                      onClick={() => toggleFAQ(5)}
                      className="capitalize text-left text-footerarrow w-full pr-3 sm:pr-5 py-[6px] text-[16px] sm:text-[18px] leading-6 sm:leading-7 font-Jost font-bold"
                    >
                      will i receive future updates ?
                    </button>
                    {openIndex === 5 ? (
                      <FaMinus className="text-footerarrow flex-shrink-0 text-[14px] sm:text-[16px]" />
                    ) : (
                      <FaPlus className="text-footerarrow flex-shrink-0 text-[14px] sm:text-[16px]" />
                    )}
                  </h5>
                  {openIndex === 5 && (
                    <div className="card-body p-3 sm:p-4">
                      <p className="text-white text-[14px] sm:text-[16px] leading-5 sm:leading-6 font-Jost font-normal">
                        mhmd, Anim pariatur cliche reprehenderit, enim eiusmod
                        high life accusamus terry richardson ad squid. 3 wolf
                        moon officia aute, non cupidatat skateboard dolor
                        brunch. Food truck quinoa nesciunt laborum eiusmod.
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
                        squid single-origin coffee nulla assumenda shoreditch
                        et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table.
                      </p>
                    </div>
                  )}
                </div>

                {/* Q6 */}
                <div className="card-1 p-3 sm:p-4 mb-2 bg-transparent border border-footerarrow border-opacity-35 rounded-[5px]">
                  <h5 className="flex items-center">
                    <button
                      onClick={() => toggleFAQ(6)}
                      className="capitalize text-left text-footerarrow w-full pr-3 sm:pr-5 py-[6px] text-[16px] sm:text-[18px] leading-6 sm:leading-7 font-Jost font-bold"
                    >
                      is this services work in my country ?
                    </button>
                    {openIndex === 6 ? (
                      <FaMinus className="text-footerarrow flex-shrink-0 text-[14px] sm:text-[16px]" />
                    ) : (
                      <FaPlus className="text-footerarrow flex-shrink-0 text-[14px] sm:text-[16px]" />
                    )}
                  </h5>
                  {openIndex === 6 && (
                    <div className="card-body p-3 sm:p-4">
                      <p className="text-white text-[14px] sm:text-[16px] leading-5 sm:leading-6 font-Jost font-normal">
                        mhmd, Anim pariatur cliche reprehenderit, enim eiusmod
                        high life accusamus terry richardson ad squid. 3 wolf
                        moon officia aute, non cupidatat skateboard dolor
                        brunch. Food truck quinoa nesciunt laborum eiusmod.
                        Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
                        squid single-origin coffee nulla assumenda shoreditch
                        et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Allfaq
