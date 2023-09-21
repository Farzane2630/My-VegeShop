import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Services/Axios";

type contact = {
   address: string
   phone: string
   email: string
   website: string
}

export const fetchContactInfo = createAsyncThunk<contact, void>("fetchContactInfo", async () => {
   const res = await BASE_URL.get("/contact-info")
   return res.data as contact
})

const initialState: contact = {
   address: "string",
   phone: "string",
   email: "string",
   website: "string",
}
const slice = createSlice({
   name: "contact info",
   initialState,
   reducers: {},
   extraReducers: builder => {
      builder.addCase(fetchContactInfo.fulfilled, (_state, action) => {
         return action.payload
      })
   }
})

export default slice.reducer