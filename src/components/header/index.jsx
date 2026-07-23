import styles from "./header.module.scss";
import TituloComImagem from "./tituloComImagem";
import TituloSemImagem from "./tituloSemImagem";

const Header = ({ className = "", titulo, descricao, imagem, children }) => {
  return (
    <header className={`${styles.header} ${className}`}>
      {titulo && !imagem && (
        <TituloSemImagem titulo={titulo} descricao={descricao}>
          {children}
        </TituloSemImagem>
      )}
      {titulo && imagem && (
        <TituloComImagem
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          className={className}
        >
          {children}
        </TituloComImagem>
      )}
    </header>
  );
};

export default Header;
