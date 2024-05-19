import React from "react";

const Settlements = () => {
  return (
    <div className="w-full h-fit">
      <div className="flex flex-col w-full h-fit ">
        <div className="bg-white  w-full h-fit p-4 gap-4 mb-9 rounded-lg ">
          <div className="text-[#6B7280] flex w-full justify-between mb-4  border-b-2 font-semibold text-[.9rem] gap-2">
            <div className="w-[24%] flex mb-3 items-center justify-evenly">
              <div className=" text-center text-[1.05rem] sm:block hidden items-center">
                Tnx Day
              </div>
            </div>
            <div className="grid sm:grid-cols-4 grid-cols-3 sm:text-[.9rem] text-[.8rem] mt-1  w-[72%] gap-2 justify-evenly ">
              <div className="sm:block hidden">DATE & TIME</div>
              <div className="sm:block hidden">AMOUNT</div>
              <div className="sm:block hidden">MODE</div>
              <div className="sm:block hidden sm:ml-8 ml-2">STATUS</div>
            </div>
          </div>

          <div className="w-full h-fit flex flex-col justify-center items-center mt-8">
            <img src="No data found.png" />
            <p className="text-3xl text-[#004AAD] font-bold w-[300px] text-center">
              Opps ! No payout request found
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settlements;
