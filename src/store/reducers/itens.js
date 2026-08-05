import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import itensService from "../../services/itensService";
import { createStandaloneToast } from "@chakra-ui/toast";

const { toast } = createStandaloneToast();

export const buscarItens = createAsyncThunk(
  "itens/buscar",
  itensService.buscar,
);

const itensSlice = createSlice({
  name: "itens",
  initialState: [],
  reducers: {
    mudarFavorito: (state, { payload }) => {
      state.map((item) => {
        if (item.id === payload) item.favorito = !item.favorito;
        return item;
      });
    },
    cadastrarItem: (state, { payload }) => {
      state.push({ ...payload, id: uuid(), favorito: false });
    },
    mudarItem: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload.id);
      Object.assign(state[index], payload.item);
    },
    deletarItem: (state, { payload }) => {
      const index = state.findIndex((item) => item.id === payload);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    adicionarItens: (state, { payload }) => {
      state.push(...payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(buscarItens.fulfilled, (state, { payload }) => {
        toast({
          title: "Sucesso!",
          description: "Itens carregados com sucesso!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        state.length = 0;
        return payload;
      })
      .addCase(buscarItens.pending, (state, { payload }) => {
        toast({
          title: "Carregando",
          description: "Carregando Itens",
          status: "loading",
          duration: 2000,
          isClosable: true,
        });
      })
      .addCase(buscarItens.rejected, (state, { payload }) => {
        toast({
          title: "Erro",
          description: "Erro na busca de Itens",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  },
});

export const {
  mudarFavorito,
  cadastrarItem,
  mudarItem,
  deletarItem,
  adicionarItens,
} = itensSlice.actions;

export default itensSlice.reducer;
