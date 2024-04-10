import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  email: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state) => state.user.username;

export default userSlice.reducer;
