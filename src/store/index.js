import { configureStore } from "@reduxjs/toolkit";
import categoriasReducer from "./reducers/categorias";
import itensReducer from "./reducers/itens";
import carrinhoReducer from "./reducers/carrinho";

const store = configureStore({
  reducer: {
    categorias: categoriasReducer,
    itens: itensReducer,
    carrinho: carrinhoReducer,
  },
});

export default store;
