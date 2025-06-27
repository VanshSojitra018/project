import React, { useEffect, useState } from "react";
import Header from "./Header";
import Introduction from "./Introduction";
import img1 from "../src/img/cert-1.jpg";
import img2 from "../src/img/cert-2.jpg";
import img3 from "../src/img/team-1.jpg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import Testi from "./Testi";
import Advertise from "./Advertise";
import Contact from "./Contact";
import Footer from "./Footer";
import Loader from "./Loader";

const Teammembar = () => {
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
      <Introduction title="Team Member" title2=" / Team Member" />
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 relative z-0 bg-bgfooter">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg1:flex-row gap-6 lg1:gap-8">
            {/* Main Content */}
            <div className="flex-1 lg1:w-[77%]">
              <div>
                <h3 className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-[32px] leading-7 sm:leading-8 lg:leading-9 font-Jost text-white font-medium">
                  Biography Overview.
                </h3>
                <p className="font-Jost mb-4 sm:mb-5 font-medium text-base sm:text-lg lg:text-[20px] leading-6 sm:leading-7 lg:leading-8 text-white opacity-75">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque hic praesentium, amet iste commodi et placeat, impedit
                  aut veniam maxime laudantium tempore ipsum quod mollitia alias
                  fugiat quis pariatur quidem magnam eaque eligendi?
                </p>
                <p className="font-Jost mb-4 sm:mb-5 font-medium text-base sm:text-lg lg:text-[20px] leading-6 sm:leading-7 lg:leading-8 text-white opacity-75">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Libero iusto perspiciatis a modi nisi magnam maiores dolores
                  aspernatur eveniet possimus, natus sed impedit quam eligendi
                  velit sunt recusandae dolorum corrupti!
                </p>
                <p className="font-Jost mb-4 sm:mb-5 font-medium text-base sm:text-lg lg:text-[20px] leading-6 sm:leading-7 lg:leading-8 text-white opacity-75">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  ipsa et voluptatibus possimus, recusandae tempore consequatur
                  necessitatibus vitae quia suscipit quidem ex. Harum
                  reprehenderit recusandae cumque magnam atque sunt repellat
                  saepe eius nihil expedita. Repudiandae quidem dolore rerum
                  soluta id?
                </p>
                
                {/* Certificates Section */}
                <h3 className="mt-12 sm:mt-16 lg:mt-20 mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-[32px] leading-7 sm:leading-8 lg:leading-9 font-Jost font-medium text-white capitalize">
                  my certificates!
                </h3>
                <div className="certificate">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="flex-1">
                      <img src={img1} className="w-full h-auto rounded-lg" alt="Certificate 1" />
                    </div>
                    <div className="flex-1">
                      <img src={img2} className="w-full h-auto rounded-lg" alt="Certificate 2" />
                    </div>
                  </div>
                </div>
                
                {/* Skills Section */}
                <h3 className="mt-12 sm:mt-16 lg:mt-20 mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-[32px] leading-7 sm:leading-8 lg:leading-9 font-Jost font-medium text-white capitalize">
                  my skills
                </h3>
                <div className="skills">
                  <div className="skill mb-4 sm:mb-6">
                    <div className="skill-data pb-2 flex items-center justify-between font-Jost font-semibold">
                      <div className="skill-name capitalize text-white text-sm sm:text-base">
                        web development
                      </div>
                      <div className="skill-value text-white text-sm sm:text-base">85%</div>
                    </div>
                    <div className="skill-bar w-full h-1 border-none opacity-75 border rounded-2xl overflow-hidden bg-white">
                      <div className="bg-footerarrow h-[inherit] rounded-[inherit] w-[85%] transition duration-1000 ease-in-out"></div>
                    </div>
                  </div>
                  <div className="skill mb-4 sm:mb-6">
                    <div className="skill-data pb-2 flex items-center justify-between font-Jost font-semibold">
                      <div className="skill-name capitalize text-white text-sm sm:text-base">
                        Ecommerce
                      </div>
                      <div className="skill-value text-white text-sm sm:text-base">70%</div>
                    </div>
                    <div className="skill-bar w-full h-1 border-none opacity-75 border rounded-2xl overflow-hidden bg-white">
                      <div className="bg-footerarrow h-[inherit] rounded-[inherit] w-[70%] transition duration-1000 ease-in-out"></div>
                    </div>
                  </div>
                  <div className="skill mb-4 sm:mb-6">
                    <div className="skill-data pb-2 flex items-center justify-between font-Jost font-semibold">
                      <div className="skill-name capitalize text-white text-sm sm:text-base">
                        Mobile Apps
                      </div>
                      <div className="skill-value text-white text-sm sm:text-base">90%</div>
                    </div>
                    <div className="skill-bar w-full h-1 border-none opacity-75 border rounded-2xl overflow-hidden bg-white">
                      <div className="bg-footerarrow h-[inherit] rounded-[inherit] w-[90%] transition duration-1000 ease-in-out"></div>
                    </div>
                  </div>
                  <div className="skill mb-4 sm:mb-6">
                    <div className="skill-data pb-2 flex items-center justify-between font-Jost font-semibold">
                      <div className="skill-name capitalize text-white text-sm sm:text-base">
                        Data Analysis
                      </div>
                      <div className="skill-value text-white text-sm sm:text-base">100%</div>
                    </div>
                    <div className="skill-bar w-full h-1 border-none opacity-75 border rounded-2xl overflow-hidden bg-white">
                      <div className="bg-footerarrow h-[inherit] rounded-[inherit] w-[100%] transition duration-1000 ease-in-out"></div>
                    </div>
                  </div>
                  <div className="skill mb-4 sm:mb-6">
                    <div className="skill-data pb-2 flex items-center justify-between font-Jost font-semibold">
                      <div className="skill-name capitalize text-white text-sm sm:text-base">
                        Cloud Computing
                      </div>
                      <div className="skill-value text-white text-sm sm:text-base">75%</div>
                    </div>
                    <div className="skill-bar w-full h-1 border-none opacity-75 border rounded-2xl overflow-hidden bg-white">
                      <div className="bg-footerarrow h-[inherit] rounded-[inherit] w-[75%] transition duration-1000 ease-in-out"></div>
                    </div>
                  </div>
                </div>
                
                {/* Work & Speciality Section */}
                <h3 className="mt-12 sm:mt-16 lg:mt-20 mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-[32px] leading-7 sm:leading-8 lg:leading-9 font-Jost font-medium text-white capitalize">
                  Work & speciality fields
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 list-none mb-6 sm:mb-8">
                  <li className="relative capitalize text-sm sm:text-base lg:text-[1.1rem] opacity-75 flex items-center gap-2 leading-6 sm:leading-7 font-Jost font-normal">
                    <IoMdCheckmarkCircleOutline className="text-footerarrow flex-shrink-0" />
                    <span className="text-white">
                      amet consectetur adipisicin geius nihil
                    </span>
                  </li>
                  <li className="relative capitalize text-sm sm:text-base lg:text-[1.1rem] opacity-75 flex items-center gap-2 leading-6 sm:leading-7 font-Jost font-normal">
                    <IoMdCheckmarkCircleOutline className="text-footerarrow flex-shrink-0" />
                    <span className="text-white">
                      Lorem ipsum dolor sit amet
                    </span>
                  </li>
                  <li className="relative capitalize text-sm sm:text-base lg:text-[1.1rem] opacity-75 flex items-center gap-2 leading-6 sm:leading-7 font-Jost font-normal">
                    <IoMdCheckmarkCircleOutline className="text-footerarrow flex-shrink-0" />
                    <span className="text-white">
                      eius nihil expedita. Repudiandae quidem
                    </span>
                  </li>
                  <li className="relative capitalize text-sm sm:text-base lg:text-[1.1rem] opacity-75 flex items-center gap-2 leading-6 sm:leading-7 font-Jost font-normal">
                    <IoMdCheckmarkCircleOutline className="text-footerarrow flex-shrink-0" />
                    <span className="text-white">
                      Lorem, ipsum dolor.Repudiandae quidem expedita.
                    </span>
                  </li>
                  <li className="relative capitalize text-sm sm:text-base lg:text-[1.1rem] opacity-75 flex items-center gap-2 leading-6 sm:leading-7 font-Jost font-normal">
                    <IoMdCheckmarkCircleOutline className="text-footerarrow flex-shrink-0" />
                    <span className="text-white">Lorem, ipsum dolor.</span>
                  </li>
                  <li className="relative capitalize text-sm sm:text-base lg:text-[1.1rem] opacity-75 flex items-center gap-2 leading-6 sm:leading-7 font-Jost font-normal">
                    <IoMdCheckmarkCircleOutline className="text-footerarrow flex-shrink-0" />
                    <span className="text-white">
                      Lorem ipsum dolor sit amet.quidem
                    </span>
                  </li>
                </ul>
                <p className="font-Jost mb-4 sm:mb-5 font-medium text-base sm:text-lg lg:text-[20px] leading-6 sm:leading-7 lg:leading-8 text-white opacity-75">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Libero iusto perspiciatis a modi nisi magnam maiores dolores
                  aspernatur eveniet possimus, natus sed impedit quam eligendi
                  velit sunt recusandae dolorum corrupti!
                </p>
                <p className="font-Jost mb-4 sm:mb-5 font-medium text-base sm:text-lg lg:text-[20px] leading-6 sm:leading-7 lg:leading-8 text-white opacity-75">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  ipsa et voluptatibus possimus, recusandae tempore consequatur
                  necessitatibus vitae quia suscipit quidem ex. Harum
                  reprehenderit recusandae cumque magnam atque sunt repellat
                  saepe eius nihil expedita. Repudiandae quidem dolore rerum
                  soluta id?
                </p>
              </div>
            </div>
            
            {/* Profile Sidebar */}
            <div className="w-full lg1:w-[23%] flex-shrink-0">
              <div className="profile bg-blog bg-opacity-20 text-center pb-8 sm:pb-12 mb-8 sm:mb-16 rounded-lg p-4 sm:p-6">
                <div className="profile-img mb-4 sm:mb-6">
                  <img 
                    src={img3} 
                    className="w-full max-w-[200px] sm:max-w-full h-auto align-middle rounded-lg mx-auto" 
                    alt="Maya Bork"
                  />
                </div>
                <div className="profile-details mb-6 sm:mb-8">
                  <h6 className="text-xl sm:text-2xl lg:text-[24px] leading-6 sm:leading-7 font-Jost font-normal text-white">
                    Maya Bork
                  </h6>
                  <span className="text-sm sm:text-base leading-5 sm:leading-6 font-Jost font-normal text-white opacity-75 capitalize">
                    tech team leader
                  </span>
                </div>
                <div className="profile-icons mb-6 sm:mb-8">
                  <div className="py-3">
                    <ul className="flex justify-center gap-2 sm:gap-3">
                      <li className="flex w-8 h-8 sm:w-9 sm:h-9 text-sm sm:text-base bg-footerarrow text-white items-center justify-center rounded hover:bg-white hover:text-footerarrow hover:-translate-y-1 transform duration-300 ease-in-out">
                        <a
                          href="#"
                          className="w-full items-center justify-center flex h-full"
                          aria-label="Facebook"
                        >
                          <FaFacebookF />
                        </a>
                      </li>
                      <li className="flex w-8 h-8 sm:w-9 sm:h-9 text-sm sm:text-base bg-footerarrow text-white items-center justify-center rounded hover:bg-white hover:text-footerarrow hover:-translate-y-1 transform duration-300 ease-in-out">
                        <a
                          href="#"
                          className="w-full items-center justify-center flex h-full"
                          aria-label="YouTube"
                        >
                          <FaYoutube />
                        </a>
                      </li>
                      <li className="flex w-8 h-8 sm:w-9 sm:h-9 text-sm sm:text-base bg-footerarrow text-white items-center justify-center rounded hover:bg-white hover:text-footerarrow hover:-translate-y-1 transform duration-300 ease-in-out">
                        <a
                          href="#"
                          className="w-full items-center justify-center flex h-full"
                          aria-label="Instagram"
                        >
                          <FaInstagram />
                        </a>
                      </li>
                      <li className="flex w-8 h-8 sm:w-9 sm:h-9 text-sm sm:text-base bg-footerarrow text-white items-center justify-center rounded hover:bg-white hover:text-footerarrow hover:-translate-y-1 transform duration-300 ease-in-out">
                        <a
                          href="#"
                          className="w-full items-center justify-center flex h-full"
                          aria-label="Twitter"
                        >
                          <FaXTwitter />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="btn">
                  <div className="box-info flex items-center justify-center">
                    <a
                      href="#"
                      className="text-white text-sm sm:text-base lg:text-[18px] transform duration-300 ease-in-out hover:bg-transparent hover:text-footerarrow font-Jost font-medium bg-footerarrow px-4 sm:px-6 lg:px-9 py-2 sm:py-3 border-[2px] border-footerarrow rounded rounded-tr-[1rem] rounded-bl-2xl inline-block text-center"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testi/>
      <Advertise/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Teammembar;