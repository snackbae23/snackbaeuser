import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { GoPerson } from "react-icons/go";

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



const Navbar1 = ({isToggled, setIsToggled}) => {


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

    const [fram,setframe]=useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
       
        document.getElementById('left').style.display = "none";

    };
    const handleToggle1 = () => {
        setIsToggled(!isToggled1);
       
        document.getElementById('left').style.display = "block";
        scrollToTop();

    };

    const frames1 =()=>{
        setframe(!fram);
        document.getElementById('frame').style.display = "none";
    };
    const frames2 =()=>{
        setframe(!fram);
        document.getElementById('frame').style.display = "block";
    };
    // Function to handle link click
    const handleLinkClick = () => {
        if (isToggled) {
            setIsToggled(false);
        }
    };


    
    return (
        <div className='fixed bg-white z-[1000] w-full h-[70px] flex justify-between items-center px-[1.5rem]'>
            {/* logo */}
            <img
                onClick={
                    () => {
                        navigate('/');
                    }
                } src={logo} alt='logo'
                className='h-full aspect-auto  cursor-pointer sm:block hidden ' />

            

            {/* menu-icons */}
            {
                isToggled ?
                    (<IoMdClose
                        className='sm:hidden block text-[1.7rem] size-7 '
                        onClick={handleToggle} />) :
                    (<IoMdMenu
                        className='sm:hidden block text-[1.6rem] size-7 '
                        onClick={handleToggle1} />)
            }
            <div className='sm:hidden block rounded-full border border-[black] items-center justify-center p-1 relative '>
                {
                    fram ? 
                    (<GoPerson className='size-7 absolute ' onClick={frames1} />):
                    (<GoPerson className='size-7 absolute ' onClick={frames2} />)
                }

            <GoPerson className='size-7 ' onClick={frames1} />
            </div>

        </div>
    )
}

export default Navbar1
