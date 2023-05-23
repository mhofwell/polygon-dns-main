import { configureStore } from "@reduxjs/toolkit";
import userAuthActions from "./user-slice";

// remember to import your state reducers here for state slices
// userAuth.actions = userAuthReducer

const store = configureStore({
  reducer: {
    user: userAuthActions,
  },
});

export default store;
