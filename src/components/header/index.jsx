import styles from "./header.module.scss";

const Header = ({ className = "", titulo, descricao, imagem }) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles["header-texto"]}>
        <h1>{titulo}</h1>
        <h2>{descricao}</h2>
      </div>
      <div className={styles["header-imagem"]}>
        <img src={imagem} alt={titulo} />
      </div>
    </header>
  );
};

export default Header;
