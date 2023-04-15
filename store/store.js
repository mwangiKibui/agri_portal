import {
    configureStore,
    combineReducers,
    getDefaultMiddleware
    // ThunkAction,
    // Action,
  } from "@reduxjs/toolkit";
  import { enquiriesSlice } from "./enquiries/enquiriesSlice";
  import { productsSlice } from "./products/productsSlice";
  import { offersSlice } from "./offers/offersSlice";
  import { transportRatesSlice } from "./transport_rates/transportRatesSlice";
  import { createWrapper } from "next-redux-wrapper";
  import { persistReducer, persistStore ,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from "redux-persist";
  import storage from "redux-persist/lib/storage";
  
  const rootReducer = combineReducers({
    [enquiriesSlice.name]: enquiriesSlice.reducer,
    [productsSlice.name]: productsSlice.reducer,
    [offersSlice.name]: offersSlice.reducer,
    [transportRatesSlice.name]: transportRatesSlice.reducer,
  });
  
  const makeConfiguredStore = () =>
    configureStore({
      reducer: rootReducer,
      devTools: true,
    });
  
  export const makeStore = () => {
    const isServer = typeof window === "undefined";
  
    if (isServer) {
      return makeConfiguredStore();
    } else {
      // we need it only on client side
  
      const persistConfig = {
        key: "nextjs",
        whitelist: ["enquiries","products"], // make sure it does not clash with server keys
        storage,
      };
  
      const persistedReducer = persistReducer(persistConfig, rootReducer);
      let store = configureStore({
        reducer: persistedReducer,
        devTools: process.env.NODE_ENV !== "production",
        middleware: getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
          }),
        
      });
  
      store.__persistor = persistStore(store); // Nasty hack
  
      return store;
    }
  };
  
  
  export const wrapper = createWrapper(makeStore);
  