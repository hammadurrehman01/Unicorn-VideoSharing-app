import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiService = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1/users" }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => "/all-users"
        })
    })
})

export const { useGetUsersQuery } = apiService;