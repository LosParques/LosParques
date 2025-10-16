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
    <div className={`${styles.directorContainer} ${styles.withTopBar}`}>
      {/* NAVBAR fijo arriba */}
      <nav className={styles.navBar}>
        <div className={styles.navBrand}>Directores de Parques</div>
        <div className={styles.navLinks}>
          <span className={styles.navLink} onClick={() => nav("/parques")} role="link">
            Parques
          </span>
          <span className={styles.navLink} onClick={() => alert("En construcción")} role="button">
            Eventos
          </span>
          <span className={styles.navLink} onClick={() => alert("En construcción")} role="button">
            Mensajes
          </span>
          <span className={styles.navUser}>👤</span>
          <span className={styles.navLink} onClick={handleLogout} role="button">
            Cerrar sesión
          </span>
        </div>
      </nav>

      {/* Para no tapar el contenido con el navbar fijo */}
      <div className={styles.navSpacer} />

      {/* Cuerpo (por ahora solo info de sesión; el resto viene en los siguientes commits) */}
      <div className={styles.pageBody}>
        {u && (
          <p className={styles.directorSubtitle}>
            Sesión iniciada como <strong>{u.username}</strong> ({u.role})
          </p>
        )}
        {/* Aquí añadiremos: mapa + directores + galería */}
      </div>
    </div>
  );
}
