import React, { useEffect, useState } from "react";
import Header from "./Header";
import img from "../src/img/404.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Loader from "./Loader";

const Error = () => {
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
      <>
        <Header />
        <section className="py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px] relative z-0 bg-bgfooter">
          <div
            style={{ backgroundImage: `url(${img})` }}
            className="absolute inset-0 opacity-35 bg-cover bg-no-repeat bg-center z-0"
          ></div>
          <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="-mb-3">
              <div className="404 mx-auto px-3 w-full">
                <div className="text-area text-center">
                  <h1 className="text-white  font-Jost text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[240px] font-extrabold leading-none">
                    404
                  </h1>
                  <h2 className="capitalize text-white text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[64px] leading-[1.2] font-Jost font-bold mb-4">
                    page Not found
                  </h2>
                  <p className="text-white font-Jost mb-6 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-6 sm:leading-7 lg:leading-8 font-normal max-w-[90%] sm:max-w-[80%] lg:max-w-[70%] mx-auto">
                    oops! the page you were asking for dosen't exist. try search
                    our site for what you are looking for.
                  </p>
                </div>
              </div>
              <div className="search-box mx-auto px-3 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[66.6666667%]">
                <form className="mb-6 sm:mb-8 relative">
                  <button className="absolute w-[50px] sm:w-[60px] lg:w-[70px] h-full border-none outline-none bg-footerarrow right-0 top-0 rounded-tr-[1rem] sm:rounded-tr-[1.5rem] lg:rounded-tr-[2rem] rounded-br-[1rem] sm:rounded-br-[1.5rem] lg:rounded-br-[2rem] transition-all duration-500 ease-in-out group hover:bg-white">
                    <IoSearchOutline className="text-white text-[16px] sm:text-[18px] lg:text-[20px] mx-auto group-hover:text-footerarrow" />
                  </button>
                  <input
                    type="search"
                    className="border-[2px] border-white border-opacity-50 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[5rem] text-[14px] sm:text-[16px] lg:text-[1.1rem] px-3 sm:px-4 py-2 sm:py-2.5 lg:py-3 outline-none w-full text-footerarrow pr-[60px] sm:pr-[70px] lg:pr-[80px]"
                  />
                </form>
              </div>
              <div className="plan-btn flex justify-center items-center">
                <Link
                  to="/"
                  className="text-white text-center py-2 sm:py-2.5 lg:py-3 px-6 sm:px-7 lg:px-9 bg-footerarrow text-[14px] sm:text-[16px] lg:text-[18px] leading-6 sm:leading-6 lg:leading-7 font-Jost font-medium shadow-custom-blue transition-all duration-300 ease-in-out rounded-bl-[0.75rem] sm:rounded-bl-[1rem] rounded-[0.25rem] rounded-tr-[0.75rem] sm:rounded-tr-[1rem] border-2 border-transparent hover:bg-transparent hover:border-footerarrow hover:text-footerarrow"
                >
                  <span className="hidden sm:inline">Back To Home Page</span>
                  <span className="sm:hidden">Back Home</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </>
    </>
  );
};

export default Error;