import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginReq: (state:any) => {
      state.isLoggedIn = true; 
    },
    logoutReq: (state:any) => {
      state.isLoggedIn = false; 
    },
  },
});

export const { loginReq,logoutReq } = authSlice.actions;

export default authSlice.reducer;
