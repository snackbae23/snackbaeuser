import React from 'react'

import { useState } from 'react'

import { MdNavigateNext } from "react-icons/md";
import { GoInfo } from "react-icons/go";
import { GrFormPrevious } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Customers = () => {

  const udata = [{
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  }, {
    "Username": "Nitish Kumar",
    "Mobile": "+91 92*******44",
    "Gender": "Male",
    "TotalVisit": "89",
    "TotalSpend": "₹3199.00",
    "LastVisited": "Today"
  },]

  const Pagination = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const maxPage = Math.ceil(data.length / itemsPerPage);

    function currentPageData() {
      const startIndex = (currentPage - 1) * itemsPerPage;
      return data.slice(startIndex, startIndex + itemsPerPage);
    }

    function goToPage(pageNumber) {
      setCurrentPage(pageNumber);
    }

    const renderPageNumbers = () => {
      const pageNumbers = [];
      let itemsToShow = 3; // Number of pages to show before and after the current page
      let start = Math.max(currentPage - itemsToShow, 1);
      let end = Math.min(currentPage + itemsToShow, maxPage);

      if (start > 1) {
        pageNumbers.push(1);
        if (start > 2) {
          pageNumbers.push('...');
        }
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      if (end < maxPage) {
        if (end < maxPage - 1) {
          pageNumbers.push('...');
        }
        pageNumbers.push(maxPage);
      }

      return pageNumbers.map((number, index) =>
        number === '...' ? (
          <span key={index} className="page-item dots">
            {number}
          </span>
        ) : (
          <button
            key={index}
            onClick={() => goToPage(number)}
            className={`page-item ${currentPage === number ? 'active' : ''}`}
          >
            {number}
          </button>
        )
      );
    };

    return (
      <div>


        {/* Render the current page's data */}
        {currentPageData().map((item, index) => (
          <div key={index} className=" flex justify-between items-center px-12 my-2 py-2 font-semibold">
            {/* Render your data here */}
            <p>{item.Username}</p>
            <p>{item.Mobile}</p>
            <p className=''>{item.Gender}</p>
            <p>{item.TotalVisit}</p>
            <p>{item.TotalSpend}</p>
            <p>{item.LastVisited}</p>
          </div>
        ))}
        <div className='flex justify-between px-8  mt-7'>
          {/* Pagination controls */}
          {/* Dropdown for items per page */}
          <div className="items-per-page">
            <label htmlFor="items-per-page">Items per page:</label>
            <select className='border-2 mx-2 rounded-md'
              id="items-per-page"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value="6">6</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className='flex gap-5'>
            <button className="page-item" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
              <GrFormPrevious />
            </button>
            <div className="flex gap-3">{renderPageNumbers()}</div>
            <button className="page-item" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === maxPage}>
              <MdNavigateNext />
            </button>
          </div>

          <div className="current-page">
            Page {currentPage} of {maxPage}
          </div>
        </div>

      </div>
    );
  };

  return (
    <div id='menu' className='w-full h-fit relative '>
      <div className='  w-full  h-[90px] z-10 bg-[#FDE030] mt-[70px] flex justify-between items-center px-5 sm:px-12   '>
        <div>
          <p className='text-[1.6rem] font-semibold'>Customer Analytics</p>
          <p className='sm:text-[.9rem] text-[.8rem]'>Utilize customer analytics to make well-informed decisions.</p>
        </div>

      </div>
      <div className='w-full h-fit  mt-[10px] px-6   '>

        <div className='bg-white px-4 flex flex-col gap-6 sm:py-5 py-2'>


          <div className='flex justify-between sm:flex-row flex-col gap-4 text-[#000000] '>
            <p className='text-[1.4rem] font-semibold sm:px-5'>Customer Insights</p>
            <div className='flex gap-5 border border-[#000000B2] rounded-xl mr-4 p-3   items-center'>
              <p className='font-Roboto'>This month</p>
              <input type='date' />
            </div>
          </div>

          <div className='w-full h-fit bg-white flex sm:flex-row flex-col items-center justify-evenly gap-4 sm:my-4 sm:px-2 rounded-md '>
            <div className='sm:w-[66%] w-full flex gap-4'>
              <div className=' w-[50%] h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                <p className='text-[#777980] text-[.9rem] font-semibold'>Total Customer</p>
                {/* <img className='size-8 absolute right-2' src="/Badge.png" alt="" /> */}
                <GoInfo className='size-8 absolute right-2 z-10 bg-white'/>

                <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>4,412</p>
                <div className='flex text-[.7rem] gap-1'>
                  <p>30% </p>
                  <img src="/fi-rr-caret-up.png" alt="" />
                  <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                </div>



              </div>
              <div className='w-[50%] h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                <p className='text-[#777980] text-[.9rem] font-semibold'>Returning Customer</p>
                <GoInfo className='size-8 absolute right-2 z-10 bg-white'/>

                <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>1,412</p>
                <div className='flex text-[.7rem] gap-1'>
                  <p>30% </p>
                  <img src="/fi-rr-caret-up.png" alt="" />
                  <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                </div>



              </div>
            </div>

            <div className='sm:w-[33%] w-full h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

              <p className='text-[#777980] text-[.9rem] font-semibold'>Total Recommendation</p>
              <GoInfo className='size-8 absolute right-2 z-10 bg-white'/>

              <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '> 20</p>
              <div className='flex text-[.7rem] gap-1'>
                <p>30% </p>
                <img src="/fi-rr-caret-up.png" alt="" />
                <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
              </div>
            </div>
          </div>

          <div className='flex gap-4'>
            <button className='border px-5 py-2 border-[#0F172A] rounded-lg bg-[#004AAD] text-white'>Customer Record</button>
            <button className='border px-5 py-2 border-[#0F172A] rounded-lg'>Customer Analytics</button>
          </div>



          {/* All Users */}

          <div className='flex flex-col w-full h-fit   mt-6'>
            <div className='sm:px-7 px-1'>
              <p className='font-bold text-[1.3rem] mb-3'>Customer Records</p>
              <div className='flex gap-3'>
                <p>Showing: </p>
                <p className='text-[#004AAD]'>{udata.length} Total Customer records</p>
              </div>

              <div className='relative flex items-center mt-4 border rounded-md sm:w-[40%]'>
                <CiSearch className='absolute text-[1.3rem] font-semibold ml-2' />
                <input
                  className='w-full py-2 px-8 rounded-lg'
                  type="text"
                  placeholder='search with customer name/Mobile No'
                />
              </div>

            </div>
            <input type="text" />

            <div className='bg-white w-full h-fit p-4  mb-9 rounded-lg sm:block hidden'>
              <div className='flex justify-between text-[1.1rem] text-[#718096] px-8 border-b-2 pb-4 bg-[#F6F8FF] py-4 rounded-md'>
                <p>Customer Name</p>
                <p className='ml-11'>Phone Number</p>
                <p className='ml-9'>Gender</p>
                <p className='ml-6'>Total Visit</p>
                <p className='ml-5'>Total Spend</p>
                <p className='ml-5'>Last Visited</p>
              </div>
              <div className='w-full h-fit '>

                <Pagination data={udata} />

              </div>




            </div>

            <div className='w-full sm:hidden block'>

              {/* first one */}
              <div className='flex w-full bg-[#FFFFFF] my-3 rounded-md border p-4 border-[#373535] items-center  '>
                <div className='flex w-[50%] flex-col gap-3'>
                  <div className='flex flex-col gap-1'>
                    <p className='text-[1.2rem] text-[#808080]'>Customer Name</p>
                    <p className='font-bold text-[#0F172A]'>Souptik Das</p>
                  </div>
                  <div>
                    <p className='text-[1.2rem] text-[#808080]'>Total Visit</p>
                    <p className='font-bold text-[#0F172A] text-[]'>69</p>
                  </div>
                  <div>
                    <p className='text-[1.2rem] text-[#808080]'>Last Visited</p>
                    <p className='font-bold text-[#0F172A]'>Today</p>
                  </div>
                </div>
                <div className='flex w-[50%] flex-col gap-3'>
                  <div className='flex flex-col gap-1'>
                    <p className='text-[1.2rem] text-[#808080]'>Customer Name</p>
                    <p className='font-bold text-[#0F172A]'>Souptik Das</p>
                  </div>
                  <div>
                    <p className='text-[1.2rem] text-[#808080]'>Total Visit</p>
                    <p className='font-bold text-[#0F172A]'>69</p>
                  </div>
                  <div>
                    <p className='text-[1.2rem] text-[#808080]'>Last Visited</p>
                    <p className='font-bold text-[#0F172A]'>Today</p>
                  </div>
                </div>

              </div>
              {/* sec one */}
              <div className='flex w-full bg-[#FFFFFF] my-3 rounded-md border p-4 border-[#373535] items-center  '>
                <div className='flex w-[50%] flex-col gap-3'>
                  <div className='flex flex-col gap-1'>
                    <p className='text-[1.2rem] text-[#808080]'>Customer Name</p>
                    <p className='font-bold text-[#0F172A]'>Souptik Das</p>
                  </div>
                  <div>
                    <p className='text-[1.2rem] text-[#808080]'>Total Visit</p>
                    <p className='font-bold text-[#0F172A] text-[]'>69</p>
                  </div>
                  <div>
                    <p className='text-[1.2rem] text-[#808080]'>Last Visited</p>
                    <p className='font-bold text-[#0F172A]'>Today</p>
                  </div>
                </div>
                <div className='flex w-[50%] flex-col gap-3'>
                  <div className='flex flex-col gap-1'>
                    <p className='text-[1.2rem] text-[#808080]'>Customer Name</p>
                    <p className='font-bold text-[#0F172A]'>Souptik Das</p>
                  </div>
                  <div>
                    <p className='text-[1.2rem] text-[#808080]'>Total Visit</p>
                    <p className='font-bold text-[#0F172A]'>69</p>
                  </div>
                  <div>
                    <p className='text-[1.2rem] text-[#808080]'>Last Visited</p>
                    <p className='font-bold text-[#0F172A]'>Today</p>
                  </div>
                </div>

              </div>
              <div className='flex w-full bg-[#FFFFFF] my-3 rounded-md border p-4 border-[#373535] items-center  '>
                <div className='flex w-[50%] flex-col gap-3'>
                  <div className='flex flex-col gap-1'>
                    <p className='text-[1.2rem] text-[#808080]'>Customer Name</p>
                    <p className='font-bold text-[#0F172A]'>Souptik Das</p>
                  </div>
                  <div>
                    <p className='text-[1.2rem] text-[#808080]'>Total Visit</p>
                    <p className='font-bold text-[#0F172A] text-[]'>69</p>
                  </div>
                  <div>
                    <p className='text-[1.2rem] text-[#808080]'>Last Visited</p>
                    <p className='font-bold text-[#0F172A]'>Today</p>
                  </div>
                </div>
                <div className='flex w-[50%] flex-col gap-3'>
                  <div className='flex flex-col gap-1'>
                    <p className='text-[1.2rem] text-[#808080]'>Customer Name</p>
                    <p className='font-bold text-[#0F172A]'>Souptik Das</p>
                  </div>
                  <div>
                    <p className='text-[1.2rem] text-[#808080]'>Total Visit</p>
                    <p className='font-bold text-[#0F172A]'>69</p>
                  </div>
                  <div>
                    <p className='text-[1.2rem] text-[#808080]'>Last Visited</p>
                    <p className='font-bold text-[#0F172A]'>Today</p>
                  </div>
                </div>

              </div>
            </div>




          </div>


        </div>


      </div>
    </div>
  )
}

export default Customers