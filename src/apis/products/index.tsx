import {  createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';


interface Products
{
  id: Number,
  title: String,  
  location:String,
  targetdate:String,
  description: String,
  availabledate:String
}
  
export const productApis = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (build) => ({
      products: build.query<Products,void>({
        query: (payload) => ({
          url: `/products`
        })
      }),
    })
});
  
export const {useProductsQuery} = productApis;