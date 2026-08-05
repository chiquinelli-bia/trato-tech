import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/header";
import styles from "./categorias.module.scss";
import { useDispatch, useSelector } from "react-redux";
import Item from "@/components/item";
import Button from "@/components/button";
import { buscarItens } from "@/store/reducers/itens";
import { useEffect } from "react";

export default function Categoria() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { nomeCategoria } = useParams();
  const { categoria, itens } = useSelector((state) => {
    const regexp = new RegExp(state.busca, "i");
    return {
      categoria:
        state.categorias.find((categoria) => categoria.id === nomeCategoria) ||
        {},
      itens: state.itens.filter(
        (item) => item.categoria === nomeCategoria && item.titulo.match(regexp),
      ),
    };
  });

  useEffect(() => {
    dispatch(buscarItens());
  }, [dispatch]);

  return (
    <div>
      <Header
        titulo={categoria.nome}
        descricao={categoria.descricao}
        imagem={categoria.header}
      >
        <Button onClick={() => navigate(`/anuncie/${nomeCategoria}`)}>
          Quero anunciar
        </Button>
      </Header>
      <div className={styles.itens}>
        {itens?.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
