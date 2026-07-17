import styles from "./busca.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { mudarBusca, resetarBusca } from "@/store/reducers/busca";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Busca = () => {
  const busca = useSelector((state) => state.busca);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(resetarBusca());
  }, [location.pathname, dispatch]);
  return (
    <div className={styles.busca}>
      <input
        type="search"
        placeholder="Oque você procura?"
        className={styles.input}
        value={busca}
        onChange={(Event) => dispatch(mudarBusca(Event.target.value))}
      />
    </div>
  );
};
