import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CiSearch } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import Switch1 from './Switch1';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Menu = () => {

  const data1 = [{
    "itemname": "Starter combo (12)",
    "status": "true",
  },
  {
    "itemname": "Starter combo (12)",
    "status": "true",
  },
  {
    "itemname": "Starter combo (12)",
    "status": "true",
  },
  {
    "itemname": "Starter combo (12)",
    "status": "true",
  },
  {
    "itemname": "Starter combo (12)",
    "status": "true",
  },]

  const menu = [{
    "tital": "Hulk Beast Burger",
    "Price": "3399"
  }, {
    "tital": "Hulk Beast Burger",
    "Price": "3399"
  }, {
    "tital": "Hulk Beast Burger",
    "Price": "3399"
  }, {
    "tital": "Hulk Beast Burger",
    "Price": "3399"
  }, {
    "tital": "Hulk Beast Burger",
    "Price": "3399"
  }, {
    "tital": "Hulk Beast Burger",
    "Price": "3399"
  }, {
    "tital": "Hulk Beast Burger",
    "Price": "3399"
  }, {
    "tital": "Hulk Beast Burger",
    "Price": "3399"
  },]


  let filteredMenu = menu.slice(0, 6);
  const [menudata, setmenudata] = useState(filteredMenu);

  console.log(filteredMenu);

  const updatemenu = () => {
    setmenudata(menu);
  }

  const [up, setup] = useState(false);

  const up1 = () => {
    setup(!up);
    setmenudata(menu);
  }
  const down = () => {
    setup(!up);
    setmenudata(filteredMenu);
  }

  const [formData, setFormData] = useState({
    productName: '',
    productPrice: '',
    isVeg: '',
    category: '',
    description: '',
    productImage: null, // Added image state
  });
  const [formData1, setFormData1] = useState({
    productName1: '',
    productPrice1: '',
    isVeg1: '',
    category1: '',
    description1: '',
    productImage1: null, // Added image state
  });


  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
      productImage: type === 'file' ? files[0] : prevData.productImage,
    }));
  };

  const handleInputChange1 = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData1((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
      productImage: type === 'file' ? files[0] : prevData.productImage,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('Form submitted:', formData);
  };
  const handleFormSubmit1 = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend)
    console.log('Form submitted:', formData1);
  };

  function openPopup() {
    document.getElementById('popup').style.display = "block";


  }
  function closePopup() {
    document.getElementById('popup').style.display = "none";


  }

  function openPopup1() {
    document.getElementById('popup1').style.display = "block";


  }
  function closePopup1() {
    document.getElementById('popup1').style.display = "none";


  }
  function openPopup2() {
    document.getElementById('popup2').style.display = "block";


  }
  function closePopup2() {
    document.getElementById('popup2').style.display = "none";


  }



  return (

    <div id='menu' className='w-full h-fit relative px-'>

      {/* QR code popup */}
      <motion.div id="popup" whileInView={{ y: [400, 0] }} transition={{ duration: .5, type: "tween" }} className='sm:w-[500px]  w-full h-fit  sm:left-[30%] fixed bg-[#FFFFFF] hidden  z-40 mt-[80px] rounded-2xl sm:p-4 p-4'>
        <div className='flex  items-center justify-between font-Roboto sm:text-[1.2rem] text-[1.5rem] text-[#0F172A] px-4 mt-2 border-b-2 mb-4 pb-2'>
          <p>Add Menu item</p>
          <RxCrossCircled onClick={closePopup} className='cursor-pointer text-[1.9rem]' />
        </div>
        <form className='flex flex-col gap-3 w-full sm:h-[500px] px-3 py-[1rem] text-[#0F172A] font-inter sm:text-[.95rem] hideScroller  overflow-y-scroll' onSubmit={handleFormSubmit}>
          <div className=' flex flex-col  '>
            <p>item image*</p>
            <p className='text-[#64748B] text-[.8rem] w-full'>Image format .jpg .jpeg .png and minimum size 300 x 300px</p>
            <div className='size-[130px] mt-2 bg-[#F8FAFC] rounded-md flex items-center justify-center relative '>
              <img src="/icon.png" alt="" />
              <input
                className='text-[#F8FAFC] absolute left-[10%] mt-[75%]'
                type="file"
                id="productImage"
                name="productImage"
                accept="image/*"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className='flex sm:flex-row flex-col w-full gap-2 '>
            <div>
              <label htmlFor="productName">Product Name:</label>
              <input
                className='border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full'
                type="text"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="productPrice">Product Price:</label>
              <input
                className='border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full'
                type="number"
                id="productPrice"
                name="productPrice"
                value={formData.productPrice}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className='flex sm:flex-row flex-col w-full gap-2'>
            <div>
              <label htmlFor="isVeg">Veg/Non-Veg:</label>
              <select
                className='border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full'
                id="isVeg"
                name="isVeg"
                value={formData.isVeg}
                onChange={handleInputChange}
              >
                <option value="">Select an option</option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
              </select>
            </div>
            <div>
              <label htmlFor="category">Category:</label>
              <select
                className='border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full'
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="">Select a category</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                {/* Add more categories as needed */}
              </select>
            </div>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="description">Description:</label>
            <textarea
              className='border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full h-[70px]'
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <div className='flex gap-2 w-full '>
            <button className='text-[white] bg-[#004AAD] py-3 rounded-md flex w-full justify-center items-center '>Cancel</button>
            <button className='text-[white] bg-[#004AAD] py-3 rounded-md flex w-full justify-center items-center ' type="submit">Submit</button>
          </div>

        </form>


      </motion.div>

      {/* Add Category popup */}
      <motion.div id="popup1" whileInView={{ y: [400, 0] }} transition={{ duration: .5, type: "tween" }} className='sm:w-[500px] sm:h-[500px] w-full   sm:left-[30%] fixed bg-[#FFFFFF] hidden  z-40 mt-[80px] rounded-2xl sm:p-4 p-4'>
        <div className='flex  items-center justify-between font-Roboto sm:text-[1.2rem] text-[1.5rem] text-[#0F172A] px-4 mt-2 border-b-2 mb-4 pb-2'>
          <p>Add Category</p>
          <RxCrossCircled onClick={closePopup1} className='cursor-pointer text-[1.9rem]' />
        </div>

        <div className='w-full h-fit px-3 flex flex-col gap-4 border-b-2  py-4'>
          <p>Create New Category</p>
          <div className='flex justify-between gap-3'>
            <input className='px-2 py-2 border w-[80%] border-[#E2E8F0] rounded-md'
              type="text" />
            <button className='px-4 py-2 bg-[#004AAD] text-white rounded-xl' >Create</button>
          </div>
        </div>

        <div className='flex w-full px-4 flex-col py-4 '>
          <p>All catagories</p>
          <div className='flex flex-col gap-2 my-4 '>
            {data1.map((item, index) => (
              <div key={index} className='flex border font-semibold border-[#E2E8F0] justify-between py-2 px-4 rounded-md items-center'>
                <p className='sm:text-[1.2rem] text-[1.4rem]'>{item.itemname}</p>
                <div className='flex gap-6'>
                  <Switch1 />
                  <RiDeleteBinLine className='text-[#004AAD] text-[1.5rem]' />
                </div>

              </div>
            ))}


          </div>

        </div>



      </motion.div>

      {/* Edit menu */}
      <motion.div id="popup2" whileInView={{ y: [400, 0] }} transition={{ duration: .5, type: "tween" }} className='sm:w-[500px]  h-fit w-full  sm:left-[30%] fixed bg-[#FFFFFF] hidden  z-40 mt-[80px] rounded-2xl sm:p-4 p-4'>
        <div className='flex items-center justify-between font-Roboto sm:text-[1.2rem] text-[1.5rem] text-[#0F172A] px-4 mt-2 border-b-2 mb-4 pb-2'>
          <p>Add Menu item</p>
          <RxCrossCircled onClick={closePopup2} className='cursor-pointer text-[1.9rem]' />
        </div>
        <form className='flex flex-col gap-3 w-full sm:h-[500px] px-3 text-[#0F172A] font-inter sm:text-[.95rem] bg-white  overflow-y-scroll py-[1rem] hideScroller' onSubmit={handleFormSubmit1}>
          <div className=' flex flex-col  w-full'>
            <p>Item image*</p>
            <p className='text-[#64748B] text-[.8rem]'>Image format .jpg .jpeg .png and minimum size 300 x 300px</p>
            </div>
            <div className='flex gap-2 '>


              <div className='size-[130px]  mt-2 bg-[#F8FAFC] rounded-md flex items-center justify-center relative '>

                <img src="/icon.png" alt="" />
                <input
                  className='text-[#F8FAFC] absolute ml-[180%] mt-[85%]'
                  type="file"
                  id="productImage1"
                  name="productImage11"
                  accept="image/*"
                  onChange={handleInputChange1}
                />
              </div>
              <div className='h-[130px] flex items-center justify-center w-[130px] bg-[#F8FAFC]'>
                <img className='' src="/image.png" alt="" />
              </div>
              <div className='h-[130px] flex items-center justify-center w-[130px] bg-[#F8FAFC]'>
                <img className='' src="/image.png" alt="" />
              </div>

            </div>

          

          <div className='flex sm:flex-row flex-col w-full gap-2 '>
            <div>
              <label htmlFor="productName">Product Name:</label>
              <input
                className='border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full'
                type="text"
                id="productName1"
                name="productName1"
                value={formData1.productName1}
                onChange={handleInputChange1}
              />
            </div>
            <div>
              <label htmlFor="productPrice">Product Price:</label>
              <input
                className='border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full'
                type="number"
                id="productPrice1"
                name="productPrice1"
                value={formData1.productPrice1}
                onChange={handleInputChange1}
              />
            </div>
          </div>
          <div className='flex sm:flex-row flex-col w-full gap-2'>
            <div>
              <label htmlFor="isVeg">Veg/Non-Veg:</label>
              <select
                className='border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full'
                id="isVeg1"
                name="isVeg1"
                value={formData1.isVeg1}
                onChange={handleInputChange1}
              >
                <option value="">Select an option</option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non-Veg</option>
              </select>
            </div>
            <div>
              <label htmlFor="category">Category:</label>
              <select
                className='border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full'
                id="category1"
                name="category1"
                value={formData1.category1}
                onChange={handleInputChange1}
              >
                <option value="">Select a category</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                {/* Add more categories as needed */}
              </select>
            </div>
          </div>

          <div className='flex flex-col'>
            <label htmlFor="description">Description:</label>
            <textarea
              className='border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full h-[70px]'
              id="description1"
              name="description1"
              value={formData1.description1}
              onChange={handleInputChange1}
            />
          </div>
          <div className='flex gap-2 w-full '>
            <button className='text-[white] bg-[#004AAD] py-3 rounded-md flex w-full justify-center items-center '>Cancel</button>
            <button className='text-[white] bg-[#004AAD] py-3 rounded-md flex w-full justify-center items-center ' type="submit">Submit</button>
          </div>

        </form>


      </motion.div>


      <div className='  w-full  h-[80px] z-10 bg-[#FDE030] mt-[70px] flex justify-between items-center px-5 sm:px-12   '>
        <div>
          <p className='text-[1.6rem] font-semibold'>Menu</p>
          <p className='text-[.9rem]'>Manage your menu item here</p>
        </div>

        <div className='flex gap-5 '>

          <button onClick={openPopup} className='bg-[#004AAD] px-5 py-1.5 rounded-md border text-[.9rem] font-Roboto  border-[#000000B2] text-white'> +  Add Menu</button>
        </div>


      </div>
      <div className='w-full h-fit  mt-[10px] px-12   '>

        <div className='bg-white px-3 flex flex-col gap-6 sm:py-5 py-2'>


          <div className='w-full h-fit flex sm:flex-row flex-col gap-2 sm:my-1 my-4  items-center justify-between   '>
            <div className='relative sm:w-[35%] w-full flex items-center rounded-md border border-[#407fd1]  '>
              <input
                className='w-full sm:py-2 py-4 px-8 rounded-lg'
                type="text"
                placeholder='Search menu ...'
              />
              <CiSearch className='absolute text-[1.3rem] font-semibold ml-2 ' />
            </div>
            <div className='flex gap-4 items-center justify-evenly text-[#64748B]'>
              <button className='px-5 sm:py-2 py-4 rounded-md border border-[#407fd1]' onClick={openPopup1}>All Categories</button>
              <button className='px-5 sm:py-2 py-4 rounded-md border border-[#407fd1]' onClick={openPopup2}>+ Add Category</button>
            </div>
          </div>

          <div className='w-full h-fit font-Roboto text-[1.3rem] sm:px-6 border-t-2'>

            {/* course indian 1*/}
            <div className='flex justify-between items-center  w-full mt-4 px-4 '>
              <p>Main Course Indian (12)</p>
              {
                up ? <IoIosArrowUp onClick={up1} className='cursor-pointer text-[1.5rem]' /> : <IoIosArrowDown onClick={down} className='cursor-pointer text-[1.7rem]' />
              }

            </div>

            <div className='w-full h-fit grid sm:grid-cols-3 gap-3 my-8'>
              {/* 1 */}
              {menudata.map((item) => (
                <div className=' w-full h-[200px] border border-[#0000007D] p-3 rounded-md flex flex-col justify-evenly gap-1'>
                  <div className='flex justify-between'>
                    <p className='font-inter'>Hulk Beast Burger</p>
                    <Switch1 />
                  </div>
                  <div className='flex w-full'>
                    <div className='w-[70%]'>
                      <img src="Group 1171277690.png" alt="" />
                      <p className='text-[#0F172A] font-inter text-[.75rem]'>Hulk Beast burger is one of the signature dishes in this cafe ,stuffed double paty chicken with mouth watering sauce flavour</p>
                    </div>
                    <div className='w-[30%] flex items-center justify-center bg-[#F8FAFC] rounded-md'>
                      <img className='size-16' src="/image.png" alt="" />
                    </div>

                  </div>

                  <div className='flex justify-between font-Roboto'>
                    <p className='text-[1.1rem]'>₹399.00</p>
                    <button className='border border-[#0000007D] px-2 rounded-md text-[.9rem]'>Edit</button>
                  </div>
                </div>
              ))}

            </div>

            {/* course indian 2*/}



          </div>
        </div>


      </div>
    </div>
  )
}

export default Menu
