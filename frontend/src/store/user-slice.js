import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    un: "",
    walletConnected: false,
    publicWalletAddress: "",
    network: "",
  },

  reducers: {
    connect(state, action) {
        
    },
    disconnect(state, action) {},
    add(state, action) {},
    remove(state, action) {},

    edit(state, action) {},
  },
});

export const userActions = userSlice.actions;

export default userActions.reducer;
