import React from "react";
import { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { motion } from "framer-motion";
import { FaRupeeSign } from "react-icons/fa";

import { GoInfo } from "react-icons/go";
import { MdCampaign } from "react-icons/md";
import Offers from "./Offers";

import Campaigns from "./Campaigns";

const OfferAndEvents = () => {
  const [offer, setoffer] = useState(true);
  const [Campaig, setCampaig] = useState(false);

  const offers = () => {
    setoffer(true);
    setCampaig(false);
    document.getElementById("w").style.backgroundColor = "#004AAD";
    document.getElementById("w").style.color = "white";
    document.getElementById("z").style.backgroundColor = "white";
    document.getElementById("z").style.color = "black";
  };
  const Campaign = () => {
    setoffer(false);
    setCampaig(true);
    document.getElementById("z").style.backgroundColor = "#004AAD";
    document.getElementById("z").style.color = "white";
    document.getElementById("w").style.backgroundColor = "white";
    document.getElementById("w").style.color = "black";
  };

  const [formData, setFormData] = useState({
    offerType: "",
    discountPercentage: "",
    maxDiscountValue: "",
    minPurchaseAmount: "",
    timingFrom: "",
    timingTo: "",
    validity: "",
    additionalTerms: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetFormData = () => {
    // Reset form values
    setFormData({
      offerType: "",
      discountPercentage: "",
      maxDiscountValue: "",
      minPurchaseAmount: "",
      timingFrom: "",
      timingTo: "",
      validity: "",
      additionalTerms: "",
    });
  };

  // function closePopup() {
  //   console.log("inside closepopup")
  //   document.getElementById("popup1").style.display = "none";
  //   document.getElementById("popup2").style.display = "none";
  //   document.getElementById("popup3").style.display = "none";
  //   document.getElementById("popup4").style.display = "none";
  //   document.getElementById("restaurant").style.filter = "none";
  //   document.getElementById("restaurant").style.filter = "blur(10px)";
  //   resetFormData();
  // }

  function closePopup() {
    console.log("inside closePopup");
    document.getElementById("restaurant").style.display = "none";

    const popups = ["popup1", "popup2", "popup3", "popup4"];
    popups.forEach((popupId) => {
      const element = document.getElementById(popupId);
      if (element) {
        element.style.display = "none";
      } else {
        console.error(`Element with id '${popupId}' not found.`);
      }
    });

    // Check if the restaurant element exists before trying to modify its style
    const restaurantElement = document.getElementById("restaurant");
    if (restaurantElement) {
      // Uncomment the line you need
      restaurantElement.style.filter = "none";
      //  restaurantElement.style.filter = "blur(10px)";
    } else {
      console.error("Element with id 'restaurant' not found.");
    }

    // Ensure resetFormData function exists and is callable
    if (typeof resetFormData === "function") {
      resetFormData();
    } else {
      console.error("resetFormData function is not defined.");
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(formData);
    resetFormData();
    //  closePopup()
  }

  return (
    <div id="offer" className="w-full h-fit relative ">
      {/* Happy Hours popup */}
      <motion.div
        id="popup1"
        whileInView={{ y: [400, 0] }}
        transition={{ duration: 0.5, type: "tween" }}
        className="sm:w-[500px]  w-full h-[750px] sm:left-[30%] fixed bg-[#FFFFFF] hidden  z-[900] mt-[80px] rounded-2xl sm:p-4 p-4 "
      >
        <div className="flex items-center justify-between font-Roboto sm:text-[1.2rem] text-[1.5rem] text-[#0F172A] px-4 mt-2 border-b-2 mb-4 pb-2">
          <p>Edit Offers</p>
          <RxCrossCircled
            onClick={closePopup}
            className="cursor-pointer text-[1.9rem]"
          />
        </div>

        <div className="w-full flex flex-col justify-center items-center ">
          <form
            onSubmit={submitHandler}
            className="w-[95%] md:h-[450px] h-[550px] hideScroller  overflow-y-scroll"
          >
            <p className="text-sm text-[#004AAD] pt-2">
              Happy Hours: Time limited offer available during specific
              recurring period
            </p>
            <div className="w-full flex flex-col gap-4 mt-4">
              <div className="w-full flex md:flex-row flex-col gap-6">
                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  Offer Type/Name
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                    <input
                      type="text"
                      name="offerType"
                      value={formData.offerType}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>

                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  Discount Percentage
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                    <input
                      type="number"
                      name="discountPercentage"
                      value={formData.discountPercentage}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>
              </div>

              <div className="w-full flex md:flex-row flex-col gap-6">
                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  Maximum Discount Value:
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-2">
                    <FaRupeeSign className="size-[15px]" />
                    <input
                      type="number"
                      name="maxDiscountValue"
                      value={formData.maxDiscountValue}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>

                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  Minimum Purchase Value:
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-2">
                    <FaRupeeSign className="size-[15px]" />
                    <input
                      type="number"
                      name="minPurchaseAmount"
                      value={formData.minPurchaseAmount}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>
              </div>

              <div className="w-full flex md:flex-row flex-col gap-6">
                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  Timing
                  <div className="w-full flex gap-3 items-center">
                    <div className="flex w-[40%] h-[3rem] border rounded-[0.5rem] pl-[6px] items-center gap-2">
                      <input
                        type="time"
                        name="timingFrom"
                        value={formData.timingFrom}
                        onChange={handleChange}
                        className="w-full h-full text-richblack-5 outline-none"
                      />
                    </div>
                    <p> To </p>
                    <div className="flex w-[40%] h-[3rem] border rounded-[0.5rem] pl-[6px] items-center gap-2">
                      <input
                        type="time"
                        name="timingTo"
                        value={formData.timingTo}
                        onChange={handleChange}
                        className="w-full h-full text-richblack-5 outline-none"
                      />
                    </div>
                  </div>
                </label>

                <label className="md:w-[50%] w-full text-left text-m flex flex-col gap-2">
                  <p className="font-semibold">Validity</p>
                  <select
                    name="validity"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full text-richblack-5 border rounded-[0.5rem] px-[12px] h-[3rem] outline-none"
                  >
                    <option value="">Select</option>
                    <option value="Day">Day</option>
                    <option value="WeekDay">WeekDay</option>
                    <option value="Monthly">Monthly</option>
                    {/* Add more types here */}
                  </select>
                </label>
              </div>

              <label className="w-full font-semibold text-left text-m flex flex-col gap-3">
                Additional Term & Condition
                <div className="flex w-full h-[9rem] border rounded-[0.5rem] pl-[12px] items-center gap-2">
                  <textarea
                    name="additionalTerms"
                    value={formData.additionalTerms}
                    onChange={handleChange}
                    className="w-full h-full pt-2 text-richblack-5 outline-none"
                  />
                </div>
              </label>

              <div className="w-full flex gap-3 justify-center mt-2 mb-5 mx-auto">
                <button
                  className="md:w-[50%] w-[40%] bg-white border rounded-[8px] text-black font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
                  onClick={closePopup}
                >
                  Cancel
                </button>
                <button className="md:w-[50%] w-[40%] bg-[#004AAD] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Walk-in Offer */}
      <motion.div
        id="popup2"
        whileInView={{ y: [400, 0] }}
        transition={{ duration: 0.5, type: "tween" }}
        className="sm:w-[500px]  w-full  h-[750px]  sm:left-[30%] fixed bg-[#FFFFFF] hidden  z-[900] mt-[80px] rounded-2xl sm:p-4 p-4 "
      >
        <div className="flex items-center justify-between font-Roboto sm:text-[1.2rem] text-[1.5rem] text-[#0F172A] px-4 mt-2 border-b-2 mb-4 pb-2">
          <p>Edit Offers</p>
          <RxCrossCircled
            onClick={closePopup}
            className="cursor-pointer text-[1.9rem]"
          />
        </div>

        <div className="w-full flex flex-col justify-center items-center ">
          <form onSubmit={submitHandler} className="w-[95%] md:h-[450px] h-[550px] hideScroller  overflow-y-scroll">
            <p className="text-sm text-[#004AAD] pt-2">
              Walk-In Offer: An introductory offer available to all patrons.
            </p>
            <div className="w-full flex flex-col gap-4 mt-4">
              <div className="w-full flex md:flex-row flex-col gap-6">
                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  Offer Type/Name
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                    <input
                      type="text"
                      name="offerType"
                      value={formData.offerType}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>

                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  Discount Percentage
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                    <input
                      type="number"
                      name="discountPercentage"
                      value={formData.discountPercentage}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>
              </div>

              <div className="w-full flex md:flex-row flex-col gap-6">
                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  Maximum Discount Value:
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-2">
                    <FaRupeeSign className="size-[15px]" />
                    <input
                      type="number"
                      name="maxDiscountValue"
                      value={formData.maxDiscountValue}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>

                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  Minimum Purchase Value:
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-2">
                    <FaRupeeSign className="size-[15px]" />
                    <input
                      type="number"
                      name="minPurchaseAmount"
                      value={formData.minPurchaseAmount}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>
              </div>

              <label className="w-full font-semibold text-left text-m flex flex-col gap-3">
                Additional Term & Condition
                <div className="flex w-full h-[9rem] border rounded-[0.5rem] pl-[12px] items-center gap-2">
                  <textarea
                    name="additionalTerms"
                    value={formData.additionalTerms}
                    onChange={handleChange}
                    className="w-full h-full pt-2 text-richblack-5 outline-none"
                  />
                </div>
              </label>

              <div className="w-full flex gap-3 justify-center mb-5 mx-auto">
                <button
                  className="md:w-[50%] w-[40%] bg-white border rounded-[8px] text-black font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
                  onClick={closePopup}
                >
                  Cancel
                </button>
                <button className="md:w-[50%] w-[40%] bg-[#004AAD] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Birthday Offer */}
      <motion.div
        id="popup3"
        whileInView={{ y: [400, 0] }}
        transition={{ duration: 0.5, type: "tween" }}
        className="sm:w-[500px]  w-full  h-[750px]  sm:left-[30%] fixed bg-[#FFFFFF] hidden  z-[900] mt-[80px] rounded-2xl sm:p-4 p-4 "
      >
        <div className="flex items-center justify-between font-Roboto sm:text-[1.2rem] text-[1.5rem] text-[#0F172A] px-4 mt-2 border-b-2 mb-4 pb-2">
          <p>Edit Offers</p>
          <RxCrossCircled
            onClick={closePopup}
            className="cursor-pointer text-[1.9rem]"
          />
        </div>

        <div className="w-full flex flex-col justify-center items-center ">
          <form onSubmit={submitHandler} className="w-[95%] md:h-[450px] h-[550px] hideScroller  overflow-y-scroll">
            <p className="text-sm text-[#004AAD] pt-2">
              Birthday Offer: Exclusive offer redeemable only on patrons'
              birthdays.
            </p>
            <div className="w-full flex flex-col gap-4 mt-4">
              <div className="w-full flex md:flex-row flex-col gap-6">
                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  Offer Type/Name
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                    <input
                      type="text"
                      name="offerType"
                      value={formData.offerType}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>

                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  Discount Percentage
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                    <input
                      type="number"
                      name="discountPercentage"
                      value={formData.discountPercentage}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>
              </div>

              <div className="w-full flex md:flex-row flex-col gap-6">
                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  Maximum Discount Value:
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-2">
                    <FaRupeeSign className="size-[15px]" />
                    <input
                      type="number"
                      name="maxDiscountValue"
                      value={formData.maxDiscountValue}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>

                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  Minimum Purchase Value:
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-2">
                    <FaRupeeSign className="size-[15px]" />
                    <input
                      type="number"
                      name="minPurchaseAmount"
                      value={formData.minPurchaseAmount}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>
              </div>

              <label className="w-full font-semibold text-left text-m flex flex-col gap-3">
                Additional Term & Condition
                <div className="flex w-full h-[9rem] border rounded-[0.5rem] pl-[12px] items-center gap-2">
                  <textarea
                    name="additionalTerms"
                    value={formData.additionalTerms}
                    onChange={handleChange}
                    className="w-full h-full pt-2 text-richblack-5 outline-none"
                  />
                </div>
              </label>

              <div className="w-full flex gap-3 justify-center mb-5 mx-auto">
                <button
                  className="md:w-[50%] w-[40%] bg-white border rounded-[8px] text-black font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
                  onClick={closePopup}
                >
                  Cancel
                </button>
                <button className="md:w-[50%] w-[40%] bg-[#004AAD] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Flat Offer */}
      <motion.div
        id="popup4"
        whileInView={{ y: [400, 0] }}
        transition={{ duration: 0.5, type: "tween" }}
        className="sm:w-[500px]  w-full h-[750px]  sm:left-[30%] fixed bg-[#FFFFFF] hidden  z-[900] mt-[80px] rounded-2xl sm:p-4 p-4 "
      >
        <div className="flex items-center justify-between font-Roboto sm:text-[1.2rem] text-[1.5rem] text-[#0F172A] px-4 mt-2 border-b-2 mb-4 pb-2">
          <p>Edit Offers</p>
          <RxCrossCircled
            onClick={closePopup}
            className="cursor-pointer text-[1.9rem]"
          />
        </div>

        <div className="w-full flex flex-col justify-center items-center ">
          <form onSubmit={submitHandler} className="w-[95%] md:h-[450px] h-[550px] hideScroller  overflow-y-scroll">
            <p className="text-sm text-[#004AAD] pt-2">
              Flat Discount: Provide a fixed discount on purchases.
            </p>
            <div className="w-full flex flex-col gap-4 mt-4">
              <div className="w-full flex md:flex-row flex-col gap-6">
                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  Offer Type/Name
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                    <input
                      type="text"
                      name="offerType"
                      value={formData.offerType}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>

                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  Maximum Discount Value:
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-2">
                    <FaRupeeSign className="size-[15px]" />
                    <input
                      type="number"
                      name="maxDiscountValue"
                      value={formData.maxDiscountValue}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>
              </div>

              <div className="w-full flex md:flex-row flex-col gap-6">
                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  Minimum Purchase Value:
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-2">
                    <FaRupeeSign className="size-[15px]" />
                    <input
                      type="number"
                      name="minPurchaseAmount"
                      value={formData.minPurchaseAmount}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>
              </div>

              <label className="w-full font-semibold text-left text-m flex flex-col gap-3">
                Additional Term & Condition
                <div className="flex w-full h-[9rem] border rounded-[0.5rem] pl-[12px] items-center gap-2">
                  <textarea
                    name="additionalTerms"
                    value={formData.additionalTerms}
                    onChange={handleChange}
                    className="w-full h-full pt-2 text-richblack-5 outline-none"
                  />
                </div>
              </label>

              <div className="w-full flex gap-3 justify-center  mb-5 mx-auto">
                <button
                  className="md:w-[50%] w-[40%] bg-white border rounded-[8px] text-black font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
                  onClick={closePopup}
                >
                  Cancel
                </button>
                <button className="md:w-[50%] w-[40%] bg-[#004AAD] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>

      <div className="  w-full  h-[90px] z-10 bg-[#FDE030] mt-[70px] flex justify-between items-center px-5 sm:px-12   ">
        <div>
          <p className="text-[1.6rem] font-semibold">Offers & Campaigns</p>
          <p className="sm:text-[.9rem] text-[.8rem]">
            Discover and thrill your customers with our pre-designed offer and
            event templates
          </p>
        </div>
      </div>
      <div className="w-full h-fit  mt-[10px] px-6   ">
        <div className="bg-white  flex flex-col gap-6 sm:py-5 py-2 rounded-lg ">
          <div className="flex gap-4 w-full justify-center sm:justify-start px-[1.5rem] border-b pb-6">
            <button
              id="w"
              className="border sm:px-5 px-4 py-2 border-[#0F172A] rounded-md bg-[#004AAD] text-white text-nowrap"
              onClick={offers}
            >
              Offers
            </button>
            <button
              id="z"
              className="border sm:px-5 px-4 py-2 border-[#0F172A] rounded-md text-nowrap"
              onClick={Campaign}
            >
              Campaigns
            </button>
          </div>

          {/* All Users */}

          {offer && <Offers />}

          {Campaig && <Campaigns/>}

        </div>
      </div>
    </div>
  );
};

export default OfferAndEvents;
