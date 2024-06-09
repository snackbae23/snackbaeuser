import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const MenuClicks = () => {
    const [search, setSearch] = useState("");

    const data = [{
        itemtype: "veg",
        itemname: "Hulk Beast Burger",
        itemCost: "10,000"
    }, {
        itemtype: "veg",
        itemname: "Hulk Beast Burger",
        itemCost: "10,000"
    }, {
        itemtype: "veg",
        itemname: "Hulk Beast Burger",
        itemCost: "10,000"
    }, {
        itemtype: "veg",
        itemname: "Hulk Beast Burger",
        itemCost: "10,000"
    }, {
        itemtype: "veg",
        itemname: "Hulk Beast Burger",
        itemCost: "10,000"
    }, {
        itemtype: "veg",
        itemname: "Hulk Beast Burger",
        itemCost: "10,000"
    }, {
        itemtype: "veg",
        itemname: "Hulk Beast Burger",
        itemCost: "10,000"
    }, {
        itemtype: "veg",
        itemname: "Hulk Beast Burger",
        itemCost: "10,000"
    }, {
        itemtype: "veg",
        itemname: "Hulk Beast Burger",
        itemCost: "10,000"
    }, {
        itemtype: "veg",
        itemname: "Hulk Beast Burger",
        itemCost: "10,000"
    }, {
        itemtype: "veg",
        itemname: "Hulk Beast Burger",
        itemCost: "10,000"
    }]

    const Pagination = ({ data }) => {
        const [currentPage, setCurrentPage] = useState(1);
        const [itemsPerPage, setItemsPerPage] = useState(6);
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
                    <div key={index} className='flex justify-between text-[1.1rem] font-semibold text-[#0F172A]  sm:px-10 border-b-2 pb-4 bg-white py-4 rounded-md'>

                        <div className='flex gap-2'>
                            {
                                item.itemtype=='veg' ? ( <img src='/Group 1171277690.png' alt='dfghj'/>) :( <img src='/Group 1171277690.png' alt='dfghj'/>)
                            }
                           
                            <p >{item.itemname}</p>
                        </div>

                        <p className='mr-6'  >{item.itemCost}</p>


                    </div>
                ))}
                <div className='flex items-center sm:flex-row flex-col gap-4 justify-between px-8  mt-7'>
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

                    <div className="current-page sm:block hidden">
                        Page {currentPage} of {maxPage}
                    </div>
                </div>

            </div>
        );
    };
    return (
        <div className='w-full  h-fit sm:px-5 px-3 mt-4 flex flex-col gap-4 '>
            <div>
                <p className="text-[1.6rem] font-semibold">Menu Clicks</p>
                <p className="text-[.9rem] text-[#000000]">
                    Based on your customer Activity
                </p>
            </div>

            {/* search menu */}
            <div className='flex gap-6 sm:justify-start '>
            <div className="relative w-fit shadow rounded-md border-2 ">
                <input
                    className=" w-[220px] sm:w-[400px] focus:outline-none h-[2.4rem] sm:h-[3rem] px-[1rem]"
                    type="text"
                    placeholder="Search for dish"
                    value={search}
                //   onChange={handleSearch}
                />
                <CiSearch className=" absolute right-[1rem] top-[50%] translate-y-[-50%] text-[1.3rem]" />
            </div>
            <div className='flex gap-2 items-center justify-between w-fit px-4 bg-white shadow-md'>
                <p className='text-nowrap font-semibold'>SORT BY</p>
                <IoIosArrowDown className=' cursor-pointer' />
            </div>
            </div>
            


            <div className='bg-white w-full h-fit p-4  mb-9 rounded-lg '>
                <div className=' flex justify-between text-[1.1rem] text-[#64748B] sm:px-12 border-b-2 pb-4 bg-[#F7F9FC] py-4 rounded-md'>
                    <p >Menu Item</p>
                    <p> Total Clicks</p>
                </div>
                <div className='w-full h-fit '>

                    <Pagination data={data} />

                </div>




            </div>
        </div>
    )
}

export default MenuClicks