
import { createSlice } from "@reduxjs/toolkit";
export const eventSlice = createSlice({
  name: "events",
  initialState: {
    events:[],
  },
  reducers: {
    createEvents(state, action) {
      state.packages = [...state.services, action.payload];

    },
  },
});
export const { createEvents } = eventSlice.actions;

export default eventSlice.reducer;