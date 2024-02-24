import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Services/Axios";

const initialState: { url: string } = { url: "" }

export const fetchAboutData = createAsyncThunk<{ url: string }, void>("fetchAboutData", async () => {
   const res = await BASE_URL.get("/about")

   console.log(res.data);
   
   return res.data as { url: string }
})


const slice = createSlice({
   name: "about",
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder.addCase(fetchAboutData.fulfilled, (_state, action) => action.payload)
   }
})

export default slice.reducer