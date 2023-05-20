import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./TodoSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export default store;
