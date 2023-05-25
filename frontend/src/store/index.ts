import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
// importing counterSlice.reducer as cartReducer here

// creating the app-wide store and pointing to your reducers for each state slice you want to manage
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
