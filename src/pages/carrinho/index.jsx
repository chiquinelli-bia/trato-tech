import Header from "@/components/header";
import Item from "@/components/item";
import styles from "./carrinho.module.scss";
import { useSelector } from "react-redux";

export default function Carrinho() {
  const { carrinho, total } = useSelector((state) => {
    const regexp = new RegExp(state.busca, "i");
    let total = 0;
    const carrinhoReduce = state.carrinho.reduce((itens, itemNoCarrinho) => {
      const item = state.itens.find((item) => item.id === itemNoCarrinho.id);
      total += item.preco * itemNoCarrinho.quantidade;
      if (item.titulo.match(regexp)) {
        itens.push({
          ...item,
          quantidade: itemNoCarrinho.quantidade,
        });
      }
      return itens;
    }, []);
    return { carrinho: carrinhoReduce, total };
  });
  return (
    <div>
      <Header
        titulo="Carrinho de compras"
        descricao="Confira produtos que você adicionou ao carrinho."
      />
      <div className={styles.carrinho}>
        {carrinho.map((item) => (
          <Item key={item.id} {...item} carrinho />
        ))}
        <div className={styles.total}>
          <strong>Resumo da Compra</strong>
        </div>
        <span>
          SubTotal: <strong>R$ {total.toFixed(2)}</strong>
        </span>
      </div>
    </div>
  );
}
