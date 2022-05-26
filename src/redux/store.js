import { configureStore } from "@reduxjs/toolkit";
import cateringOrderReducer from "./cateringOrderSlice";
import { createLogger } from "redux-logger";

const reduxLogger = createLogger({
  collapsed: true,
});

export const store = configureStore({
  reducer: {
    cateringOrder: cateringOrderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLogger),
});
