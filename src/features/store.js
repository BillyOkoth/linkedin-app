import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

export default configureStore({
  reducer: {
    auth: authReducer
  
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});