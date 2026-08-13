import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoriasService from "@/services/categoriaService.js";

export const buscarCategorias = createAsyncThunk(
  "categoria/buscar",
  categoriasService.buscar,
);

export const carregarCategorias = createAction("categorias/carregarCategorias");
export const carregarUmaCategoria = createAction(
  "categorias/carregarUmaCategoria",
);

const categoriasSlice = createSlice({
  name: "categorias",
  initialState: [],
  reducers: {
    adicionarTodasAsCategorias: (state, { payload }) => {
      return payload;
    },
    adicionarUmaCategoria: (state, { payload }) => {
      state.push(payload);
    },
  },
});

export const { adicionarTodasAsCategorias, adicionarUmaCategoria } =
  categoriasSlice.actions;

export default categoriasSlice.reducer;
