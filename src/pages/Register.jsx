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

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    brandName: "",
    contactNumber: "",
    email: "",
    businessType: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [termCondition, setTermCondition] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Please fill same password");
    } else {
      setFormData({
        brandName: "",
        contactNumber: "",
        email: "",
        businessType: "",
        password: "",
        confirmPassword: "",
      });
      setPrivacyPolicy(false);
      setTermCondition(false);
      // Add your form submission logic here
      console.log(formData);

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

  return (
    <div className="flex w-full ">
      <div className="md:w-[60%] w-full flex flex-col relative md:gap-4 gap-2 justify-center items-center mb-10">
        <Navbar2 />
        <form
          onSubmit={submitHandler}
          className="flex flex-col md:w-[85%] w-[80%] gap-y-4 mt-[100px]  sm:mx-auto"
        >
          <div className="flex flex-col gap-2 md:w-[75%] w-full">
            <h2 className="font-bold text-left text-2xl">
              Register with snackbae
            </h2>
            <p className="text-[#64748B] text-left text-sm">
              Enter few details and start using snackbae as your restaurant
              partner
            </p>
          </div>

          <p className="bg-[#64748B] border border-dashed md:my-2 my-1"></p>
          <div className="flex items-center gap-3">
            <img src="Ellipse 20.png" width={20} height={20} />
            <p>Business Details</p>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex md:flex-row flex-col gap-6">
              <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                Brand Name:
                <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                  <IoPersonOutline className="size-[25px]" />
                  <input
                    type="text"
                    name="brandName"
                    placeholder="Foodie"
                    value={formData.brandName}
                    onChange={handleChange}
                    className="w-full h-full text-richblack-5 outline-none"
                  />
                </div>
              </label>

              <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                Contact Number:
                <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                  <BsTelephone className="size-[25px]" />
                  <input
                    type="text"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full h-full text-richblack-5 outline-none"
                  />
                </div>
              </label>
            </div>

            <div className="w-full flex md:flex-row flex-col gap-6">
              <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                Email:
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

              <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                Business Type:
                <div className="flex w-full h-[3rem] border rounded-[0.5rem] px-[12px] items-center gap-3">
                  <select
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
                    {/* Add more options as needed */}
                  </select>
                </div>
              </label>
            </div>

            <div className="w-full flex md:flex-row flex-col gap-6">
              <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                Set Password:
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

              <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                Confirm Password:
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

            <div className="w-full flex gap-6 md:flex-row flex-col mt-3">
              <label className="text-xs text-center flex items-center  font-semibold">
                <input
                  required
                  type="checkbox"
                  checked={privacyPolicy}
                  onChange={() => setPrivacyPolicy(!privacyPolicy)}
                  className="size-[18px] mr-2"
                />
                Agree to our
                <Link to="https://www.snackbae.in/privacyPolicy">
                  <span className="text-[#2563EB] ml-1">Privacy & Policy</span>
                </Link>
              </label>

              <label className="text-xs text-center font-semibold flex">
                <input
                  required
                  type="checkbox"
                  checked={termCondition}
                  onChange={() => setTermCondition(!termCondition)}
                  className="size-[18px] mr-2"
                />
                Agree to other
                <Link to="https://www.snackbae.in/termsCondition">
                  <span className="text-[#2563EB] ml-1">term & condition</span>
                </Link>
              </label>
            </div>

            <div className="flex flex-col items-center gap-4 mb-2">
              <button className="md:w-[50%] w-full mx-auto md:mt-10 mt-4 bg-[#004AAD] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] py-[8px]">
                Create profile
              </button>
              <Link to="/">
                <span className="text-[#004AAD] font-semibold">
                  Back to Sign In
                </span>
              </Link>
            </div>
          </div>
        </form>
      </div>

      <div className="md:w-[40%] md:block hidden bg-[#004AAD] rounded-l-2xl">
        <Slider />
      </div>
    </div>
  );
};

export default Register;
