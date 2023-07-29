import { configureStore } from "@reduxjs/toolkit";
import coinsList from "./features/all_coins";
import searchCoins from "./features/searchCoins";
import trendingCoins from "./features/trendingCoins";
import activeCoins from "./features/activeChat";

const store = configureStore({
  reducer: {
    coinsList,
    searchCoins,
    trendingCoins,
    activeCoins,
  },
});

export default store;
