import {  createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

interface UserLoginDetails{
    email:String,
    password:String
}

interface ApiResponse {
    status: string;
}
  
export const userApis = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (build) => ({
      userLogin: build.mutation<ApiResponse,UserLoginDetails>({
        query: (payload) => ({
          url: `/login`, 
          body: payload,
          method: 'POST'
        })
      }),
      userSignUp: build.mutation<ApiResponse,UserLoginDetails>({
        query: (payload) => ({
          url: `/signup`, 
          body: payload,
          method: 'POST'
        })
      }),
    })
});
  
export const {useUserLoginMutation,useUserSignUpMutation} = userApis;