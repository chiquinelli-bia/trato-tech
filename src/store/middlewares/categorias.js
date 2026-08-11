import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  adicionarTodasAsCategorias,
  carregarCategorias,
} from "../reducers/categorias";
import categoriasService from "@/services/categoriaService";
import criarTarefa from "./utils/criarTarefa";

export const listener = createListenerMiddleware();

listener.startListening({
  actionCreator: carregarCategorias,
  effect: async (action, { dispatch, fork, unsubscribe }) => {
    await criarTarefa({
      fork,
      dispatch,
      busca: categoriasService.buscar,
      action: adicionarTodasAsCategorias,
      textoCarregando: "Carregando categorias",
      textoSucesso: "Categorias carregadas com sucesso!",
      textoErro: "Erro na busca de categorias",
    });
    unsubscribe();
  },
});
