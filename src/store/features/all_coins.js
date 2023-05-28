import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchCoins = createAsyncThunk('coins/fetchCoins', async () => {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
    return response.data;
});


const coinSlice = createSlice({
    name: 'coins',
    initialState: {
        coins: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoins.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchCoins.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.coins = action.payload;
            })
            .addCase(fetchCoins.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});



export default coinSlice.reducer;
