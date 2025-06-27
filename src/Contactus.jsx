import React, { useEffect, useState } from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import { IoIosMail } from "react-icons/io";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Loader from "./Loader";

const Contactus = () => {
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
  
      // Scroll to top on page load
      window.scrollTo(0, 0);
  
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) return <Loader />;
  return (
    <>
      <Header />
      <Introduction title="Contact Us" title2=" / Contact Us" />
      <section className="py-20 md:py-40 bg-bgfooter relative z-0">
        <div className="container px-4">
          <div className="heading mb-8 md:mb-12 relative text-center">
            <div className="max-w-full">
              <h2 className="capitalize text-white font-Jost text-[2rem] sm:text-[2.5rem] lg:text-[3rem] leading-[40px] sm:leading-[50px] lg:leading-[62px] font-medium">
                our offices around the world
              </h2>
            </div>
          </div>
          <div className="panel relative">
            <div>
              {/* Responsive grid: block on mobile/tablet, 3 columns on laptop+ */}
              <div className="flex flex-col lg1:flex-row lg1:flex-wrap -mb-3">
                {/* New York Office */}
                <div className="panel-1 w-full lg1:w-[33.33333%] px-3 mb-6 lg1:mb-0">
                  <div
                    className="flex flex-col pt-8 px-4 mb-6 border border-opacity-45 border-footerarrow rounded-br-[0.5rem] rounded-bl-[0.5rem] border-t-[0.25rem]"
                    style={{ borderTopColor: "rgba(9, 175, 244)" }}
                  >
                    <div className="location">
                      <h4 className="capitalize font-Jost text-white text-[1.25rem] md:text-[1.5rem] font-medium mb-2">
                        new york
                      </h4>
                    </div>
                    <div className="line mb-6 md:mb-8 w-16 h-[2px] relative bg-footerarrow rounded-2xl"></div>
                    <p className="mb-6 md:mb-9 text-[16px] md:text-[20px] leading-6 md:leading-8 font-Jost font-normal capitalize text-white opacity-75">
                      United States, 307 Wilshire, 2nd av. new york 3516.
                    </p>

                    <div className="location-card flex items-center mb-6 md:mb-8 group">
                      <IoIosMail className="flex items-center justify-center text-[1.25rem] md:text-[1.5rem] px-2 w-10 h-10 md:w-12 md:h-12 text-footerarrow bg-footerarrow bg-opacity-15 rounded-md mr-4 duration-300 group-hover:bg-footerarrow group-hover:text-white" />
                      <div>
                        <h6 className="capitalize text-[1.1rem] md:text-[1.25rem] font-Jost text-footerarrow font-medium">
                          email:
                        </h6>
                        <a
                          href="#"
                          className="text-[1rem] md:text-[1.1rem] font-Jost font-normal text-white opacity-75 duration-300 group-hover:text-white group-hover:opacity-100"
                        >
                          info@example.com
                        </a>
                      </div>
                    </div>

                    <div className="location-card flex items-center mb-6 md:mb-8 group">
                      <BiPhoneCall className="flex items-center justify-center text-[1.25rem] md:text-[1.5rem] px-2 w-10 h-10 md:w-12 md:h-12 text-footerarrow bg-footerarrow bg-opacity-15 rounded-md mr-4 duration-300 group-hover:bg-footerarrow group-hover:text-white" />
                      <div>
                        <h6 className="capitalize text-[1.1rem] md:text-[1.25rem] font-Jost text-footerarrow font-medium">
                          Phone:
                        </h6>
                        <a
                          href="#"
                          className="text-[1rem] md:text-[1.1rem] font-Jost font-normal text-white opacity-75 duration-300 group-hover:text-white group-hover:opacity-100"
                        >
                          +2987654321
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* London Office */}
                <div className="panel-2 w-full lg1:w-[33.33333%] px-3 mb-6 lg1:mb-0">
                  <div
                    className="flex flex-col pt-8 px-4 mb-6 border border-opacity-45 border-footerarrow rounded-br-[0.5rem] rounded-bl-[0.5rem] border-t-[0.25rem]"
                    style={{ borderTopColor: "rgba(9, 175, 244)" }}
                  >
                    <div className="location">
                      <h4 className="capitalize font-Jost text-white text-[1.25rem] md:text-[1.5rem] font-medium mb-2">
                        london
                      </h4>
                    </div>
                    <div className="line mb-6 md:mb-8 w-16 h-[2px] relative bg-footerarrow rounded-2xl"></div>
                    <p className="mb-6 md:mb-9 text-[16px] md:text-[20px] leading-6 md:leading-8 font-Jost font-normal capitalize text-white opacity-75">
                      United kingdom, 12 smith town, 2nd av. London 2159.
                    </p>

                    <div className="location-card flex items-center mb-6 md:mb-8 group">
                      <IoIosMail className="flex items-center justify-center text-[1.25rem] md:text-[1.5rem] px-2 w-10 h-10 md:w-12 md:h-12 text-footerarrow bg-footerarrow bg-opacity-15 rounded-md mr-4 duration-300 group-hover:bg-footerarrow group-hover:text-white" />
                      <div>
                        <h6 className="capitalize text-[1.1rem] md:text-[1.25rem] font-Jost text-footerarrow font-medium">
                          email:
                        </h6>
                        <a
                          href="#"
                          className="text-[1rem] md:text-[1.1rem] font-Jost font-normal text-white opacity-75 duration-300 group-hover:text-white group-hover:opacity-100"
                        >
                          info@example.com
                        </a>
                      </div>
                    </div>

                    <div className="location-card flex items-center mb-6 md:mb-8 group">
                      <BiPhoneCall className="flex items-center justify-center text-[1.25rem] md:text-[1.5rem] px-2 w-10 h-10 md:w-12 md:h-12 text-footerarrow bg-footerarrow bg-opacity-15 rounded-md mr-4 duration-300 group-hover:bg-footerarrow group-hover:text-white" />
                      <div>
                        <h6 className="capitalize text-[1.1rem] md:text-[1.25rem] font-Jost text-footerarrow font-medium">
                          Phone:
                        </h6>
                        <a
                          href="#"
                          className="text-[1rem] md:text-[1.1rem] font-Jost font-normal text-white opacity-75 duration-300 group-hover:text-white group-hover:opacity-100"
                        >
                          +96987654321
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tokyo Office */}
                <div className="panel-3 w-full lg1:w-[33.33333%] px-3 mb-6 lg1:mb-0">
                  <div
                    className="flex flex-col pt-8 px-4 mb-6 border border-footerarrow border-opacity-45 rounded-br-[0.5rem] rounded-bl-[0.5rem] border-t-[0.25rem]"
                    style={{ borderTopColor: "rgba(9, 175, 244)" }}
                  >
                    <div className="location">
                      <h4 className="capitalize font-Jost text-white text-[1.25rem] md:text-[1.5rem] font-medium mb-2">
                        tokio
                      </h4>
                    </div>
                    <div className="line mb-6 md:mb-8 w-16 h-[2px] relative bg-footerarrow rounded-2xl"></div>
                    <p className="mb-6 md:mb-9 text-[16px] md:text-[20px] leading-6 md:leading-8 font-Jost font-normal capitalize text-white opacity-75">
                      Japan, 307 chinzo appy road, portsika way. tokio 3516.
                    </p>

                    <div className="location-card flex items-center mb-6 md:mb-8 group">
                      <IoIosMail className="flex items-center justify-center text-[1.25rem] md:text-[1.5rem] px-2 w-10 h-10 md:w-12 md:h-12 text-footerarrow bg-footerarrow bg-opacity-15 rounded-md mr-4 duration-300 group-hover:bg-footerarrow group-hover:text-white" />
                      <div>
                        <h6 className="capitalize text-[1.1rem] md:text-[1.25rem] font-Jost text-footerarrow font-medium">
                          email:
                        </h6>
                        <a
                          href="#"
                          className="text-[1rem] md:text-[1.1rem] font-Jost font-normal text-white opacity-75 duration-300 group-hover:text-white group-hover:opacity-100"
                        >
                          info@example.com
                        </a>
                      </div>
                    </div>

                    <div className="location-card flex items-center mb-6 md:mb-8 group">
                      <BiPhoneCall className="flex items-center justify-center text-[1.25rem] md:text-[1.5rem] px-2 w-10 h-10 md:w-12 md:h-12 text-footerarrow bg-footerarrow bg-opacity-15 rounded-md mr-4 duration-300 group-hover:bg-footerarrow group-hover:text-white" />
                      <div>
                        <h6 className="capitalize text-[1.1rem] md:text-[1.25rem] font-Jost text-footerarrow font-medium">
                          Phone:
                        </h6>
                        <a
                          href="#"
                          className="text-[1rem] md:text-[1.1rem] font-Jost font-normal text-white opacity-75 duration-300 group-hover:text-white group-hover:opacity-100"
                        >
                          +45987654321
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* map block start */}
          <section className="pt-16 md:pt-24 lg:pt-32 relative z-0">
            <div className="map-heading text-center relative mb-8 md:mb-12 px-4">
              <div className="max-w-full">
                <h2 className="text-white font-Jost mb-3 capitalize text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3rem] leading-[32px] sm:leading-[42px] md:leading-[52px] lg:leading-[62px] font-medium">
                  find us on google maps
                </h2>
              </div>
            </div>
            <div className="map px-4 lg1:px-0">
              <div className="map-outer relative text-right h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full">
                <div className="map-inner overflow-hidden bg-none rounded-lg md:rounded-none">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2seg!4v1613762954590!5m2!1sen!2seg"
                    frameBorder="0"
                    className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-lg md:rounded-none"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
          {/* map block end */}

          {/* question block start */}
          <section className="pt-16 lg1:pt-32">
            <div className="heading-2 text-center relative mb-8 lg1:mb-12 px-4 lg1:px-0">
              <div className="max-w-full mb-8 lg1:mb-11">
                <h2 className="text-white font-Jost mb-3 capitalize text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] lg1:text-[3rem] leading-[32px] sm:leading-[42px] md:leading-[52px] lg1:leading-[62px] font-medium">
                  Have any questions? Let's answer them
                </h2>
              </div>
              <div>
                <div className="pt-6 lg1:pt-8 relative">
                  <form>
                    <div className="row flex flex-wrap -mx-3">
                      {/* Name Field */}
                      <div className="name px-3 w-full lg1:flex-auto lg1:w-1/2">
                        <div className="input relative mb-8 lg1:mb-12">
                          <input
                            type="text"
                            className="border border-white border-opacity-25 bg-bgfooter text-white w-full p-3 lg1:p-3 outline-none mb-4"
                          />
                          <label className="absolute -top-6 lg1:-top-8 text-[0.9rem] lg1:text-[1rem] font-Jost font-semibold capitalize left-0 text-white">
                            Name <span className="text-red-600">*</span>
                          </label>
                        </div>
                      </div>

                      {/* Email Field */}
                      <div className="email px-3 w-full lg1:flex-auto lg1:w-1/2">
                        <div className="input relative mb-8 lg1:mb-12">
                          <input
                            type="email"
                            className="border border-white border-opacity-25 bg-bgfooter text-white w-full p-3 lg1:p-3 outline-none mb-4"
                          />
                          <label className="absolute -top-6 lg1:-top-8 text-[0.9rem] lg1:text-[1rem] font-Jost font-semibold capitalize left-0 text-white">
                            Email <span className="text-red-600">*</span>
                          </label>
                        </div>
                      </div>

                      {/* Subject Field */}
                      <div className="subject px-3 w-full lg1:flex-auto lg1:w-full">
                        <div className="input relative mb-8 lg1:mb-12">
                          <input
                            type="text"
                            className="border border-white border-opacity-25 bg-bgfooter text-white w-full p-3 lg1:p-3 outline-none mb-4"
                          />
                          <label className="absolute -top-6 lg1:-top-8 text-[0.9rem] lg1:text-[1rem] font-Jost font-semibold capitalize left-0 text-white">
                            Subject <span className="text-red-600">*</span>
                          </label>
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="your-msg px-3 w-full lg1:flex-auto lg1:w-full">
                        <div className="input relative mb-8 lg1:mb-12">
                          <textarea
                            name="message"
                            className="border border-white border-opacity-25 bg-bgfooter text-white w-full p-3 lg1:p-3 outline-none mb-4 min-h-32 lg1:min-h-40"
                          ></textarea>
                          <label className="absolute -top-6 lg1:-top-8 text-[0.9rem] lg1:text-[1rem] font-Jost font-semibold capitalize left-0 text-white">
                            Your Message <span className="text-red-600">*</span>
                          </label>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="plan-btn w-full flex justify-center lg1:block lg1:w-auto">
                        <Link
                          to="/"
                          className="text-white ml-0 lg1:ml-3 capitalize text-center py-2 sm:py-2.5 lg1:py-3 px-6 sm:px-7 lg1:px-9 bg-footerarrow text-[14px] sm:text-[16px] lg1:text-[18px] leading-6 sm:leading-6 lg1:leading-7 font-Jost font-medium shadow-custom-blue transition-all duration-300 ease-in-out rounded-bl-[0.75rem] sm:rounded-bl-[1rem] rounded-[0.25rem] rounded-tr-[0.75rem] sm:rounded-tr-[1rem] border-2 border-transparent hover:bg-transparent hover:border-footerarrow hover:text-footerarrow"
                        >
                          <span>send your message</span>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* question block end */}
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contactus;
