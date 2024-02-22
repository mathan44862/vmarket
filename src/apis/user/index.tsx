import {  createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface UserLoginDetails{
    email:String,
    password:String
}
interface ApiResponse {
    status: string;
}
  
export const userLogin = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    endpoints: (build) => ({
      userLogin: build.mutation<ApiResponse,UserLoginDetails>({
        query: (payload) => ({
          url: `/login`, 
          body: payload,
          method: 'POST'
        })
      }),
    })
});
  
export const {useUserLoginMutation} = userLogin;