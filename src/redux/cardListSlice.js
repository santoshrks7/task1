import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardListItem: ["abc", "def"],
};

const cardListSlice = createSlice({
  name: "cardlist",
  initialState,
  reducers: {
    // action creator , where the reducer change the state with the help of action creator
    addCard: (state, action) => {
      state.cardListItem.push(action.payload);
    },
  },
  extraReducers: {},
});

export const { addCard } = cardListSlice.actions;

export default cardListSlice.reducer;
