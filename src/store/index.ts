import { configureStore} from "@reduxjs/toolkit";
import showsReducer from './slices/showSlice';
export const store = configureStore({
  reducer: {
    shows : showsReducer
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch