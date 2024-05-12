import React, { useEffect, useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { TbProgressHelp } from "react-icons/tb";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { RxCrossCircled } from "react-icons/rx";
import { GoFileSymlinkFile } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";

import { motion } from 'framer-motion';
import axios from 'axios';


const Dashboard = () => {

    const [newone, setNewone] = useState(false);
    const [notlikedone, setNotliked] = useState(false);
    const [goodone, setGood] = useState(false);
    const [musttryone, setMustTry] = useState(false);
    const [filterone, setFilterone] = useState()
    const id = "662929b6445e63ad5782c1ab";
    // const { id } = useParams();

    const resId = "662929b6445e63ad5782c1ab";
    const [resData, setResData] = useState();
    const [bestRatedMenu, setBestRatedMenu] = useState('');
    const [leastRatedMenu, setLeastRatedMenu] = useState('');

    const [menus, setmenus] = useState('')
    const top3menus = menus.slice(0, 3);

    const [showAllCategories, setShowAllCategories] = useState({});
    const toggleCategory = (categoryId) => {
        setShowAllCategories(prevState => ({
            ...prevState,
            [categoryId]: !prevState[categoryId]
        }));
    };


    const getRestaurantData = async (req, res) => {

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://seashell-app-lgwmg.ondigitalocean.app/api/getRestaurantDetails/${resId}`,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data);
                console.log((response.data));
                setResData(response?.data);
                const resData = response.data;
                console.log(resData)
                console.log(resData.restaurant.menu);
                setmenus(resData?.restaurant?.menu);

                const highestRatedItem = resData?.restaurant?.menu.reduce((prev, current) =>
                    prev.rated > current.rated ? prev : current
                );
                setBestRatedMenu(highestRatedItem?.name);

                const leastRatedItem = resData?.restaurant?.menu.reduce((prev, current) =>
                    prev.rated < current.rated ? prev : current
                );
                setLeastRatedMenu(leastRatedItem?.name);


                console.log(resData);

                console.log(bestRatedMenu);
                console.log(leastRatedMenu);

            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getRestaurantData();
    }, [resId]);

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
        "Amount": "₹3423.00",
        "Discount": "₹234",
        "Status": "In Progress",
        "Mode": "Credit Cart",
        "Merchant": "Foodoos",
        "Id1": "1234565"
    },
    ]
    const data1slice = data1.slice(0, 6);

    const sdata1 = [{
        "photo": "/Oval.png",
        "Name": "Amrobson",
        "Date": "1 month ago",
        "contant": "This place with good ambience and excellent food. Must try chicken steam momo which is best momo I have ever had and French fry was just melting in mouth. Literally awesome! Must try.",
        "Emoji": "/Group 1171277601.png",
        "Status": "New",
    },
    {
        "photo": "/Oval.png",
        "Name": "Amrobson",
        "Date": "1 month ago",
        "contant": "This place with good ambience and excellent food. Must try chicken steam momo which is best momo I have ever had and French fry was just melting in mouth. Literally awesome! Must try.",
        "Emoji": "/Group 1171277601.png",
        "Status": "Must try",
    },
    {
        "photo": "/Oval.png",
        "Name": "Amrobson",
        "Date": "1 month ago",
        "contant": "This place with good ambience and excellent food. Must try chicken steam momo which is best momo I have ever had and French fry was just melting in mouth. Literally awesome! Must try.",
        "Emoji": "/Group 1171277601.png",
        "Status": "Good",
    }, {
        "photo": "/Oval.png",
        "Name": "Amrobson",
        "Date": "1 month ago",
        "contant": "This place with good ambience and excellent food. Must try chicken steam momo which is best momo I have ever had and French fry was just melting in mouth. Literally awesome! Must try.",
        "Emoji": "/Group 1171277601.png",
        "Status": "New",
    }, {
        "photo": "/Oval.png",
        "Name": "Amrobson",
        "Date": "1 month ago",
        "contant": "This place with good ambience and excellent food. Must try chicken steam momo which is best momo I have ever had and French fry was just melting in mouth. Literally awesome! Must try.",
        "Emoji": "/Group 1171277601.png",
        "Status": "Not Liked",
    }
    ]

    const calculateTimeDifference = (fateDate) => {
        // Convert fate date to Date object
        const fateDateTime = new Date(fateDate);

        // Current date
        const currentDate = new Date();

        // Calculate time difference in milliseconds
        const timeDifference = currentDate.getTime() - fateDateTime.getTime();

        // Convert milliseconds to days, weeks, or months
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const weeksDifference = Math.floor(daysDifference / 7);
        const monthsDifference = Math.floor(daysDifference / 30);

        // Determine appropriate label based on time difference
        if (monthsDifference >= 1) {
            return `${monthsDifference} month${monthsDifference > 1 ? 's' : ''} ago`;
        } else if (weeksDifference >= 1) {
            return `${weeksDifference} week${weeksDifference > 1 ? 's' : ''} ago`;
        } else {
            if (daysDifference == 0)
                return "Today"
            else
                return `${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
        }
    };

    const [switc, setswitch] = useState(false);

    const switch1 = () => {
        setswitch(!switc);
    }

    function openPopup() {
        document.getElementById('popup').style.display = "block";
        // document.getElementById('dashboard').style.filter = "blur(2Px)";

    }
    function closePopup() {
        document.getElementById('popup').style.display = "none";



    }



    const [items, setitems] = useState(sdata1);
    const filterItem = (categITem) => {
        const updateItem = sdata1.filter((curElem) => {
            return curElem.Status === categITem;
        })

        setitems(updateItem);
        console.log(updateItem);
        document.getElementById('new').style.backgroundColor = '#004AAD';
        document.getElementById('new').style.color = 'white';
        document.getElementById('must').style.backgroundColor = 'white';
        document.getElementById('must').style.color = 'black';
        document.getElementById('good').style.backgroundColor = 'white';
        document.getElementById('good').style.color = 'black';
        document.getElementById('not').style.backgroundColor = 'white';
        document.getElementById('not').style.color = 'black';
    }
    const filterItem1 = (categITem) => {
        const updateItem = sdata1.filter((curElem) => {
            return curElem.Status === categITem;
        })

        setitems(updateItem);
        console.log(updateItem);
        document.getElementById('must').style.backgroundColor = '#004AAD';
        document.getElementById('must').style.color = 'white';
        document.getElementById('new').style.backgroundColor = 'white';
        document.getElementById('new').style.color = 'black';
        document.getElementById('good').style.backgroundColor = 'white';
        document.getElementById('good').style.color = 'black';
        document.getElementById('not').style.backgroundColor = 'white';
        document.getElementById('not').style.color = 'black';
    }
    const filterItem2 = (categITem) => {
        const updateItem = sdata1.filter((curElem) => {
            return curElem.Status === categITem;
        })

        setitems(updateItem);
        console.log(updateItem);
        document.getElementById('good').style.backgroundColor = '#004AAD';
        document.getElementById('good').style.color = 'white';
        document.getElementById('must').style.backgroundColor = 'white';
        document.getElementById('must').style.color = 'black';
        document.getElementById('new').style.backgroundColor = 'white';
        document.getElementById('new').style.color = 'black';
        document.getElementById('not').style.backgroundColor = 'white';
        document.getElementById('not').style.color = 'black';
    }

    const filterItem3 = (categITem) => {
        const updateItem = sdata1.filter((curElem) => {
            return curElem.Status === categITem;
        })

        setitems(updateItem);
        console.log(updateItem);
        document.getElementById('not').style.backgroundColor = '#004AAD';
        document.getElementById('not').style.color = 'white';
        document.getElementById('must').style.backgroundColor = 'white';
        document.getElementById('must').style.color = 'black';
        document.getElementById('good').style.backgroundColor = 'white';
        document.getElementById('good').style.color = 'black';
        document.getElementById('new').style.backgroundColor = 'white';
        document.getElementById('new').style.color = 'black';
    }


    //search bar
    const [search, setSearch] = useState('');
    const [searchMenuItems, setSearchMenuItems] = useState();

    const handleSearch = (e) => {
        console.log(search)
        const inputValue = e.target.value;
        setSearch(inputValue);
        if (!inputValue) {
            // If input value is empty or length is less than or equal to 1, clear search menu items
            setSearchMenuItems();
            return;
        }

        setSearch(inputValue);
        searchMenu();
    };
    const searchMenu = async (req, res) => {
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `https://seashell-app-lgwmg.ondigitalocean.app/api/searchMenu/${id}/${search}`,
            headers: {},
        };

        axios.request(config)
            .then((response) => {
                // console.log(JSON.stringify(response.data));
                console.log((response.data.menuItems));
                setSearchMenuItems(response.data.menuItems);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div id='dashboard' className='w-full h-fit relative'>

            {/* QR code popup */}
            <motion.div id="popup" whileInView={{ y: [400, 0] }} transition={{ duration: .5, type: "tween" }} className='sm:w-[500px] w-full sm:h-[500px h-fit  sm:left-[30%] fixed  bg-[#FFFFFF] hidden  z-40 mt-[155px]  rounded-2xl sm:p-4 p-4 border shadow-2xl'>
                <div className='flex  items-center justify-between font-Roboto sm:text-[1.2rem] text-[1.5rem] text-[#0F172A] px-4 mt-2 border-b-2 mb-4 pb-2'>
                    <p>Get QR Code</p>
                    <RxCrossCircled onClick={closePopup} className='cursor-pointer text-[1.9rem]' />
                </div>
                <div className='w-full h-fit flex flex-col items-center justify-center sm:gap-2 gap-5  font-inter'>
                    <div className='sm:w-[200px] sm:h-[200px] w-[250px] sm:mt-0 mt-5 border-2 border-[#000000B2] rounded-xl p-2'>
                        <img className='w-full h-full' src="/Group 1171277979.png" alt="" />
                    </div>
                    <p className='sm:text-[1.1rem] font-semibold text-[1.5rem]'>FOODOOS</p>
                    <p>AMP Baisakhi Mall,Salt Lake</p>
                    <div className='flex gap-4 font-semibold sm:text-[1.1rem] text-[1.15rem] '>
                        <button className='text-nowrap sm:px-6 px-12 rounded-md sm:py-2 py-4 bg-[#FFD628] text-black '>Share Code</button>
                        <button className='text-nowrap px-6 rounded-md py-2 bg-[#004AAD] text-[#FFFFFF] '>Download QR</button>
                    </div>

                </div>
                <div className='border border-[#00000080] flex sm:flex-row flex-col p-2 mt-4 items-center w-full h-fit gap-5 justify-center rounded-md  '>
                    <p className='font-inter text-[#64748B] sm:w-[56%] w-[60%] sm:text-[.9rem] text-[.9rem]'>Get Customised Table top QR and Brandable merchandise at a affordable price contact sales </p>
                    <div className='sm:w-[40%] w-full h-[60px] bg-[#67CE67] text-[1.1rem] font-semibold rounded-lg flex items-center justify-center gap-3 text-white  '>
                        <IoLogoWhatsapp />
                        <p >Need Help?</p>
                    </div>
                </div>
            </motion.div>

            <div className='sm:w-[80%] w-full  sm:h-[90px] h-[80px] z-10 bg-[#FDE030] mt-[70px] flex justify-between items-center px-7 sm:px-10 fixed '>
                <div>
                    <p className='sm:text-[1.6rem] text-[2rem] font-semibold'>Dashboard</p>
                    <p className='text-[.9rem]'>Welcome to your Dashboard</p>
                </div>

                <div className='flex gap-5 '>
                    <button className='hidden sm:block bg-white px-5 py-[.5rem] rounded-md border text-[.9rem] font-Roboto border-[#000000B2]'>View Profile</button>
                    <button onClick={openPopup} className='bg-white px-5 sm:py-1 py-2 sm:rounded-md rounded-xl border text-[.9rem] font-Roboto  border-[#000000B2]'>Get QR Code</button>
                </div>


            </div>

            <div className='w-full h-fit  mt-[160px]  '>
                {/* total report */}
                <div className=' w-full sm:flex px-2 gap-3'>
                    <div className='sm:w-[73%] flex flex-col gap-2'>
                        <div className='w-full h-fit bg-white flex sm:flex-row flex-col items-center justify-evenly gap-2 p-4 rounded-md ml-2'>
                            <div className='sm:hidden flex items-center justify-between w-full h-[60px] border border-[#000000B2] rounded-lg p-5  text-[1.2rem] font-semibold'>
                                <p>View Profile</p>
                                <GoFileSymlinkFile />
                            </div>
                            <div className='sm:w-[66%] w-full flex gap-2'>
                                <div className=' w-[50%] h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                                    <p className='text-[#777980] text-[.9rem] font-semibold'>Total Customer</p>
                                    <img className='size-8 absolute right-2' src="/Badge.png" alt="" />

                                    <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>389</p>
                                    <div className='flex text-[.7rem] gap-1'>
                                        <p>30% </p>
                                        <img src="/fi-rr-caret-up.png" alt="" />
                                        <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                                    </div>



                                </div>
                                <div className='w-[50%] h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                                    <p className='text-[#777980] text-[.9rem] font-semibold'>Returning Customer</p>
                                    <img className='size-8 absolute right-2' src="/Badge.png" alt="" />

                                    <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>140</p>
                                    <div className='flex text-[.7rem] gap-1'>
                                        <p>30% </p>
                                        <img src="/fi-rr-caret-up.png" alt="" />
                                        <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                                    </div>



                                </div>
                            </div>

                            <div className='sm:w-[33%] w-full h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                                <p className='text-[#777980] text-[.9rem] font-semibold'>Total Recommendation</p>
                                <img className='size-8 absolute right-2' src="/Badge.png" alt="" />

                                <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>{resData?.restaurant?.recommendationCount}</p>
                                <div className='flex text-[.7rem] gap-1'>
                                    <p>30% </p>
                                    <img src="/fi-rr-caret-up.png" alt="" />
                                    <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                                </div>
                            </div>
                        </div>
                        <p className='text-[#000000] text-[1.6rem] font-semibold ml-4'>Today's Report</p>
                        <div className='w-full h-fit flex sm:flex-row flex-col justify-evenly gap-2 p-4 rounded-md bg-white ml-2'>
                            <div className='sm:w-[50%] w-full h-full relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                                <p className='text-[#777980] text-[.9rem] font-semibold'>Today's Sales</p>
                                <img className='size-8 absolute right-2' src="/Badge (1).png" alt="" />

                                <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>0</p>
                                <div className='flex text-[.7rem] gap-1'>
                                    <p>30% </p>
                                    <img src="/fi-rr-caret-up.png" alt="" />
                                    <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                                </div>



                            </div>
                            <div className='sm:w-[50%] w-full relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-between '>

                                <p className='text-[#777980] text-[.9rem] font-semibold'>Today's Customer</p>
                                <img className='size-8 absolute right-2' src="/Badge (1).png" alt="" />

                                <p className='text-[#1D1F2C] text-[1.9rem] font-semibold '>42</p>
                                <div className='flex text-[.7rem] gap-1'>
                                    <p>30% </p>
                                    <img src="/fi-rr-caret-up.png" alt="" />
                                    <p className='text-[#858D9D] text-[.7rem]'>In last week</p>
                                </div>



                            </div>
                        </div>
                    </div>
                    {/* Relationship */}
                    <div className='hidden  w-[27%] h-[360px] bg-white rounded-md py-4 px-5 sm:flex flex-col justify-evenly gap-4'>
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

                        <div className='w-full h-[40px] bg-[#FDE030] text-[1.3rem] font-bold rounded-lg flex items-center justify-center gap-3 text-[#004AAD]'>
                            <IoLogoWhatsapp />
                            <p>+91 7603037718</p>
                        </div>

                    </div>
                </div>


                {/* Latest Transaction */}
                <div className='w-full h-fit flex flex-col '>
                    <div className='w-full h-[80px] flex justify-between items-center px-6 '>
                        <div>
                            <p className='sm:text-[1.6rem] text-[1.2rem] font-semibold'>Latest Transaction</p>
                            <p className='text-[.9rem] text-[#000000]'>Recent 5 transaction</p>
                        </div>
                        <div className='flex items-center gap-6'>
                            <p className='text-[#004AAD] sm:text-[1.3rem] text-[.9rem] font-Roboto'>Notification</p>
                            {
                                switc ?
                                    <div className='w-[40px] h-[22px] bg-slate-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-1' onClick={switch1}></div>
                                    </div> :
                                    <div className='w-[40px] h-[22px] bg-green-400 rounded-full flex items-center '>
                                        <div className='size-[18px] bg-white rounded-full ml-5' onClick={switch1}></div>
                                    </div>
                            }
                        </div>


                    </div>
                    <div className='w-full h-fit  mt-4  px-6 bg-[#F6F8FF]  rounded-md   '>

                        <div className='text-[#6B7280] flex w-full justify-between mb-4 border-b-2 font-semibold text-[.9rem] gap-2' >
                            <div className='w-[34%] flex mb-3 items-center justify-evenly '>
                                <div className='flex text-center text-[1.05rem]  items-center'>Customer</div>
                                <div className=' sm:block hidden'>DATE & TIME</div>
                            </div>
                            <div className='grid sm:grid-cols-4 grid-cols-3 sm:text-[.9rem] text-[.8rem] mt-1  w-[66%] gap-2 justify-evenly '>

                                <div className=''>AMOUNT</div>
                                <div className=''>DISCOUNT</div>
                                <div className=' sm:ml-8 ml-2'>STATUS</div>
                                <div className='sm:block hidden ml-16'>MODE</div>

                            </div>
                        </div>

                        <div className='w-full h-fit overflow-y-hidden flex flex-col gap-1 '>
                            {data1slice.map((item, index) => (
                                <div key={index} className='w-full flex mb-2  sm:text-[.9rem] text-[.8rem] font-semibold sm:border-none border rounded-xl border-[#00000080] p-1' >
                                    <div className='w-[34%] flex sm:flex-row flex-col mb-3 items-center sm:justify-evenly '>
                                        <p className='text-[#111827] font-semibold text-[.9rem] sm:ml-4'> {item.Customer}</p>
                                        <p className='text-[#6B7280] flex items-center '>{item.Date}</p>
                                    </div>

                                    <div className='grid sm:grid-cols-4 grid-cols-3  w-[66%] gap-2 justify-evenly '>
                                        {/* <p className='text-[#6B7280] flex items-center '>{item.Date}</p> */}
                                        <p className='text-[black]   flex items-center'>{item.Amount}</p>
                                        <p className='text-[#004AAD]   text-center flex items-center sm:ml-7 ml-4  '>{item.Discount}</p>
                                        <p className={`rounded-3xl  w-full  h-[70%] py-[.5rem]   text-center mt-2 flex items-center justify-center 
                ${item.Status === 'complete' ? 'bg-[#DEF7EC] text-green-700 ' :
                                                item.Status === 'In Progress' ? 'bg-[#E1EFFE] text-[#7157f1]' :
                                                    item.Status === 'Cancelled' ? 'bg-[#FBD5D5] text-red-800' : ''
                                            }`}
                                        >{item.Status}</p>
                                        <p className={`rounded-3xl  hidden  text-center p-1 sm:flex mt-2 h-[70%] items-center justify-center  ml-6
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

                <div className='w-full h-fit flex flex-col bg-[#F6F8FF] gap-4 '>
                    <div className='w-full h-fit flex flex-col  justify-start gap-3 px-6 mt-4 '>
                        <div>
                            <p className='text-[1.6rem] font-semibold'>Menu Performance</p>
                            <p className='text-[.9rem] text-[#000000]'>Based on your customer feedback</p>
                        </div>

                        <div className='w-full flex gap-2 sm:flex-row flex-col bg-white p-4 rounded-md'>
                            <div className='sm:w-[66%] w-full flex gap-2'>
                                <div className=' w-[50%] h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-evenly '>

                                    <p className='text-[#777980] sm:text-[.9rem] text-[.75rem] font-semibold'>Top Performing Item</p>
                                    <p className='text-[#1D1F2C] sm:text-[1.2rem] text-[1rem] font-semibold tracking-tight '>{bestRatedMenu}</p>

                                </div>
                                <div className=' w-[50%] h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-evenly '>

                                    <p className='text-[#777980] sm:text-[.9rem] text-[.75rem] font-semibold'>Lowest Performing Item</p>
                                    <p className='text-[#1D1F2C] sm:text-[1.2rem] text-[1rem] font-semibold tracking-tight '>Veg Maggi</p>

                                </div>
                            </div>

                            <div className='sm:w-[33%] w-full h-[135px] relative  rounded-md border border-[#00000080] p-3 flex flex-col justify-evenly '>

                                <p className='text-[#777980] text-[.9rem] font-semibold'>Total Interactions</p>

                                <p className='text-[#1D1F2C] text-[2rem] font-semibold  '>450</p>
                            </div>
                        </div>




                    </div>
                    {/* search menu */}
                    <div className="relative w-fit shadow rounded-md border-2 mx-[1rem]">
                        <input
                            className=" w-[220px] sm:w-[400px] focus:outline-none h-[2.4rem] sm:h-[3rem] px-[1rem]"
                            type="text"
                            placeholder="Search for dish"
                            value={search}
                            onChange={handleSearch}
                        />
                        <CiSearch className=" absolute right-[1rem] top-[50%] translate-y-[-50%] text-[1.3rem]" />
                    </div>

                    {
                        search ? (
                            searchMenuItems &&

                            searchMenuItems.map((menu, index) => (
                                <div key={index}>
                                    <div className=' h-fit bg-white flex items-center justify-evenly gap-2 mx-4 rounded-lg p-2'>
                                        <div className='sm:w-[40%] w-[30%] h-full flex sm:flex-row flex-col sm:items-center justify-evenly font-semibold'>
                                            <p className='sm:text-[1.2rem] w-[70%] text-[.8rem]'>{menu.name}</p>
                                            <div className='flex flex-col sm:block sm:items-center justify-center sm:ml-2   font-inter'>
                                                <p className='text-[#000000B2] sm:text-[.8rem] text-[.6rem]'>Total</p>
                                                <p className='text-[#000000B2] sm:text-[.8rem] text-[.6rem]'>Recomendation</p>
                                                <p className='sm:text-[1.1rem] text-[.6rem]'>213</p>
                                            </div>
                                        </div>
                                        <div className='sm:w-[60%] w-[70%] h-full flex justify-evenly gap-2 '>

                                            <div className='flex flex-col text-[#000000] items-center justify-center font-inter'>
                                                <div className='flex gap-2'>
                                                    <img className='size-6' src="/🦆 emoji _disappointed but relieved face_.png" alt="" />
                                                    <p className=' sm:text-[1.1rem] text-[.85rem]'>{menu.notLikedCount}</p>
                                                </div>
                                                <p className='sm:text-[.85rem] text-[.7rem]'>Not Liked</p>
                                            </div>
                                            <div className='flex flex-col text-[#000000] items-center justify-center font-inter'>
                                                <div className='flex gap-2'>
                                                    <img className='size-6' src="/Group 1171277598.png" alt="" />
                                                    <p className=' text-[1.1rem]'>{menu.likedCount}</p>
                                                </div>
                                                <p className='sm:text-[.85rem] text-[.7rem]'>Good</p>
                                            </div>
                                            <div className='flex flex-col text-[#000000] items-center justify-center font-inter'>
                                                <div className='flex gap-2'>
                                                    <img className='size-6' src="/Group 1171277601.png" alt="" />
                                                    <p className=' sm:text-[1.1rem] text-[.8rem]'>{menu.mustTryCount}</p>
                                                </div>
                                                <p className='sm:text-[.85rem] text-[.7rem]'>Must Try</p>
                                            </div>
                                            <div className='flex items-center justify-center cursor-pointer ml-2'>
                                                {
                                                    showAllCategories[menu.name] ? <FaChevronUp className='text-[1.4rem]' onClick={() => toggleCategory(menu.name)} /> : <FaChevronDown onClick={() => toggleCategory(menu.name)} className='text-[1.4rem]' />
                                                }

                                            </div>
                                        </div>

                                    </div>
                                    {
                                        showAllCategories[menu.name] &&
                                        <motion.div initial={{ opacity: 0, y: -50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1 }}
                                            className=' h-[390px] p-5 mx-4 rounded-lg mb-4 bg-white flex flex-col gap-5  '>
                                            <p className='text-[#334253] text-[1.5rem]'>Customer Testimonials</p>
                                           
                                            <div className='flex sm:w-fit px-[1rem] w-full gap-[1rem] justify-evenly items-center my-[1rem] overflow-x-scroll hideScroller'>
                                                <button
                                                    onClick={() => {
                                                        setGood(false);
                                                        setNewone(!newone);
                                                        setNotliked(false);
                                                        setMustTry(false);
                                                        setFilterone('new');
                                                    }}
                                                    className={`${newone ? 'bg-[#FFD628]' : ''} px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem] border-2 text-nowrap`}
                                                >
                                                    New
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setGood(false);
                                                        setNewone(false);
                                                        setNotliked(!notlikedone);
                                                        setMustTry(false);
                                                        setFilterone('notLiked');
                                                    }}
                                                    className={`${notlikedone ? 'bg-[#FFD628]' : ''} px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem] border-2 text-nowrap`}
                                                >
                                                    Not Liked
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setGood(!goodone);
                                                        setNewone(false);
                                                        setNotliked(false);
                                                        setMustTry(false);
                                                        setFilterone('liked');
                                                    }}
                                                    className={`${goodone ? 'bg-[#FFD628]' : ''} px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem] border-2 text-nowrap`}
                                                >
                                                    Liked
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setGood(false);
                                                        setNewone(false);
                                                        setNotliked(false);
                                                        setMustTry(!musttryone);
                                                        setFilterone('mustTry');
                                                    }}
                                                    className={`${musttryone ? 'bg-[#FFD628]' : ''} px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem] border-2 text-nowrap`}
                                                >
                                                    Must try
                                                </button>
                                            </div>

                                            <div className=' h-[300px] hideScroller w-full overflow-x-scroll flex   gap-2'>
                                                {menu?.comments.map((item, index) => (
                                                    <div key={index} className='h-full min-w-[310px] max-w-[310px] flex-col relative rounded-lg border font-inter border-[#00000099] p-4 gap-2'>
                                                        <div className='flex items-center justify-evenly gap-4 w-full h-[20%]'>
                                                            {/* <img src={item.photo} alt="" /> */}
                                                            <IoPersonCircleOutline className='size-6' />
                                                            <p className='text-nowrap'>{item.userId?.name}</p>
                                                            <p>{calculateTimeDifference(item?.createdAt)}</p>
                                                        </div>
                                                        <p className='w-full h-[70%] text-[#67727E] '>{item?.description}</p>
                                                        {
                                                            item?.rated === "liked" && (
                                                                <div className='absolute right-4 bottom-3 bg-[#F5F6FA] flex flex-col items-center justify-center size-14 rounded-md'>
                                                                    <img className='size-7' src='/Group 1171277598.png' alt="" />
                                                                    <p className='text-[.7rem]'>Liked</p>
                                                                </div>
                                                            )
                                                        }
                                                        {
                                                            item?.rated === "mustTry" && (
                                                                <div className='absolute right-4 bottom-3 bg-[#F5F6FA] flex flex-col items-center justify-center size-14 rounded-md'>
                                                                    <img className='size-7' src='/Group 1171277601.png' alt="" />
                                                                    <p className='text-[.7rem]'>Must Try</p>
                                                                </div>
                                                            )
                                                        }
                                                        {
                                                            item?.rated === "notLike" && (
                                                                <div className='absolute right-4 bottom-3 bg-[#F5F6FA] flex flex-col items-center justify-center size-14 rounded-md'>
                                                                    <img className='size-7' src='/🦆 emoji _disappointed but relieved face_.png' alt="" />
                                                                    <p className='text-[.7rem]'>Must Try</p>
                                                                </div>
                                                            )
                                                        }


                                                    </div>
                                                ))}

                                            </div>


                                        </motion.div>
                                    }
                                </div>

                            ))
                        ) : (menus &&
                            top3menus.map((menu, index) => (
                                <>
                                    <div className=' h-fit bg-white flex items-center justify-evenly gap-2 mx-4 rounded-lg p-2'>
                                        <div className='sm:w-[40%] w-[30%] h-full flex sm:flex-row flex-col sm:items-center justify-evenly font-semibold'>
                                            <p className='sm:text-[1.2rem] w-[70%] text-[.8rem]'>{menu.name}</p>
                                            <div className='flex flex-col sm:block sm:items-center justify-center sm:ml-2   font-inter'>
                                                <p className='text-[#000000B2] sm:text-[.8rem] text-[.6rem]'>Total</p>
                                                <p className='text-[#000000B2] sm:text-[.8rem] text-[.6rem]'>Recomendation</p>
                                                <p className='sm:text-[1.1rem] text-[.6rem]'>213</p>
                                            </div>
                                        </div>
                                        <div className='sm:w-[60%] w-[70%] h-full flex justify-evenly gap-2 '>

                                            <div className='flex flex-col text-[#000000] items-center justify-center font-inter'>
                                                <div className='flex gap-2'>
                                                    <img className='size-6' src="/🦆 emoji _disappointed but relieved face_.png" alt="" />
                                                    <p className=' sm:text-[1.1rem] text-[.85rem]'>{menu.notLikedCount}</p>
                                                </div>
                                                <p className='sm:text-[.85rem] text-[.7rem]'>Not Liked</p>
                                            </div>
                                            <div className='flex flex-col text-[#000000] items-center justify-center font-inter'>
                                                <div className='flex gap-2'>
                                                    <img className='size-6' src="/Group 1171277598.png" alt="" />
                                                    <p className=' text-[1.1rem]'>{menu.likedCount}</p>
                                                </div>
                                                <p className='sm:text-[.85rem] text-[.7rem]'>Good</p>
                                            </div>
                                            <div className='flex flex-col text-[#000000] items-center justify-center font-inter'>
                                                <div className='flex gap-2'>
                                                    <img className='size-6' src="/Group 1171277601.png" alt="" />
                                                    <p className=' sm:text-[1.1rem] text-[.8rem]'>{menu.mustTryCount}</p>
                                                </div>
                                                <p className='sm:text-[.85rem] text-[.7rem]'>Must Try</p>
                                            </div>
                                            <div className='flex items-center justify-center cursor-pointer ml-2'>
                                                {
                                                    showAllCategories[menu.name] ? <FaChevronUp className='text-[1.4rem]' onClick={() => toggleCategory(menu.name)} /> : <FaChevronDown onClick={() => toggleCategory(menu.name)} className='text-[1.4rem]' />
                                                }

                                            </div>
                                        </div>

                                    </div>
                                    {
                                        showAllCategories[menu.name] &&
                                        <motion.div initial={{ opacity: 0, y: -50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 1 }}
                                            className=' h-[390px] p-5 mx-4 rounded-lg mb-4 bg-white flex flex-col gap-5  '>
                                            <p className='text-[#334253] text-[1.5rem]'>Customer Testimonials</p>

                                            <div className='flex sm:w-fit px-[1rem] w-full gap-[1rem]  items-center my-[1rem] overflow-x-scroll hideScroller'>
                                                <button
                                                    onClick={() => {
                                                        setGood(false);
                                                        setNewone(!newone);
                                                        setNotliked(false);
                                                        setMustTry(false);
                                                        setFilterone('new');
                                                    }}
                                                    className={`${newone ? 'bg-[#FFD628]' : ''}  px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem] border-2 text-nowrap`}
                                                >
                                                    New
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setGood(false);
                                                        setNewone(false);
                                                        setNotliked(!notlikedone);
                                                        setMustTry(false);
                                                        setFilterone('notLiked');
                                                    }}
                                                    className={`${notlikedone ? 'bg-[#FFD628]' : ''} px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem] border-2 text-nowrap`}
                                                >
                                                    Not Liked
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setGood(!goodone);
                                                        setNewone(false);
                                                        setNotliked(false);
                                                        setMustTry(false);
                                                        setFilterone('liked');
                                                    }}
                                                    className={`${goodone ? 'bg-[#FFD628]' : ''} px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem] border-2 text-nowrap`}
                                                >
                                                    Liked
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setGood(false);
                                                        setNewone(false);
                                                        setNotliked(false);
                                                        setMustTry(!musttryone);
                                                        setFilterone('mustTry');
                                                    }}
                                                    className={`${musttryone ? 'bg-[#FFD628]' : ''} px-[1.2rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem] border-2 text-nowrap`}
                                                >
                                                    Must try
                                                </button>
                                            </div>


                                            {/* 
                                        <div className="w-[100%] h-fit flex flex-wrap gap-[.5rem]"> */}

                                            <div className="flex  overflow-x-scroll gap-[.5rem] sm:justify-start hideScroller">

                                                {filterone === "new" ?
                                                    menu?.comments
                                                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                                                        .slice(0, 5) // Adjust the number of recent comments to be displayed
                                                        .map((item, index) => (
                                                            // Render recent comments here
                                                            <div key={index} className='h-full min-w-[310px] max-w-[310px] flex-col relative rounded-lg border font-inter border-[#00000099] p-4 gap-2'>
                                                                <div className='flex items-center justify-start gap-4 w-full h-[20%]'>
                                                                    {/* <img src={item.photo} alt="" /> */}
                                                                    <IoPersonCircleOutline className='size-6' />
                                                                    <p className='text-nowrap'>{item.userId?.name}</p>
                                                                    <p>{calculateTimeDifference(item?.createdAt)}</p>
                                                                </div>
                                                                <p className='w-full h-[70%] text-[#67727E] '>{item.description}</p>
                                                                {
                                                                    item?.rated === "liked" && (
                                                                        <div className='absolute right-4 bottom-3 bg-[#F5F6FA] flex flex-col items-center justify-center size-14 rounded-md'>
                                                                            <img className='size-7' src='/Group 1171277598.png' alt="" />
                                                                            <p className='text-[.7rem]'>Liked</p>
                                                                        </div>
                                                                    )
                                                                }
                                                                {
                                                                    item?.rated === "mustTry" && (
                                                                        <div className='absolute right-4 bottom-3 bg-[#F5F6FA] flex flex-col items-center justify-center size-14 rounded-md'>
                                                                            <img className='size-7' src='/Group 1171277601.png' alt="" />
                                                                            <p className='text-[.7rem]'>Must Try</p>
                                                                        </div>
                                                                    )
                                                                }
                                                                {
                                                                    item?.rated === "notLike" && (
                                                                        <div className='absolute right-4 bottom-3 bg-[#F5F6FA] flex flex-col items-center justify-center size-14 rounded-md'>
                                                                            <img className='size-7' src='/🦆 emoji _disappointed but relieved face_.png' alt="" />
                                                                            <p className='text-[.7rem]'>Must Try</p>
                                                                        </div>
                                                                    )
                                                                }


                                                            </div>
                                                        ))
                                                    :
                                                    menu?.comments
                                                        .filter(comment => filterone ? comment.rated === filterone : true)
                                                        .map((item, index) => (
                                                            // Render comments based on other filters here
                                                            <div key={index} className='h-full min-w-[310px] max-w-[310px] flex-col relative rounded-lg border font-inter border-[#00000099] p-4 gap-2'>
                                                                <div className='flex items-center justify-start gap-4 w-full h-[20%]'>
                                                                    {/* <img src={item.photo} alt="" /> */}
                                                                    <IoPersonCircleOutline className='size-6' />
                                                                    <p className='text-nowrap'>{item.userId?.name}</p>
                                                                    <p>{calculateTimeDifference(item?.createdAt)}</p>
                                                                </div>
                                                                <p className='w-full h-[70%] text-[#67727E] '>{item.description}</p>
                                                                {
                                                                    item?.rated === "liked" && (
                                                                        <div className='absolute right-4 bottom-3 bg-[#F5F6FA] flex flex-col items-center justify-center size-14 rounded-md'>
                                                                            <img className='size-7' src='/Group 1171277598.png' alt="" />
                                                                            <p className='text-[.7rem]'>Liked</p>
                                                                        </div>
                                                                    )
                                                                }
                                                                {
                                                                    item?.rated === "mustTry" && (
                                                                        <div className='absolute right-4 bottom-3 bg-[#F5F6FA] flex flex-col items-center justify-center size-14 rounded-md'>
                                                                            <img className='size-7' src='/Group 1171277601.png' alt="" />
                                                                            <p className='text-[.7rem]'>Must Try</p>
                                                                        </div>
                                                                    )
                                                                }
                                                                {
                                                                    item?.rated === "notLike" && (
                                                                        <div className='absolute right-4 bottom-3 bg-[#F5F6FA] flex flex-col items-center justify-center size-14 rounded-md'>
                                                                            <img className='size-7' src='/🦆 emoji _disappointed but relieved face_.png' alt="" />
                                                                            <p className='text-[.7rem]'>Must Try</p>
                                                                        </div>
                                                                    )
                                                                }


                                                            </div>
                                                        ))
                                                }


                                            </div>

                                            {/* </div> */}






                                        </motion.div>
                                    }
                                </>

                            )))
                    }







                </div>

                {/* Relationship */}
                <div className='sm:hidden  w-full h-fit bg-white rounded-md py-4 px-12  flex-col gap-2 my-6'>
                    <p className='text-[#0F172A] text-[1.5rem] font-semibold border-b border-[#F1F5F9] pb-3'>Relationship Manager</p>
                    <p className='text-[#64748B] text-[.9rem] w-[70%]  border-b pb-2'>Need help? contact your Relationship manager </p>

                    <div className='flex flex-col  gap-3 my-5'>
                        <div className='flex gap-2 items-center'>
                            <CiLocationOn className='text-[#94A3B8] font-bold text-[1.9rem]' />
                            <p className='text-[1.3rem] font-Roboto text-[#0F172A]'>Nitish Kumar</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <LuPhoneCall className='text-[#94A3B8] font-bold text-[1.9rem]' />
                            <p className='text-[1.3rem] font-Roboto text-[#0F172A]'>+91 91234567889</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <TbProgressHelp className='text-[#94A3B8] font-bold text-[1.9rem]' />
                            <p className='text-[1.3rem] font-Roboto text-[#0F172A]'>Help@snackbae.in</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <CiCalendarDate className='text-[#94A3B8] font-bold text-[1.9rem]' />
                            <p className='text-[1.3rem] font-Roboto text-[#0F172A]'>10 AM - 7 PM</p>
                        </div>
                    </div>

                    <div className='w-full h-[60px]  bg-[#67CE67] text-[1.5rem] font-semibold rounded-lg flex items-center justify-center gap-3 text-white'>
                        <IoLogoWhatsapp />
                        <p className=''>+91 9660066978</p>
                    </div>

                </div>

                {/* footer */}
                <div className='p-4'>
                    <div className='flex sm:flex-row flex-col w-full h-fit sm:items-center border border-[#00000099]  rounded-md my-4 font-inter  sm:p-0 p-4'>
                        <img className='size-[120px] ' src="/Customer feedback.png" alt="" />
                        <div>
                            <p>Help Us to make Snackbae better ! Share your feedbacks and request features that fits best for your Business</p>
                            <Link className='text-[#106CF6] border-b-2 w-fit border-[#106CF6] font-bold'>Give Feedback</Link>
                        </div>

                    </div>
                </div>




            </div>

        </div>
    )
}

export default Dashboard
