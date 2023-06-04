import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import itemReducer from "./slices/itemSlice";

export const store = configureStore({
  reducer: { itemState: itemReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
