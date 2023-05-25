import { createSlice } from "@reduxjs/toolkit";

let userState: {
  walletConnected: Boolean;
};

userState = {
  walletConnected: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: userState,
  reducers: {
    toggle(state) {
      state.walletConnected = !state.walletConnected;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
