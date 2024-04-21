import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';

//image
import logo from '../assets/logo.png';

//icons
import { IoMdMenu, IoMdClose } from "react-icons/io";






import { BiSolidDashboard } from "react-icons/bi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";



const Navbar1 = () => {


    const navigate = useNavigate();

    //handle toggle for menu for small screen
    const [isToggled, setIsToggled] = useState(false);
    const [isToggled1, setIsToggled1] = useState(false);
    const handleToggle = () => {
        setIsToggled(!isToggled);
       
        document.getElementById('left').style.display = "none";

    };
    const handleToggle1 = () => {
        setIsToggled(!isToggled1);
       
        document.getElementById('left').style.display = "block";

    };
    // Function to handle link click
    const handleLinkClick = () => {
        if (isToggled) {
            setIsToggled(false);
        }
    };


    
    return (
        <div className='fixed bg-white z-[1000] w-full h-[70px] flex justify-between items-center px-[1rem]'>
            {/* logo */}
            <img
                onClick={
                    () => {
                        navigate('/');
                    }
                } src={logo} alt='logo'
                className='h-full aspect-auto p-[.5rem] cursor-pointer' />

            

            {/* menu-icons */}
            {
                isToggled ?
                    (<IoMdClose
                        className='sm:hidden block text-[1.6rem]'
                        onClick={handleToggle} />) :
                    (<IoMdMenu
                        className='sm:hidden block text-[1.6rem]'
                        onClick={handleToggle1} />)
            }

        </div>
    )
}

export default Navbar1