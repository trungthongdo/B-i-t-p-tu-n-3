import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Product, RequestStatus } from "../../types";
import { fetchProductsFromServer } from "../../api/productsApi.mock";

interface ProductsState {
  items: Product[];
  status: RequestStatus;
  error: string | null;
}

const initialState: ProductsState = {
  items: [],
  status: "idle",
  error: null,
};
export const fetchProducts = createAsyncThunk<Product[], void>(
  "products/fetchAll",
  async () => {
    const products = await fetchProductsFromServer();
    return products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Không tải được danh sách sản phẩm";
      });
  },
});

export default productsSlice.reducer;
