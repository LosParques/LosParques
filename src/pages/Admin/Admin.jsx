import { useNavigate } from "react-router-dom";
import { getUser } from "../../auth";
import styles from "./Admin.module.css";

export default function WelcomeAdmin() {
  const nav = useNavigate();
  const u = getUser();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    nav("/login", { replace: true });
  }

  return (
    <div className={styles.adminContainer}>
      <h1 className={styles.adminTitle}>PÁGINA DE ADMIN EN PROCESO</h1>
      {u && (
        <p className={styles.adminSubtitle}>
          Sesión iniciada como <strong>{u.username}</strong> ({u.role})
        </p>
      )}

      <button className={styles.adminLogoutBtn} onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}