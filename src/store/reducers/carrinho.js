import { createSlice } from "@reduxjs/toolkit";
const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState: [],
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
  },
});
export const { mudarCarrinho, mudarQuantidade } = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
