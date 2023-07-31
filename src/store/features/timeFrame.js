import { createSlice } from "@reduxjs/toolkit";

const initialState = "1";

const timeFrame = createSlice({
  name: "timeFrame",
  initialState,
  reducers: {
    updateTimeFrame: (state, actions) => {
      return (state = actions.payload);
    },
  },
});

export const { updateTimeFrame } = timeFrame.actions;

export default timeFrame.reducer;
