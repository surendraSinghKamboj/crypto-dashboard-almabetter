/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Navbar } from "./component/Navbar";
import { Dropdown } from "./component/Dropdown";
import { Searchbar } from "./component/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCoins } from "./store/features/all_coins";

function App() {
	const allCoins = useSelector((state) => state.coinsList);
	const dispatch = useDispatch();
	useEffect(()=>{
		dispatch(fetchCoins());
	},[])
	return (
		<div>
			<Navbar />
			<div className="flex">
				<Dropdown data={["USD", "INR", "EUR"]} />
				<Searchbar />
			</div>
		</div>
	);
}

export default App;
