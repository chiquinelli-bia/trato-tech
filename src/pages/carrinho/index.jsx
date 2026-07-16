import Header from "@/components/header";
import Item from "@/components/item";
import styles from "./carrinho.module.scss";
import { useSelector } from "react-redux";

export default function Carrinho() {
  const carrinho = useSelector((state) => {
    const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
      const item = state.itens.find((item) => item.id === itemNoCarrinho.id);
      itens.push({
        ...item,
        quantidade: itemNoCarrinho.quantidade,
      });
      return itens;
    }, []);
    return carrinhoReduce;
  });
  return (
    <div>
      <Header
        titulo="Carrinho de compras"
        descricao="Confira produtos que você adicionou ao carrinho."
      />
      <div className={styles.carrinho}>
        {carrinho.map((item) => (
          <Item key={item.id} {...item} />
        ))}
        <div className={styles.total}>
          <strong>Resumo da Compra</strong>
        </div>
        <span>
          <strong>R$ {(0.0).toFixed(2)}</strong>
        </span>
      </div>
    </div>
  );
}
