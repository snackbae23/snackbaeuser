import React from 'react'
import { useState } from 'react'

import { GoInfo } from "react-icons/go";


import AllTransaction from './AllTransaction';
import Settlements from './Settlements';
import { MdCampaign } from 'react-icons/md';
import Offers from './Offers';

const OfferAndEvents = () => {

  const [offer, setoffer] = useState(true);
  const [Campaig, setCampaig] = useState(false)

  const offers = () => {
    setoffer(true)
    setCampaig(false)
    document.getElementById('w').style.backgroundColor = '#004AAD';
    document.getElementById('w').style.color = 'white';
    document.getElementById('z').style.backgroundColor = 'white';
    document.getElementById('z').style.color = 'black';


  }
  const Campaign = () => {
    setoffer(false)
    setCampaig(true)
    document.getElementById('z').style.backgroundColor = '#004AAD';
    document.getElementById('z').style.color = 'white';
    document.getElementById('w').style.backgroundColor = 'white';
    document.getElementById('w').style.color = 'black';


  }
  return (
    <div id='offer' className='w-full h-fit relative '>
      <div className='  w-full  h-[90px] z-10 bg-[#FDE030] mt-[70px] flex justify-between items-center px-5 sm:px-12   '>
        <div>
          <p className='text-[1.6rem] font-semibold'>Offers & Campaigns</p>
          <p className='sm:text-[.9rem] text-[.8rem]'>Discover and thrill your customers with our pre-designed offer and event templates</p>
        </div>

      </div>
      <div className='w-full h-fit  mt-[10px] px-6   '>

        <div className='bg-white  flex flex-col gap-6 sm:py-5 py-2 rounded-lg '>


          <div className='flex gap-4 w-full justify-center sm:justify-start px-[1.5rem] border-b pb-6'>
            <button id='w' className='border sm:px-5 px-4 py-2 border-[#0F172A] rounded-md bg-[#004AAD] text-white text-nowrap' onClick={offers}>Offers</button>
            <button id='z' className='border sm:px-5 px-4 py-2 border-[#0F172A] rounded-md text-nowrap' onClick={Campaign} >Campaigns</button>
          </div>



          {/* All Users */}



          {offer && <Offers />}
          {Campaig && <Settlements />}




        </div>


      </div>
    </div>
  )
}

export default OfferAndEvents