import { configureStore } from '@reduxjs/toolkit';
import coinsList from "./features/all_coins";
import searchCoins from './features/searchCoins';

const store = configureStore({
    reducer: {
        coinsList,
        searchCoins
    }
});


export default store;