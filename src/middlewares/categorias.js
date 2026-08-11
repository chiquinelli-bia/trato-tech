import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  adicionarTodasAsCategorias,
  carregarCategorias,
} from "../store/reducers/categorias";
import categoriasService from "@/services/categoriaService";

export const listener = createListenerMiddleware();

listener.startListening({
  actionCreator: carregarCategorias,
  effect: async (action, { dispatch, fork }) => {
    const tarefa = fork(async (api) => {
      return await categoriasService.buscar();
    });
    const res = await tarefa.result;
    if (res.status === "ok") {
      dispatch(adicionarTodasAsCategorias(res.value));
    }
  },
});
