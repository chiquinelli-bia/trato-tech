import { createSlice } from "@reduxjs/toolkit";

const categoriasSlice = createSlice({
  name: "categorias",
  initialState: [],
  reducers: {
    adicionarCategorias: (state, { payload }) => {
      state.length = 0;
      state.push(...payload);
    },
  },
});

export const { adicionarCategorias } = categoriasSlice.actions;

export default categoriasSlice.reducer;
