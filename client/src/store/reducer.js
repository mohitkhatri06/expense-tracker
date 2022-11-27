import {createSlice } from '@reduxjs/toolkit';

const intialState = {
    categories:[],
    transaction:[]
}

export const expenseSlice = createSlice({
    name:'expense',
    reducers:{
        getTransaction:(state) => {

        }
    }
})

export const {getTransaction} = expenseSlice.actions;
export default expenseSlice.reducer;