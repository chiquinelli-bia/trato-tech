import styles from "./busca.module.scss";

export const Busca = () => {
  return (
    <div className={styles.busca}>
      <input
        type="search"
        placeholder="Oque você procura?"
        className={styles.input}
      />
    </div>
  );
};
