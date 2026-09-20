import { createApi } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import type { Product } from "../../types";
import { fetchProductsFromServer } from "../../api/productsApi.mock";
const mockBaseQuery: BaseQueryFn<void, Product[], { message: string }> = async () => {
  try {
    const data = await fetchProductsFromServer();
    return { data };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Lỗi không xác định";
    return { error: { message } };
  }
};

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: mockBaseQuery,
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => undefined,
      providesTags: ["Product"],
    }),
  }),
});
export const { useGetProductsQuery } = productsApi;
