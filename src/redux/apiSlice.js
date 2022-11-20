import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { useParams } from "react-router-dom";

// const {productId} = useParams()

export const ultimateApi = createApi({
  reducerPath: "ultimate",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
    }),
    getProduct: builder.query({
      query: (_id) => ({
        url: `products/${_id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = ultimateApi;
