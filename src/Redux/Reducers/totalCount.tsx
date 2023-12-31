import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
   name: "product count",
   initialState: "",
   reducers: {
      productCount : (_state, action)=> action.payload
   }
})

export const {productCount} = slice.actions

export default slice.reducer