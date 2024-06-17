import React from 'react'

import { useState } from 'react'

import { GoInfo } from "react-icons/go";

import CustomerRecords from './CustomerRecords';
import CustomerAnalytics from './CustomerAnalytics';
import { useEffect } from 'react';
import axios from 'axios';
import { RiseLoader } from 'react-spinners';


const Customers = () => {


  const [loader, setloader] = useState(false);

  var userID = localStorage.getItem('user');
  console.log("user id", userID)
  const id = userID
  const resId = userID

  const [resData, setResData] = useState();

  const [totalCustomersT, setTotalCustomersT] = useState(0);
  const [totalCustomersW, setTotalCustomersW] = useState(0);
  const [totalCustomersM, setTotalCustomersM] = useState(0);

  const [repeatingCustomerT, setRepeatingCustomerT] = useState(0);
  const [repeatingCustomerW, setRepeatingCustomerW] = useState(0);
  const [repeatingCustomerM, setRepeatingCustomerM] = useState(0);

  const [recommendationT, setRecommendationT] = useState(0);
  const [recommendationW, setRecommendationW] = useState(0);
  const [recommendationM, setRecommendationM] = useState(0);

  const getRestaurantData = async (req, res) => {
    setloader(true);
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://goldfish-app-yhaxv.ondigitalocean.app/api/getRestaurantDetails/${resId}`,
      // url: `http://localhost:4000/api/getRestaurantDetails/${resId}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        
        console.log(response.data);
        console.log(response.data);
        setResData(response?.data);
        const resData = response.data;
        console.log(resData);

        //total visits today 
        const today = new Date().toISOString().slice(0, 10);
        console.log(today);
        const todayCustT = resData?.restaurant?.totalCustomersData.filter(
          (item) => item.createdAt && item.createdAt.slice(0, 10) === today
        );
        console.log(todayCustT);
        setTotalCustomersT(todayCustT.length);


        //last 7 days
        const now = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(now.getDate() - 7);

        const recentVisitors = resData?.restaurant?.totalCustomersData.filter(customer => {
          const visitDate = new Date(customer.createdAt);
          return visitDate >= sevenDaysAgo;
        });
        setTotalCustomersW(recentVisitors.length);

        //last 30 days
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(now.getDate() - 30);
        console.log("30 days ago", thirtyDaysAgo)

        const recentVisitors1 = resData?.restaurant?.totalCustomersData.filter(customer => {
          const visitDate = new Date(customer.createdAt);
          return visitDate >= thirtyDaysAgo;
        });
        console.log(recentVisitors1);
        setTotalCustomersM(recentVisitors1.length);


        //repeating visits today
        const customersVisitedToday = resData?.restaurant?.customerData.filter(customer => {
          const customerDate = new Date(customer.createdAt).toISOString().slice(0, 10);
          return customerDate === today && customer.count>1;
        });
        setRepeatingCustomerT(customersVisitedToday.length);

        //last 7 days
        const repeatingVisitors = resData?.restaurant?.customerData.filter(customer => {
          const visitDate = new Date(customer.createdAt);
          return visitDate >= sevenDaysAgo && customer.count > 1;
        });
        setRepeatingCustomerW(repeatingVisitors.length);

        //last 30 days
        const repeatingVisitors1 = resData?.restaurant?.customerData.filter(customer => {
          const visitDate = new Date(customer.createdAt);
          return visitDate >= thirtyDaysAgo && customer.count > 1;
        });
        setRepeatingCustomerM(repeatingVisitors1.length);


        //total recommendations -- today
        const recommendedToday = resData?.restaurant?.recommendationRecord.filter(customer => {
          const customerDate = new Date(customer.createdAt).toISOString().slice(0, 10);
          return customerDate === today;
        });
        setRecommendationT(recommendedToday.length);

        //last 7 days
        const recommended = resData?.restaurant?.recommendationRecord.filter(customer => {
          const visitDate = new Date(customer.createdAt);
          return visitDate >= sevenDaysAgo;
        });
        setRecommendationW(recommended.length);

        //last 30 days
        const recommended1 = resData?.restaurant?.recommendationRecord.filter(customer => {
          const visitDate = new Date(customer.createdAt);
          return visitDate >= thirtyDaysAgo;
        });
        setRecommendationM(recommended1.length);


        setTimeout(() => {
          setloader(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRestaurantData();
  }, [resId]);

  const [CustomerRec, setCustomer] = useState(true);
  const [CustomerAna, setCustomerana] = useState(false)

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

  const [Today, setToday] = useState(true);
  const [Week, setWeek] = useState(false);
  const [Month, setMonth] = useState(false);

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

      {loader ? (
              // Show a loader when resData is empty
              <div className="flex justify-center items-center w-full h-[500px]  z-50 ">
                <RiseLoader className=' ' color="#004AAD" />
              </div>
            ) : (
              <div className='bg-white  flex flex-col gap-6 sm:py-5  rounded-lg p-2 '>


          <div className='flex sm:justify-between  sm:items-center sm:flex-row flex-col gap-3 text-[#000000] '>
            <p className=' sm:block hidden text-[1.8rem] font-semibold sm:px-5'>Customer Insights</p>
            <div className='flex sm:gap-4 gap-2    items-center sm:mr-7'>
              <button onClick={today} className={` border  px-4 py-2 rounded-lg font-semibold ${Today ? "text-white bg-[#004AAD]" : "text-[#0F172ACC] bg-white border-[#00000080]"} `}>Today</button>
              <button onClick={weekly} className={` border  px-4 py-2 rounded-lg font-semibold ${Week ? "text-white bg-[#004AAD]" : "text-[#0F172ACC] bg-white border-[#00000080]"} `}>Weekly</button>
              <button onClick={Monthly} className={` border  px-4 py-2 rounded-lg font-semibold ${Month ? "text-white bg-[#004AAD]" : "text-[#0F172ACC] bg-white border-[#00000080]"} `}>Monthly</button>
            </div>
          </div>

          <div className='w-full h-fit bg-white flex sm:flex-row flex-col items-center justify-evenly gap-3 sm:my-4 sm:px-6 rounded-md '>
            <div className='sm:w-[66%] w-full flex gap-3'>
              <div className=' w-[50%] h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                <p className='text-[#777980] text-[.9rem] font-semibold'>Total Customer</p>
                {/* <img className='size-8 absolute right-2' src="/Badge.png" alt="" /> */}
                {/* <GoInfo className='size-6 absolute right-2 z-10 bg-white' /> */}

                <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>
                {Today ? totalCustomersT : Week ? totalCustomersW : Month ? totalCustomersM : 0}
                </p>
                <div className='flex text-[.7rem] gap-1'>
                  <p>30% </p>
                  <img src="/fi-rr-caret-up.png" alt="" />
                  <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                </div>



              </div>
              <div className='w-[50%] h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                <p className='text-[#777980] text-[.9rem] font-semibold'>Returning Customer</p>
                {/* <GoInfo className='size-6 absolute right-2 z-10 bg-white' /> */}

                <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>
                {Today ? repeatingCustomerT : Week ? repeatingCustomerW : Month ? repeatingCustomerM : 0}
                </p>
                <div className='flex text-[.7rem] gap-1'>
                  <p>30% </p>
                  <img src="/fi-rr-caret-up.png" alt="" />
                  <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                </div>



              </div>
            </div>

            <div className='sm:w-[33%] w-full h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

              <p className='text-[#777980] text-[.9rem] font-semibold'>Total Recommendation</p>
              {/* <GoInfo className='size-6 absolute right-2 z-10 bg-white' /> */}

              <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>
              {Today ? recommendationT : Week ? recommendationW : Month ? recommendationM : 0}
              </p>
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



          {CustomerRec && <CustomerRecords />}
          {CustomerAna && <CustomerAnalytics />}




        </div>
            )}

        


      </div>
    </div>
  )
}

export default Customers
