import { createSlice } from "@reduxjs/toolkit";

const initialState = "bitcoin";

const coin_Chart = createSlice({
  name: "chart_coin",
  initialState,
  reducers: {
    updateCoin: (state, actions) => {
      return (state = actions.payload);
    },
  },
});

export const { updateCoin } = coin_Chart.actions;

export default coin_Chart.reducer;
