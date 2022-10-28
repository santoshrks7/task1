import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardListItem: [
    {
      name: "Teams",
      listId: 1,
      tasks: [
        { id: 1, name: "task1" },
        { id: 2, name: "task2" },
      ],
    },
    {
      name: "Products",
      listId: 2,
      tasks: [
        { id: 1, name: "task3" },
        { id: 2, name: "task4" },
      ],
    },
  ],
};

const cardListSlice = createSlice({
  name: "cardlist",
  initialState,
  reducers: {
    // action creator , where the reducer change the state with the help of action creator
    addCard: (state, action) => {
      // state.cardListItem.push(action.payload);
      state.cardListItem = [
        ...state.cardListItem,
        {
          name: action.payload,
          listId: 3,
          tasks: [
            { id: 1, name: "task3" },
            { id: 2, name: "task4" },
          ],
        },
      ];
    },
    removeList: (state, action) => {
      state.cardListItem = state.cardListItem.filter((item) => {
        return item.listId !== action.payload;
      });
    },
    clearAllCard: (state) => {
      state.cardListItem = [];
    },
  },
  extraReducers: {},
});

export const { addCard, clearAllCard, removeList } = cardListSlice.actions;

export default cardListSlice.reducer;
