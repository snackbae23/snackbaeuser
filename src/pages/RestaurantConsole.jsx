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
import { FaConciergeBell } from "react-icons/fa";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";



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
      document.getElementById("restaurant").style.display = "none";
      document.getElementById('frame').style.display = "none";

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
      document.getElementById("restaurant").style.display = "none";
      document.getElementById('frame').style.display = "none";
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
      document.getElementById("restaurant").style.display = "none";
      document.getElementById('frame').style.display = "none";


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
      document.getElementById("restaurant").style.display = "none";
      document.getElementById('frame').style.display = "none";

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
      document.getElementById("restaurant").style.display = "none";
      document.getElementById('frame').style.display = "none";

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
      document.getElementById("restaurant").style.display = "none";
      document.getElementById('frame').style.display = "none";

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

  const removeall = () => {
    // Adjust the threshold as needed


    setIsToggled(false);
    document.getElementById("restaurant").style.display = "none";
    document.getElementById('frame').style.display = "none";
    document.getElementById("popup").style.display = "none";
    document.getElementById("Notification").style.display = "none";



  }

  // Notification array temp

  const notification = [{
    p: "Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    date: "12 May, 2025",
  }, {
    p: "Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    date: "12 May, 2025",
  }, {
    p: "Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    date: "12 May, 2025",
  }, {
    p: "Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    date: "12 May, 2025",
  }, {
    p: "Edit your information in a swipe Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
    date: "12 May, 2025",
  }]




  return (
    <>
      <div id='restaurant' onClick={removeall} className='absolute w-full h-[400vh] bg-black z-[700] opacity-45 hidden'></div>
      <Navbar1 isToggled={isToggled} setIsToggled={setIsToggled} />
      <div id='restaurant' className='w-full h-fit flex justify-center  relative  '>

        {/* frame */}
        <div id='frame' className='hidden fixed right-6 z-[900] sm:w-[25%]  w-[70%] bg-white  h-fit mt-[70px] rounded-b  pt-5 border border-[#0000001A]'>
          <div className='flex flex-col w-full  '>
            <div className='flex m-3 rounded-md  flex-col gap-2 items-center justify-evenly p-4 border border-[#00000080]'>
              <div className='w-full flex justify-start gap-5 items-center '>
                <img src="/image 148 (1).png" alt='' className='size-14 rounded-full  ' />
                <div className='text-[#000000] font-semibold'>
                  <p className='text-[1.3rem] '>Foodoos</p>
                  <p>Id : 9881</p>
                </div>
              </div>

              <button className='w-full sm:py-2 py-1 text-white bg-[#004AAD] rounded-md'>Add account</button>
              <button onClick={g} className='w-full sm:py-2 py-1 text-[1.1rem]  border border-[#C62828B2] text-[#C62828]  rounded-md font-bold'>Logout</button>
            </div>
            <div className='flex flex-col text-[#64748B] text-[]'>
              <button className='px-2 py-2  text-[1.3rem] border-t border-[#999da2] sm:hidden block    '>Notification</button>
              <button onClick={f}
                className='px-2 py-2  text-[1.3rem] border-t border-[#999da2] sm:hidden block   '>Setting</button>
              <button className='px-2 py-2  text-[1.3rem] border-t border-[#999da2]   '>Pricing</button>
              <Link to='https://www.snackbae.in/termsCondition' className='px-2 py-2  text-[1.3rem] border-t border-[#999da2] flex items-center justify-center  '>Terms & condition</Link>
              <Link to='https://www.snackbae.in/privacyPolicy' className='px-2 py-2  text-[1.3rem] border-t mb-4 border-[#999da2] flex items-center justify-center  '>Privacy Policy</Link>

            </div>

          </div>


        </div>

        {/* Notification */}
        <div id='Notification' className='hidden fixed right-6 z-[900] sm:w-[30%]  w-[70%] h-[450px] bg-white   mt-[70px] rounded-b  pt-5 border border-[#0000001A] '>
          <div className='flex w-full text-[#8A99AF] font-semibold text-[1.4rem]  justify-start px-4 border-b pb-4 '>
            <p className=''>Notification</p>
          </div>


          <div className='w-full h-[350px] flex flex-col items-center justify-center overflow-y-scroll hideScroller'>
            {notification.map((item, index) => (
              <div className='flex flex-col gap-2  justify-evenly p-5 border-b'>
                <p className='text-[1.1rem] text-[#64748B] font-Roboto  '>{item.p}</p>
                <p className='text-[.9rem]'>{item.date}</p>
              </div>

            ))}
          </div>
        </div>


        {/* left side for small */}
        <div className='md:hidden block   fixed bottom-2 px-3  w-[100%] h-fit z-[900]  '>
          <div className='flex items-center justify-between text-[#64748B] bg-white p-2 border rounded-md   '>
            <BiSolidDashboard onClick={a} className={`size-[32px] ${das ? ('bg-[#F8FAFC] text-[#004AAD]') : ('text-[#64748B]')}`} />
            <FaConciergeBell onClick={b} className={`size-[32px] ${men ? ('bg-[#F8FAFC] text-[#004AAD]') : ('text-[#64748B]')}`} />
            <HiOutlineCurrencyRupee onClick={c} className={`size-[32px] ${pay ? ('bg-[#F8FAFC] text-[#004AAD]') : ('text-[#64748B]')}`} />
            <HiOutlineSpeakerphone onClick={d} className={`size-[32px] ${off ? ('bg-[#F8FAFC] text-[#004AAD]') : ('text-[#64748B]')}`} />
            <FaUserAlt onClick={e} className={`size-[32px] ${cus ? ('bg-[#F8FAFC] text-[#004AAD]') : ('text-[#64748B]')} `} />

          </div>
        </div>

        {/* left side */}

        <div id='left' className='sm:w-[20%] sm:block hidden bg-white fixed left-1  z-40    h-full   mt-[70px] px-6 text-[.95rem]  gap-32 '>
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
              <FaConciergeBell className='text-[1.1rem]' /> <p className=''>Menu</p>
            </div>
            <div id=''
              onClick={c}

              className={`w-full h-[50px] cursor-pointer mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${pay ? ('bg-[#F8FAFC] text-[#004AAD]') : ('text-[#64748B]')} `}
            >
              <HiOutlineCurrencyRupee className='text-[1.1rem]' /> <p className=''>Payments</p>
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

          <div className='mt-[150px]'>
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


        <div id='right' className='sm:w-[80%] sm:ml-[20%] w-full h-fit bg-[#F6F8FF] flex flex-col '>

          {das && <Dashboard />}
          {men && <Menu />}
          {pay && <Payment />}
          {off && <OfferAndEvents />}
          {cus && <Customers />}
          {set && <Settings />}

        </div>

      </div>


    </>
  )
}

export default RestaurantConsole
