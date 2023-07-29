import axios from "axios";
import React, { useEffect, useState } from "react";
import LineChart from "./chart/LineChart";
import AreaChart from "./chart/AreaChart";
import CandleStickChart from "./chart/CandleStickChart";

const Chart = () => {
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState("candle");
  const [candlestickData, setCandlestickData] = useState([]);

  useEffect(() => {
    const fetch_Chart_Data = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=inr&days=30`
        );
        !response
          ? console.log("Unable to fetch data.")
          : setData(response.data);
      } catch (error) {
        console.log("Please turn on your internet.");
      }
    };
    fetch_Chart_Data();
  }, []);

  useEffect(() => {
    setCandlestickData(
      data.map((item) => {
        return {
          date: new Date(item[0]),
          open: item[1],
          high: item[2],
          low: item[3],
          close: item[4],
        };
      })
    );
  }, [data]);

  return (
    <div className="w-2/3 ">
      <select
        onChange={(e) => setChartType(e.target.value)}
        className="border absolute right-1 top-1 z-50 text-black border-black-100 dark:bg-blue-600 bg-blue-700 outline-black font-body pr-3 pl-2 rounded-lg w-[290px] md:w-[90px] sm:w-[90px] cursor-pointer bg-blue bg-opacity-10 backdrop-blur-md"
      >
        <option className="text-gray-600" value={"candle"}>
          Candle
        </option>
        <option className="text-gray-600" value={"Line Chart"}>
          Line
        </option>
        <option className="text-gray-600" value={"Area Chart"}>
          Area
        </option>
      </select>
      {chartType === "Line Chart" ? (
        <LineChart data={data} />
      ) : chartType === "Area Chart" ? (
        <AreaChart data={data} />
      ) : (
        <CandleStickChart data={candlestickData} />
      )}
    </div>
  );
};

export default Chart;
