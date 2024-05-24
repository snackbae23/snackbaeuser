import React from 'react'
import Barchart from './Barchart'
import Switch1 from './Switch1'
import { FaRegEdit } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import Barchart2 from './Barchart2';
import SwitchOffer from './SwitchOffer';

const Offers = () => {

    const data = [{
        "offername": "Walk-in Offer",
        "Active": "True",

    }, {
        "offername": "Flat Discount",
        "Active": "false",

    }, {
        "offername": "Birthday Offer",
        "Active": "false",

    }, {
        "offername": "Happy Hours",
        "Active": "false",

    },{
        "offername": "Special Offer",
        "Active": "false",

    },]

    function openPopup(index) {
        {
            index === 0 && openPopup1();
        }
        {
            index === 1 && openPopup2();
        }
        {
            index === 2 && openPopup3();
        }
        {
            index === 3 && openPopup4();
        }
        {
            index === 4 && openPopup5();
        }
    }

    function openPopup1() {
        console.log("inside 1")
        document.getElementById("popup1").style.display = "block";
        document.getElementById("restaurant").style.display = "block";
        // document.getElementById("restaurant").style.filter = "blur(1px)";
        // document.getElementById("popup1").style.filter = "none";
    }

    function openPopup2() {
        document.getElementById("popup2").style.display = "block";
        document.getElementById("restaurant").style.display = "block";
    }

    function openPopup3() {
        document.getElementById("popup3").style.display = "block";
        document.getElementById("restaurant").style.display = "block";
    }

    function openPopup4() {
        document.getElementById("popup4").style.display = "block";
        document.getElementById("restaurant").style.display = "block";
    }

    function openPopup5() {
        document.getElementById("popup5").style.display = "block";
        document.getElementById("restaurant").style.display = "block";
    }

    return (
        <div className='w-full h-fit  '>
            <div className='w-full h-fit flex sm:flex-row flex-col sm:gap-4 gap-4 flex-wrap sm:p-5   '>

                    {
                        data.map((item, index) => (
                            <div className=' h-[200px] sm:w-[32%] sm:shadow-xl border shadow-md rounded-lg p-5 relative flex flex-col gap-4 bg-red-70' key={index}>
                                <div className='flex justify-between border-b pb-3 border-[#F1F5F9]'>
                                    <div>
                                        <p>{item.offername}</p>
                                        { item.Active == "True" ? ( <div className='flex items-center gap-1 text-[#67CE67] '>
                                     <GoDotFill />
                                     <p> Active</p>
                                     </div> ):(<div className='flex items-center gap-1 text-[#ED4F9D] '>
                                            <GoDotFill />
                                            <p> Pause</p>
                                        </div>)
                                        }
                                        

                                    </div>
                                    <SwitchOffer isActive={item.Active} />
                                </div>
                                <div className='text-[#64748B] text-[.8rem]'>
                                    <p>10% OFF Up to ₹120</p>
                                    <p>Minimum billing to avail ₹500</p>
                                    <p>Terms & Condition</p>
                                </div>
                                <div onClick={openPopup.bind(this, index)} className='border rounded-md px-3 py-1  absolute right-4 flex items-center gap-1  bottom-4 text-[#004AAD] border-[#426CFF]'>
                                    <FaRegEdit className='size-3' />
                                    <button className='text-[.9rem]'>Edit</button>
                                </div>

                            </div>
                        ))

                    }


             
            </div>



            {/* offer Performance */}
            <div className='md:p-6'>
                <div className='flex flex-col my-8'>
                    <p className='text-[1.6rem] text-black font-bold'>Offer Performance</p>
                    <p className='text-[#000000CC]'>Monitor Your Offer Performance</p>
                </div>

                <div className='w-full flex sm:flex-row flex-col gap-4 '>
                <div className='sm:w-[50%] h-[400px] relative border rounded-lg   flex items-center justify-center flex-col  '>
                        <Barchart/>
                       <div className='absolute  flex items-center justify-center text-[.8rem] font-semibold bottom-[.7rem] sm:ml-[80px] ml-[58px] sm:mr-9  text-wrap bg-white '>
                            <p>Walk-in offer</p>
                            <p className='flex items-center justify-center  sm:ml-4 ml-1'>Flat Discount</p>
                            <p>Birthday Offer</p>
                            <p>Happy Hours</p>
                            <p>Special Days</p>
                        </div>
                    </div>


                    <div className='sm:w-[50%] h-[400px] relative border rounded-lg   flex items-center justify-center flex-col  '>
                       <Barchart2/>
                       <div className='absolute  flex items-center justify-center text-[.8rem] font-semibold bottom-2  sm:ml-[80px] ml-[58px] sm:mr-9  text-wrap bg-white '>
                            <p className=''>Walk-in offer</p>
                            <p className='flex items-center justify-center  sm:ml-4 ml-1'>Flat Discount</p>
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