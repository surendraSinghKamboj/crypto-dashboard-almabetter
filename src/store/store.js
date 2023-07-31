import { configureStore } from "@reduxjs/toolkit";
import coinsList from "./features/all_coins";
import searchCoins from "./features/searchCoins";
import trendingCoins from "./features/trendingCoins";
import activeCoin from "./features/chartCoin";
import timeFrame from "./features/timeFrame";

const store = configureStore({
  reducer: {
    coinsList,
    searchCoins,
    trendingCoins,
    activeCoin,
    timeFrame,
  },
});

export default store;
