import { configureStore } from "@reduxjs/toolkit";
import categoriasReducer from "./reducers/categorias";

const store = configureStore({
  reducer: { categorias: categoriasReducer },
});

export default store;
