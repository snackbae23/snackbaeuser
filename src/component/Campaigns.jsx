import React from "react";
import SwitchOffer from "./SwitchOffer";
import { MdEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";

const Campaigns = () => {
  const data = [
    {
      campaignName: "Awareness Campaign",
      disc: "Effortlessly connect with valued customers using targeted offers. Whether regulars, infrequent visitors, or those with low ratings, personalize promotions to keep them engaged and informed about your latest de",
    },
    {
      campaignName: "Greeting Campaign",
      disc: "Welcome back! Our Greetings Campaigns ensure every diner feels appreciated. Sending post messages encourages return visits, boosting footfall and reinforcing your brand's presence.",
    },
    {
      campaignName: "Birthday Campaign",
      disc: "Send heartfelt birthday messages to patrons during their birthday month, inviting them to celebrate with exclusive offers. Encourage visits on their special day, fostering loyalty and enhancing the customer experience",
    },
  ];

  return (
    <div className="w-full h-fit">
      <div className="w-full h-fit flex md:flex-row flex-col gap-4 justify-evenly p-4">
        {data.map((data, index) => (
          <div className="md:w-[31%] w-full border rounded-lg p-5" key={index}>
            <div className="w-full flex justify-between">
              <p className="font-semibold text-[#004AAD] text-xl">
                {data.campaignName}
              </p>
              <SwitchOffer />
            </div>
            <div className="w-full border mt-6"></div>
            <p className="text-sm text-[#777980] mt-4">{data.disc}</p>
            <div className="w-full border mt-6"></div>

            <div className="w-full flex justify-between mt-2">
              <div className=" flex flex-col gap-4">
                <p className="font-semibold text-[#004AAD]">Pricing</p>
                <p className="text-sm font-semibold text-[#777980]">
                  Text SMS cost
                </p>
                <p className="text-sm font-semibold text-[#777980]">
                  Email cost
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-[#004AAD]">Pay as you go</p>
                <p className="text-sm font-semibold text-[#777980]">
                  ₹ 0.50/SMS sent
                </p>
                <p className="text-sm font-semibold text-[#777980]">
                  ₹ 0.50/SMS sent
                </p>
              </div>
            </div>
            <div className="w-full border mt-6"></div>

            <div className="w-full flex gap-6 mt-4 items-center ">
              <div className="w-[48%] flex flex-col gap-1">
                <div className="flex gap-3 justify-center">
                  <MdEmail className="size-[25px] text-[#004AAD]" />
                  <IoCallOutline className="size-[25px] text-[#004AAD]" />
                  <IoLogoWhatsapp className="size-[25px] text-[#45c94e]" />
                </div>
                <div>
                  <p className="text-[#777980] font-sans text-sm text-nowrap">
                    Marketing Channels
                  </p>
                </div>
              </div>
              <div className="w-[48%]">
                <button className="w-full bg-[#004AAD] text-white py-2 sm:px-3 px-2 rounded-md text-[1rem] mr-2">
                  Customise
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex sm:justify-between  sm:items-center sm:flex-row flex-col gap-4 text-[#000000] p-4 ">
        <p className="text-[1.8rem] font-semibold sm:px-5">
          Campaign Analytics
        </p>
        <div className="flex gap-5 border border-[#000000B2] rounded-xl mr-4 p-3   items-center">
          <p className="font-Roboto">This month</p>
          <input type="date" className="focus:outline-none" />
        </div>
      </div>

      <div className="w-full h-fit flex md:flex-row flex-col md:m-6 m-4 gap-4">
        <div className="md:w-[48%] w-full flex md:gap-9 gap-2">
          <div className=" w-[44%] h-[125px] flex flex-col border rounded-lg p-4 gap-4">
            <p className="text-[#777980] text-sm font-semibold">
              Total SMS sent
            </p>
            <p className="font-semibold text-2xl">1000</p>
          </div>
          <div className=" w-[44%] h-[125px] flex flex-col border rounded-lg p-4 gap-4">
            <p className="text-[#777980] text-sm font-semibold">
              Total Email sent
            </p>
            <p className="font-semibold text-2xl">0</p>
          </div>
        </div>

        <div className="md:w-[48%] w-full flex md:gap-9 gap-2">
          <div className="w-[44%] h-[125px] flex flex-col border rounded-lg p-4 gap-4">
            <p className="text-[#777980] text-sm font-semibold">Total Clicks</p>
            <p className="font-semibold text-2xl text-[#0CD108]">500</p>
          </div>
          <div className="w-[44%] h-[125px] flex flex-col border rounded-lg p-4 gap-4">
            <p className="text-[#777980] text-sm font-semibold">
              Sent to click rate
            </p>
            <p className="font-semibold text-2xl text-[#F4BF36]">50%</p>
          </div>
        </div>
      </div>

      <div className="w-full h-fit flex md:flex-row flex-col md:m-6 m-4 gap-4">
        <div className="md:w-[60%] w-full flex md:gap-5 gap-2">
          <div className="md:w-[48%] w-[44%] h-[125px] flex flex-col border rounded-lg p-4 gap-4">
            <p className="text-[#777980] text-sm font-semibold">
              Total SMS Cost
            </p>
            <p className="font-semibold text-2xl">1000</p>
          </div>
          <div className="md:w-[48%] w-[44%] h-[125px] flex flex-col border rounded-lg p-4 gap-4">
            <p className="text-[#777980] text-sm font-semibold">
              Total Email Cost
            </p>
            <p className="font-semibold text-2xl">0</p>
          </div>
        </div>
        <div className="md:w-[33%] w-[90%] flex flex-col border rounded-lg p-4 gap-4">
          <p className="text-[#777980] text-sm font-semibold">
            Total Campaign Cost
          </p>
          <p className="font-semibold text-2xl">500</p>
        </div>
      </div>

      {/* footer */}
      <div className="p-4">
        <div className="flex sm:flex-row flex-col w-full h-fit sm:items-center border border-[#00000099]  rounded-md my-4 font-inter  sm:p-0 p-4">
          <img className="size-[120px] " src="/Customer feedback.png" alt="" />
          <div>
            <p>
              Help Us to make Snackbae better ! Share your feedbacks and request
              features that fits best for your Business
            </p>
            <Link className="text-[#106CF6] border-b-2 w-fit border-[#106CF6] font-bold">
              Give Feedback
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
