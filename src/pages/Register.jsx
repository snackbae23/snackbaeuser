import React, { useState } from "react";
import Slider from "../component/Slider";
import { Link } from "react-router-dom";
import Navbar2 from "../component/Navbar2";
import { CiMail } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { PiEyeSlashLight } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "../component/RegStepper.css";
import { TiTick } from "react-icons/ti";
import { BsFileEarmarkMedicalFill } from "react-icons/bs";
import tick from "../assets/tick.png";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    brandName: "",
    otp: "",
    contactNumber: "",
    email: "",
    businessType: "",
    payoutMethod: "",
    password: "",
    confirmPassword: "",
    fssai: "",
    gst: "",
    accountNumber: "",
    reAccountNumber: "",
    ifsc: "",
    bankingName: "",
    upiId: "",
  });

  const steps = [
    "Basic Details",
    "Business Info",
    "Payout Method",
    "Start journey",
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [isVerify, setIsVerify] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [termCondition, setTermCondition] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const verifyEmail = (e) => {
    e.preventDefault();

    console.log(isVerify);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:4000/api/verify-otp",
      headers: {
        "Content-Type": "application/json",
      },
      data:{email: formData.email , otp:formData.otp},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        if (response.data.otpexpired === "true") 
        {
          toast.error("OTP Expired Please Regenerate");
        }
        else{
          console.log("verified")
            toast.success("OTP Verified");
            setIsVerify(true);
        }
      
      })
      .catch((error) => {
        console.log(error);
        toast.error("Invalid OTP");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep((prev) => prev + 1);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.password !== formData.confirmPassword) {
      toast.error("Please fill same password");
    } else {
      setFormData({
        brandName: "",
        otp: "",
        contactNumber: "",
        email: "",
        businessType: "",
        payoutMethod: "",
        password: "",
        confirmPassword: "",
        fssai: "",
        gst: "",
        accountNumber: "",
        reAccountNumber: "",
        ifsc: "",
        bankingName: "",
        upiId: "",
      });
      setPrivacyPolicy(false);
      setTermCondition(false);
      // Add your form submission logic here

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://seashell-app-lgwmg.ondigitalocean.app/api/regsiterRestaurant",
        headers: {
          "Content-Type": "application/json",
        },
        data: formData,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          localStorage.setItem("user", response.data.restaurantDetails);
          toast.success("Account Created!");
          navigate("/restaurant");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something went wrong! please try again");
        });
    }
  };

