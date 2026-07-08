import { Outlet } from "react-router-dom";
import Footer from "../footer";
import { NavBar } from "../navBar";
import styles from "./paginaPadrao.module.scss";

const PaginaPadrao = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles["container-outlet"]}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PaginaPadrao;
