import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { TbProgressHelp } from "react-icons/tb";
import { LuPhoneCall } from "react-icons/lu";

const Dashboard = () => {
    const data1 = [{
        "Customer": "Nitish",
        "Id": "#Id238975",
        "Date": "Apr 23,2021",
        "Amount": "₹23423.00",
        "Discount": "₹234",
        "Status": "complete",
        "Mode": "Upi",
        "Merchant": "Foodoos",
        "Id1": "1234565"
    },
    {
        "Customer": "Nitish",
        "Id": "#Id238975",
        "Date": "Apr 23,2021",
        "Amount": "₹23423.00",
        "Discount": "₹234",
        "Status": "Cancelled",
        "Mode": "Upi",
        "Merchant": "Foodoos",
        "Id1": "1234565"
    },
    {
        "Customer": "Nitish",
        "Id": "#Id238975",
        "Date": "Apr 23,2021",
        "Amount": "₹23423.00",
        "Discount": "₹234",
        "Status": "In Progress",
        "Mode": "Debit Cart",
        "Merchant": "Foodoos",
        "Id1": "1234565"
    },
    {
        "Customer": "Nitish",
        "Id": "#Id238975",
        "Date": "Apr 23,2021",
        "Amount": "₹3423.00",
        "Discount": "₹234",
        "Status": "In Progress",
        "Mode": "Credit Cart",
        "Merchant": "Foodoos",
        "Id1": "1234565"
    }, {
        "Customer": "Nitish",
        "Id": "#Id238975",
        "Date": "Apr 23,2021",
        "Amount": "₹23423.00",
        "Discount": "₹234",
        "Status": "complete",
        "Mode": "Upi",
        "Merchant": "Foodoos",
        "Id1": "1234565"
    },
    {
        "Customer": "Nitish",
        "Id": "#Id238975",
        "Date": "Apr 23,2021",
        "Amount": "23423.00",
        "Discount": "234",
        "Status": "Cancelled",
        "Mode": "Upi",
        "Merchant": "Foodoos",
        "Id1": "1234565"
    },
    ]
    return (
        <div className='w-full h-full'>
            <div className='w-[80%] h-[70px] z-10 bg-[#FDE030] mt-[70px] flex justify-between items-center px-10 fixed '>
                <div>
                    <p className='text-[1.6rem] font-semibold'>Dashboard</p>
                    <p className='text-[.9rem]'>Welcome to your Dashboard</p>
                </div>

                <div className='flex gap-5 '>
                    <button className='bg-white px-5 py-1 rounded-md border text-[.9rem] font-Roboto border-[#000000B2]'>View Profile</button>
                    <button className='bg-white px-5 py-1 rounded-md border text-[.9rem] font-Roboto  border-[#000000B2]'>Get QR Code</button>
                </div>


            </div>

            <div className='w-full h-fit  mt-[140px]'>
                {/* total report */}
                <div className=' w-full flex justify-between gap-3'>
                    <div className='w-[73%] flex flex-col gap-2'>
                        <div className='w-full h-[145px] bg-white flex items-center justify-evenly gap-2 p-4 rounded-md'>
                            <div className='w-[33%] h-full relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                                <p className='text-[#777980] text-[.9rem] font-semibold'>Total Customer</p>
                                <img className='size-8 absolute right-2' src="/Badge.png" alt="" />

                                <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>4,412</p>
                                <div className='flex text-[.7rem] gap-1'>
                                    <p>30% </p>
                                    <img src="/fi-rr-caret-up.png" alt="" />
                                    <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                                </div>



                            </div>
                            <div className='w-[33%] h-full relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                                <p className='text-[#777980] text-[.9rem] font-semibold'>Returning Customer</p>
                                <img className='size-8 absolute right-2' src="/Badge.png" alt="" />

                                <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>1,412</p>
                                <div className='flex text-[.7rem] gap-1'>
                                    <p>30% </p>
                                    <img src="/fi-rr-caret-up.png" alt="" />
                                    <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                                </div>



                            </div>
                            <div className='w-[33%] h-full relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                                <p className='text-[#777980] text-[.9rem] font-semibold'>Total Recommendation</p>
                                <img className='size-8 absolute right-2' src="/Badge.png" alt="" />

                                <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>412</p>
                                <div className='flex text-[.7rem] gap-1'>
                                    <p>30% </p>
                                    <img src="/fi-rr-caret-up.png" alt="" />
                                    <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                                </div>



                            </div>
                        </div>
                        <p className='text-[#000000] text-[1.6rem] font-semibold ml-4'>Totay's Report</p>
                        <div className='w-full h-[145px] flex justify-evenly gap-2 p-4 rounded-md bg-white'>
                            <div className='w-[50%] h-full relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                                <p className='text-[#777980] text-[.9rem] font-semibold'>Returning Customer</p>
                                <img className='size-8 absolute right-2' src="/Badge (1).png" alt="" />

                                <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>1,412</p>
                                <div className='flex text-[.7rem] gap-1'>
                                    <p>30% </p>
                                    <img src="/fi-rr-caret-up.png" alt="" />
                                    <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                                </div>



                            </div>
                            <div className='w-[50%] h-full relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                                <p className='text-[#777980] text-[.9rem] font-semibold'>Returning Customer</p>
                                <img className='size-8 absolute right-2' src="/Badge (1).png" alt="" />

                                <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>1,412</p>
                                <div className='flex text-[.7rem] gap-1'>
                                    <p>30% </p>
                                    <img src="/fi-rr-caret-up.png" alt="" />
                                    <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                                </div>



                            </div>
                        </div>
                    </div>
                    {/* Relationship */}
                    <div className='w-[27%] h-[345px] bg-white rounded-md py-4 px-5 flex flex-col gap-4'>
                        <p className='text-[#0F172A] text-[1.2rem] font-semibold border-b border-[#F1F5F9] pb-3'>Relationship Manager</p>
                        <p className='text-[#64748B] text-[.8rem]  border-b pb-2'>Need help? contact your Relationship manager </p>

                        <div className='flex flex-col  gap-3'>
                            <div className='flex gap-2 items-center'>
                                <CiLocationOn className='text-[#94A3B8] font-bold text-[1.3rem]' />
                                <p className='text-[.9rem] font-Roboto text-[#0F172A]'>Nitish Kumar</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <LuPhoneCall className='text-[#94A3B8] font-bold text-[1.3rem]' />
                                <p className='text-[.9rem] font-Roboto text-[#0F172A]'>+91 91234567889</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <TbProgressHelp className='text-[#94A3B8] font-bold text-[1.3rem]' />
                                <p className='text-[.9rem] font-Roboto text-[#0F172A]'>Help@snackbae.in</p>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <CiCalendarDate className='text-[#94A3B8] font-bold text-[1.3rem]' />
                                <p className='text-[.9rem] font-Roboto text-[#0F172A]'>10 AM - 7 PM</p>
                            </div>
                        </div>

                        <div className='w-full h-[40px] bg-[#67CE67] text-[1.1rem] font-semibold rounded-lg flex items-center justify-center gap-3 text-white'>
                            <IoLogoWhatsapp />
                            <p>Need Help?</p>
                        </div>

                    </div>
                </div>


                {/* Latest Transaction */}
                <div className='w-full h-fit flex flex-col '>
                    <div className='w-full h-[70px] flex justify-between items-center px-6 '>
                        <div>
                            <p className='text-[1.6rem] font-semibold'>Latest Transaction</p>
                            <p className='text-[.9rem] text-[#000000]'>Recent 5 transaction</p>
                        </div>
                        <div>
                            <p className='text-[#004AAD] text-[1.3rem] font-Roboto'>Notification</p>
                        </div>

                        
                    </div>
                    <div className='w-full h-[350px]  mt-4  px-6 bg-[#F6F8FF]  rounded-md  shadow-md '>

                            <div className='text-[#6B7280] flex w-full justify-between mb-4 border-b-2 font-semibold text-[.9rem]' >
                                <div className='w-[29%] mb-3'>
                                    <div className='flex text-center text-[1.05rem]  items-center'>Customer</div>
                                </div>
                                <div className='grid grid-cols-5  w-[80%] '>
                                    <div className='ml-2'>DATE & TIME</div>
                                    <div className='ml-4'>AMOUNT</div>
                                    <div className=''>DISCOUNT</div>
                                    <div className='ml-8'>STATUS</div>
                                    <div className='ml-12'>MODE</div>
                                   
                                </div>
                            </div>

                            <div className='w-full h-fit flex flex-col gap-1 '>
                                {data1.map((item, index) => (
                                    <div key={index} className='w-full flex my-2  text-[.9rem] font-semibold' >
                                        <div className='w-[25%] flex flex-col justify-center'>
                                            <p className='text-[#111827] font-semibold text-[.9rem]'> {item.Customer}</p>
                                            
                                        </div>

                                        <div className='grid grid-cols-5 w-[80%]  ml-12 g '>
                                            <p className='text-[#6B7280] flex items-center '>{item.Date}</p>
                                            <p className='text-[black]   flex items-center'>{item.Amount}</p>
                                            <p className='text-[#004AAD]   text-center flex items-center  '>{item.Discount}</p>
                                            <p className={`rounded-3xl  w-full  h-[70%]  text-center mt-2 flex items-center justify-center 
                ${item.Status === 'complete' ? 'bg-[#DEF7EC] text-green-700 ' :
                                                    item.Status === 'In Progress' ? 'bg-[#E1EFFE] text-[#7157f1]' :
                                                        item.Status === 'Cancelled' ? 'bg-[#FBD5D5] text-red-800' : ''
                                                }`}
                                            >{item.Status}</p>
                                            <p className={`rounded-3xl   text-center flex mt-2 h-[70%] items-center justify-center  ml-6
                ${item.Mode === 'Upi' ? 'bg-[#DEF7EC] text-green-700' :
                                                    item.Mode === 'Debit Cart' ? 'bg-[#fbd9de] text-[#FD4A65]' :
                                                        item.Mode === 'Credit Cart' ? 'bg-[#E1EFFE] text-[#7157f1]' : ''
                                                }`}>{item.Mode}</p>
                                           

                                        </div>


                                        
                                    </div>
                                ))}
                            </div>

                        </div>



                </div>


                {/* Menu Performance */}

                <div className='w-full h-fit'>
                    <p>Menu </p>

                </div>






            </div>

        </div>
    )
}

export default Dashboard