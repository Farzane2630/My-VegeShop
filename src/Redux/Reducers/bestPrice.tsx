import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Services/Axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

type bestPrice = {
  bgUrl: string
  productTitle: string
  price: number
  discount: number
}

export const fetchProductData = createAsyncThunk<bestPrice, void>(
  "fetchProductsData",
  async () => {
    const response = await BASE_URL.get("/best-price");
    return response.data as bestPrice
  }
);

const initialState: bestPrice = {
  bgUrl: "",
  productTitle: "",
  price: 0,
  discount: 0
}

const slice = createSlice({
  name: "best price",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductData.fulfilled, (_state, action) => {
      return action.payload;
    });
  },
});

export default slice.reducer;
