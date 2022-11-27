import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseURI = 'http://localhost:8080';

export const apiSlice = createApi({
    baseQuery:fetchBaseQuery({baseUrl:baseURI}),
    endpoints:builder => ({
        //get categories
        getCategories:builder.query({
            //get : 'http://localhost:8080/api/categories'
        query:() => '/api/categories'
    }),
          //get labels
          getLabels:builder.query({
            //get : 'http://localhost:8080/api/labels'
        query:() => '/api/labels'
    }),
    //add new transaction 
    addTransaction:builder.mutation({
         //post : 'http://localhost:8080/api/transaction'
        query:(initialTransaction)=>({
            url:'/api/transaction',
            method:"POST",
            body:initialTransaction
        })
    }),
    
    //delete record
    deleteTransaction:builder.mutation({
         //delete : 'http://localhost:8080/api/transaction'
         query:recordId=>({
            url:'/api/transaction',
            method:"DELETE",
            body:recordId
        })
    })
})
})

export default apiSlice