import { configureStore } from '@reduxjs/toolkit';
import isLoginSlice from './isLoginSlice';

const store = configureStore({
  reducer: {
    isLogin: isLoginSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
