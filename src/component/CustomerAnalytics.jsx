import React, { useEffect, useState } from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { MdForwardToInbox } from "react-icons/md";
import Chart from 'react-google-charts';
import Charts from './Charts';
import axios from 'axios';

const CustomerAnalytics = () => {
    var userID = localStorage.getItem('user');
    console.log("user id", userID)
    const id = userID
    const resId = userID
    const [resData, setResData] = useState();
    const [totalCustomers, setTotalCustomers] = useState(0);
    const [repeatingCustomer, setRepeatingCustomer] = useState(0);
    const [todaysCustomer, setTodaysCustomer] = useState(0);
    const [last15Days, setLast15Days] = useState(0);
    const [last30Days, setLast30Days] = useState(0);
    const [birthdayCount, setBirthdayCount] = useState(0);
    const [maleCount, setMaleCount] = useState(0);
    const [femaleCount, setFemaleCount] = useState(0);
    const [lowRecommendation, setLowRecommendation] = useState(0);


    const getRestaurantData = async (req, res) => {
        let config = {
            method: "get",
            maxBodyLength: Infinity,
            url: `https://seashell-app-lgwmg.ondigitalocean.app/api/getRestaurantDetails/${resId}`,
            // url: `http://localhost:4000/api/getRestaurantDetails/${resId}`,
            headers: {},
        };

        axios
            .request(config)
            .then((response) => {
                console.log(response.data);
                console.log(response.data);
                setResData(response?.data);
                const resData = response.data;
                console.log(resData);
                setRepeatingCustomer(resData.restaurant.returningCustomer);
                setTotalCustomers(resData.restaurant.totalCustomers);
                console.log(resData.restaurant.totalCustomersData);
                const today = new Date().toISOString().slice(0, 10);
                console.log(today);
                const todayCust = resData?.restaurant?.totalCustomersData.filter(
                    (item) => item.createdAt && item.createdAt.slice(0, 10) === today
                );
                console.log(todayCust);
                setTodaysCustomer(todayCust.length);

                console.log(resData);

                //last 15 days
                const now = new Date();
                const fifteenDaysAgo = new Date();
                fifteenDaysAgo.setDate(now.getDate() - 15);

                const recentVisitors = resData?.restaurant?.totalCustomersData.filter(customer => {
                    const visitDate = new Date(customer.createdAt);
                    return visitDate >= fifteenDaysAgo;
                });
                setLast15Days(recentVisitors.length);

                //last 30 days
                const thirtyDaysAgo = new Date();
                thirtyDaysAgo.setDate(now.getDate() - 30);
                console.log("30 days ago", thirtyDaysAgo)

                const recentVisitors1 = resData?.restaurant?.totalCustomersData.filter(customer => {
                    const visitDate = new Date(customer.createdAt);
                    return visitDate >= thirtyDaysAgo;
                });
                setLast30Days(recentVisitors1.length);

                //birthday in this month
                const currentMonth = new Date().getMonth() + 1; // getMonth() returns 0-11, so add 1

                const birthdayVisitors = resData?.restaurant?.totalCustomersData.filter(customer => {
                    const dob = new Date(customer?.userId?.dob);
                    return dob.getMonth() + 1 === currentMonth;
                });

                setBirthdayCount(birthdayVisitors.length);

                //male and female count
                let male = 0;
                let female = 0;

                resData?.restaurant?.totalCustomersData.forEach(customer => {
                    if (customer?.userId?.gender === 'male') {
                        male += 1;
                    } else if (customer?.userId?.gender === 'female') {
                        female += 1;
                    }
                });
                setMaleCount(male);
                setFemaleCount(female);

                //low recommendation
                const lowRec = new Date();
                lowRec.setDate(now.getDate() - 30);

                const recentVisitors2 = resData?.restaurant?.recommendationRecord.filter(customer => {
                    const visitDate = new Date(customer.createdAt);
                    return visitDate >= thirtyDaysAgo && customer.low == true;
                });
                setLowRecommendation(recentVisitors2.length);

            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getRestaurantData();
    }, [resId]);

    return (
        <div className='w-full bg-[#F6F8FF] sm:px-6 h-fit  '>

            <div className='flex flex-col w-full h-fit   mt-6'>
                <div className='flex gap-3 w-full   my-2 sm:flex-row flex-col '>

                    <div className='sm:w-[32%] h-[140px]  border border-[#00000080] rounded-lg bg-white'>
                        <div className='flex gap-4 flex-col h-full  w-full  p-[1rem]  border-[#00000080]'>
                            <div className='text-[1.1rem] text-[#777980]'>
                                <p>Total Customers Visited in</p>
                                <p>Last 15 Days</p>
                            </div>
                            <p className='text-[1.5rem] text-[#1D1F2C] font-medium'>{last15Days}</p>
                        </div>
                    </div>

                    <div className='sm:w-[32%] h-[140px] border border-[#00000080] rounded-lg bg-white '>
                        <div className='flex gap-4  flex-col  w-full  p-[1rem] '>
                            <div className='text-[1.1rem] text-[#777980]'>
                                <p>Total Customers Visited in</p>
                                <p>Last 30 Days</p>
                            </div>
                            <p className='text-[1.5rem] text-[#1D1F2C] font-medium'>{last30Days}</p>
                        </div>

                    </div>

                    <div className='sm:w-[32%] h-[140px] border border-[#00000080] rounded-lg bg-white '>
                        <div className='flex gap-4 flex-col  w-full  p-[1rem] '>
                            <div className='text-[1.1rem] text-[#777980]'>
                                <p>Total Customers has not</p>
                                <div className='flex gap-2'>
                                    <p>Visited in Last</p>
                                    <p className='text-[#F44336]'>60 Days</p>
                                </div>

                            </div>
                            <p className='text-[1.5rem] text-[#1D1F2C] font-medium'>{totalCustomers - last30Days}</p>
                        </div>

                    </div>
                </div>

                <div className='flex gap-3 w-full   my-2 sm:flex-row flex-col '>

                    <div className='sm:w-[32%] h-[140px]  border border-[#00000080] rounded-lg bg-white'>
                        <div className='flex gap-4 flex-col   w-full  p-[1rem]  '>
                            <div className='text-[1.1rem] text-[#004AAD]'>
                                <p>Returning customer in last </p>
                                <p className='text-[#10B981]'> 60 Days</p>
                            </div>
                            <p className='text-[1.5rem] text-[#1D1F2C] font-medium'>{last15Days}</p>
                        </div>
                        

                    </div>

                    <div className='sm:w-[32%] h-[140px] border border-[#00000080] rounded-lg bg-white '>
                        <div className='flex gap-4 flex-col  w-full  p-[1rem]  '>
                            <div className='text-[1.1rem] text-[#777980]'>
                                <p>Customer Birthday this</p>
                                <p>month</p>
                            </div>
                            <p className='text-[1.5rem] text-[#1D1F2C] font-medium'>{birthdayCount}</p>
                        </div>
                        



                    </div>

                    <div className='sm:w-[32%] h-[140px] border border-[#00000080] rounded-lg bg-white '>
                        <div className='flex gap-4 flex-col  w-full  p-[1rem]  '>
                            <div className='text-[1.1rem] text-[#777980]'>
                                <p>Customer Anniversary this</p>
                                <p>month</p>
                            </div>
                            <p className='text-[1.5rem] text-[#1D1F2C] font-medium'>{birthdayCount}</p>
                        </div>
                      



                    </div>
                </div>

                <div className='flex gap-3 w-full  h-fit my-2 sm:flex-row flex-col   '>

                    <div className='sm:w-[66%] w-full flex h-fit gap-3 flex-wrap justify-evenly'>
                        <div className='sm:w-[48%] w-full h-[140px]  border border-[#00000080] rounded-lg bg-white '>
                            <div className='flex gap-4 flex-col  w-full  p-[1rem] '>
                                <div className='text-[1.1rem] text-[#004AAD]'>
                                    <p>Customer participated in </p>
                                    <div className='flex gap-2'>
                                        <p>games in last</p>
                                        <p className='text-[#10B981]'>60 Days</p>
                                    </div>

                                </div>
                                <p className='text-[1.5rem] text-[#1D1F2C] font-medium'>2,412</p>
                            </div>
                           

                        </div>
                        <div className='sm:w-[48%] w-full h-[140px]  border border-[#00000080] rounded-lg bg-white '>
                            <div className='flex gap-4 flex-col  w-full  p-[1rem] '>
                                <div className='text-[1.1rem] text-[#004AAD]'>
                                    <p>Customer won games in </p>
                                    <div className='flex gap-2'>
                                        <p>last</p>
                                        <p className='text-[#10B981]'>60 Days</p>
                                    </div>

                                </div>
                                <p className='text-[1.5rem] text-[#1D1F2C] font-medium'>1412</p>
                            </div>
                           

                        </div>
                        <div className='sm:w-[48%] w-full h-[140px]  border border-[#00000080] rounded-lg bg-white '>
                            <div className='flex gap-4 flex-col  w-full  p-[1rem] '>
                                <div className='text-[1.1rem] text-[#004AAD]'>
                                    <p>Total Customers with positive  </p>
                                    <div className='flex gap-2'>
                                        <p>recommendation</p>
                                        <p className='text-[#F44336]'></p>
                                    </div>

                                </div>
                                <p className='text-[1.5rem] text-[#1D1F2C] font-medium'>6,999</p>
                            </div>
                           

                        </div>
                        <div className='sm:w-[48%] w-full h-[140px]  border border-[#00000080] rounded-lg bg-white '>
                            <div className='flex gap-4 flex-col  w-full  p-[1rem] '>
                                <div className='text-[1.1rem] text-[#004AAD]'>
                                    <p>Total Customers with positive </p>
                                    <div className='flex gap-2'>
                                        <p>recommendation</p>
                                        <p className='text-[#F44336]'></p>
                                    </div>

                                </div>
                                <p className='text-[1.5rem] text-[#1D1F2C] font-medium'>1,684</p>
                            </div>
                           

                        </div>
                    </div>



                    {/* charts */}
                    <div className='sm:w-[32%] w-full h-[290px]  border border-[#00000080] rounded-lg bg-white overflow-hidden     '>
                        <div className='flex  flex-col  w-full h-[100%] p-[1rem]  border-[#00000080] relative '>
                            <p className='text-[#0F172A] font-bold absolute border-b border-[#2019ec80] pb-1.5 z-30'>Customer Gender segment</p>
                            <div className='absolute -ml-[60px] -mt-5  border-t  '>
                                <Charts male={maleCount} female={femaleCount} />
                            </div>



                        </div>
                    </div>

                </div>

                {/* footer */}
                <div className='sm:p-4'>
                    <div className='flex sm:flex-row flex-col w-full h-fit sm:items-center border border-[#00000099]  rounded-md my-4 font-inter  sm:p-0 p-4'>
                        <img className='size-[120px] ' src="/Customer feedback.png" alt="" />
                        <div>
                            <p>Help Us to make Snackbae better ! Share your feedbacks and request features that fits best for your Business</p>
                            <p className='text-[#106CF6] border-b-2 w-fit border-[#106CF6] font-bold'>Give Feedback</p>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default CustomerAnalytics
