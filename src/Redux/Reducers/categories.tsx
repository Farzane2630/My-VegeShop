import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Services/Axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategory = createAsyncThunk(
  "fetchCategory",
  async () => {
    const response = await BASE_URL.get("/categories");
    return response.data;
  }
);

const slice = createSlice({
  name: "allCategory",
  initialState: [],
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default slice.reducer;
