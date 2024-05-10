import React from 'react'
import { useState } from 'react'

import { GoInfo } from "react-icons/go";

import CustomerRecords from './CustomerRecords';
import CustomerAnalytics from './CustomerAnalytics';
import AllTransaction from './AllTransaction';
import Settlements from './Settlements';

const Payment = () => {

  const [CustomerRec,setCustomer]=useState(true);
  const [CustomerAna,setCustomerana]=useState(false)

  const trans = () => {
    setCustomer(true)
    setCustomerana(false)
    document.getElementById('w').style.backgroundColor = '#004AAD';
    document.getElementById('w').style.color = 'white';
    document.getElementById('z').style.backgroundColor = 'white';
    document.getElementById('z').style.color = 'black';
    

  }
  const settle = () => {
    setCustomer(false)
    setCustomerana(true)
    document.getElementById('z').style.backgroundColor = '#004AAD';
    document.getElementById('z').style.color = 'white';
    document.getElementById('w').style.backgroundColor = 'white';
    document.getElementById('w').style.color = 'black';
    

  }
  return (
    <div id='payment' className='w-full h-fit relative '>
    <div className='  w-full  h-[90px] z-10 bg-[#FDE030] mt-[70px] flex justify-between items-center px-5 sm:px-12   '>
      <div>
        <p className='text-[1.6rem] font-semibold'>Payments</p>
        <p className='sm:text-[.9rem] text-[.8rem]'>Monitor real-time transactions.</p>
      </div>

    </div>
    <div className='w-full h-fit  mt-[10px] px-6   '>

      <div className='bg-white  flex flex-col gap-6 sm:py-5 py-2 rounded-lg '>


        <div className='flex sm:justify-between  sm:items-center sm:flex-row flex-col gap-4 text-[#000000] px-4 '>
          <p className='text-[1.8rem] font-semibold sm:px-5'>Transactions</p>
          <button className='border sm:px-5 px-2.5 py-2 border-[#0F172A] rounded-lg bg-[#004AAD] text-white text-nowrap'>Withdrow Request</button>
        </div>

        <div className='w-full h-fit bg-white flex sm:flex-row flex-col items-center justify-evenly gap-4 sm:my-4 sm:px-6 rounded-md '>
          <div className='sm:w-[66%] w-full flex gap-4'>
            <div className=' w-[50%] h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-center'>

              <GoInfo className='size-6 absolute top-3 right-3 bg-white'/>

              <p className='text-[#000000] sm:text-[2.2rem] text-[1.5rem] font-semibold  '>₹ 214003.80</p>
              <div className='flex justify-between sm:text-[1rem] text-[.8rem] gap-1 absolute bottom-2'>
                <p className=''>Total Payout Balance </p>
                
                <p></p>
              </div>



            </div>
            <div className=' w-[50%] h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-center'>

<GoInfo className='size-6 absolute top-3 right-3 bg-white'/>

<p className='text-[#000000] sm:text-[2.2rem] text-[1.5rem] font-semibold  '>₹ 16003.78</p>
<div className='flex justify-between sm:text-[1rem] text-[.8rem] gap-1 absolute bottom-2'>
  <p className=''>Monthly Collection </p>
  
  <p>May</p>
</div>



</div>
          </div>

          <div className='sm:w-[33%] w-full h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

          <GoInfo className='size-6 absolute top-3 right-3 bg-white'/>

<p className='text-[#000000] sm:text-[2.2rem] text-[2.6rem] font-semibold  '>₹ 1043.78</p>
<div className='flex justify-between text-[rem] gap-1 absolute bottom-1'>
  <p className=''>Today's Sale </p>
  
  <p>May</p>
</div>
          </div>
        </div>

        <div className='flex gap-4 w-full justify-center sm:justify-start px-[1.5rem] border-b pb-6'>
          <button id='w' className='border sm:px-5 px-4 py-2 border-[#0F172A] rounded-full bg-[#004AAD] text-white text-nowrap' onClick={trans}>All Transactions</button>
          <button id='z' className='border sm:px-5 px-4 py-2 border-[#0F172A] rounded-full text-nowrap' onClick={settle} >Settlement</button>
        </div>



        {/* All Users */}

        

        {CustomerRec && <AllTransaction/>}
        {CustomerAna && <Settlements/>}

        


      </div>


    </div>
  </div>
  )
}

export default Payment