import styles from "./item.module.scss";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineCheck,
  AiFillEdit,
} from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { mudarFavorito, mudarItem } from "@/store/reducers/itens.js";
import { mudarCarrinho, mudarQuantidade } from "@/store/reducers/carrinho.js";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { useState } from "react";
import Input from "../input";

const iconeProps = { size: 24, color: "#041833" };
const quantidadeProps = { size: 32, color: "#1875E8" };

const Item = ({
  titulo,
  foto,
  preco,
  descricao,
  favorito,
  id,
  carrinho,
  quantidade,
}) => {
  const dispatch = useDispatch();
  const [modoDeEdicao, setModoDeEdicao] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState(titulo);

  const estaNoCarrinho = useSelector((state) =>
    state.carrinho.some((itemNoCarrinho) => itemNoCarrinho.id === id),
  );

  function resolverFavorito() {
    dispatch(mudarFavorito(id));
  }
  function resolverCarrinho() {
    dispatch(mudarCarrinho(id));
  }

  const ComponenteEdicao = (
    <>
      {modoDeEdicao ? (
        <AiOutlineCheck
          {...iconeProps}
          className={styles["item-acao"]}
          onClick={() => {
            setModoDeEdicao(false);
            dispatch(mudarItem({ id, item: { titulo: novoTitulo } }));
          }}
        />
      ) : (
        <AiFillEdit
          {...iconeProps}
          className={styles["item-acao"]}
          onClick={() => setModoDeEdicao(true)}
        />
      )}
    </>
  );
  return (
    <div
      className={classNames(styles.item, { [styles.itemNoCarrinho]: carrinho })}
    >
      <div className={styles["item-imagem"]}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles["item-descricao"]}>
        <div className={styles["item-titulo"]}>
          {modoDeEdicao ? (
            <Input
              value={novoTitulo}
              onChange={(evento) => setNovoTitulo(evento.target.value)}
            />
          ) : (
            <h2>{titulo}</h2>
          )}
          <p>{descricao}</p>
        </div>
        <div className={styles["item-info"]}>
          <div className={styles["item-preco"]}>R$ {preco.toFixed(2)}</div>
          <div className={styles["item-acoes"]}>
            {favorito ? (
              <AiFillHeart
                {...iconeProps}
                color="#ff0000"
                className={styles["item-acao"]}
                onClick={resolverFavorito}
              />
            ) : (
              <AiOutlineHeart
                {...iconeProps}
                className={styles["item-acao"]}
                onClick={resolverFavorito}
              />
            )}
            {carrinho ? (
              <div className={styles.quantidade}>
                Quantidade:
                <AiFillMinusCircle
                  {...quantidadeProps}
                  onClick={() => {
                    if (quantidade >= 1) {
                      dispatch(mudarQuantidade({ id, quantidade: -1 }));
                    }
                  }}
                />
                <span>{String(quantidade || 0).padStart(2, "0")}</span>
                <AiFillPlusCircle
                  {...quantidadeProps}
                  onClick={() => {
                    dispatch(mudarQuantidade({ id, quantidade: +1 }));
                  }}
                />
              </div>
            ) : (
              <>
                <FaCartPlus
                  {...iconeProps}
                  color={estaNoCarrinho ? "#1875E8" : iconeProps.color}
                  className={styles["item-acao"]}
                  onClick={resolverCarrinho}
                />
                {ComponenteEdicao}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
