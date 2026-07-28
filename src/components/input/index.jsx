import { forwardRef } from "react";
import styles from "./input.module.scss";

const Input = ({ value, onChange, ...outrasProps }, ref) => {
  return (
    <input
      value={value}
      onChange={onChange}
      ref={ref}
      className={styles.input}
      {...outrasProps}
    />
  );
};

export default forwardRef(Input);
