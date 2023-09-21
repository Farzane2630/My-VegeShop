import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Services/Axios";

export const fetchCountUpData = createAsyncThunk<[], void>("fetchCountUpData", async () => {
  const response = await BASE_URL.get("/countup");
  return response.data as []
});

const slice = createSlice({
  name: "count-up",
  initialState: [],
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCountUpData.fulfilled, (_state: any, action: { payload: any; }) => {
      return action.payload;
    });
  },
});

export default slice.reducer;
