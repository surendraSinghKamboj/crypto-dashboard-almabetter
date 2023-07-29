import React from "react";
import ReactApexChart from 'react-apexcharts';



const CandleStickChart = ({ data }) => {
  // Transform data into ApexCharts format (date should be in Unix timestamp format)
  const chartData = data.map((item) => ({
    x: new Date(item.date).getTime(),
    y: [item.open, item.high, item.low, item.close],
  }));

  const series = [
    {
      data: chartData,
    },
  ];

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    title: {
      text: "Candlestick Chart",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="candlestick"
      height={350}
    />
  );
};

export default CandleStickChart;
