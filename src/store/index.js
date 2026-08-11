import { configureStore } from "@reduxjs/toolkit";
import categoriasReducer from "./reducers/categorias";
import itensReducer from "./reducers/itens";
import carrinhoReducer from "./reducers/carrinho";
import buscaReducer from "./reducers/busca";
import { listener } from "./middlewares/categorias.js";

const store = configureStore({
  reducer: {
    categorias: categoriasReducer,
    itens: itensReducer,
    carrinho: carrinhoReducer,
    busca: buscaReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(listener.middleware),
});

export default store;
