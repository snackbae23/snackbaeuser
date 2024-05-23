import React, { useState } from 'react'
import Slider from "../component/Slider";
import { Link } from "react-router-dom";
import Navbar2 from "../component/Navbar2";
import { RiLockPasswordLine } from "react-icons/ri";
import { PiEyeSlashLight } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const NewPassword = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });
  
    const[showPassword, setShowPassword] = useState(false);
    const[showCPassword, setShowCPassword] = useState(false);
  
    function changeHandler(event) {
      setFormData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value,
      }));
    }
  
    function submitHandler(event) {
      event.preventDefault();
      if (formData.password !== formData.confirmPassword) {
        toast.error("Please fill same password");
      } 
      else{
        console.log("Printing the formData ");
      console.log(formData);
      setFormData({
        password: "",
        confirmPassword: "",
      });
      }
     
    }
  
    return (
      <div className="flex w-full md:h-[100vh]">
        {/* New password form */}
        <div className="md:w-[60%] w-full flex flex-col relative gap-4 justify-center items-center">
          <Navbar2 />
          <form
            onSubmit={submitHandler}
            className="flex flex-col md:w-[60%] w-[80%] gap-y-4 md:mt-6 mt-[100px] md:m-0 sm:mx-auto"
          >
            <div className="font-bold text-left text-2xl">
              Create New Password
            </div>
            <p className="text-[#64748B] text-left text-sm">
            Set a new password to regain access to your account.
            </p>
            <p className="bg-[#64748B] md:hidden block border border-dashed mb-8 mt-4"></p>
  
            <div className="flex flex-col gap-4 md:mt-0 mt-4">
            <label className=" w-full font-semibold text-left text-m flex flex-col gap-3">
                Set Password:
                <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3 relative">
                  <RiLockPasswordLine className="size-[25px]" />
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={changeHandler}
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
  
              <label className="w-full font-semibold text-left text-m flex flex-col gap-3">
                Confirm Password:
                <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3 relative">
                  <RiLockPasswordLine className="size-[25px]" />
                  <input
                    required
                    type={showCPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={changeHandler}
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
  
            <button className="bg-[#004AAD] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
              {/* {loading ?
              (<span class="loader"></span>):
              (<p>Sign up</p>)} */}
              Save
            </button>
  
            <div className="flex gap-2 md:mt-2 mt-[50px] justify-center">
              <Link to="/">
                <span className="text-[#2563EB] font-bold">Back to Sign In</span>
              </Link>
            </div>
          </form>
        </div>
  
        <div className="md:w-[40%] md:block hidden bg-[#004AAD] rounded-l-2xl">
          <Slider />
        </div>
      </div>
    );
}

export default NewPassword