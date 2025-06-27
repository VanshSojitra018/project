import React from 'react'
import img4 from "../src/img/con-1.jpg";
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
       <section
        className="h-[100vh] sm:h-[90vh] sm1:h-[85vh] md1:h-[80vh] md:h-[80vh] lg:h-[80vh] min-h-[600px] sm:min-h-[650px] md:min-h-[600px] lg:min-h-[80vh] bg-cover bg-center relative flex items-center"
        style={{ backgroundImage: `url(${img4})` }}
      >
        <div className="absolute inset-0 bg-bgfooter opacity-75"></div>
        <div className="container px-4 sm:px-6 md:px-8 w-full">
          <div className="relative z-10 text text-center">
            <span className="text-footerarrow flex items-center font-semibold leading-5 sm:leading-6 justify-center gap-1 font-Jost text-[14px] sm:text-[16px] md:text-[18px] text-center mb-3 sm:mb-4">
              <GoDotFill className="text-[12px] sm:text-[14px] md:text-[16px]" />
              CONTACT US
              <GoDotFill className="text-[12px] sm:text-[14px] md:text-[16px]" />
            </span>
            <h2 className="text-[28px] sm:text-[32px] sm1:text-[36px] md1:text-[38px] md:text-[40px] lg1:text-[44px] lg:text-[46px] xl:text-[48px] leading-[34px] sm:leading-[38px] sm1:leading-[42px] md1:leading-[44px] md:leading-[46px] lg1:leading-[50px] lg:leading-[54px] xl:leading-[62px] font-Jost font-medium text-white mb-3 sm:mb-4 md:mb-3">
              Get In Touch With Us
            </h2>
            <p className="mb-4 sm:mb-5 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-5 sm:leading-5 md:leading-6 font-Jost font-normal text-white opacity-75 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-none mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit Omnis{" "}
              <span className="hidden md:inline">
                <br />
              </span>
              id atque dignissimos repellat quae ullam.
            </p>
            <div className="mx-auto mt-6 sm:mt-8 md:mt-10 w-full sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%]">
              <Link
                to="/ContactUs"
                className="inline-block text-white transform duration-300 ease-in-out bg-transparent font-Jost text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-medium hover:bg-footerarrow hover:border-footerarrow px-4 sm:px-6 md:px-7 lg:px-9 py-2 sm:py-2.5 md:py-3 border-[2px] border-white rounded rounded-tr-[1rem] rounded-bl-2xl w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
