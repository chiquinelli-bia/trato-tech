import Header from "../../components/header";
import styles from "./home.module.scss";
import relogio from "../../assets/inicial.png";

export default function Home() {
  return (
    <div>
      <Header
        titulo="Classificados Tech"
        descricao="Compre diversos tipos de produtos no melhor site do Brasil!"
        imagem={relogio}
        className={styles.header}
      />
    </div>
  );
}
