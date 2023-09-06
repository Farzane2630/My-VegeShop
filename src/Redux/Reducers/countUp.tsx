import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Services/Axios";

export const fetchCountUpData = createAsyncThunk("fetchCountUpData", async () => {
  const response = await BASE_URL.get("/countup");
  return response.data;
});

const slice = createSlice({
  name: "count-up",
  initialState: [],
  reducers: {},
  extraReducer: builder => {
    builder.addCase(fetchCountUpData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default slice.reducer;
