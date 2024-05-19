import React, { useEffect, useState } from "react";

import { MdNavigateNext } from "react-icons/md";

import { GrFormPrevious } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import axios from "axios";

const AllTransaction = () => {
  var userID = localStorage.getItem("user");
  console.log("user id", userID);

  const resId = userID;
  const [paymentData, setpaymentData] = useState();
useEffect(() => {
      getPaymentData();
    }, [resId]);
  const getPaymentData = async (req, res) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://seashell-app-lgwmg.ondigitalocean.app/api/payments/${resId}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log("paymentdata", response.data);
        setpaymentData(response.data.reverse());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(paymentData?.length)
  const dateparameter = (dateStr) => {
    const dateString = dateStr;

    // Step 1: Parse the date string
    const date = new Date(dateString);

    // Step 2: Define arrays for month names
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Step 3: Extract day, month, and year from the date object
    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    // Step 4: Format the date as "23 April 2001"
    const formattedDate = `${day} ${month} ${year}`;
    console.log(formattedDate); // Output: "18 May 2024"
    return formattedDate;
  };





  const Pagination = ({ data }) => {
    //data =data?.reverse();

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const maxPage = Math.ceil(data?.length / itemsPerPage);

    function currentPageData() {
      const startIndex = (currentPage - 1) * itemsPerPage;
      return data?.slice(startIndex, startIndex + itemsPerPage);
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
          pageNumbers.push("...");
        }
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      if (end < maxPage) {
        if (end < maxPage - 1) {
          pageNumbers.push("...");
        }
        pageNumbers.push(maxPage);
      }

      return pageNumbers.map((number, index) =>
        number === "..." ? (
          <span key={index} className="page-item dots">
            {number}
          </span>
        ) : (
          <button
            key={index}
            onClick={() => goToPage(number)}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            {number}
          </button>
        )
      );
    };

    return (
      <div>
        {/* Render the current page's data */}
        {currentPageData()?.map((item, index) => (
            <div
              key={index}
              className="w-full flex mb-2  sm:text-[.9rem] text-[.8rem] font-semibold sm:border-none border rounded-xl border-[#00000080] p-1"
            >
              <div className="w-[34%] flex sm:flex-row flex-col mb-3 items-center justify-evenly">
                <p className="text-[#111827] font-semibold text-[.9rem] ml-4">
                  {" "}
                  {item?.userId?.name || "User"}
                </p>
                <p className="text-[#6B7280] flex items-center ">
                  {dateparameter(item.date)}
                </p>
              </div>

              <div className="grid sm:grid-cols-4 grid-cols-3  w-[66%] gap-2 justify-evenly ">
                {/* <p className='text-[#6B7280] flex items-center '>{item.Date}</p> */}
                <p className="text-[black]   flex items-center">
                  {item.amount}
                </p>
                <p className="text-[#004AAD]   text-center flex items-center ml-7  ">
                  {item.discount}
                </p>
                <p
                  className={`rounded-3xl  w-full  h-[70%] py-[.5rem]   text-center mt-2 hidden sm:flex items-center justify-center 
                
                     bg-[#DEF7EC] text-green-700 
                    // : item.Status === "In Progress"
                    // ? "bg-[#E1EFFE] text-[#7157f1]"
                    // : item.Status === "Cancelled"
                    // ? "bg-[#FBD5D5] text-red-800"
                    // : ""
                }`}
                >
                  complete
                </p>
                <p
                  className={`rounded-3xl    text-center p-1 sm:flex mt-2 h-[70%] items-center justify-center 
                ${
                  item.mode === "upi"
                    ? "bg-[#DEF7EC] text-green-700"
                    : item.mode === "wallet"
                    ? "bg-[#fbd9de] text-[#FD4A65]"
                    : item.mode === "netbanking"
                    ? "bg-[#E1EFFE] text-[#7157f1]"
                    : ""
                }`}
                >
                  {item.mode}
                </p>
              </div>
            </div>
          ))}
        <div className="flex justify-between px-8  mt-7 sm:flex-row flex-col sm:gap-0 gap-4">
          {/* Pagination controls */}
          {/* Dropdown for items per page */}
          <div className="items-per-page">
            <label htmlFor="items-per-page">Items per page:</label>
            <select
              className="border-2 mx-2 rounded-md"
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
          <div className="flex gap-5">
            <button
              className="page-item"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <GrFormPrevious />
            </button>
            <div className="flex gap-3">{renderPageNumbers()}</div>
            <button
              className="page-item"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === maxPage}
            >
              <MdNavigateNext />
            </button>
          </div>

          <div className="current-page sm:block hidden">
            Page {currentPage} of {maxPage}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-fit">
      <div className="flex flex-col w-full h-fit ">
        <div className="bg-white w-full h-fit p-4  mb-9 rounded-lg ">
          <div className="text-[#6B7280] flex w-full justify-between mb-4 border-b-2 font-semibold text-[.9rem] gap-2">
            <div className="w-[34%] flex mb-3 items-center justify-evenly">
              <div className="flex text-center text-[1.05rem]  items-center">
                Customer
              </div>
              <div className=" sm:block hidden">DATE & TIME</div>
            </div>
            <div className="grid sm:grid-cols-4 grid-cols-3 sm:text-[.9rem] text-[.8rem] mt-1  w-[66%] gap-2 justify-evenly ">
              <div className="">AMOUNT</div>
              <div className="">DISCOUNT</div>
              <div className=" sm:ml-8 ml-2">STATUS</div>
              <div className="sm:block hidden ml-16">MODE</div>
            </div>
          </div>
          <div className="w-full h-fit ">
            <Pagination data={paymentData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTransaction;
