import React, { useState } from "react";
import Slider from "../component/Slider";
import { Link } from "react-router-dom";
import Navbar2 from "../component/Navbar2";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { PiEyeSlashLight } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import toast from 'react-hot-toast';


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [rememberMe, setRememberMe] = useState(false);
  const[showPassword, setShowPassword] = useState(false);
  const[loading,setLoading] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setFormData({
      email: "",
      password: "",
    });
    // setLoading(true);
    // setIsLoggedIn(true);
    // toast.success("Logged In");
    console.log("Printing the formData ");
    console.log(formData);
    console.log("Printing the rememberMe ");
    console.log(rememberMe);
    let config = {
      method: 'POST',
      maxBodyLength: Infinity,
      url: 'https://seashell-app-lgwmg.ondigitalocean.app/api/restaurantLogin',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : formData
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      localStorage.setItem("user",(response.data.details))
      toast.success('Login Successfull')
       navigate("/restaurant");
    })
    .catch((error) => {
      console.log(error);
      toast.error(`Email or Password doesn't match`)
    });
   
  }

  return (
    <div className="flex w-full md:h-[100vh]">
      {/* login form */}
      <div className="md:w-[60%] w-full flex flex-col relative gap-4 justify-center items-center">
        <Navbar2 />
        <form
          onSubmit={submitHandler}
          className="flex flex-col md:w-[60%] w-[80%] gap-y-4 md:mt-6 mt-[100px] md:m-0 sm:mx-auto"
        >
          <div className="font-bold text-left text-2xl">
            Sign In to your Dashboard
          </div>
          <p className="text-[#64748B] text-left text-sm">
            Welcome back! please enter your detail
          </p>
          <p className="bg-[#64748B] md:hidden block border border-dashed mb-8 mt-4"></p>

          <div className="flex flex-col gap-4 md:mt-0 mt-4">
            <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
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

            <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3 relative">
              <RiLockPasswordLine className="size-[25px]" />
              <input
                required
                type= {showPassword ? ("text") : ("password")}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={changeHandler}
                className="w-full h-full text-richblack-5 outline-none"
              />
              <span 
            className='absolute right-5 top-[13px] cursor-pointer'
            onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? 

                (<PiEyeLight fontSize={24} />):
                (<PiEyeSlashLight fontSize={24} />)}
            </span>
            </div>
          </div>

          <div className="flex justify-between mt-3 items-center">
            <label className="text-xs font-bold text-center flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="size-[18px] mr-2"
              />
              Remember me
            </label>
            <div>
              <Link to="/resetPassword">
                <p className="text-xs mt-1 text-[#2563EB] font-bold max-w-max ">
                  Forgot Password?
                </p>
              </Link>
            </div>
          </div>

          <button className="bg-[#004AAD] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
            {/* {loading ?
            (<span class="loader"></span>):
            (<p>Sign up</p>)} */}
            Sign In
          </button>

          <div className="flex gap-2 md:mt-2 mt-[100px] justify-center">
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

export default Login;
