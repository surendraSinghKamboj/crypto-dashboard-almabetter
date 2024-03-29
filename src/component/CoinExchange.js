import React, { useEffect, useState } from "react";

export const ExchangeCoins = () => {
  const [exchangeRates, setExchangeRates] = useState([]);
  const [value1, setvalue1] = useState(1);
  const [value2, setvalue2] = useState();
  const [text1, settext1] = useState("");
  const [text2, settext2] = useState(1);
  // const [units, setUnits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/exchange_rates"
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data, "d");
          const ratesArray = Object.entries(data.rates);
          console.log(ratesArray, "rrr");
          setExchangeRates(ratesArray);
        } else {
          console.error("Error:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const convert = () => {
    console.log(value1, value2, text1);

    let result = (value2 / value1) * text1;
    settext2(result);
    console.log(result);
  };
  return (
    <div className="px-4 py-4 font-body bg-black bg-opacity-10 backdrop-blur-md rounded-lg border border-gray-200 shadow-lg items-center">
      <h4 className="text-black text-lg font-semibold ml-5">Exchange Coins</h4>
      <div className="flex flex-row mt-8">
        <div className="pr-4 items-center">
          <div className="flex my-1 content-center items-center py-1 px-2 lg:ml-3">
            <p className="text-red-500 font-semibold mr-3 text-xs">Sell</p>
            <select
              onChange={(e) => setvalue1(e.target.value)}
              className="lg:pl-8 w-[130px] h-[2rem] font-semibold rounded-lg p-1 text-black bg-black-100 bg-opacity-30 backdrop-blur-md focus:ring-2 focus:outline-none px-5 inline-flex cursor-pointer"
            >
              {exchangeRates.map(([key, value]) => (
                <option
                  key={key}
                  value={value.value}
                  className="text-black-600"
                >
                  {value.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex my-2 content-center items-center py-1 px-2 lg:ml-3">
            <p className="text-green-300 font-semibold mr-3 text-xs">Buy</p>
            <select
              onChange={(e) => setvalue2(e.target.value)}
              className="lg:pl-8 w-[130px] h-[2rem] font-semibold rounded-lg text-black bg-black-100 bg-opacity-30 backdrop-blur-md focus:ring-2 focus:outline-none px-5 items-center cursor-pointer"
            >
              {exchangeRates.map(([key, value]) => (
                <option
                  key={key}
                  value={value.value}
                  className="text-black-600"
                >
                  {value.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="-mt-5 mr-3 lg:pl-10">
          <div>
            <label className="text-xs text-gray-200">Enter value</label>
            <div className="mr-[90px] lg:w-[90px] md:w-full sm:w-[90px] w-full py-2">
              <input
                type="number"
                className="appearance-none block w-full bg-gray-100 bg-opacity-20 backdrop-blur-md text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 rounded border border-gray-400 px-3 py-1 text-sm outline-none pt-2 pb-2"
                placeholder=""
                value={text1 || ""}
                onChange={(e) => settext1(e.target.value)}
              />
            </div>
            <p className="mt-4 text-green-400 text-sm text-transform:capitalize">
              {parseFloat(text2).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 pb-4">
        <button
          onClick={() => convert()}
          className="bg-gray-500 background-opacity-10 backdrop-blur-md rounded-lg text-sm py-2 px-6 text-white font-semibold hover:bg-gray-600 border border-white"
        >
          Exchange
        </button>
      </div>
    </div>
  );
};
