import React from 'react'
import Barchart from './Barchart'
import Switch1 from './Switch1'
import { FaRegEdit } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import Barchart2 from './Barchart2';

const Offers = () => {

    const data = [{
        "offername": "Walk-in Offer",

    }, {
        "offername": "Walk-in Offer",

    }, {
        "offername": "Walk-in Offer",

    }, {
        "offername": "Walk-in Offer",

    },]

    return (
        <div className='w-full h-fit '>

            <div className='w-full   sm:p-5 flex-wrap sm:grid grid-cols-3 gap-4'>
                {
                    data.map((item, index) => (
                        <div className=' h-[200px] shadow-xl rounded-lg p-5 relative flex flex-col gap-4' key={index}>
                            <div className='flex justify-between border-b pb-3 border-[#F1F5F9]'>
                                <div>
                                    <p>Walk-in Offer</p>
                                    <div className='flex items-center gap-1 text-[#ED4F9D] '>
                                    <GoDotFill />
                                    <p> Pause</p>
                                    </div>
                                    {/* for active */}
                                    {/* <div className='flex items-center gap-1 text-[#67CE67] '>
                                    <GoDotFill />
                                    <p> Active</p>
                                    </div> */}
                                    
                                </div>
                                <Switch1 />
                            </div>
                            <div className='text-[#64748B] text-[.8rem]'>
                                <p>10% OFF Up to ₹120</p>
                                <p>Minimum billing to avail ₹500</p>
                                <p>Terms & Condition</p>
                            </div>
                            <div className='border rounded-md px-3 py-1  absolute right-4 flex items-center gap-1  bottom-4 text-[#004AAD] border-[#426CFF]'>
                            <FaRegEdit className='size-3' />
                            <button className='text-[.9rem]'>Edit</button>
                            </div>
                            
                        </div>
                    ))

                }


            </div>

            {/* offer Performance */}
            <div className='p-6'>
                <div className='flex flex-col mb-8'>
                    <p className='text-[1.6rem] text-black font-bold'>Offer Performance</p>
                    <p className='text-[#000000CC]'>Monitor Your Offer Performance</p>
                </div>

                <div className='w-full flex sm:flex-row flex-col gap-2 '>
                    <div className='sm:w-[50%] h-[400px] relative border rounded-lg overflow-hidden bg-slate-500 flex items-center  '>
                        <div className='flex justify-between '>
                            <div className='z-20 top-5 ml-6 absolute bg-slate-50'>
                                <p className='text-[1.3rem]   font-semibold'>Total Offer Redemption</p>
                                <p>February</p>
                            </div>
                            <GoInfo className='size-5 bg-slate-50  absolute top-7 right-6 z-20' />
                        </div>
                        <div className='-rotate-90  sm:h-[400px] h-[400px] absolute -left-32 -top-5 '>
                            <Barchart />
                        </div>
                        <div className='absolute  -bottom-5  sm:p-12 sm:mb-0 mb-8 flex items-center justify-center text-[.8rem] font-semibold'>
                            <p>Walk-in offer</p>
                            <p>Flat Discount</p>
                            <p>Birthday Offer</p>
                            <p>Happy Hours</p>
                            <p>Special Days</p>
                        </div>
                    </div>


                    <div className='sm:w-[50%] h-[400px] relative border rounded-lg overflow-hidden bg-slate-500 flex items-center  '>
                        <div className='flex justify-between '>
                            <div className='z-20 top-5 ml-6 absolute bg-slate-50'>
                                <p className='text-[1.3rem]   font-semibold'>Unique Redemption</p>
                                <p>February</p>
                            </div>
                            <GoInfo className='size-5 bg-slate-50  absolute top-7 right-6 z-20' />
                        </div>
                        <div className='-rotate-90  sm:h-[400px] h-[400px] absolute -left-32 -top-5 '>
                            <Barchart2/>
                        </div>
                        <div className='absolute  -bottom-5  sm:p-12 sm:mb-0 mb-8 flex items-center justify-center text-[.8rem] font-semibold'>
                            <p>Walk-in offer</p>
                            <p>Flat Discount</p>
                            <p>Birthday Offer</p>
                            <p>Happy Hours</p>
                            <p>Special Days</p>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Offers