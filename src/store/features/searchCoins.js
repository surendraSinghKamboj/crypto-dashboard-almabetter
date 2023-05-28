import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSearchEntries = createAsyncThunk(
    'search/fetchSearchEntries',
    async (searchKeyword, { getState }) => {
        const { lastFetchTimestamp } = getState().search;
        const currentTime = Date.now();
        const timeDifference = currentTime - lastFetchTimestamp;

        if (timeDifference < 500) {
            return Promise.resolve();
        }

        const response = await axios.get(`https://api.coingecko.com/api/v3/search?query=${searchKeyword}`);
        return response.data;
    }
);


const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchEntries: [],
        status: 'idle',
        error: null,
        lastFetchTimestamp: 0,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchEntries.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchSearchEntries.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.searchEntries = action.payload;
            })
            .addCase(fetchSearchEntries.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default searchSlice.reducer;
