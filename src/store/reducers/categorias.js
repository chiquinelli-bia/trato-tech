import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoriasService from "@/services/categoriaService.js";

export const buscarCategorias = createAsyncThunk(
  "categoria/buscar",
  categoriasService.buscar,
);

export const carregarCategorias = createAction("categorias/carregarCategorias");

const categoriasSlice = createSlice({
  name: "categorias",
  initialState: [],
  reducers: {
    adicionarCategorias: (state, { payload }) => {
      state.length = 0;
      state.push(...payload);
    },
    adicionarTodasAsCategorias: (state, { payload }) => {
      return payload;
    },
  },
});

export const { adicionarCategorias, adicionarTodasAsCategorias } =
  categoriasSlice.actions;

export default categoriasSlice.reducer;
