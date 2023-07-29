import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart as AreaCharts,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AreaChart = ({ data }) => {
  // Extracting data into separate arrays for labels and datasets
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      setDatasets(
        data.map((item) => {
          return { timeStamp: new Date(item[0]), Price: item[4].toFixed(2) };
        })
      );
      console.log(datasets);
    }
  }, [data]); // Include 'data' as a dependency to re-run the effect when 'data' changes

  return (
    <ResponsiveContainer width={"100%"} aspect={3}>
      <AreaCharts
        width={730}
        height={250}
        data={datasets}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <XAxis dataKey="timeStamp" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Price"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaCharts>
    </ResponsiveContainer>
  );
};

export default AreaChart;
