import { configureStore, combineReducers } from "@reduxjs/toolkit";
import rsoReducer from "./rsoReducer";

const rootReducers = combineReducers({
  rso: rsoReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
