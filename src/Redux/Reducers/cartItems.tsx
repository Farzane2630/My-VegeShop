import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../Services/Axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { productType } from "../../Types/types";

export const fetchCartItems = createAsyncThunk("fetchCartItems", async () => {
  const res = await BASE_URL.get("/cartItems");
  return res.data;
});

export const addToCart = createAsyncThunk(
  "cartItems",
  async (props :productType) => {
    const newObj = {
      id: props.id,
      title: props.title,
      price: props.price,
      quantity: props.quantity,
      rate: props.rate,
      sold: props.id,
      cover: props.id,
      inStock: props.id,
      category: props.id,
      discount: props.id,
    };
    const res = await BASE_URL.post(`/cartItems`, newObj);

    return res.data;
  }
);
export const updateTotalPrice = createAsyncThunk(
  "updateTotalPrice",
  async (
    productID
  ) => {
    const newObj = {
      id: productID,
    };
    const res = await BASE_URL.put(`/cartItems/${productID}`, newObj);

    return res.data;
  }
);

export const removeFromCart = createAsyncThunk("removeFromCart", async (id) => {
  const res = await BASE_URL.delete(`/cartItems/${id}`);

  return res.data;
});

const slice = createSlice({
  name: "cart items",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    // @ts-ignore
    builder.addCase(addToCart.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
    builder.addCase(updateTotalPrice.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      const newState = state.filter(
        (product: {
          id: string,
          title: string,
          price: number,
          rate: number,
          sold: number,
          cover: string,
          inStock: number,
          category: string,
          discount: number
        }) => product.id !== action.payload.id
      );
      return newState;
    });
  },
});

export default slice.reducer;
