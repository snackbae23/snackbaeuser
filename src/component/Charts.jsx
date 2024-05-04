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
  };

export default function Charts() {
  return (
    <Chart className="flex "
      chartType="PieChart"
      width="300px"
      height="200px"
      data={data}
      options={options}
    />
  );
}
