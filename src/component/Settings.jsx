import React, { useEffect } from "react";
import { useState } from "react";
import BusinessInfoForm from "./BusinessInfoForm";
import PayoutDetailsForm from "./PayoutDetailsForm";
import { Link } from "react-router-dom";
import axios from "axios"

const Settings = () => {

  // const id ="662929b6445e63ad5782c1ab"

  // console.log(id)
    const [formType, setFormType] = useState("businessInfo");


  return (
    <div id="setting" className="w-full h-fit relative ">
      <div className="  w-full  h-[80px] z-10 bg-[#FDE030] mt-[70px] flex justify-between items-center px-5 sm:px-12   ">
        <div>
          <p className="text-[1.6rem] font-semibold">Settings</p>
          <p className="text-[.9rem]">Manage your account settings</p>
        </div>
      </div>

      <div className="w-full h-fit px-6 ">
        <div className="bg-white flex flex-col gap-4 sm:py-5 py-2">
          <div className="w-full h-fit flex flex-row gap-3 sm:my-1 my-4  items-center  ">
            <button
              className={`${
                formType === "businessInfo"
                  ? "bg-[#004AAD] text-white "
                  : "bg-transparent text-richblack-200 "
              } py-2 px-5 md:ml-8 ml-6 rounded-lg  border-black border font-bold transition-all duration-200`}
              onClick={() => setFormType("businessInfo")}
            >
              BusinessInfo
            </button>

            <button
              className={`${
                formType === "paymentDetails"
                  ? "bg-[#004AAD] text-white "
                  : "bg-transparent text-richblack-200"
              } py-2 px-5 rounded-lg  border-black border font-bold transition-all duration-200`}
              onClick={() => setFormType("paymentDetails")}
            >
              Payout Details
            </button>
          </div>
          <p className="border"></p>

          <div className="w-full">
            { formType === "businessInfo" && <BusinessInfoForm/>}
            { formType === "paymentDetails" && <PayoutDetailsForm/>}
          </div>
        </div>
        <div className='p-4'>
                    <div className='flex sm:flex-row flex-col w-full h-fit sm:items-center border border-[#00000099]  rounded-md my-4 font-inter  sm:p-0 p-4'>
                        <img className='size-[120px] ' src="/Customer feedback.png" alt="" />
                        <div>
                            <p>Help Us to make Snackbae better ! Share your feedbacks and request features that fits best for your Business</p>
                            <Link  className='text-[#106CF6] border-b-2 w-fit border-[#106CF6] font-bold'>Give Feedback</Link>
                        </div>

                    </div>
                </div>
      </div>
    </div>
  );
};

export default Settings;
