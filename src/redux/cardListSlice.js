import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardListItem: [
    {
      name: "Teams",
      listId: 0,
      tasks: [
        { id: 0, title: "react", desc: "desc" },
        { id: 1, title: "html", desc: "desc" },
      ],
    },
    // {
    //   name: "Products",
    //   listId: 1,
    //   tasks: [
    //     { id: 0, title: "css", desc: "desc" },
    //     { id: 1, title: "sass", desc: "desc" },
    //   ],
    // },
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
          tasks: [],
        },
      ];
    },

    removeList: (state, action) => {
      state.cardListItem = state.cardListItem.filter((item) => {
        return item.listId !== action.payload;
      });
    },

    addCard: (state, action) => {
      const { listId, title, desc } = action.payload;
      state.cardListItem[listId].tasks = [
        ...state.cardListItem[listId].tasks,
        {
          id: state.cardListItem[listId].tasks.length,
          title: title,
          desc: desc,
        },
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
