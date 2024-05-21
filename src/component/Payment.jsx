import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import { motion } from "framer-motion";
import { FaRupeeSign } from "react-icons/fa";

import { GoInfo } from "react-icons/go";

import AllTransaction from "./AllTransaction";
import Settlements from "./Settlements";

const Payment = () => {
  var userID = localStorage.getItem('user');
  console.log("user id", userID)
  const id = userID
  const resId = userID
  const [CustomerRec, setCustomer] = useState(true);
  const [CustomerAna, setCustomerana] = useState(false);

  const trans = () => {
    setCustomer(true);
    setCustomerana(false);
    document.getElementById("w").style.backgroundColor = "#004AAD";
    document.getElementById("w").style.color = "white";
    document.getElementById("z").style.backgroundColor = "white";
    document.getElementById("z").style.color = "black";
  };
  const settle = () => {
    setCustomer(false);
    setCustomerana(true);
    document.getElementById("z").style.backgroundColor = "#004AAD";
    document.getElementById("z").style.color = "white";
    document.getElementById("w").style.backgroundColor = "white";
    document.getElementById("w").style.color = "black";
  };

  function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("restaurant").style.display = "block";
    // document.getElementById('payment').style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  }
  function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("restaurant").style.display = "none";
    // resetFormData();
  }

  const [amount, setAmount] = useState();
  const [rememberMe, setRememberMe] = useState(false);

  function changeHandler(event) {
    const { name, value } = event.target;
    setAmount(value);
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(amount);
    setAmount("");
    setRememberMe(false);
    //  closePopup()
  }



  return (
    <div id="payment" className="w-full h-fit relative ">
      {/* Withraw balance */}
      <motion.div
        id="popup"
        whileInView={{ y: [400, 0] }}
        transition={{ duration: 0.5, type: "tween" }}
        className="sm:w-[500px]  w-full h-fit  sm:left-[30%] fixed bg-[#FFFFFF] hidden  z-[900] mt-[80px] rounded-2xl sm:p-4 p-4 "
      >
        <div className="flex items-center justify-between font-Roboto sm:text-[1.2rem] text-[1.5rem] text-[#0F172A] px-4 mt-2 border-b-2 mb-4 pb-2">
          <p>Add Menu item</p>
          <RxCrossCircled
            onClick={closePopup}
            className="cursor-pointer text-[1.9rem]"
          />
        </div>

        <form className="w-full flex flex-col items-center justify-center">
          <div className=" md:w-[85%] w-[95%] relative  rounded-md border pl-5 pr-3 py-3 flex flex-col justify-center">
            <GoInfo className="size-6 absolute top-3 right-3 bg-white" />

            <div className="flex flex-col gap-1">
              <p className="text-[#000000] sm:text-[2.2rem] text-[1.5rem] font-semibold  ">
                ₹ 214003.80
              </p>
              <p className=" sm:text-[1rem] text-[.8rem] text-[#004AAD]">
                Total Available balance for Payout
              </p>
            </div>
          </div>

          <div className="md:w-[85%] w-[95%] flex flex-col gap-2 md:mt-8 mt-2">
            <div className="flex items-center w-full h-[3rem] border border-black rounded-[0.5rem] md:mt-2 mt-[40px] pl-[12px] ">
              <FaRupeeSign className="size-[15px]" />
              <input
                required
                type="number"
                placeholder="Min amount ₹100"
                name="amount"
                value={rememberMe ? 214003.8 : amount}
                onChange={changeHandler}
                className="w-full h-full text-richblack-5 px-2 outline-none appearance-none"
              />
            </div>
            <div className="">
              <label className="text-xs flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => {
                    setRememberMe(!rememberMe);
                    setAmount(214003.8);
                  }}
                  className="size-[18px] mr-2"
                />
                Withraw Total Amount
              </label>
            </div>
          </div>

          <div className="w-full flex gap-3 justify-center md:mt-6 mt-2">
            <button
              onClick={closePopup}
              className="w-[25%] bg-white border rounded-[8px] text-black font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
            >
              Cancel
            </button>
            <button
              onClick={submitHandler}
              className="w-[65%] bg-[#004AAD] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] py-[8px] mt-6"
            >
              Request Payout
            </button>
          </div>

          <div className="flex gap-2 md:mt-10 mt-[50px] justify-center">
            <p>Need help?</p>
            <Link to="/contact">
              <span className="text-[#004AAD] font-bold">Contact Us</span>
            </Link>
          </div>
        </form>
      </motion.div>

      <div className="  w-full  h-[90px] z-10 bg-[#FDE030] mt-[70px] flex justify-between items-center px-5 sm:px-12   ">
        <div>
          <p className="text-[1.6rem] font-semibold">Payments</p>
          <p className="sm:text-[.9rem] text-[.8rem]">
            Monitor real-time transactions.
          </p>
        </div>
      </div>
      <div className="w-full h-fit  mt-[10px] px-6   ">
        <div className="bg-white  flex flex-col gap-2 sm:py-5 py-2 rounded-lg ">
          <div className="flex sm:justify-between  sm:items-center sm:flex-row flex-col gap-4 text-[#000000] px-4 ">
            <p className="text-[1.8rem] font-semibold sm:px-5">Transactions</p>
            <button onClick={openPopup} className="border sm:px-5 px-2.5 py-2 border-[#0F172A] rounded-lg bg-[#004AAD] text-white text-nowrap">
              Withdrow Request
            </button>
          </div>

          <div className="w-full h-fit bg-white flex sm:flex-row flex-col items-center justify-evenly gap-4 sm:my-4 sm:px-6 rounded-md ">
            <div className="sm:w-[66%] w-full flex gap-4">
              <div className=" w-[50%] h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-center">
                <GoInfo className="size-6 absolute top-3 right-3 bg-white" />

                <p className="text-[#000000] sm:text-[2.2rem] text-[1.5rem] font-semibold  ">
                  ₹ 214003.80
                </p>
                <div className="flex justify-between sm:text-[1rem] text-[.8rem] gap-1 absolute bottom-2">
                  <p className="sm:w-full w-[60%] ">Total Payout Balance </p>
                </div>
              </div>
              <div className=" w-[50%] h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-center">
                <GoInfo className="size-6 absolute top-3 right-3 bg-white" />

                <p className="text-[#000000] sm:text-[2.2rem] text-[1.5rem] font-semibold  ">
                  ₹ 16003.78
                </p>
                <div className="flex justify-between sm:text-[1rem] text-[.8rem] gap-1 absolute bottom-2  items-center ">
                  <p className="sm:w-full w-[60%] ">Monthly Collection </p>

                  <p>May</p>
                </div>
              </div>
            </div>

            <div className=" sm:w-[33%] w-full h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-center">
              <GoInfo className="size-6 absolute top-3 right-3 bg-white" />

              <p className="text-[#000000] sm:text-[2.2rem] text-[2.6rem] font-semibold  ">
                ₹ 1043.78
              </p>
              <div className="flex justify-between sm:text-[1rem] text-[1.3rem] gap-1 absolute bottom-2">
                <p className="">Today's Sale </p>

                <p></p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 w-full justify-center pt-4 sm:justify-start px-[1.5rem] border-b pb-6">
            <button
              id="w"
              className="border sm:px-5 px-4 py-2 border-[#0F172A] rounded-full bg-[#004AAD] text-white text-nowrap"
              onClick={trans}
            >
              All Transactions
            </button>
            <button
              id="z"
              className="border sm:px-5 px-4 py-2 border-[#0F172A] rounded-full text-nowrap"
              onClick={settle}
            >
              Settlement
            </button>
          </div>

          {/* All Users */}

          {CustomerRec && <AllTransaction />}
          {CustomerAna && <Settlements />}
        </div>
      </div>
    </div>
  );
};

export default Payment;
