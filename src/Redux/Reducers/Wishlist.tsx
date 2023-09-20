import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    // @ts-ignore
    addTolist: (state, action) => [...state, action.payload],
    removeFromList: (_state, action) => action.payload,
  },
});

export const { addTolist, removeFromList } = slice.actions
export default slice.reducer
