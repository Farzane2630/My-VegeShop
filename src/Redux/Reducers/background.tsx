import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Services/Axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

type BackgroundUrlData = string

export const fetchBackgroundUrl = createAsyncThunk<BackgroundUrlData, void>(
  "fetchBackgroundUrl",
  async () => {
    const response = await BASE_URL.get("/heroImages");
    return response.data as BackgroundUrlData
  }
);

const slice = createSlice({
  name: "bgUrl",
  initialState: "",
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchBackgroundUrl.fulfilled, (_state, action) => {
      return action.payload;
    });
  },
});

export default slice.reducer;
