import classNames from "classnames";
import styles from "./nav.module.scss";
import Logo from "@/assets/logo.svg?react";
import { RiShoppingCart2Line, RiShoppingCartFill } from "react-icons/ri";
import { Busca } from "../busca";
import { Link, useLocation, useNavigate } from "react-router-dom";

const iconeProps = {
  color: "white",
  size: 24,
};

export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} onClick={() => navigate("/")} />
      <div className={styles.links}>
        <div>
          <Link
            to="/"
            className={classNames(styles.link, {
              [styles.selected]: location.pathname === "/",
            })}
          >
            Página Inicial
          </Link>
        </div>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <Link to="/carrinho">
          {location.pathname === "/carrinho" ? (
            <RiShoppingCartFill {...iconeProps} />
          ) : (
            <RiShoppingCart2Line {...iconeProps} />
          )}{" "}
        </Link>
      </div>
    </nav>
  );
};
