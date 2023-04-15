import { createSlice } from "@reduxjs/toolkit";

// import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    enquiriesLoading: false,
    enquiriesHome:[],
    enquiries:[],
    enquiriesError:""
};

export const enquiriesSlice = createSlice({
    name:"enquiries",
    initialState,
    reducers:{
        startFetchBids(state,action){
            state.enquiriesLoading = true;
            state.enquiriesHome = [];
        },
        setEnquiriesHome(state,action){
            state.enquiriesLoading = false;
            state.enquiriesHome = action.payload;
        }
    },
    extraReducers:{
        [HYDRATE]:(state,action) => {
            console.log("HYDRATE ",action.payload);
            return {
                ...state,
                ...action.payload.enquiries
            }
        }
    }
});

export const {startFetchBids,setEnquiriesHome} = enquiriesSlice.actions;

export const selectEnquriesHomeState = (state) => state.enquiries.enquiriesHome;

export default enquiriesSlice.reducer;