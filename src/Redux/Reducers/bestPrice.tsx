import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Services/Axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductData = createAsyncThunk(
  "fetchProductsData",
  async () => {
    const response = await BASE_URL.get("/best-price");
    return response.data;
  }
);

const slice = createSlice({
  name: "best price",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductData.fulfilled, (_state, action) => {
      return action.payload;
    });
  },
});

export default slice.reducer;
