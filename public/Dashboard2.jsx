import React from 'react'
import { CiLocationOn } from "react-icons/ci";

const Dashboard2 = () => {
  return (
    <div>
         <div className='w-full h-[70px] bg-[#FDE030] mt-[70px] flex justify-between items-center px-10'>
            <div>
              <p className='text-[1.6rem] font-semibold'>Dashboard</p>
              <p className='text-[.9rem]'>Welcome to your Dashboard</p>
            </div>

            <div className='flex gap-5 '>
              <button className='bg-white px-5 py-1 rounded-md border text-[.9rem] font-Roboto border-[#000000B2]'>View Profile</button>
              <button className='bg-white px-5 py-1 rounded-md border text-[.9rem] font-Roboto  border-[#000000B2]'>Get QR Code</button>
            </div>


          </div>

          <div className='w-full h-fit overflow-y-scroll p-5'>
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
                <div className='w-full h-[145px] flex justify-evenly gap-2 p-4 rounded-md'>
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
              <div className='w-[27%] h-[330px] bg-white rounded-md py-4 px-5'>
                <p>Relationship Manager</p>
                <p>Need help? contact your Relationship manager </p>
                <div className='flex gap-3 items-center'>
                <CiLocationOn />
                  <p>Nitish Kumar</p>
                </div>
              </div>
            </div>




          </div>
    </div>
  )
}

export default Dashboard2