const requestOtp = async (e) => {
  e.preventDefault();
  const EMAIL = formData.email;
  console.log("hello");

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:4000/api/check-email-existence",
    headers: {
      "Content-Type": "application/json",
    },
    data: { email: formData.email },
  };

  try {
    const response = await axios.request(config);
    console.log(JSON.stringify(response.data));
    if (response.data.exists ===false) {
      let sendOtpConfig = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:4000/api/send-otp",
        headers: {
          "Content-Type": "application/json",
        },
        data: { email: formData.email },
      };

      try {
        const otpResponse = await axios.request(sendOtpConfig);
        console.log(JSON.stringify(otpResponse.data));
        toast.success("OTP sent successfully");
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong! Please try again.");
      }
    } else {
      toast.error("Email already exists. Please sign in.");
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong! Please try again.");
  }
};

  return (
    <div className="flex w-full h-fit">
      <div className="md:w-[60%] w-full flex flex-col relative md:gap-4 gap-2 justify-center items-center mb-10">
        <Navbar2 />

        <div className="flex flex-col sm:w-[75%] w-[80%] gap-10 sm:mx-auto">
          {/* heading div */}
          <div className="flex flex-col gap-2 mt-[70px] ml-6 w-full">
            <h2 className="font-bold text-left text-2xl">
              Register with snackbae
            </h2>
            <p className="text-[#64748B] text-left text-sm">
              Enter few details and start using snackbae as your restaurant
              partner
            </p>
          </div>

          {/* stepper div */}
          <div className="flex justify-between">
            {steps?.map((step, i) => (
              <div
                key={i}
                className={`step-item ${currentStep === i + 1 && "active"} ${
                  (i + 1 < currentStep || complete) && "complete"
                }`}
              >
                <div className="step">
                  {i + 1 < currentStep || complete ? (
                    <TiTick className="text-white" size={24} />
                  ) : (
                    i + 1
                  )}
                </div>
                <p className="text-grey-500">{step}</p>
              </div>
            ))}
          </div>

          {/* Email verification */}
          <form
            onSubmit={verifyEmail}
            className={`flex flex-col w-[75%] gap-4 mx-auto ${
              currentStep === 1 && !isVerify ? "block" : " hidden"
            }`}
          >
            {/* Email verification */}
            <div className="flex gap-1 flex-col">
              <label className="w-full text-left text-m flex flex-col gap-3">
                <p className="font-semibold ">Email Id</p>
                <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                  <CiMail className="size-[25px]" />
                  <input
                    required
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-full text-richblack-5 outline-none"
                  />
                </div>
              </label>

              <label className="w-full text-left text-m flex flex-col gap-3">
                <p onClick={requestOtp} className="text-[#004AAD] font-semibold cursor-pointer">Request OTP</p>
                <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3 relative">
                  <RiLockPasswordLine className="size-[25px]" />
                  <input
                    required
                    type="text"
                    placeholder="One Time Password"
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    className="w-full h-full text-richblack-5 outline-none"
                  />
                </div>
              </label>

              <button className="bg-[#004AAD] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                Verify
              </button>
            </div>
          </form>

          {/* form 1 */}
          <form
            onSubmit={handleSubmit}
            className={`flex flex-col w-[75%] gap-4 mx-auto ${
              currentStep === 1 && isVerify ? "block" : " hidden"
            }`}
          >
            {/* password */}
            <div className="flex gap-2 flex-col">
              <label className=" w-full text-left text-m flex flex-col gap-3">
                <p className="font-semibold">Contact Number</p>
                <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                  <BsTelephone className="size-[25px]" />
                  <input
                    required
                    type="text"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full h-full text-richblack-5 outline-none"
                  />
                </div>
              </label>
              <label className=" w-full text-left text-m flex flex-col gap-3">
                <p className="font-semibold ">Set Password</p>
                <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3 relative">
                  <RiLockPasswordLine className="size-[25px]" />
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full h-full text-richblack-5 outline-none"
                  />
                  <span
                    className="absolute right-5 top-[13px] cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <PiEyeLight fontSize={24} />
                    ) : (
                      <PiEyeSlashLight fontSize={24} />
                    )}
                  </span>
                </div>
              </label>

              <label className="w-full  text-left text-m flex flex-col gap-3">
                <p className="font-semibold">Confirm Password</p>
                <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3 relative">
                  <RiLockPasswordLine className="size-[25px]" />
                  <input
                    required
                    type={showCPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full h-full text-richblack-5 outline-none"
                  />
                  <span
                    className="absolute right-5 top-[13px] cursor-pointer"
                    onClick={() => setShowCPassword((prev) => !prev)}
                  >
                    {showCPassword ? (
                      <PiEyeLight fontSize={24} />
                    ) : (
                      <PiEyeSlashLight fontSize={24} />
                    )}
                  </span>
                </div>
              </label>
            </div>

            <div className="w-full mt-8 items-center flex justify-between">
              <Link to="/">
                <p className="text-[#004AAD] font-semibold py-[8px]">
                  Back to Sign In
                </p>
              </Link>

              <button className="sm:w-[20%] w-[40%] bg-[#004AAD] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] py-[8px]">
                Next
              </button>
            </div>
          </form>

          {/* form 2 */}
          <form onSubmit={handleSubmit}
            className={`flex flex-col md:w-[75%] w-[80%] gap-4 mx-auto ${
              currentStep === 2 ? "block" : " hidden"
            }`}
          >
            <div className="flex flex-col gap-4">
              <label className=" w-full text-left text-m flex flex-col gap-3">
                <p className="font-semibold">Brand Name</p>
                <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                  <IoPersonOutline className="size-[25px]" />
                  <input
                    required
                    type="text"
                    name="brandName"
                    placeholder="Foodie"
                    value={formData.brandName}
                    onChange={handleChange}
                    className="w-full h-full text-richblack-5 outline-none"
                  />
                </div>
              </label>

              <label className="w-full text-left text-m flex flex-col gap-3">
                <p className="font-semibold ">Business Type</p>
                <div className="flex w-full h-[3rem] border rounded-[0.5rem] px-[12px] items-center gap-3">
                  <select
                    required
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full h-full outline-none"
                  >
                    <option value="">Select Business Type</option>
                    <option value="Retail">Retail</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Technology">Technology</option>
                    <option value="Healthcare">Healthcare</option>
                  </select>
                </div>
              </label>

              <label className=" w-full text-left text-m flex flex-col gap-3">
                <p className=" font-semibold">FSSAI License Number</p>
                <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                  <BsFileEarmarkMedicalFill className="size-[25px]" />
                  <input
                    required
                    type="number"
                    name="fssai"
                    placeholder="License Number"
                    value={formData.fssai}
                    onChange={handleChange}
                    className="w-full h-full text-richblack-5 outline-none"
                  />
                </div>
              </label>

              <label className="w-full text-left text-m flex flex-col gap-3">
                <p className="font-semibold ">GST Number(Optional)</p>
                <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                  <BsFileEarmarkMedicalFill className="size-[25px]" />
                  <input
                    type="number"
                    name="gst"
                    placeholder="GST Numbet"
                    value={formData.gst}
                    onChange={handleChange}
                    className="w-full h-full text-richblack-5 outline-none"
                  />
                </div>
              </label>
            </div>

            <div className="w-full mt-8 items-center flex justify-between">
            <button
                onClick={() => {
                  setCurrentStep((prev) => prev - 1);
                }}
                className={`sm:w-[25%] w-[40%] bg-white rounded-[8px] text-[#004AAD] border border-[#004AAD] font-medium text-richblack-900 px-[12px] py-[8px] ${
                  currentStep === steps.length ? "hidden" : "block"
                }`}
              >
                Previous
              </button>

              <button className="sm:w-[25%] w-[40%] bg-[#004AAD] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] py-[8px]">
                Next
              </button>
            </div>
          </form>

          {/* form 3 */}
          <form onSubmit={handleSubmit}
            className={`flex flex-col md:w-[75%] w-[80%] gap-4 mx-auto ${
              currentStep === 3 ? "block" : " hidden"
            }`}
          >
            <div>
              <label className=" w-full text-left text-m flex flex-col gap-3">
                <p className="font-semibold">Payout Method</p>
                <div className="flex w-full h-[3rem] border rounded-[0.5rem] px-[12px] items-center gap-3">
                  <select
                    required
                    name="payoutMethod"
                    value={formData.payoutMethod}
                    onChange={handleChange}
                    className="w-full h-full outline-none"
                  >
                    <option value="">Select Method</option>
                    <option value="BankTransfer">Bank Transfer</option>
                    <option value="upi">UPI</option>
                  </select>
                </div>
              </label>

              {formData.payoutMethod === "BankTransfer" ? (
                <div className="flex flex-col gap-4 mt-4">
                  <label className=" w-full text-left text-m flex flex-col gap-3">
                    <p className=" font-semibold">Account Number</p>
                    <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                      <BsFileEarmarkMedicalFill className="size-[25px]" />
                      <input
                        required
                        type="number"
                        name="accountNumber"
                        placeholder="91234567899123456789"
                        value={formData.accountNumber}
                        onChange={handleChange}
                        className="w-full h-full text-richblack-5 outline-none"
                      />
                    </div>
                  </label>

                  <label className=" w-full text-left text-m flex flex-col gap-3">
                    <p className=" font-semibold">Re-enter Account Number</p>
                    <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                      <BsFileEarmarkMedicalFill className="size-[25px]" />
                      <input
                        required
                        type="number"
                        name="reAccountNumber"
                        placeholder="91234567899123456789"
                        value={formData.reAccountNumber}
                        onChange={handleChange}
                        className="w-full h-full text-richblack-5 outline-none"
                      />
                    </div>
                  </label>

                  <label className=" w-full text-left text-m flex flex-col gap-3">
                    <p className=" font-semibold">IFSC Code</p>
                    <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                      <BsFileEarmarkMedicalFill className="size-[25px]" />
                      <input
                        required
                        type="number"
                        name="ifsc"
                        placeholder="91234567899123456789"
                        value={formData.ifsc}
                        onChange={handleChange}
                        className="w-full h-full text-richblack-5 outline-none"
                      />
                    </div>
                  </label>

                  <label className=" w-full text-left text-m flex flex-col gap-3">
                    <p className=" font-semibold">Banking Name</p>
                    <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                      <IoPersonOutline className="size-[25px]" />
                      <input
                        required
                        type="text"
                        name="bankingName"
                        placeholder="Intekhabul Haque"
                        value={formData.bankingName}
                        onChange={handleChange}
                        className="w-full h-full text-richblack-5 outline-none"
                      />
                    </div>
                  </label>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <label className=" w-full text-left text-m flex flex-col gap-3">
                    <p className=" font-semibold">UPI Id</p>
                    <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                      <BsFileEarmarkMedicalFill className="size-[25px]" />
                      <input
                        required
                        type="number"
                        name="upiId"
                        placeholder="abscfdgd@ybl"
                        value={formData.upiId}
                        onChange={handleChange}
                        className="w-full h-full text-richblack-5 outline-none"
                      />
                    </div>
                  </label>
                  <label className=" w-full text-left text-m flex flex-col gap-3">
                    <p className=" font-semibold">Banking Name</p>
                    <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                      <IoPersonOutline className="size-[25px]" />
                      <input
                        required
                        type="text"
                        name="bankingName"
                        placeholder="Intekhabul Haque"
                        value={formData.bankingName}
                        onChange={handleChange}
                        className="w-full h-full text-richblack-5 outline-none"
                      />
                    </div>
                  </label>
                </div>
              )}
            </div>

            <div className="w-full mt-8 items-center flex justify-between">
            <button
                onClick={() => {
                  setCurrentStep((prev) => prev - 1);
                }}
                className={`sm:w-[25%] w-[40%] bg-white rounded-[8px] text-[#004AAD] border border-[#004AAD] font-medium text-richblack-900 px-[12px] py-[8px] ${
                  currentStep === steps.length ? "hidden" : "block"
                }`}
              >
                Previous
              </button>

              <button className="sm:w-[25%] w-[40%] bg-[#004AAD] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] py-[8px]">
                Next
              </button>
            </div>
          </form>

          {/* form 4 */}
          <form onSubmit={submitHandler}
            className={`flex flex-col w-[75%] gap-4 mx-auto ${
              currentStep === steps.length ? "block" : " hidden"
            }`}
          >
            <div className="w-full flex flex-col justify-center items-center gap-4">
              <img className="size-[150px]" src={tick} />
              <p className="text-[#26203B] sm:text-[24px] text-[16px] font-semibold">
                Account created successfully!
              </p>
              <p className="text-[#9C9AA5] sm:text-[14px] text-[12px]">
                Welcome aboard! Start your success journey with Snackbae!
              </p>
              <button
                className="sm:w-[40%] w-full bg-[#004AAD] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] mt-4 py-[8px]"
              >
                Lets Start!
              </button>
            </div>

          </form>

          {/* button div */}
          {/* <div
            className={`sm:w-[90%] w-full sm:ml-6 mt-2 items-center flex ${
              currentStep === steps.length
                ? "justify-center"
                : "justify-between"
            }`}
          >
            {currentStep === 1 ? (
              <Link to="/">
                <p className="text-[#004AAD] font-semibold px-[12px] py-[8px]">
                  Back to Sign In
                </p>
              </Link>
            ) : (
              <button
                onClick={() => {
                  setCurrentStep((prev) => prev - 1);
                }}
                className={`sm:w-[20%] w-[40%] bg-white rounded-[8px] text-[#004AAD] border border-[#004AAD] font-medium text-richblack-900 px-[12px] py-[8px] ${
                  currentStep === steps.length ? "hidden" : "block"
                }`}
              >
                Previous
              </button>
            )}

            {currentStep === steps.length ? (
              <button
                onClick={submitHandler}
                className="w-[40%] bg-[#004AAD] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] py-[8px]"
              >
                Lets Start!
              </button>
            ) : (
              <button
                onClick={() => {
                  setCurrentStep((prev) => prev + 1);
                }}
                className="sm:w-[20%] w-[40%] bg-[#004AAD] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] py-[8px]"
              >
                {currentStep === steps.length ? "Lets Start!" : "Next"}
              </button>
            )}
          </div> */}
        </div>
      </div>

      <div className="md:w-[40%] md:block hidden bg-[#004AAD] rounded-l-2xl">
        <Slider />
      </div>
    </div>
  );
};

export default Register;
