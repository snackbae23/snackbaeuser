import React, { useState } from "react";
import Slider from "../component/Slider";
import Navbar2 from "../component/Navbar2";
import { CiMail } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormData({
      email: "",
    });
    // Add your form submission logic here
    console.log(formData);
    navigate("/verification");
  };

  return (
    <div className="flex w-full md:h-[100vh]">
      <div className="md:w-[60%] w-full flex flex-col relative gap-4 justify-center items-center">
        <Navbar2 />
        <form
          onSubmit={submitHandler}
          className="flex flex-col md:w-[60%] w-[80%] gap-y-4 md:mt-[100px] mt-[100px] md:m-0 sm:mx-auto"
        >
          <div className="flex flex-col gap-3 md:w-[85%] w-full">
            <h2 className="font-bold text-left text-2xl">
              Forgot your password ?
            </h2>
            <p className="text-[#64748B] text-left text-sm">
              Enter the email address associated with your account and we will
              send you a link to reset your password.
            </p>
          </div>

          <p className="bg-[#64748B] md:hidden block border border-dashed mb-12 mt-2"></p>

          <div className="flex  w-full h-[3rem] border rounded-[0.5rem] md:mt-2 mt-[40px] pl-[12px] items-center gap-3">
            <CiMail className="size-[25px]" />
            <input
              required
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              className="w-full h-full text-richblack-5 outline-none"
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <button className="w-full bg-[#004AAD] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] py-[8px] mt-2">
              Continue
            </button>
            <Link to="/">
              <span className="text-[#004AAD] font-semibold">
                Back to Sign In
              </span>
            </Link>
          </div>

          <div className="flex gap-2 md:mt-[100px] mt-[100px] justify-center">
            <p>Don't have an account?</p>
            <Link to="/register">
              <span className="text-[#2563EB] font-bold">Register Now</span>
            </Link>
          </div>
        </form>
      </div>

      <div className="md:w-[40%] md:block hidden bg-[#004AAD] rounded-l-2xl">
        <Slider />
      </div>
    </div>
  );
};

export default ResetPassword;
