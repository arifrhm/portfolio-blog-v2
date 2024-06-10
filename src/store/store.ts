// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '@/store/slices';

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
