import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products?limit=0",
      transformResponse: (res) => res.products,
    }),
    getShoes: builder.query({
      query: () => "/products/category/mens-shoes",
      transformResponse: (res) => res.products,
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      transformResponse: (res) => res,
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetShoesQuery,
  useGetProductByIdQuery,
} = api;
