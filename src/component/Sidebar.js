import axios from "axios";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { usePagination } from "./pagination";

export const Sidebar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const dataPerPage = 10;
  const {
    currentPage,
    totalPages,
    currentData,
    handlePreviousPage,
    handleNextPage,
  } = usePagination(data, dataPerPage);

  return (
    <div>
      {currentData ? (
        <table className="w-full table-auto">
          <tbody>
            {currentData.map((data) => (
              <tr
                key={data.id}
                className="text-center text-lg border-b border-gray-100 hover:bg-pink-600 last:border-b-0"
              >
                <td className="flex items-center">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-[1.1rem] h-[1.1rem] ml-3 mt-2"
                  />
                  <div className="ml-2">
                    <div className="text-[13px] font-semibold text-black">
                      {data.name}
                    </div>
                    <div className="text-[12px] font-semibold flex items-center">
                      Mkt.Cap{" "}
                      {new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(data.market_cap)}
                    </div>
                  </div>
                </td>
                <td>
                  <div
                    className={`text-[12px] font-semibold ${
                      data.market_cap_change_percentage_24h > 0
                        ? "text-blue-500"
                        : "text-green-400"
                    }`}
                  >
                    <i
                      className={`mr-1 text-xs ${
                        data.market_cap_change_percentage_24h > 0
                          ? "fa-solid fa-caret-up"
                          : "fa-solid fa-caret-down"
                      }`}
                    ></i>
                    <span>
                      {parseFloat(
                        data.market_cap_change_percentage_24h
                      ).toFixed(2)}{" "}
                      %
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

      <div className="flex justify-center mt-4">
        <button
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md mr-2"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>

        <span>{currentPage}</span>

        <button
          className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md ml-2"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};


