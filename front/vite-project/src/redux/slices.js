import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userId = action.payload;
    },
    userLogout: (state) => {
      state.userId = 0;
    },
  },
});

export const { addUser, userLogout } = userSlice.actions;
export default userSlice.reducer;
