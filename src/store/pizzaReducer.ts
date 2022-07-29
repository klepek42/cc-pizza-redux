import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "pizza",
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
});

export default pizzaSlice.reducer;
