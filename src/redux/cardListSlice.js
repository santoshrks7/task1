import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardListItem: [
    {
      name: "Teams",
      listId: 0,
      tasks: [
        { id: 0, name: "react" },
        { id: 1, name: "html" },
      ],
    },
    {
      name: "Products",
      listId: 1,
      tasks: [
        { id: 0, name: "css" },
        { id: 1, name: "sass" },
      ],
    },
  ],
};

const cardListSlice = createSlice({
  name: "cardlist",
  initialState,
  reducers: {
    // action creator , where the reducer change the state with the help of action creator
    addList: (state, action) => {
      state.cardListItem = [
        ...state.cardListItem,
        {
          name: action.payload,
          listId: state.cardListItem.length,
          tasks: [
            { id: 0, name: "task3" },
            { id: 1, name: "task4" },
          ],
        },
      ];
    },
    removeList: (state, action) => {
      state.cardListItem = state.cardListItem.filter((item) => {
        return item.listId !== action.payload;
      });
    },

    addCard: (state, action) => {
      const listId = action.payload;
      state.cardListItem[listId].tasks = [
        ...state.cardListItem[listId].tasks,
        { id: state.cardListItem[listId].tasks.length, name: "text" },
      ];
    },

    removeCard: (state, action) => {
      const { listId, subItemId } = action.payload;
      state.cardListItem[listId].tasks = state.cardListItem[
        listId
      ].tasks.filter((item) => {
        return item.id !== subItemId;
      });
    },

    clearAllList: (state) => {
      state.cardListItem = [];
    },
  },
  extraReducers: {},
});

export const { addList, clearAllList, addCard, removeList, removeCard } =
  cardListSlice.actions;

export default cardListSlice.reducer;
