import React from 'react'

import { useState } from 'react'

import { GoInfo } from "react-icons/go";

import CustomerRecords from './CustomerRecords';
import CustomerAnalytics from './CustomerAnalytics';


const Customers = () => {
  var userID = localStorage.getItem('user');
  console.log("user id" ,userID)
  const id = userID
  const resId = userID
  
  const [CustomerRec,setCustomer]=useState(true);
  const [CustomerAna,setCustomerana]=useState(false)

  const Records = () => {
    setCustomer(true)
    setCustomerana(false)
    document.getElementById('w').style.backgroundColor = '#004AAD';
    document.getElementById('w').style.color = 'white';
    document.getElementById('z').style.backgroundColor = 'white';
    document.getElementById('z').style.color = 'black';
    

  }
  const Analytics = () => {
    setCustomer(false)
    setCustomerana(true)
    document.getElementById('z').style.backgroundColor = '#004AAD';
    document.getElementById('z').style.color = 'white';
    document.getElementById('w').style.backgroundColor = 'white';
    document.getElementById('w').style.color = 'black';
    

  }

  const [Today,setToday]=useState(true);
  const [Week,setWeek]=useState(false);
  const [Month,setMonth]=useState(false);

  const today = () => {
    setToday(true)
    setWeek(false)
    setMonth(false)
  }

  const weekly = () => {
    setToday(false)
    setWeek(true)
    setMonth(false)
  }

  const Monthly = () => {
    setToday(false)
    setWeek(false)
    setMonth(true)
  }
  

 

  return (
    <div id='menu' className='w-full h-fit relative sm:mb-1 mb-10'>
      <div className='  w-full  h-[90px] z-10 bg-[#FDE030] mt-[70px] flex justify-between items-center px-5 sm:px-12   '>
        <div>
          <p className='text-[1.6rem] font-semibold'>Customer Analytics</p>
          <p className='sm:text-[.9rem] text-[.8rem]'>Utilize customer analytics to make well-informed decisions.</p>
        </div>

      </div>
      <div className='w-full h-fit  mt-[10px] sm:px-6 px-3   '>

        <div className='bg-white  flex flex-col gap-6 sm:py-5  rounded-lg p-2 '>


          <div className='flex sm:justify-between  sm:items-center sm:flex-row flex-col gap-3 text-[#000000] '>
            <p className='text-[1.8rem] font-semibold sm:px-5'>Customer Insights</p>
            <div className='flex sm:gap-4 gap-2    items-center sm:mr-7'>
               <button onClick={today} className={` border  px-4 py-2 rounded-lg font-semibold ${ Today ? "text-white bg-[#004AAD]":"text-[#0F172ACC] bg-white border-[#00000080]"} `}>Today</button>
               <button onClick={weekly} className={` border  px-4 py-2 rounded-lg font-semibold ${ Week ? "text-white bg-[#004AAD]":"text-[#0F172ACC] bg-white border-[#00000080]"} `}>Weekly</button>
               <button onClick={Monthly} className={` border  px-4 py-2 rounded-lg font-semibold ${ Month ? "text-white bg-[#004AAD]":"text-[#0F172ACC] bg-white border-[#00000080]"} `}>Monthly</button>
            </div>
          </div>

          <div className='w-full h-fit bg-white flex sm:flex-row flex-col items-center justify-evenly gap-3 sm:my-4 sm:px-6 rounded-md '>
            <div className='sm:w-[66%] w-full flex gap-3'>
              <div className=' w-[50%] h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                <p className='text-[#777980] text-[.9rem] font-semibold'>Total Customer</p>
                {/* <img className='size-8 absolute right-2' src="/Badge.png" alt="" /> */}
                <GoInfo className='size-6 absolute right-2 z-10 bg-white'/>

                <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>389</p>
                <div className='flex text-[.7rem] gap-1'>
                  <p>30% </p>
                  <img src="/fi-rr-caret-up.png" alt="" />
                  <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                </div>



              </div>
              <div className='w-[50%] h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                <p className='text-[#777980] text-[.9rem] font-semibold'>Returning Customer</p>
                <GoInfo className='size-6 absolute right-2 z-10 bg-white'/>

                <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>140</p>
                <div className='flex text-[.7rem] gap-1'>
                  <p>30% </p>
                  <img src="/fi-rr-caret-up.png" alt="" />
                  <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                </div>



              </div>
            </div>

            <div className='sm:w-[33%] w-full h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

              <p className='text-[#777980] text-[.9rem] font-semibold'>Total Recommendation</p>
              <GoInfo className='size-6 absolute right-2 z-10 bg-white'/>

              <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '> 11</p>
              <div className='flex text-[.7rem] gap-1'>
                <p>30% </p>
                <img src="/fi-rr-caret-up.png" alt="" />
                <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
              </div>
            </div>
          </div>

          <div className='flex gap-4 w-full  sm:justify-start sm:px-[1.5rem] px-[.4rem]'>
            <button id='w' className='border sm:px-5 px-2.5 py-2 border-[#0F172A] rounded-lg bg-[#004AAD] text-white text-nowrap' onClick={Records}>Customer Record</button>
            <button id='z' className='border sm:px-5 px-2.5 py-2 border-[#0F172A] rounded-lg text-nowrap' onClick={Analytics} >Customer Analytics</button>
          </div>



          {/* All Users */}

          

          {CustomerRec && <CustomerRecords/>}
          {CustomerAna && <CustomerAnalytics/>}

          


        </div>


      </div>
    </div>
  )
}

export default Customers