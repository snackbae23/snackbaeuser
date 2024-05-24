import React from 'react'
import { ResponsiveBar } from "@nivo/bar"
import { GoInfo } from "react-icons/go";
const Barchart2 = () => {

    function BarChart(props) {
        return (
          <div {...props}>
            <ResponsiveBar
              data={[
                { name: "Walk-in offer", count: 11 },
                { name: "Flat Discount", count: 150 },
                { name: "Birthday Offer", count: 69 },
                { name: "Happy Hours", count: 55 },
                { name: "Special Days", count: 20 },
               
              ]}
              keys={["count"]}
              indexBy="name"
              margin={{ top: 10, right: 0, bottom: 30, left: 40 }}
              padding={0.3}
              colors={["#2563eb"]}
              axisBottom={{
                tickSize: 0,
                tickPadding: 16,
              }}
              axisLeft={{
                tickSize: 0,
                tickValues: 4,
                tickPadding: 16,
              }}
              gridYValues={4}
              theme={{
                tooltip: {
                  chip: {
                    borderRadius: "9999px",
                  },
                  container: {
                    fontSize: "12px",
                    textTransform: "capitalize",
                    borderRadius: "6px",
                  },
                },
                grid: {
                  line: {
                    stroke: "#f3f4f6",
                  },
                },
              }}
              tooltipLabel={({ id }) => `${id}`}
              enableLabel={false}
              role="application"
              ariaLabel="A bar chart showing data"
            />
          </div>
        )
      }
      
  return (
    <div className="bg-white md:p-6 p-2 rounded-lg shadow-md w-full  h-full flex flex-col ">
      <div className="flex justify-between items-center mb-4 h-[20%]">
        <div>
          <h2 className="text-lg font-semibold">Unique Redemption</h2>
          <p className="text-sm text-gray-500">February</p>
        </div>
        <GoInfo className='size-6' />
      </div>
      <BarChart className="w-full h-[300px]  " />
    </div>
  )
}

export default Barchart2




