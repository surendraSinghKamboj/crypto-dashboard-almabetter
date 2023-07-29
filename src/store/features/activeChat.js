import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getChartData = createAsyncThunk(
  "coins/chartData",
  async (coins = "bitcoin", days = "1") => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coins}/ohlc?vs_currency=inr&days=${days}`
    );
    return response.data;
  }
);

const activeCoins = createSlice({
  name: "activeCoin",
  initialState: {
    chartData: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getChartData.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getChartData.fulfilled, (state, action) => {
        state.status = "succeed";
        state.chartData = action.payload;
      })
      .addCase(getChartData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default activeCoins;
