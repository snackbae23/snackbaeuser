import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { MdForwardToInbox } from "react-icons/md";
import Chart from 'react-google-charts';
import Charts from './Charts';

const CustomerAnalytics = () => {
    var userID = localStorage.getItem('user');
    console.log("user id" ,userID)
    const id = userID
    const resId = userID
    return (
        <div className='w-full bg-[#F6F8FF] sm:px-6 h-fit '>

            <div className='flex flex-col w-full h-fit   mt-6'>
                <div className='flex gap-4 w-full h-fit  my-9 sm:flex-row flex-col '>


                    <div className='sm:w-[32%] min-h-[200px] border border-[#00000080] rounded-lg bg-white '>
                        <div className='flex gap-4 flex-col  w-full h-[75%] p-[1rem] border-b border-[#00000080]'>
                            <div className='text-[1.3rem] text-[#777980]'>
                                <p>Total Customers Visited in</p>
                                <p>Last 15 Days</p>
                            </div>
                            <p className='text-[1.8rem] text-[#1D1F2C]'>190</p>
                        </div>
                        <div className='w-full flex items-center justify-evenly text-[1.6rem] h-[25%] py-[.5rem]'>

                            <MdForwardToInbox className='text-[#004AAD] ' />
                            <FiPhone className='text-[#004AAD]' />
                            <IoLogoWhatsapp className='text-green-400' />

                            <button className='bg-[#004AAD] text-white py-2 sm:px-3 px-2 rounded-md text-[1rem] mr-2'>
                                Send Campaign</button>
                        </div>



                    </div>

                    <div className='sm:w-[32%] min-h-[200px] border border-[#00000080] rounded-lg bg-white '>
                        <div className='flex gap-4 flex-col  w-full h-[75%] p-[1rem] border-b border-[#00000080]'>
                            <div className='text-[1.3rem] text-[#777980]'>
                                <p>Total Customers Visited in</p>
                                <p>Last 30 Days</p>
                            </div>
                            <p className='text-[1.8rem] text-[#1D1F2C]'>390</p>
                        </div>
                        <div className='w-full flex items-center justify-evenly text-[1.6rem] h-[25%] py-[.5rem]'>

                            <MdForwardToInbox className='text-[#004AAD] ' />
                            <FiPhone className='text-[#004AAD]' />
                            <IoLogoWhatsapp className='text-green-400' />

                            <button className='bg-[#004AAD] text-white py-2 sm:px-3 px-2 rounded-md text-[1rem] mr-2'>
                                Send Campaign</button>
                        </div>



                    </div>

                    <div className='sm:w-[32%] min-h-[200px] border border-[#00000080] rounded-lg bg-white '>
                        <div className='flex gap-4 flex-col  w-full h-[75%] p-[1rem] border-b border-[#00000080]'>
                            <div className='text-[1.3rem] text-[#777980]'>
                                <p>Customer Birthday this</p>
                                <p>month</p>
                            </div>
                            <p className='text-[1.8rem] text-[#1D1F2C]'>12</p>
                        </div>
                        <div className='w-full flex items-center justify-evenly text-[1.6rem] h-[25%] py-[.5rem]'>

                            <MdForwardToInbox className='text-[#004AAD] ' />
                            <FiPhone className='text-[#004AAD]' />
                            <IoLogoWhatsapp className='text-green-400' />

                            <button className='bg-[#004AAD] text-white py-2 sm:px-3 px-2 rounded-md text-[1rem] mr-2'>
                                Send Campaign</button>
                        </div>



                    </div>
                </div>

                {/* Customers at Risk */}

                <div className='w-full my-3 font-Roboto text-[#000000]'>
                    <p className=' text-[1.9rem] font-bold '>Customers at Risk</p>
                    <p className='text-[.9rem]'>Utilize customer analytics to make well-informed decisions.</p>
                </div>

                <div className='flex gap-4 w-full  h-fit my-9 sm:flex-row flex-col relative '>

                    <div className='sm:w-[32%] min-h-[200px] border border-[#00000080] rounded-lg bg-white '>
                        <div className='flex gap-4 flex-col  w-full h-[75%] p-[1rem] border-b border-[#00000080]'>
                            <div className='text-[1.1rem] text-[#004AAD]'>
                                <p>Total Customers has not</p>
                                <div className='flex gap-2'>
                                    <p>Visited in Last</p>
                                    <p className='text-[#F44336]'>30 Days</p>
                                </div>

                            </div>
                            <p className='text-[1.8rem] text-[#1D1F2C]'>12</p>
                        </div>
                        <div className='w-full flex items-center justify-evenly text-[1.6rem] h-[25%] py-[.5rem] '>

                            <MdForwardToInbox className='text-[#004AAD] ' />
                            <FiPhone className='text-[#004AAD]' />
                            <IoLogoWhatsapp className='text-green-400' />

                            <button className='bg-[#004AAD] text-white py-2 sm:px-3 px-2 rounded-md text-[1rem] mr-2'>
                                Send Campaign</button>
                        </div>



                    </div>
                    <div className='sm:w-[32%] min-h-[200px] border border-[#00000080] rounded-lg bg-white '>
                        <div className='flex gap-4 flex-col  w-full h-[75%] p-[1rem] border-b border-[#00000080]'>
                            <div className='text-[1.1rem] text-[#004AAD]'>
                                <p>Total Customers with low</p>
                                <div className='flex gap-2'>
                                    <p>Recommendation in last</p>
                                    <p className='text-[#F44336]'> 30 Days</p>
                                </div>
                            </div>
                            <p className='text-[1.8rem] text-[#1D1F2C]'>5</p>
                        </div>
                        <div className='w-full flex items-center justify-evenly text-[1.6rem] h-[25%] py-[.5rem]'>

                            <MdForwardToInbox className='text-[#004AAD] ' />
                            <FiPhone className='text-[#004AAD]' />
                            <IoLogoWhatsapp className='text-green-400' />

                            <button className='bg-[#004AAD] text-white py-2 sm:px-3 px-2 rounded-md text-[1rem] mr-2'>
                                Send Campaign</button>
                        </div>



                    </div>

                    {/* charts */}
                    <div className='sm:w-[32%] min-h-[300px] max-h-[400px] border border-[#00000080] rounded-lg bg-white overflow-hidden sm:absolute right-2 sm:-mt-24  '>
                        <div className='flex  flex-col  w-full h-[100%] p-[1rem]  border-[#00000080] relative '>
                            <p className='text-[#0F172A] font-bold'>Customer Gender segment</p>
                            <div className='absolute -ml-9 mt-6  border-t  '>
                                <Charts />
                            </div>



                        </div>
                    </div>

                </div>

                {/* footer */}
                <div className='p-4'>
                    <div className='flex sm:flex-row flex-col w-full h-fit sm:items-center border border-[#00000099]  rounded-md my-4 font-inter  sm:p-0 p-4'>
                        <img className='size-[120px] ' src="/Customer feedback.png" alt="" />
                        <div>
                            <p>Help Us to make Snackbae better ! Share your feedbacks and request features that fits best for your Business</p>
                            <p className='text-[#106CF6] border-b-2 w-fit border-[#106CF6] font-bold'>Give Feedback</p>
                        </div>

                    </div>
                </div>
                <div />

            </div>
        </div>
    )
}

export default CustomerAnalytics
