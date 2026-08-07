import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoriasService from "@/services/categoriaService.js";
import { createStandaloneToast } from "@chakra-ui/toast";

const { toast } = createStandaloneToast();

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
    builder
      .addCase(buscarCategorias.fulfilled, (state, { payload }) => {
        toast({
          title: "Sucesso!",
          description: "Categorias carregadas com sucesso!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        state.length = 0;
        return payload;
      })
      .addCase(buscarCategorias.pending, (state, { payload }) => {
        toast({
          title: "Carregando",
          description: "Carregando categorias",
          status: "loading",
          duration: 2000,
          isClosable: true,
        });
      })
      .addCase(buscarCategorias.rejected, (state, { payload }) => {
        toast({
          title: "Erro",
          description: "Erro na busca de categorias",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      });
  },
});

export const { adicionarCategorias } = categoriasSlice.actions;

export default categoriasSlice.reducer;
