import styles from "./footer.module.scss";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const iconeProps = {
  color: "white",
  size: 24,
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <FaFacebook {...iconeProps} />
        <FaTwitter {...iconeProps} />
        <FaInstagram {...iconeProps} />
      </div>
      <span>desenvolvido por Bianca Chiquinelli</span>
    </footer>
  );
};

export default Footer;
