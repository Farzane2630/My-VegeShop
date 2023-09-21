import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Services/Axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { productType } from "../../Types/types";

export const fetchProducts = createAsyncThunk<productType[], void>("fetchProducts",
  async () => {
    const response = await BASE_URL.get("/products");
    return response.data as productType[];
  });

type categories = {
  title: string
  id: string
}[]

export const fetchCategories = createAsyncThunk<categories, void>("fetchCategories", async () => {
  const response = await BASE_URL.get("/categories");
  return response.data as categories
});

type initialState = {
  products: productType[]
  categories: categories
  selectedCategory: string
}

const initialState: initialState = {
  products: [],
  categories: [],
  selectedCategory: ""
}

export const slice = createSlice({
  name: "products",
  initialState,
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
