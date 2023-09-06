import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Services/Axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await BASE_URL.get("/products");
  return response.data;
});

export const fetchCategories = createAsyncThunk("fetchCategories", async () => {
  const response = await BASE_URL.get("/categories");
  return response.data;
});

export const slice = createSlice({
  name: "products",
  initialState: {
    products: [],
    categories: [],
    selectedCategory: "",
  },
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const { selectCategory } = slice.actions;

export default slice.reducer;
