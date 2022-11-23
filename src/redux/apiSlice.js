import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ultimateApi = createApi({
  reducerPath: "ultimate",
  tagTypes: ["products", "users"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  endpoints: (builder) => ({

    // GET ALL PRODUCTS
    getProducts: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
      providesTags: ["products"],
    }),

    // GET SINGLE PRODUCT
    getProduct: builder.query({
      query: (_id) => ({
        url: `products/${_id}`,
        method: "GET",
      }),
    }),

    // DELETE A PRODUCT
    deleteProduct: builder.mutation({
      query: (_id) => ({
        url: `products/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),

    // CREATE A PRODUCT
    createProduct: builder.mutation({
      query: (post) => ({
        url: "products/post",
        method: "POST",
        body: post,
        headers: {
          "Content-type": "application/json",
        },
      }),
      invalidatesTags: ["products"],
    }),

    // GET ALL USERS
    getUsers: builder.query({
      query: () => ({
        url: "users",
        method: "GET",
      }),
      providesTags: ["users"],
    }),

    // REGISTER
    createUser: builder.mutation({
      query: (post) => ({
        url: "auth/register",
        method: "POST",
        body: post,
        headers: {
          "Content-type": "application/json",
        },
      }),
      invalidatesTags: ["users"],
    }),

    // LOGIN
    loginUser: builder.mutation({
      query: (post) => ({
        url: "auth/login",
        method: "POST",
        body: post,
        headers: {
          "Content-type": "application/json",
        },
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetUsersQuery,
  useCreateUserMutation,
  useLoginUserMutation,

} = ultimateApi;
