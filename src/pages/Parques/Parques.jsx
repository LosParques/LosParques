import { useNavigate } from "react-router-dom";
import styles from "./Parques.module.css";

export default function Parques() {
  const nav = useNavigate();

  return (
    <div className={styles.parquesContainer}>
      <h1 className={styles.parquesTitle}>Página de Parques</h1>
      <p className={styles.parquesSubtitle}>
        Aquí irá la vista de parques (en construcción)
      </p>

      <button
        className={styles.backBtn}
        onClick={() => nav("/director")}
      >
        Volver a Directores
      </button>
    </div>
  );
}
