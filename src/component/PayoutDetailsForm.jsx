import React from "react";
import { useState } from "react";
import axios from "axios"

const PayoutDetailsForm = () => {

  var userID = localStorage.getItem('user');
  console.log("user id" ,userID)
  const id = userID
  const resId = userID

  const [option, setoption] = useState("");

  const [formData, setFormData] = useState({
    method:"",
    bankAccount: "",
    ifscCode: "",
    BenificeiryName: "",
    UpiId: "",
    UpiNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://seashell-app-lgwmg.ondigitalocean.app/api/paymentoptions/${id}`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : formData
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

    setFormData({
      method:"",
      bankAccount: "",
      ifscCode: "",
      BenificeiryName: "",
      UpiId: "",
      UpiNumber: "",
    });
    setoption("");
  };


  return (
    <div>
      <form
      onSubmit={handleSubmit}
      className="bg-white w-full rounded px-8 pt-6 pb-8 mb-4 flex flex-wrap">
      <div>
        <label className="inline-flex items-center px-10 mt-6">
          <input
            id="option1"
            type="radio"
            className="form-radio text-blue-500 mb-4"
            name="method"
            onChange={handleChange}
            value="bank_transfer"
          />

          <span
            className={`${
              formData.method === "bank_transfer"
                ? "text-Black font-bold"
                : "text-[#64748B] font-bold"
            } ml-2 mb-4`}
            onClick={() => setoption("bank_transfer")}
          >
            Bank Transfer
          </span>
        </label>

        {formData.method === 'bank_transfer' && (
          <div className="max-w-screen-xl mx-auto">
          <div
            className="bg-white  rounded px-8 pt-6 pb-8 mb-4 flex flex-wrap"
          >
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="brandName"
              >
                Bank Account
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="bankAccount"
                value={formData.bankAccount}
                type="text"
                placeholder="Enter Bank Account"
                name="bankAccount"
                onChange={handleChange}
                required
              />
              <p className="md:text-md bankAccount hidden text-xs text-red-600">
                field is required
              </p>
            </div>
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="brandName"
              >
                IFSC Code
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ifscCode"
                type="text"
                placeholder="Enter IFSC Code"
                name="ifscCode"
                onChange={handleChange}
                required
                value={formData.ifscCode}
              />
              <p className="ifscCode hidden md:text-md text-xs text-red-600">
                field is required
              </p>
            </div>
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-3 md:mt-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="brandName"
              >
                Benificeiry Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="BenificeiryName"
                type="text"
                value={formData.BenificeiryName}
                placeholder="Benificeiry Name"
                name="BenificeiryName"
                onChange={handleChange}
                required
              />
              <p className="BenificeiryName hidden md:text-md text-xs text-red-600">
                field is required
              </p>
            </div>
          </div>
        </div>
        )}


        <p className=" border"></p>

        <label className="inline-flex items-center ml-4 px-6 mt-6">
          <input
            id="option2"
            type="radio"
            className="form-radio text-blue-500 mb-4"
            name="method"
            value="upi"
            onChange={handleChange}
          />

          <span
            className={`${
              formData.method === "upi"
                ? "text-Black font-bold"
                : "text-[#64748B] font-bold"
            } ml-2 mb-4`}
            onClick={() => setoption("upi")}
          >
            Bhim UPI
          </span>
        </label>


        {formData.method === 'upi' && (
          <div className="max-w-screen-xl mx-auto">
          <div
            className="bg-white  rounded px-8 pt-6 pb-8 mb-2 flex flex-wrap"
          >
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="brandName"
              >
                UPI Id
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="UpiId"
                type="text"
                placeholder="Enter Upi Id"
                name="UpiId"
                onChange={handleChange}
                required
                value={formData.UpiId}
              />
              <p className="UpiId hidden text-xs md:text-md text-red-600">
                field is required
              </p>
            </div>
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="brandName"
              >
                UPI Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="UpiNumber"
                type="text"
                placeholder="Enter Upi Number"
                name="UpiNumber"
                onChange={handleChange}
                required
                value={formData.UpiNumber}
              />
              <p className="UpiNumber hidden text-xs md:text-md text-red-600">
                field is required
              </p>
            </div>
          </div>
        </div>
        )}
      </div>

      <div className="w-[50%] md:w-full mt-10 md:ml-10 mx-auto">
        <button
          className="bg-[#004AAD] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Save change
        </button>
      </div>
      </form>
    </div>
  );
};

export default PayoutDetailsForm;
