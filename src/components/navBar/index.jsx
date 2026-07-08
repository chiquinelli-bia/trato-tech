import classNames from "classnames";
import styles from "./nav.module.scss";
import Logo from "@/assets/logo.svg?react";
import { RiShoppingCart2Line, RiShoppingCartFill } from "react-icons/ri";
import { Busca } from "../busca";

const iconeProps = {
  color: "white",
  size: 24,
};

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <div className={styles.links}>
        <div>
          <a
            href="/"
            className={classNames(styles.link, {
              [styles.selected]: window.location.pathname === "/",
            })}
          >
            Página Inicial
          </a>
        </div>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <a href="/carrinho">
          {window.location.pathname === "/carrinho" ? (
            <RiShoppingCartFill {...iconeProps} />
          ) : (
            <RiShoppingCart2Line {...iconeProps} />
          )}{" "}
        </a>
      </div>
    </nav>
  );
};
