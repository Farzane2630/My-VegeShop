import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Services/Axios";

export const fetchContactInfo = createAsyncThunk("fetchContactInfo", async()=>{
   const res = await BASE_URL.get("/contact-info")
   return res.data
})
const slice = createSlice({
   name: "contact info",
   initialState: [],
   reducers:{},
   extraReducers: builder => {
      builder.addCase(fetchContactInfo.fulfilled, (state, action) =>{
         return action.payload
      })
   }
})

export default slice.reducer