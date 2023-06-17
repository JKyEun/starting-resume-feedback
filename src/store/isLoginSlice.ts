import { createSlice } from '@reduxjs/toolkit';

type IsLoginState = {
  value: boolean;
};

const initialState: IsLoginState = {
  value: false,
};

const isLoginSlice = createSlice({
  name: 'isLogin',
  initialState,
  reducers: {
    login: (state) => {
      state.value = true;
    },
    logout: (state) => {
      state.value = false;
    },
  },
});

export default isLoginSlice;
export const { login, logout } = isLoginSlice.actions;
