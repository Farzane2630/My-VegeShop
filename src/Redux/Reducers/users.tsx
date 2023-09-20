import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Services/Axios";

export const fetchUsersInfo = createAsyncThunk("fetchUsersInfo", async ()=>{
  const response = await BASE_URL.get("/usersInfo")
  return response.data
})

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers:{},
  extraReducers: builder =>{
    // @ts-ignore
    builder.addCase(fetchUsersInfo.fulfilled, (_state, action)=>{
      return action.payload
    })
  }
})

export default slice.reducer
