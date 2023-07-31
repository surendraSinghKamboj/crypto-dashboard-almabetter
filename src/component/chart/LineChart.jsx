import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceDot,
} from "recharts";

const LineChartComponent = ({ data }) => {
  // Extracting data into separate arrays for labels and datasets
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      setDatasets(
        data.map((item) => {
          return {
            timeStamp: new Date(item[0]),
            Price: item[1].toFixed(2),
          };
        })
      );
      console.log(datasets);
    }
  }, [data]); // Include 'data' as a dependency to re-run the effect when 'data' changes

  return (
    <ResponsiveContainer width={"100%"} aspect={3}>
      <LineChart
        data={datasets}
        width={730}
        height={250}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey={"timeStamp"} />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <ReferenceDot ifOverflow={false} />
        <Line type="monotone" dataKey="Price" />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
