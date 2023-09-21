import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Services/Axios";

export const fetchServicesData = createAsyncThunk<[], void>("fetchServicesData", async ()=>{
   const response = await BASE_URL.get("/services")
   return response.data as []
})

const slice = createSlice({
   name: "services",
   initialState:[],
   reducers:{},
   extraReducers: builder =>{
      builder.addCase(fetchServicesData.fulfilled, (_state, action)=>{
         return action.payload
      })
   }
})

export default slice.reducer