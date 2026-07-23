import styles from "./anuncie.module.scss";
import Header from "@/components/header";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/components/button";
import { useForm } from "react-hook-form";
import { cadastrarItem } from "@/store/reducers/itens";
import { useParams } from "react-router-dom";

const Anuncie = () => {
  const categorias = useSelector((state) => state.categorias);
  const { nomeCategoria = "" } = useParams();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      categoria: nomeCategoria,
    },
  });
  const dispatch = useDispatch();
  function cadastrar(data) {
    dispatch(cadastrarItem(data));
  }
  return (
    <div className={styles.container}>
      <Header
        titulo="Anuncie aqui!"
        descricao="Anuncie seu produto no melhor site do Brasil!"
      />
      <form className={styles.formulario} onSubmit={handleSubmit(cadastrar)}>
        <input
          type="text"
          {...register("titulo", { required: true })}
          placeholder="Nome do produto"
          alt="Nome do produto"
        />
        <input
          type="text"
          {...register("descricao", { required: true })}
          placeholder="Descrição do produto"
          alt="Descrição do produto"
        />
        <input
          type="text"
          {...register("foto", { required: true })}
          placeholder="URL da imagem do produto"
          alt="URL da imagem do produto"
        />
        <select
          {...register("categoria", { required: true })}
          disabled={nomeCategoria}
        >
          <option value="" disabled>
            Selecione a categoria
          </option>
          {categorias.map(({ id, nome }) => (
            <option value={id} key={id}>
              {nome}
            </option>
          ))}
        </select>
        <input
          {...register("preco", { required: true, valueAsNumber: true })}
          type="number"
          placeholder="Preço do produto"
        />
        <Button type="submit">Cadastrar Produto</Button>
      </form>
    </div>
  );
};

export default Anuncie;
