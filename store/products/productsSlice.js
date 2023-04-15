import { createSlice } from "@reduxjs/toolkit";

// import { AppState } from "./store";
// import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    productsLoading: false,
    products:[],
    productsError:[]
};

export const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        startFetchProducts(state,action){
            state.productsLoading = true;
            state.products = [];
        },
        setProducts(state,action){
            state.productsLoading = false;
            state.products = action.payload;
        }
    },
    // extraReducers:{
    //     [HYDRATE]:(state,action) => {
    //         console.log("HYDRATE ",action.payload);
    //         return {
    //             ...state,
    //             ...action.payload.enquiries
    //         }
    //     }
    // }
});

export const {startFetchProducts,setProducts} = productsSlice.actions;
export const selectProductsHomeState = (state) => state.products.products;

export default productsSlice.reducer;