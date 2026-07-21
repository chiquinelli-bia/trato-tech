import React from "react";
import Header from "@/components/header";
import { useSelector } from "react-redux";

const Anuncie = () => {
  const categorias = useSelector((state) =>
    state.map(({ nome, id }) => ({ nome, id })),
  );
  return (
    <div className={styles.container}>
      <Header
        titulo="Anuncie aqui!"
        descricao="Anuncie seu produto no melhor site do Brasil!"
      />
      <form className={styles.formulario}>
        <input
          type="text"
          placeholder="Nome do produto"
          alt="Nome do produto"
        />
        <input
          type="text"
          placeholder="Descrição do produto"
          alt="Descrição do produto"
        />
        <input
          type="text"
          placeholder="URL da imagem do produto"
          alt="URL da imagem do produto"
        />
        <select>
          <option value="" disabled>
            Selecione a categoria
          </option>
          {categorias.map((categoria) => (
            <option value={categoria.id} key={categoria.id}>
              {categoria.nome}
            </option>
          ))}
        </select>
        <input type="number" placeholder="Preço do produto" />
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
};

export default Anuncie;
