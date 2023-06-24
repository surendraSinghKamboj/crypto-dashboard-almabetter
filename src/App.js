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
function App() {
  const allCoins = useSelector((state) => state.coinsList);
  console.log(allCoins,"KOMMAAL")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, []);
  return (
    <div>
      <ExchangeCoins/>
      {/* <Navbar />
<Sidebar/>
      <Dropdown data={["USD", "INR", "EUR"]} /> */}
     
      
    </div>
  );
}

export default App;
