import { configureStore } from "@reduxjs/toolkit";
import categoriasReducer from "./reducers/categorias";
import itensReducer from "./reducers/itens";
import carrinhoReducer from "./reducers/carrinho";
import buscaReducer from "./reducers/busca";
import { listenerCategorias } from "./middlewares/categorias.js";

const store = configureStore({
  reducer: {
    categorias: categoriasReducer,
    itens: itensReducer,
    carrinho: carrinhoReducer,
    busca: buscaReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listenerCategorias.middleware),
});

export default store;
