import { createSlice } from "@reduxjs/toolkit";
import { createStandaloneToast } from "@chakra-ui/toast";

const { toast } = createStandaloneToast();
const initialState = [];
const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    mudarCarrinho: (state, { payload }) => {
      const temItem = state.some((item) => item.id === payload);
      if (!temItem) return [...state, { id: payload, quantidade: 1 }];
      return state.filter((item) => item.id !== payload);
    },
    mudarQuantidade: (state, { payload }) => {
      const item = state.find(
        (itemNoCarrinho) => itemNoCarrinho.id === payload.id,
      );

      if (item) {
        item.quantidade += payload.quantidade;
      }
    },
    resetarCarrinho: (state) => {
      toast({
        title: "Sucesso!",
        description: "Compra efetuada com Sucesso!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      return initialState;
    },
    removerItemCarrinho: (state, { payload }) => {
      return state.filter((item) => item.id !== payload);
    },
  },
});
export const {
  mudarCarrinho,
  mudarQuantidade,
  resetarCarrinho,
  removerItemCarrinho,
} = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
