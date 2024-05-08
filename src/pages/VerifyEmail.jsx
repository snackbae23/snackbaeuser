import React from "react";
import Navbar2 from "../component/Navbar2";
import Slider from "../component/Slider";
import { Link } from "react-router-dom";
import { IoMdMail } from "react-icons/io";


const verifyEmail = () => {
  return (
    <div className="flex w-full md:h-[100vh]">
      <div className="md:w-[60%] w-full flex flex-col relative gap-4 justify-center items-center">
        <Navbar2 />
        <div className="flex flex-col items-center md:w-[60%] w-[80%] gap-y-2 md:mt-[70px] mt-[120px] md:m-0 sm:mx-auto">
          <img src="004.png" alt="mailLogo" width={132} height={150} />
          <div className="flex flex-col gap-3 md:mt-0 mt-6 md:w-[85%] w-full">
            <h2 className="font-bold text-2xl">Check your Email</h2>
            <p className="text-[#64748B] text-sm">
              Thank you, check your email for instructions to reset your
              password
            </p>
          </div>

          <div className="md:w-[85%] w-full flex flex-col items-center md:mt-2 mt-6 gap-4">
            <button className="w-full bg-[#004AAD] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] py-[8px] mt-2">
            <div className="flex items-center justify-center gap-1">
            <IoMdMail className="size-[20px]"/>
              Open Mail
            </div>
            </button>
            <div className="flex justify-center">
              <p>Don't recieve an email?</p>
              <Link to="/#">
                <span className="text-[#004AAD] font-bold">Resend</span>
              </Link>
            </div>
            
          </div>

          <div className="flex gap-2 md:mt-[80px] mt-[100px] justify-center">
            <p>Don't have an account?</p>
            <Link to="/register">
              <span className="text-[#2563EB] font-bold">Register Now</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:w-[40%] md:block hidden bg-[#004AAD] rounded-l-2xl">
        <Slider />
      </div>
    </div>
  );
};

export default verifyEmail;
