import { configureStore } from '@reduxjs/toolkit';
import gameyReducer from './game';
import popupReducer from './popup';

export const store = configureStore({
  reducer: {
    game: gameyReducer,
    popup: popupReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
