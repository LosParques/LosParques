import { useNavigate } from "react-router-dom";
import { getUser } from "../../auth";
import styles from "./Director.module.css";

export default function WelcomeDirector() {
  const nav = useNavigate();
  const u = getUser();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    nav("/login", { replace: true });
  }

  return (
    <div className={styles.directorContainer}>
      <h1 className={styles.directorTitle}>PÁGINA DE DIRECTOR EN PROCESO</h1>
      {u && (
        <p className={styles.directorSubtitle}>
          Sesión iniciada como <strong>{u.username}</strong> ({u.role})
        </p>
      )}

      <button className={styles.directorLogoutBtn} onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}