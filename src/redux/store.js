import { configureStore } from "@reduxjs/toolkit";
import cateringOrderReducer from "./cateringOrderSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    cateringOrder: cateringOrderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
