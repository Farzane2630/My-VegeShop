import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Services/Axios";

export const fetchUsersInfo = createAsyncThunk<[], void>("fetchUsersInfo", async () => {
  const response = await BASE_URL.get("/usersInfo")
  return response.data as []
})

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsersInfo.fulfilled, (_state, action) => {
      return action.payload
    })
  }
})

export default slice.reducer
