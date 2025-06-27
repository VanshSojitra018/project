import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { HiArrowLongRight } from "react-icons/hi2";
import img1 from "../src/img/team-1.jpg";
import img2 from "../src/img/team2.jpg";
import img3 from "../src/img/team3.jpg";
import img4 from "../src/img/t-4.jpg";
import img5 from "../src/img/t-5.jpg";
import img6 from "../src/img/t-6.jpg";
import img7 from "../src/img/t-7.jpg";
import img8 from "../src/img/t-8.jpg";
import { FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { Link } from "react-router-dom";
import Header from "./Header";
import Introduction from "./Introduction";
import Testi from "./Testi";
import Advertise from "./Advertise";
import Footer from "./Footer";
import Contact from "./Contact";
import Loader from "./Loader";
const Team = () => {
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
      <Introduction title="Our Team" title2=" / Our Team" />
      <section className="pb-20 pt-20 bg-bgfooter">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12 text-left gap-6">
            <div className="flex-1">
              <span className="text-[1rem] leading-6 font-Jost text-footerarrow font-semibold flex items-center gap-1">
                <GoDotFill />
                TEAM
                <GoDotFill />
              </span>
              <h2 className="text-[2.5rem] lg:text-[3rem] leading-[50px] lg:leading-[62px] text-white font-Jost font-medium mb-3">
                Our Experts Team Members
              </h2>
            </div>
            <div className="flex justify-end lg:w-[30%]">
              <Link
                to="/about"
                className="flex items-center justify-center gap-2 text-white transform duration-300 ease-in-out hover:bg-transparent hover:text-footerarrow font-Jost text-[14px] sm:text-[16px] font-medium bg-footerarrow px-6 sm:px-9 py-3 border-[2px] border-footerarrow rounded rounded-tr-[1rem] rounded-bl-2xl"
              >
                See More <HiArrowLongRight className="text-[24px]" />
              </Link>
            </div>
          </div>

          {/* Fixed Grid Layout for Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Team Member 1 */}
            <div className="flex justify-center">
              <div className="relative mb-4 text-center duration-500 ease-in-out group w-full max-w-sm">
                <div className="relative overflow-hidden">
                  <Link to="/TeamMember">
                    <div className="z-[2] opacity-0 absolute inset-0 bg-bgfooter group-hover:opacity-65 duration-500 ease-in-out"></div>
                    <img
                      src={img1}
                      className="w-full h-auto object-cover aspect-[4/5]"
                      alt="Murad Aly"
                    />
                  </Link>

                  <div className="media-icons absolute left-1/2 translate-x-[-50%] bottom-[-10px] p-4 z-[7]">
                    <div className="py-3">
                      <ul className="flex items-center gap-3 list-none">
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaFacebookF className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaYoutube className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-300 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <LuInstagram className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-500 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaXTwitter className="text-white text-[18px]" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="py-6 block">
                  <Link className="font-Jost leading-6 text-[1.5rem] font-normal text-white">
                    Murad Aly
                  </Link>
                  <br />
                  <span className="font-Jost leading-6 text-[1rem] font-medium text-white">
                    Co Founder
                  </span>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex justify-center">
              <div className="relative mb-4 text-center duration-500 ease-in-out group w-full max-w-sm">
                <div className="relative overflow-hidden">
                  <Link to="/TeamMember">
                    <div className="z-[2] opacity-0 absolute inset-0 bg-bgfooter group-hover:opacity-65 duration-500 ease-in-out"></div>
                    <img
                      src={img2}
                      className="w-full h-auto object-cover aspect-[4/5]"
                      alt="Murad Aly"
                    />
                  </Link>

                  <div className="media-icons absolute left-1/2 translate-x-[-50%] bottom-[-10px] p-4 z-[7]">
                    <div className="py-3">
                      <ul className="flex items-center gap-3 list-none">
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaFacebookF className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaYoutube className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-300 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <LuInstagram className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-500 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaXTwitter className="text-white text-[18px]" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="py-6 block">
                  <Link className="font-Jost leading-6 text-[1.5rem] font-normal text-white">
                    Fairouz Amin
                  </Link>
                  <br />
                  <span className="font-Jost leading-6 text-[1rem] font-medium text-white">
                    Manager
                  </span>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="flex justify-center">
              <div className="relative mb-4 text-center duration-500 ease-in-out group w-full max-w-sm">
                <div className="relative overflow-hidden">
                  <Link to="/TeamMember">
                    <div className="z-[2] opacity-0 absolute inset-0 bg-bgfooter group-hover:opacity-65 duration-500 ease-in-out"></div>
                    <img
                      src={img3}
                      className="w-full h-auto object-cover aspect-[4/5]"
                      alt="Murad Aly"
                    />
                  </Link>

                  <div className="media-icons absolute left-1/2 translate-x-[-50%] bottom-[-10px] p-4 z-[7]">
                    <div className="py-3">
                      <ul className="flex items-center gap-3 list-none">
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaFacebookF className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaYoutube className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-300 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <LuInstagram className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-500 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaXTwitter className="text-white text-[18px]" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="py-6 block">
                  <Link className="font-Jost leading-6 text-[1.5rem] font-normal text-white">
                    Beco Smith
                  </Link>
                  <br />
                  <span className="font-Jost leading-6 text-[1rem] font-medium text-white">
                    Co Leader
                  </span>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="flex justify-center">
              <div className="relative mb-4 text-center duration-500 ease-in-out group w-full max-w-sm">
                <div className="relative overflow-hidden">
                  <Link to="/TeamMember">
                    <div className="z-[2] opacity-0 absolute inset-0 bg-bgfooter group-hover:opacity-65 duration-500 ease-in-out"></div>
                    <img
                      src={img4}
                      className="w-full h-auto object-cover aspect-[4/5]"
                      alt="Murad Aly"
                    />
                  </Link>

                  <div className="media-icons absolute left-1/2 translate-x-[-50%] bottom-[-10px] p-4 z-[7]">
                    <div className="py-3">
                      <ul className="flex items-center gap-3 list-none">
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaFacebookF className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaYoutube className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-300 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <LuInstagram className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-500 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaXTwitter className="text-white text-[18px]" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="py-6 block">
                  <Link className="font-Jost leading-6 text-[1.5rem] font-normal text-white">
                    Morgan Fray
                  </Link>
                  <br />
                  <span className="font-Jost leading-6 text-[1rem] font-medium text-white">
                    Consultant
                  </span>
                </div>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="flex justify-center">
              <div className="relative mb-4 text-center duration-500 ease-in-out group w-full max-w-sm">
                <div className="relative overflow-hidden">
                  <Link to="/TeamMember">
                    <div className="z-[2] opacity-0 absolute inset-0 bg-bgfooter group-hover:opacity-65 duration-500 ease-in-out"></div>
                    <img
                      src={img5}
                      className="w-full h-auto object-cover aspect-[4/5]"
                      alt="Murad Aly"
                    />
                  </Link>

                  <div className="media-icons absolute left-1/2 translate-x-[-50%] bottom-[-10px] p-4 z-[7]">
                    <div className="py-3">
                      <ul className="flex items-center gap-3 list-none">
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaFacebookF className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaYoutube className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-300 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <LuInstagram className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-500 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaXTwitter className="text-white text-[18px]" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="py-6 block">
                  <Link className="font-Jost leading-6 text-[1.5rem] font-normal text-white">
                    Tony Hardy
                  </Link>
                  <br />
                  <span className="font-Jost leading-6 text-[1rem] font-medium text-white">
                    Advisor
                  </span>
                </div>
              </div>
            </div>

            {/* Team Member 6 */}
            <div className="flex justify-center">
              <div className="relative mb-4 text-center duration-500 ease-in-out group w-full max-w-sm">
                <div className="relative overflow-hidden">
                  <Link to="/TeamMember">
                    <div className="z-[2] opacity-0 absolute inset-0 bg-bgfooter group-hover:opacity-65 duration-500 ease-in-out"></div>
                    <img
                      src={img6}
                      className="w-full h-auto object-cover aspect-[4/5]"
                      alt="Murad Aly"
                    />
                  </Link>

                  <div className="media-icons absolute left-1/2 translate-x-[-50%] bottom-[-10px] p-4 z-[7]">
                    <div className="py-3">
                      <ul className="flex items-center gap-3 list-none">
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaFacebookF className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaYoutube className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-300 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <LuInstagram className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-500 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaXTwitter className="text-white text-[18px]" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="py-6 block">
                  <Link className="font-Jost leading-6 text-[1.5rem] font-normal text-white">
                    Tom Faraday
                  </Link>
                  <br />
                  <span className="font-Jost leading-6 text-[1rem] font-medium text-white">
                    Analyzaer
                  </span>
                </div>
              </div>
            </div>

            {/* Team Member 7 */}
            <div className="flex justify-center">
              <div className="relative mb-4 text-center duration-500 ease-in-out group w-full max-w-sm">
                <div className="relative overflow-hidden">
                  <Link to="/TeamMember">
                    <div className="z-[2] opacity-0 absolute inset-0 bg-bgfooter group-hover:opacity-65 duration-500 ease-in-out"></div>
                    <img
                      src={img7}
                      className="w-full h-auto object-cover aspect-[4/5]"
                      alt="Murad Aly"
                    />
                  </Link>

                  <div className="media-icons absolute left-1/2 translate-x-[-50%] bottom-[-10px] p-4 z-[7]">
                    <div className="py-3">
                      <ul className="flex items-center gap-3 list-none">
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaFacebookF className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaYoutube className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-300 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <LuInstagram className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-500 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaXTwitter className="text-white text-[18px]" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="py-6 block">
                  <Link className="font-Jost leading-6 text-[1.5rem] font-normal text-white">
                    Brad Simmon
                  </Link>
                  <br />
                  <span className="font-Jost leading-6 text-[1rem] font-medium text-white">
                    Performer
                  </span>
                </div>
              </div>
            </div>

            {/* Team Member 8 */}
            <div className="flex justify-center">
              <div className="relative mb-4 text-center duration-500 ease-in-out group w-full max-w-sm">
                <div className="relative overflow-hidden">
                  <Link to="/TeamMember">
                    <div className="z-[2] opacity-0 absolute inset-0 bg-bgfooter group-hover:opacity-65 duration-500 ease-in-out"></div>
                    <img
                      src={img8}
                      className="w-full h-auto object-cover aspect-[4/5]"
                      alt="Murad Aly"
                    />
                  </Link>

                  <div className="media-icons absolute left-1/2 translate-x-[-50%] bottom-[-10px] p-4 z-[7]">
                    <div className="py-3">
                      <ul className="flex items-center gap-3 list-none">
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaFacebookF className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-200 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaYoutube className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-300 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <LuInstagram className="text-white text-[18px]" />
                          </Link>
                        </li>
                        <li className="bg-footerarrow p-2 rounded-[5px] opacity-0 translate-y-4 transition-all delay-500 group-hover:opacity-100 group-hover:translate-y-0">
                          <Link className="flex items-center justify-center mx-auto">
                            <FaXTwitter className="text-white text-[18px]" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="py-6 block">
                  <Link className="font-Jost leading-6 text-[1.5rem] font-normal text-white">
                    Daived Chtorperg
                  </Link>
                  <br />
                  <span className="font-Jost leading-6 text-[1rem] font-medium text-white">
                    Actor
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testi />
      <Advertise />
      <Contact />
      <Footer />
    </>
  );
};

export default Team;
