import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import itensService from "../../services/itensService";

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
      const index = state.findIndex((item) => item.id === payload.id);
      state.splice(index, 1);
    },
    adicionarItens: (state, { payload }) => {
      state.push(...payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buscarItens.fulfilled, (state, { payload }) => {
      state.length = 0;
      state.push(...payload);
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
