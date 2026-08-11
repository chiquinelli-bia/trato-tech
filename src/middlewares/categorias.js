import { createListenerMiddleware } from "@reduxjs/toolkit";
import {
  adicionarTodasAsCategorias,
  carregarCategorias,
} from "../store/reducers/categorias";
import categoriasService from "@/services/categoriaService";
import { createStandaloneToast } from "@chakra-ui/toast";

export const listener = createListenerMiddleware();
const { toast } = createStandaloneToast();

listener.startListening({
  actionCreator: carregarCategorias,
  effect: async (action, { dispatch, fork, unsubscribe }) => {
    toast({
      title: "Carregando",
      description: "Carregando categorias",
      status: "loading",
      duration: 2000,
      isClosable: true,
    });
    const tarefa = fork(async (api) => {
      return await categoriasService.buscar();
    });
    const res = await tarefa.result;
    if (res.status === "ok") {
      toast({
        title: "Sucesso!",
        description: "Categorias carregadas com sucesso!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      dispatch(adicionarTodasAsCategorias(res.value));
      unsubscribe();
    }
    if (res.status === "rejected") {
      toast({
        title: "Erro",
        description: "Erro na busca de categorias",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  },
});
