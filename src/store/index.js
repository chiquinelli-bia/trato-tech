import { configureStore } from "@reduxjs/toolkit";
import categoriasReducer from "./reducers/categorias";
import itensReducer from "./reducers/itens";

const store = configureStore({
  reducer: { categorias: categoriasReducer, itens: itensReducer },
});

export default store;
