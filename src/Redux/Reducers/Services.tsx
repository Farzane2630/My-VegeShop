import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Services/Axios";

export const fetchServicesData = createAsyncThunk("fetchServicesData", async ()=>{
   const response = await BASE_URL.get("/services")
   return response.data
})

const slice = createSlice({
   name: "services",
   initialState:[],
   reducers:{},
   extraReducers: builder =>{
      builder.addCase(fetchServicesData.fulfilled, (state, action)=>{
         return action.payload
      })
   }
})

export default slice.reducer