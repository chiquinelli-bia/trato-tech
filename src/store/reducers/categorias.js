import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoriasService from "@/services/categoriaService.js";

export const buscarCategorias = createAsyncThunk(
  "categoria/buscar",
  categoriasService.buscar,
);

const categoriasSlice = createSlice({
  name: "categorias",
  initialState: [],
  reducers: {
    adicionarCategorias: (state, { payload }) => {
      state.length = 0;
      state.push(...payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buscarCategorias.fulfilled, (state, { payload }) => {
      state.length = 0;
      state.push(...payload);
    });
  },
});

export const { adicionarCategorias } = categoriasSlice.actions;

export default categoriasSlice.reducer;
