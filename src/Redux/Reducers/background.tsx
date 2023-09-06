import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Services/Axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBackgroundUrl = createAsyncThunk(
  "fetchBackgroundUrl",
  async () => {
    const response = await BASE_URL.get("/heroImages");
    return response.data;
  }
);

const slice = createSlice({
  name: "bgUrl",
  initialState: [],
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchBackgroundUrl.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default slice.reducer;
