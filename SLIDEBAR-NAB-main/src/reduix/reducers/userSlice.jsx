import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
//   name: "name",
  email: "@gmail.com",
  password: "password",
  token: "token",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action) => {
    //   state.name = action.payload.name;
      
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.token = action.payload.token;
    },
    setLogout: () => initialState,
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
