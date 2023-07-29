/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Navbar } from "./component/Navbar";
import { Dropdown } from "./component/Dropdown";
import { Searchbar } from "./component/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCoins } from "./store/features/all_coins";
import { Sidebar } from "./component/Sidebar";
import { ExchangeCoins } from "./component/CoinExchange";
import Chart from "./component/Chart";

function App() {
  const allCoins = useSelector((state) => state.coinsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col">
        <div className="flex justify-center items-center w-screen">
          <Dropdown data={["USD", "INR", "EUR"]} />
          <Searchbar />
        </div>
        <div className="flex mt-4 pl-3">
          <div className="w-2/3">
            <Chart />
          </div>
          <div className="w-1/3 relative">
            <Sidebar />
          </div>
        </div>
      </div>
      {/* <ExchangeCoins /> */}
    </div>
  );
}

export default App;
