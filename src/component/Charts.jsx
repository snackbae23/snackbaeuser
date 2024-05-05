import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Female", 11],
  ["Male", 6],
  
  // CSS-style declaration
];

export const options = {
    title: "",
    pieHole: 0.4,
    is3D: false,
    colors: ['#004AAD','#FFD628'],
    
  };

export default function Charts() {
  return (
    <Chart className="flex "
      chartType="PieChart"
      width="400px"
      height="300px"
      data={data}
      options={options}
    />
  );
}
