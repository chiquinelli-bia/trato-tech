import { useParams } from "react-router-dom";
import Header from "../../components/header";
import styles from "./categorias.module.scss";
import { useSelector } from "react-redux";

export default function Categoria() {
  const { nomeCategoria } = useParams();
  const categoria = useSelector((state) =>
    state.categorias.find((categoria) => categoria.id === nomeCategoria),
  );
  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.header}
      />
    </div>
  );
}
