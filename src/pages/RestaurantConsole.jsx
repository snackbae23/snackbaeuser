import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'
import { BiSolidDashboard } from "react-icons/bi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";

import Dashboard from '../component/Dashboard';
import Menu from '../component/Menu';
import Payment from '../component/Payment';
import OfferAndEvents from '../component/OfferAndEvents';
import Navbar1 from '../component/Navbar1';
import Customers from '../component/Customers';
import Settings from '../component/Settings';

const RestaurantConsole = () => {



  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This enables smooth scrolling
    });
  }

  const screenWidth = window.innerWidth;
  const [isToggled, setIsToggled] = useState(false);
  const navigate = useNavigate();

  const [das, setdas] = useState(true);
  const [men, setmen] = useState(false);
  const [pay, setpay] = useState(false);
  const [off, setoff] = useState(false);
  const [cus, setcus] = useState(false);
  const [set, setset] = useState(false);
  const [log, setlog] = useState(false);


  const a = () => {
    setdas(true)
    setmen(false)
    setpay(false)
    setoff(false)
    setcus(false)
    setset(false)
    setlog(false)
    setIsToggled(false);
    scrollToTop();
    
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) { // Adjust the threshold as needed
    
    document.getElementById('left').style.display = "none";
    
  }  

  }
  const b = () => {
    setdas(false)
    setmen(true)
    setpay(false)
    setoff(false)
    setcus(false)
    setset(false)
    setlog(false)
    setIsToggled(false);
    scrollToTop();
    
    const screenWidth = window.innerWidth;
  if (screenWidth < 768) { // Adjust the threshold as needed
    document.getElementById('left').style.display = "none";
  }
  }
  const c = () => {
    setdas(false)
    setmen(false)
    setpay(true)
    setoff(false)
    setcus(false)
    setset(false)
    setlog(false)
    setIsToggled(false);
    scrollToTop();
    
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) { // Adjust the threshold as needed
      
      document.getElementById('left').style.display = "none";
      
      
    }  
  }
  const d = () => {
    setdas(false)
    setmen(false)
    setpay(false)
    setoff(true)
    setcus(false)
    setset(false)
    setlog(false)
    setIsToggled(false);
    scrollToTop();
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) { // Adjust the threshold as needed
      
      document.getElementById('left').style.display = "none";
      
    }  
  }
  const e = () => {
    setdas(false)
    setmen(false)
    setpay(false)
    setoff(false)
    setcus(true)
    setset(false)
    setlog(false)
    setIsToggled(false);
    scrollToTop();
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) { // Adjust the threshold as needed
      
      document.getElementById('left').style.display = "none";
      
    }  
  }
  const f = () => {
    setdas(false)
    setmen(false)
    setpay(false)
    setoff(false)
    setcus(false)
    setset(true)
    setlog(false)
    setIsToggled(false);
    scrollToTop();
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) { // Adjust the threshold as needed
      
      document.getElementById('left').style.display = "none";
      
    }  
  }
  const g = () => {
    // setdas(false)
    // setmen(false)
    // setpay(false)
    // setoff(false)
    // setcus(false)
    // setset(false)
    // setlog(true)
    // setIsToggled(false);
    // scrollToTop();
    // const screenWidth = window.innerWidth;
    // if (screenWidth < 768) { // Adjust the threshold as needed
      
    //   document.getElementById('left').style.display = "none";
      
    // }  
    console.log("inside g")
    const userId = localStorage.removeItem('user');
    console.log(userId)
    navigate("/");
  }

  const removeleft = () => {
    if (screenWidth < 768) { // Adjust the threshold as needed
      
      document.getElementById('left').style.display = "none";
      setIsToggled(false);
      
    } 

  }




  return (
    <>
    <div id='restaurant' className='absolute w-full h-[300vh] bg-black z-[700] opacity-45 hidden'></div>
    <Navbar1 isToggled={isToggled} setIsToggled={setIsToggled} />
      <div id='restaurant' className='w-full h-fit flex justify-center  relative  '>

          {/* frame */}
          <div id='frame' className='hidden fixed right-9 z-50  w-[75%] bg-white  h-fit mt-[70px] rounded-md p-5 border border-[black]'>
            <div className='flex flex-col '>
            <div className='flex gap-2 items-center justify-evenly p-2'>
              <GoPerson className='size-10 rounded-full border border-black p-1 ' />
              <div className='text-[#000000] font-semibold'>
                <p className='text-[1.3rem] '>Foodoos</p>
                <p>Snack Id :9881</p>
              </div>
              <IoSettingsOutline className='size-7' />

            </div>
            <button className='px-2 py-2 rounded-md text-[1.3rem] border border-[#999da2] my-3 text-[#004AAD] font-bold '>Add Account</button>

            </div>
            

          </div>

        {/* left side */}

        <div id='left' className={` ${ screenWidth >= 768 ?
                           'sm:w-[20%] bg-white fixed left-1  z-40    h-full   mt-[70px] px-6 text-[.95rem]  gap-32 ' : 
                           ' fixed hidden left-0 z-40 h-fit rounded-lg   mt-[70px] px-6 text-[.95rem]  gap-32 bg-white ' }`}>
          <div className='mt-2'>
            <div id=''
              onClick={a}

              className={`w-full h-[50px] cursor-pointer  mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${das ? ('bg-[#F8FAFC] text-[#004AAD]') : ('text-[#64748B]')} `}
            >
              <BiSolidDashboard className='text-[1.1rem]' /> <p className=''>Dashboard</p>
            </div>
            <div id=''
              onClick={b}

              className={`w-full h-[50px] cursor-pointer mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${men ? ('bg-[#F8FAFC] text-[#004AAD]') : ('text-[#64748B]')} `}
            >
              <MdOutlineAddShoppingCart className='text-[1.1rem]' /> <p className=''>Menu</p>
            </div>
            <div id=''
              onClick={c}

              className={`w-full h-[50px] cursor-pointer mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${pay ? ('bg-[#F8FAFC] text-[#004AAD]') : ('text-[#64748B]')} `}
            >
              <RiSecurePaymentLine className='text-[1.1rem]' /> <p className=''>Payments</p>
            </div>
            <div id=''
              onClick={d}

              className={`w-full h-[50px] cursor-pointer  mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${off ? ('bg-[#F8FAFC] text-[#004AAD]') : ('text-[#64748B]')} `}
            >
              <BiSolidOffer className='text-[1.1rem] ' /> <p className=''>Offers & Campaigns</p>
            </div>
            <div id=''
              onClick={e}

              className={`w-full h-[50px] cursor-pointer mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${cus ? ('bg-[#F8FAFC] text-[#004AAD]') : ('text-[#64748B]')} `}
            >
              <IoPersonOutline className='text-[1.1rem]' /><p className=''>Customers</p>
            </div>
          </div>

          <div className='mt-24'>
            <div id=''
              onClick={f}

              className={`w-full h-[50px] cursor-pointer  mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${set ? ('bg-[#F8FAFC] text-[#004AAD]') : ('text-[#64748B]')} `}
            >
              <CiSettings className='text-[1.2rem]' /><p className=''>Settings</p>
            </div>
            <div id=''
              onClick={g}
              
              className={`w-full h-[50px] cursor-pointer  flex items-center rounded-lg font-semibold p-4 gap-3 sm:mb-1 mb-8 ${log ? ('bg-[#F8FAFC] text-[#004AAD]') : ('text-[#64748B]')} `}
            >
              <IoLogOutOutline className='text-[1.2rem]' /><p className=''>Log Out</p>
            </div>
          </div>


        </div>



        {/* Right side */}


        <div id='right' onClick={removeleft}  className='sm:w-[80%] sm:ml-[20%] w-full h-fit bg-[#F6F8FF] flex flex-col '>

          {das && <Dashboard  />}
          {men && <Menu />}
          {pay && <Payment />}
          {off && <OfferAndEvents />}
          {cus && <Customers />}
          {set && <Settings/>}

        </div>

      </div>
    
      
    </>
  )
}

export default RestaurantConsole
