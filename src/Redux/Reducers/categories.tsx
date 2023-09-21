import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Services/Axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

type categories = { cover: string, title: string }[]

export const fetchCategory = createAsyncThunk<categories, void>(
  "fetchCategory",
  async () => {
    const response = await BASE_URL.get("/categories");
    return response.data as categories;
  }
);

const initialState: categories = []

const slice = createSlice({
  name: "allCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (_state, action) => {
      return action.payload;
    });
  },
});

export default slice.reducer;
