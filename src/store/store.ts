import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./pizzaReducer";

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
  },
});
