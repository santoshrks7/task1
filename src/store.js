import { configureStore } from "@reduxjs/toolkit";
import cardListReducer from "./redux/cardListSlice";

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem("state", JSON.stringify(state));
  } catch (error) {
    console.log(error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const stateStore = localStorage.getItem("state");
    return stateStore ? JSON.parse(stateStore) : undefined;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const persistedStore = loadFromLocalStorage(); //persistedStore, data from localStorage

export const store = configureStore({
  reducer: {
    cardlist: cardListReducer,
  },
  preloadedState: persistedStore,
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
