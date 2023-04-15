import { createSlice } from "@reduxjs/toolkit";

// import { AppState } from "./store";
// import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    offersLoading: false,
    offersHome:[],
    offersError:[]
};

export const offersSlice = createSlice({
    name:"offers",
    initialState,
    reducers:{
        startFetchOffers(state,action){
            state.offersLoading = true;
            state.offersHome = [];
        },
        setOffers(state,action){
            state.offersLoading = false;
            state.offersHome = action.payload;
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

export const {startFetchOffers,setOffers} = offersSlice.actions;
export const selectOffersHomeState = (state) => state.offers.offersHome;

export default offersSlice.reducer;