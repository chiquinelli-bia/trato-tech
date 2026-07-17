import { useParams } from "react-router-dom";
import Header from "@/components/header";
import styles from "./categorias.module.scss";
import { useSelector } from "react-redux";
import Item from "@/components/item";

export default function Categoria() {
  const { nomeCategoria } = useParams();
  const { categoria, itens } = useSelector((state) => {
    const regexp = new RegExp(state.busca, "i");
    return {
      categoria: state.categorias.find(
        (categoria) => categoria.id === nomeCategoria,
      ),
      itens: state.itens.filter(
        (item) => item.categoria === nomeCategoria && item.titulo.match(regexp),
      ),
    };
  });
  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.header}
      />
      <div className={styles.itens}>
        {itens?.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
