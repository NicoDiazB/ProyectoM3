import { configureStore } from "@reduxjs/toolkit";
import reduceAppoint from "./sliceAppoint";
import rootReduce from "./slices";

const store = configureStore({
  reducer: {
    appoint: reduceAppoint,
    user: rootReduce,
  },
  devTools: true,
});

export default store;
