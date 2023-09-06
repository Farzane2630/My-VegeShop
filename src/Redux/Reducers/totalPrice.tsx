import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
   name: "total price",
   initialState: '',
   reducers: {},
   extraReducers: builder =>{
      builder.addCase("fetchTotalPrice", (state, action)=> {
         const totalPrice = state.products.find(products=> products.id === action.id).totalPrice
      })
   }
})