import Header from "../../components/header";
import styles from "./home.module.scss";
import relogio from "../../assets/inicial.png";
import automotivoThumb from "assets/categorias/thumbnail/automotivo.png";
import eletronicosThumb from "assets/categorias/thumbnail/eletronicos.png";
import escritorioThumb from "assets/categorias/thumbnail/escritorio.png";
import jogosThumb from "assets/categorias/thumbnail/jogos.png";
import somThumb from "assets/categorias/thumbnail/som.png";
import automotivoHeader from "assets/categorias/header/automotivo.png";
import eletronicosHeader from "assets/categorias/header/eletronicos.png";
import escritorioHeader from "assets/categorias/header/escritorio.png";
import jogosHeader from "assets/categorias/header/jogos.png";
import somHeader from "assets/categorias/header/som.png";
import categorias from "./dataCategoria";

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
