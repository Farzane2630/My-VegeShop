import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Services/Axios";

export const fetchAboutData = createAsyncThunk("fetchAboutData", async()=>{
   const res = await BASE_URL.get("/about")
   return res.data
})

const slice = createSlice({
   name: "about",
   initialState: {},
   reducers: {},
   extraReducers: builder =>{
      builder.addCase(fetchAboutData.fulfilled, (state, action)=> action.payload)
   }
})

export default slice.reducer