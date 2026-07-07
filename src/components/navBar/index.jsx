import styles from "./nav.module.scss";
import { reactComponent as Logo } from "@/assets/logo.svg";

export const NavBar = () => {
  return (
    <nav classname={styles.nav}>
      <Logo classname={styles.logo} />
    </nav>
  );
};
