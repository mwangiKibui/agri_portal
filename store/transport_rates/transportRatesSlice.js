import { createSlice } from "@reduxjs/toolkit";

// import { AppState } from "./store";
// import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    transportRatesLoading: false,
    transportRates:[],
    transportRatesError:[]
};

export const transportRatesSlice = createSlice({
    name:"transportRates",
    initialState,
    reducers:{
        startFetchTransportRates(state,action){
            state.transportRatesLoading = true;
            state.transportRates = [];
        },
        setTransportRates(state,action){
            state.transportRatesLoading = false;
            state.transportRates = action.payload;
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

export const {startFetchTransportRates,setTransportRates} = transportRatesSlice.actions;
export const selectTransportRatesHomeState = (state) => state.transportRates.transportRates;

export default transportRatesSlice.reducer;