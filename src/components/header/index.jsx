import styles from "./header.module.scss";
import TituloComImagem from "./tituloComImagem";
import TituloSemImagem from "./tituloSemImagem";

const Header = ({ className = "", titulo, descricao, imagem }) => {
  return (
    <header className={`${styles.header} ${className}`}>
      {titulo && !imagem && (
        <TituloSemImagem titulo={titulo} descricao={descricao} />
      )}
      {titulo && imagem && (
        <TituloComImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        />
      )}
    </header>
  );
};

export default Header;
