import { configureStore } from "@reduxjs/toolkit";
import cardListReducer from "./redux/cardListSlice";

export const store = configureStore({
  reducer: {
    cardlist: cardListReducer,
  },
});
