import { useNavigate } from "react-router-dom";
import { getUser } from "../../auth";
import styles from "./User.module.css";

export default function WelcomeUser() {
  const nav = useNavigate();
  const u = getUser();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    nav("/login", { replace: true });
  }

  return (
    <div className={styles.userContainer}>
      <h1 className={styles.userTitle}>PÁGINA DE USER EN PROCESO</h1>
      {u && (
        <p className={styles.userSubtitle}>
          Sesión iniciada como <strong>{u.username}</strong> ({u.role})
        </p>
      )}

      <button className={styles.userLogoutBtn} onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}