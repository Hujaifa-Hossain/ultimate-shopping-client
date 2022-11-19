import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ultimateApi = createApi({
  reducerPath: "ultimate",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "products",
        method: "Get",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = ultimateApi;
