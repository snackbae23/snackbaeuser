import React from 'react'
import { RxCrossCircled } from "react-icons/rx";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CiSearch } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import Switch1 from './Switch1';
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect } from 'react';
import axios from 'axios';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import Loader from './Loader';
import { PacmanLoader } from 'react-spinners';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const Menu = () => {

  const [loader, setloader] = useState(false);


  // toggle data for more than 4
  const [showAllCategories, setShowAllCategories] = useState({});
  const toggleCategory = (categoryId) => {
    setShowAllCategories(prevState => ({
      ...prevState,
      [categoryId]: !prevState[categoryId]
    }));

  };

  var userID = localStorage.getItem('user');
  console.log("user id", userID)
  const resId = userID
  const id = userID;
  const [resData, setResData] = useState();
  const [category, setCategory] = useState([]);
  const [createCategory, setCreateCategory] = useState('');
  const [pic, setPic] = useState('');

  const getRestaurantData = async (req, res) => {
    setloader(true);
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
        setCategory(resData?.restaurant?.category);
        const category = resData.restaurant.category;
        console.log("category", category);
        // setmenus(resData?.restaurant?.menu);
        console.log(resData);

      })
      .catch((error) => {
        console.log(error);
      });
    setTimeout(() => {
      setloader(false);
    }, 2000);
  }

  useEffect(() => {
    getRestaurantData();

  }, [resId]);

  function categoryCreationHandler(e) {
    setCreateCategory(e.target.value);
  }

  function categoryCreationSubmit() {
    const formData = { "name": createCategory };

    let data = JSON.stringify(formData);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://seashell-app-lgwmg.ondigitalocean.app/api/addCategory/${resId}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log("category added");
        getRestaurantData();

      })
      .catch((error) => {
        console.log(error);
      });
  }


  const addMenuSubmit = async (req, res) => {

    formData.image = pic;

    console.log(formData);

    //let data = JSON.stringify(fdata);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `https://seashell-app-lgwmg.ondigitalocean.app/api/addMenu/${resId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: formData,
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log("menu added");
        closePopup();
        getRestaurantData();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // updateMenu;
  const deleteCategory = async (id) => {
    window.alert("Category will be deleted.");
    let data = JSON.stringify({
      "categoryId": id
    });

    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `https://seashell-app-lgwmg.ondigitalocean.app/api/deleteCategory/${resId}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log("category deleted");
        getRestaurantData();
      })
      .catch((error) => {
        console.log(error);
      });

  }
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    veg: "",
    category: "",
    description: "",
    image: "", // Added image state
    variants1: "",
    variants1Price: "",
    variants2: "",
    variants2Price: "",
    variants3: "",
    variants3Price: "",
  });

  const handleImageChange = async (pics) => {
    console.log(pics);
    const formData = new FormData();
    formData.append("file", pics);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://seashell-app-lgwmg.ondigitalocean.app/api/fileUpload",
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log(response.data.data.url);
        setPic(response.data.data.url);
        formData.image = pic;
      })
      .catch((error) => {
        console.log(error);
      });
  };


  // let filteredMenu = menu.slice(0, 6);
  // const [menudata, setmenudata] = useState(filteredMenu);

  // // console.log(filteredMenu);

  // const updatemenu = () => {
  //   setmenudata(menu);
  // }

  const [up, setup] = useState(false);





  function resetFormData() {
    formData.name = '';
    formData.price = '';
    formData.veg = '';
    formData.category = '';
    formData.description = '';
    formData.image = '';
    formData.variants1 = '';
    formData.variants1Price = '';
    formData.variants2 = '';
    formData.variants2Price = '';
    formData.variants3 = '';
    formData.variants3Price = '';
    setPic('');

  }

  function resetFormData1() {
    formData1.name = "";
    formData1.price = "";
    formData1.veg = "";
    formData1.category = "";
    formData1.description = "";
    formData1.image = "";
    setPic("");
    formData1.variants1 = '';
    formData1.variants1Price = '';
    formData1.variants2 = '';
    formData1.variants2Price = '';
    formData1.variants3 = '';
    formData1.variants3Price = '';
  }

  const [formData1, setFormData1] = useState({
    name: '',
    price: '',
    veg: '',
    category: '',
    description: '',
    image: '',
    variants1: "",
    variants1Price: "",
    variants2: "",
    variants2Price: "",
    variants3: "",
    variants3Price: "",

  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
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
    console.log('Form submitted:', formData);
  };
  const handleFormSubmit1 = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData1);
  };

  function openPopup() {
    document.getElementById('popup').style.display = "block";
    document.getElementById("restaurant").style.display = "block";
  }
  function closePopup() {
    document.getElementById('popup').style.display = "none";
    document.getElementById("restaurant").style.display = "none";
    resetFormData();
  }

  function openPopup1() {
    document.getElementById('popup1').style.display = "block";
    document.getElementById("restaurant").style.display = "block";
  }
  function closePopup1() {
    document.getElementById('popup1').style.display = "none";
    document.getElementById("restaurant").style.display = "none";
  }
  const [MenuId, setMenuId] = useState();
  function deleteMenu(item) {
    // console.log("delete")
    window.alert("Menu will be deleted.");
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `https://seashell-app-lgwmg.ondigitalocean.app/api/deleteMenu/${item._id}`,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        getRestaurantData();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function openPopup2(item) {
    document.getElementById('popup2').style.display = "block";
    document.getElementById("restaurant").style.display = "block";
    // formData1.productImage1 = item.image;
    // formData1.productName1 = item.name;
    // formData1.productPrice1 = item.price;
    // formData1.description1 = item.description;
    // formData1.isVeg1 = item.isVeg;
    // formData1.category1 = item.category;
    // }
    setFormData1(item)
    setMenuId(item._id)
  }
  function closePopup2() {
    document.getElementById('popup2').style.display = "none";
    document.getElementById("restaurant").style.display = "none";
    resetFormData1();
    getRestaurantData();
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
  const updateMenu = async (e) => {

    e.preventDefault();
    formData1.image = pic;

    console.log(formData1);

    //let data = JSON.stringify(fdata);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `https://seashell-app-lgwmg.ondigitalocean.app/api/updateMenu/${MenuId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: formData1,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log("menu added");
        closePopup2();
        getRestaurantData();

      })
      .catch((error) => {
        console.log(error);
      });
  }
  const [categories, setCategories] = useState(resData?.restaurant?.category);
  const handleDragEnd = (result) => {
    if (!result.destination) return;
    console.log(result)
    let updatedCategories = [];

    updatedCategories = Array.from(category);
    const [reorderedCategory] = updatedCategories.splice(
      result.source.index,
      1
    );
    updatedCategories.splice(result.destination.index, 0, reorderedCategory);
    console.log(updatedCategories)
    console.log(id)
    setCategory(updatedCategories);
    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: `https://seashell-app-lgwmg.ondigitalocean.app/api/updateorder/${id}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: updatedCategories,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));


        getRestaurantData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="menu" className="w-full h-fit relativ sm:mb-0 mb-10 ">
      {/* Add menu popup */}
      <motion.div
        id="popup"
        whileInView={{ y: [400, 0] }}
        transition={{ duration: 0.5, type: "tween" }}
        className="sm:w-[500px]  w-[100%] h-[600px]    sm:left-[30%] fixed bg-[#FFFFFF] hidden  z-[1000] mt-[80px] rounded-2xl sm:p-4 p-4  "
      >
        <div className="flex items-center justify-between font-Roboto sm:text-[1.2rem] text-[1.5rem] text-[#0F172A] px-4 mt-2 border-b-2 mb-4 pb-2">
          <p>Add Menu item</p>
          <RxCrossCircled
            onClick={closePopup}
            className="cursor-pointer text-[1.9rem]"
          />
        </div>
        <form
          className="flex flex-col gap-3 w-full sm:h-[500px] h-[500px] px-3 pb-[2rem] text-[#0F172A] font-inter sm:text-[.95rem] hideScroller  overflow-y-scroll  "
          onSubmit={handleFormSubmit}
        >
          <div className=" flex flex-col  ">
            <p>item image*</p>
            <p className="text-[#64748B] text-[.8rem] w-full">
              Image format .jpg .jpeg .png and minimum size 300 x 300px
            </p>
            <div className="size-[130px] mt-2 bg-[#F8FAFC] rounded-md flex items-center justify-center relative ">
              {pic == "" ? (
                <div className="size-[130px] mt-2 bg-[#F8FAFC] rounded-md flex items-center justify-center relative ">
                  <input
                    className="text-[#F8FAFC] absolute left-[10%] mt-[75%]"
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files) handleImageChange(e.target.files[0]);
                    }}
                  />
                  <img src="/icon.png" alt="" />
                </div>
              ) : (
                <div>
                  <img src={pic} alt="uploaded"></img>
                </div>
              )}
            </div>
          </div>

          <div className="flex sm:flex-row flex-col w-full gap-2 ">
            <div>
              <label htmlFor="name">Product Name:</label>
              <input
                className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="price">Product Price:</label>
              <input
                className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full"
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex sm:flex-row flex-col w-full gap-2">
            <div>
              <label htmlFor="veg">Veg/Non-Veg:</label>
              <select
                className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full"
                id="veg"
                name="veg"
                value={formData.veg}
                onChange={handleInputChange}
              >
                <option value="">Select an option</option>
                <option value=" Yes">Veg</option>
                <option value="No">Non-Veg</option>
              </select>
            </div>
            <div>
              <label htmlFor="category">Category:</label>
              <select
                className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                <option value="">Select a category</option>
                {category.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Varianta */}
          <div className="flex   w-full gap-2 ">
            <div className='w-[70%]'>
              <label >Variants</label>
             
            </div>
            <div className='w-[30%]'>
              <label >Price</label>
              
            </div>
          </div>

          <div>
          <div className="flex  w-full gap-2  ">
            <div className='w-[70%]'>
              <input
                className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full"
                placeholder='variant 1'
                type="text"
                id="variants1"
                name="variants1"
                value={formData.variants1}
                onChange={handleInputChange}
              />
            </div>
            <div className='w-[30%]'>
             
              <input
                className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full"
                placeholder='₹100'
                type="number"
                id="variants1Price"
                name="variants1Price"
                value={formData.variants1Price}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="flex  w-full gap-2  ">
            <div className='w-[70%]'>
              <input
                className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full"
                placeholder='variant2'
                type="text"
                id="variants2"
                name="variants2"
                value={formData.variants2}
                onChange={handleInputChange}
              />
            </div>
            <div className='w-[30%]'>
             
              <input
                className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full"
                placeholder='₹200'
                type="number"
                id="variants2Price"
                name="variants2Price"
                value={formData.variants2Price}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex  w-full gap-2  ">
            <div className='w-[70%]'>
              <input
                className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full"
                placeholder='variant3'
                type="text"
                id="variants3"
                name="variants3"
                value={formData.variants3}
                onChange={handleInputChange}
              />
            </div>
            <div className='w-[30%]'>
             
              <input
                className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full"
                placeholder='₹300'
                type="number"
                id="variants3Price"
                name="variants3Price"
                value={formData.variants3Price}
                onChange={handleInputChange}
              />
            </div>
          </div>
          </div>

         

          <div className="flex flex-col">
            <label htmlFor="description">Description:</label>
            <textarea
              className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full h-[70px]"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex gap-2 w-full ">
            <button
              onClick={() => {
                closePopup();
              }}
              className="text-[white] bg-[#004AAD] py-3 rounded-md flex w-full justify-center items-center "
            >
              Cancel
            </button>
            <button
              className="text-[white] bg-[#004AAD] py-3 rounded-md flex w-full justify-center items-center "
              type="submit"
              onClick={addMenuSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>

      {/* Add Category popup */}
      <motion.div
        id="popup1"
        whileInView={{ y: [400, 0] }}
        transition={{ duration: 0.5, type: "tween" }}
        className="sm:w-[500px]  w-[100%] h-[650px]    sm:left-[30%] fixed bg-[#FFFFFF] hidden  z-[1000] mt-[80px] rounded-2xl sm:p-4 p-4 "
      >
        <div className="flex  items-center justify-between font-Roboto sm:text-[1.2rem] text-[1.5rem] text-[#0F172A] px-4 mt-2 border-b-2 mb-4 pb-2">
          <p>Add Category</p>
          <RxCrossCircled
            onClick={closePopup1}
            className="cursor-pointer text-[1.9rem]"
          />
        </div>

        <div className="w-full h-fit px-3 flex flex-col gap-4 border-b-2  py-4">
          <p>Create New Category</p>
          <div className="flex justify-between gap-3">
            <input
              className="px-2 py-2 border w-[80%] border-[#E2E8F0] rounded-md"
              type="text"
              onChange={categoryCreationHandler}
            />
            <button
              className="px-4 py-2 bg-[#004AAD] text-white rounded-xl"
              onClick={categoryCreationSubmit}
            >
              Create
            </button>
          </div>
        </div>

        <div className="flex w-full px-4 flex-col py-4 gap-3 ">
          <p>All catagories</p>
          <div className="flex flex-col gap-3 w-full sm:h-[350px] h-[360px] px-3 pb-[1rem] text-[#0F172A] font-inter sm:text-[.95rem] hideScroller  overflow-y-scroll  ">
            {category.map((item, index) => (
              <div
                key={index}
                className="flex border font-semibold border-[#E2E8F0] justify-between py-2 px-4 rounded-md items-center"
              >
                <p className="sm:text-[1.2rem] text-[1.4rem]">{item.name}</p>
                <div className="flex gap-6">
                  <Switch1
                    isActive={item.active}
                    id={item._id}
                    type={"category"}
                  />
                  <RiDeleteBinLine
                    className="text-[#004AAD] text-[1.5rem]"
                    onClick={() => {
                      deleteCategory(item._id);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Edit menu */}
      <motion.div
        id="popup2"
        whileInView={{ y: [400, 0] }}
        transition={{ duration: 0.5, type: "tween" }}
        className="sm:w-[500px]  w-[100%] h-[600px]    sm:left-[30%] fixed bg-[#FFFFFF] hidden  z-[1000] mt-[80px] rounded-2xl sm:p-4 p-4  "
      >
        <div className="flex items-center justify-between font-Roboto sm:text-[1.2rem] text-[1.5rem] text-[#0F172A] px-4 mt-2 border-b-2 mb-4 pb-2">
          <p>Edit Menu item</p>
          <RxCrossCircled
            onClick={closePopup2}
            className="cursor-pointer text-[1.9rem]"
          />
        </div>
        <form className="flex flex-col gap-3 w-full sm:h-[500px] h-[500px] px-3 pb-[2rem] text-[#0F172A] font-inter sm:text-[.95rem] hideScroller  overflow-y-scroll  ">
          <div className=" flex flex-col  w-full">
            <p>Item image*</p>
            <p className="text-[#64748B] text-[.8rem]">
              Image format .jpg .jpeg .png and minimum size 300 x 300px
            </p>
          </div>
          <div className="flex gap-2">
            <div className="size-[130px]  mt-2 bg-[#F8FAFC] rounded-md flex items-center justify-center relative ">
              {pic == "" ? (
                <div className="size-[130px] mt-2 bg-[#F8FAFC] rounded-md flex items-center justify-center relative ">
                  <img src="/icon.png" alt="" />
                  <input
                    className="text-[#F8FAFC] absolute left-[10%] mt-[75%]"
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files) handleImageChange(e.target.files[0]);
                    }}
                  />
                </div>
              ) : (
                <div>
                  <img src={pic} alt="uploaded"></img>
                </div>
              )}
            </div>
            <div className="h-[130px] flex items-center justify-center w-[130px] bg-[#F8FAFC]">
              <img className="" src={formData1.image} alt="" />
            </div>
          </div>

          <div className="flex sm:flex-row flex-col w-full gap-2 ">
            <div>
              <label htmlFor="name">Product Name:</label>
              <input
                className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full"
                type="text"
                id="name"
                name="name"
                value={formData1.name}
                onChange={handleInputChange1}
              />
            </div>
            <div>
              <label htmlFor="price">Product Price:</label>
              <input
                className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full"
                type="number"
                id="price"
                name="price"
                value={formData1.price}
                onChange={handleInputChange1}
              />
            </div>
          </div>
          <div className="flex sm:flex-row flex-col w-full gap-2">
            <div>
              <label htmlFor="veg">Veg/Non-Veg:</label>
              <select
                className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full"
                id="veg"
                name="veg"
                value={formData1.veg}
                onChange={handleInputChange1}
              >
                <option value="">Select an option</option>
                <option value="Yes">Veg</option>
                <option value="No">Non-Veg</option>
              </select>
            </div>
            <div>
              <label htmlFor="category">Category:</label>
              <select
                className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full"
                id="category"
                name="category"
                value={formData1.category}
                onChange={handleInputChange1}
              >
                <option value="">Select a category</option>
                {category.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

           {/* Varianta */}
           <div className="flex  w-full gap-2 ">
            <div className='w-[70%]'>
              <label >Variants</label>
             
            </div>
            <div className='w-[30%]'>
              <label >Price</label>
              
            </div>
          </div>

          <div>
          <div className="flex  w-full gap-2  ">
            <div className='w-[70%]'>
              <input
                className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full"
                placeholder='variant 1'
                type="text"
                id="variants1"
                name="variants1"
                value={formData1.variants1}
                onChange={handleInputChange1}
              />
            </div>
            <div className='w-[30%]'>
             
              <input
                className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full"
                placeholder='₹100'
                type="number"
                id="variants1Price"
                name="variants1Price"
                value={formData1.variants1Price}
                onChange={handleInputChange1}
              />
            </div>
          </div>

          <div className="flex  w-full gap-2  ">
            <div className='w-[70%]'>
              <input
                className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full"
                placeholder='variant2'
                type="text"
                id="variants2"
                name="variants2"
                value={formData1.variants2}
                onChange={handleInputChange1}
              />
            </div>
            <div className='w-[30%]'>
             
              <input
                className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full"
                placeholder='₹200'
                type="number"
                id="variants2Price"
                name="variants2Price"
                value={formData1.variants2Price}
                onChange={handleInputChange1}
              />
            </div>
          </div>
          <div className="flex  w-full gap-2  ">
            <div className='w-[70%]'>
              <input
                className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full"
                placeholder='variant3'
                type="text"
                id="variants3"
                name="variants3"
                value={formData1.variants3}
                onChange={handleInputChange1}
              />
            </div>
            <div className='w-[30%]'>
             
              <input
                className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full"
                placeholder='₹300'
                type="number"
                id="variants3Price"
                name="variants3Price"
                value={formData1.variants3Price}
                onChange={handleInputChange1}
              />
            </div>
          </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="description">Description:</label>
            <textarea
              className="border border-[#E2E8F0] rounded-md px-4 my-2 p-2 w-full h-[70px]"
              id="description"
              name="description"
              value={formData1.description}
              onChange={handleInputChange1}
            />
          </div>
          <div className="flex gap-2 w-full ">
            <button className="text-[white] bg-[#004AAD] py-3 rounded-md flex w-full justify-center items-center ">
              Cancel
            </button>
            <button
              className="text-[white] bg-[#004AAD] py-3 rounded-md flex w-full justify-center items-center "
              onClick={updateMenu}
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>

      <div className="  w-full  h-[80px] z-10 bg-[#FDE030] mt-[70px] flex justify-between items-center px-5 sm:px-12   ">
        <div>
          <p className="text-[1.6rem] font-semibold">Menu</p>
          <p className="text-[.9rem]">Manage your menu item here</p>
        </div>

        <div className="flex gap-5 ">
          <button
            onClick={openPopup}
            className="bg-[#004AAD] px-5 py-1.5 rounded-md border text-[.9rem] font-Roboto  border-[#000000B2] text-white"
          >
            {" "}
            + Add Menu
          </button>
        </div>
      </div>
      <div className="w-full h-fit  mt-[10px] sm:px-8 px-4  ">
        <div className="bg-white   sm:px-3 flex flex-col gap-6 sm:py-5  px-1 ">
          {/* Search result */}

          <div className="w-full h-fit flex sm:flex-row flex-col gap-4  sm:my-1 mt-4  items-centen   justify-between   ">
            <div className="relative sm:w-[35%] w-full flex items-center rounded-md border border-[#407fd1]  ">
              <input
                className="w-full sm:py-2 py-4 px-8 rounded-lg"
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search menu ..."
              />
              <CiSearch className="absolute text-[1.3rem] font-semibold ml-2 " />
            </div>

            <button
              className="sm:px-5 px-3 sm:py-2 py-3 rounded-md border border-[#407fd1] text-nowrap"
              onClick={openPopup1}
            >
              + Add Category
            </button>
          </div>

          {searchMenuItems && (
            <div className="w-full h-fit ml-2 text-[1.5rem] font-semibold">
              <p>Search result</p>
            </div>
          )}

          <div className="flex flex-wrap gap-2 sm:gap-4">
            {search &&
              searchMenuItems &&
              searchMenuItems.map((item, index) => (
                <div id='index' className=" sm:w-[32%] sm:h-[230px] h-[200px] border  border-[#0000007D] p-4 rounded-md flex flex-col justify-start gap-1 relative overflow-hidden">
                                          <div className="flex w-full items-center h-[20%] justify-between ">
                                            <p className="font-inter">
                                              {item.name}{" "}
                                            </p>
                                            <p></p>
                                            <Switch1
                                              isActive={item.active}
                                              id={item._id}
                                              type={"menu"}
                                            />
                                          </div>
                                          <div className="flex w-full h-[60%]  py-4  ">
                                            <div className="w-[70%] overflow-y-scroll hideScroller ">
                                              {item.veg == "Yes" && (
                                                <img
                                                  src="Group 1171277690.png"
                                                  alt=""
                                                />
                                              )}
                                              {
                                                !item.veg == "Yes" && (
                                                  <img
                                                    src="Group 1171277690.png"
                                                    alt=""
                                                  />
                                                ) // non-veg
                                              }
                                              <p className="text-[#0F172A] font-inter text-[.75rem]">
                                                {item.description}
                                              </p>
                                            </div>
                                            <div className="w-[40%] flex items-center justify-center bg-[#F8FAFC] rounded-md">
                                              <img
                                                className="size-20 size-fit-content"
                                                src={item.image}
                                                alt=""
                                              />
                                            </div>
                                          </div>

                                          <div className="flex w-full justify-between font-Roboto absolute px-6 right-0 bottom-2 bg-white  py-1 rounded-m ">
                                            <p className="text-[1.1rem]">
                                              ₹{item.price}
                                            </p>
                                            <div className="flex gap-2">
                                              <button
                                                className="border border-[#0000007D] px-2 rounded-md text-[.9rem] bg-[#004AAD] text-white"
                                                onClick={() => {
                                                  openPopup2(item);
                                                }}
                                              >
                                                Edit
                                              </button>
                                              <button
                                                onClick={() => {
                                                  deleteMenu(item);
                                                }}
                                                className="border border-[#0000007D] px-2 rounded-md text-[.9rem] bg-red-700 text-white"
                                              >
                                                Delete
                                              </button>
                                            </div>
                                          </div>
                                        </div>
              ))}
          </div>

          <div className="w-full h-fit font-Roboto  text-[1.3rem] sm:px-6 border-t-2">
            {/* Rest Restaurantmenu */}
            {loader ? (
              // Show a loader when resData is empty
              <div className="flex justify-center items-center w-full h-[400px]  z-50 ">
                <PacmanLoader color="#004AAD" />
              </div>
            ) : (
              // Render the menu categories
              <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="category">
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {category.map((category, index) => (
                        <Draggable
                          key={category._id}
                          draggableId={category._id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              key={category._id}
                              id={category._id}
                              className="w-full h-fit font-Roboto text-[1.3rem] sm:px-6 my-7 border-b"
                            >
                              <div>
                                <div className="w-full h-fit">
                                  <div className="flex justify-between items-center  w-full mt-4 px-4 ">
                                    <p className="font-Roboto font-[500] text-[1.4rem] leading-[3rem]">
                                      {category.name} (
                                      {category.menuItems.length})
                                    </p>
                                    {showAllCategories[category.name] ? (
                                      <FaAngleUp
                                        className={`text-[1.4rem] cursor-pointer`}
                                        onClick={() =>
                                          toggleCategory(category.name)
                                        }
                                      />
                                    ) : (
                                      <FaAngleDown
                                        className={`text-[1.4rem] cursor-pointer`}
                                        onClick={() =>
                                          toggleCategory(category.name)
                                        }
                                      />
                                    )}
                                  </div>

                                  <div
                                    className={`w-full ${showAllCategories[category.name]
                                        ? "h-auto transition-height duration-300 ease-in-out"
                                        : "h-0 hidden"
                                      }`}
                                  >
                                    <div className=" w-full flex sm:flex-row flex-col gap-[1rem] p-[.5rem] flex-wrap   ">
                                      {category?.menuItems.map((item) => (
                                        <div className=" sm:w-[32%] sm:h-[230px] h-[200px] border  border-[#0000007D] p-4 rounded-md flex flex-col justify-start gap-1 relative overflow-hidden">
                                          <div className="flex w-full items-center h-[20%] justify-between ">
                                            <p className="font-inter">
                                              {item.name}{" "}
                                            </p>
                                            <p></p>
                                            <Switch1
                                              isActive={item.active}
                                              id={item._id}
                                              type={"menu"}
                                            />
                                          </div>
                                          <div className="flex w-full h-[60%]  py-4  ">
                                            <div className="w-[70%] overflow-y-scroll hideScroller ">
                                              {item.veg == "Yes" && (
                                                <img
                                                  src="Group 1171277690.png"
                                                  alt=""
                                                />
                                              )}
                                              {
                                                !item.veg == "Yes" && (
                                                  <img
                                                    src="Group 1171277690.png"
                                                    alt=""
                                                  />
                                                ) // non-veg
                                              }
                                              <p className="text-[#0F172A] font-inter text-[.75rem]">
                                                {item.description}
                                              </p>
                                            </div>
                                            <div className="w-[40%] flex items-center justify-center bg-[#F8FAFC] rounded-md">
                                              <img
                                                className="size-20 size-fit-content"
                                                src={item.image}
                                                alt=""
                                              />
                                            </div>
                                          </div>

                                          <div className="flex w-full justify-between font-Roboto absolute px-6 right-0 bottom-2 bg-white  py-1 rounded-m ">
                                            <p className="text-[1.1rem]">
                                              ₹{item.price}
                                            </p>
                                            <div className="flex gap-2">
                                              <button
                                                className="border border-[#0000007D] px-2 rounded-md text-[.9rem] bg-[#004AAD] text-white"
                                                onClick={() => {
                                                  openPopup2(item);
                                                }}
                                              >
                                                Edit
                                              </button>
                                              <button
                                                onClick={() => {
                                                  deleteMenu(item);
                                                }}
                                                className="border border-[#0000007D] px-2 rounded-md text-[.9rem] bg-red-700 text-white"
                                              >
                                                Delete
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu
