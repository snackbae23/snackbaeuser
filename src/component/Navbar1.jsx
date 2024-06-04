import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { GoPerson } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";


//image
import logo from '../assets/logo.png';

//icons
import { IoMdMenu, IoMdClose } from "react-icons/io";


const Navbar1 = ({ isToggled, setIsToggled,data }) => {


    const navigate = useNavigate();




    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // This enables smooth scrolling
        });
    }

    //handle toggle for menu for small screen
    // const [isToggled, setIsToggled] = useState(false);
    const [isToggled1, setIsToggled1] = useState(false);

    const [fram, setframe] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);

        document.getElementById('left').style.display = "none";
        document.getElementById("restaurant").style.display = "none";

    };
    const handleToggle1 = () => {
        setIsToggled(!isToggled1);

        document.getElementById('left').style.display = "block";
        scrollToTop();
        document.getElementById("restaurant").style.display = "block";

    };

    const frames1 = () => {
        setframe(!fram);
        document.getElementById('Notification').style.display = "none";
        document.getElementById('frame').style.display = "none";
        document.getElementById("restaurant").style.display = "none";
        
    };
    const frames2 = () => {
        setframe(!fram);
        document.getElementById('Notification').style.display = "none";
        document.getElementById('frame').style.display = "block";
        document.getElementById("restaurant").style.display = "block";
    };
    // Function to handle link click
    const handleLinkClick = () => {
        if (isToggled) {
            setIsToggled(false);
        }
    };

    

    const [notification, setNotification] = useState(true);
    const notifications = () => {
        setNotification(!notification);
        if(notification==false){
            document.getElementById('frame').style.display = "none";
            document.getElementById('Notification').style.display = "none";
            document.getElementById("restaurant").style.display = "none";
        }else{
            document.getElementById('frame').style.display = "none";
            document.getElementById('Notification').style.display = "block";
            document.getElementById("restaurant").style.display = "block";
            
        }
        
    };



    return (
        <div className='fixed bg-white  z-[900] w-full h-[70px] flex justify-between items-center px-[1.5rem]'>
            {/* logo */}
            <img
                onClick={
                    () => {
                        navigate('/');
                    }
                } src={logo} alt='logo'
                className='sm:h-full h-[90%] aspect-auto  cursor-pointer  ' />



            {/* menu-icons */}
            {/* {
                isToggled ?
                    (<IoMdClose
                        className='sm:hidden block text-[1.7rem] size-7 '
                        onClick={handleToggle} />) :
                    (<IoMdMenu
                        className='sm:hidden block text-[1.6rem] size-7 '
                        onClick={handleToggle1} />)
            } */}



            <div className='flex items-center gap-6 h-full   '>

                {/* Notification */}

                <div onClick={notifications} className=' cursor-pointer sm:flex hidden  relative bg-[#EFF4FB] border border-[#E2E8F0]  items-center justify-center size-[45px] rounded-full'>
                    <div className=' absolute -right-1 -top-1 bg-[#004AAD] size-[17px] flex items-center justify-center rounded-full'>
                        <p className='text-white font-semibold text-[.8rem]'>4</p>
                    </div>

                    <IoNotificationsOutline className='size-8' />
                </div>


                <div className='flex items-center gap-3 cursor-pointer '>
                    <div className=' size-14  block rounded-full border  items-center justify-center  relative  '>
                        {
                            fram ?
                                (<img src="/image 148 (4).png" alt='' className='size-full ' onClick={frames1} />) :
                                (<img src="/image 148 (4).png" alt='' className='size-full ' onClick={frames2} />)
                        }
                        
                    </div>
                    <div className='sm:block hidden'>
                        <p className='text-[#2D2E2E] text-[19px] font-bold'>{data?.name}</p>
                        <p className='text-[#747677] text-[15px] font-semibold'>{data?.email}  connect1.foodoos@gmail.com</p>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default Navbar1
