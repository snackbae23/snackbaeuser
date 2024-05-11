// BarChart.js

import React from 'react';
import { Chart } from 'react-google-charts';

const Barchart = () => {
  const data = [
    ['Offer Type', 'Redemptions'],
    ['', 43],
    ['', 52],
    ['', 10],
    ['', 120],
    ['', 8],
  ];

  const options = {
    title: '',
    // hAxis: { title: 'Offer Type' },
    // vAxis: { title: 'Redemptions' },
    legend: 'none',
  };

  return (
    <div className='w-[500px] sm:h-[600px] h-[450px]'>
      <Chart
        chartType="BarChart"
        data={data}
        options={options}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default Barchart;
