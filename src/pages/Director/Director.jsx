import { useNavigate } from "react-router-dom";
import styles from "./Director.module.css";

export default function WelcomeDirector() {
  const nav = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    nav("/login", { replace: true });
  }

  // Datos de ejemplo para la lista
  const directoresCerca = [
    { id: 1, nombre: "Laura Gómez",   subt: "Parque ecológico", avatar: "https://i.pravatar.cc/96?img=47" },
    { id: 2, nombre: "Carlos Pérez",  subt: "Parque ecológico", avatar: "https://i.pravatar.cc/96?img=52" },
    { id: 3, nombre: "Miguel Torres", subt: "Parque ecológico", avatar: "https://i.pravatar.cc/96?img=15" },
    { id: 4, nombre: "Ana Gutiérrez", subt: "Parque ecológico", avatar: "https://i.pravatar.cc/96?img=32" },
    { id: 5, nombre: "Juan Medina",   subt: "Parque ecológico", avatar: "https://i.pravatar.cc/96?img=68" },
  ];

  return (
    <div className={`${styles.directorContainer} ${styles.withTopBar}`}>
      {/* NAVBAR */}
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

      <div className={styles.navSpacer} />

      {/* ===== LAYOUT COMMIT 2 ===== */}
      <div className={styles.pageGrid}>
        {/* Mapa placeholder */}
        <section className={`${styles.panel} ${styles.mapBox}`}>
          <div className={styles.mapPlaceholder} />
        </section>

        {/* Directores cerca de ti */}
        <aside className={styles.panel}>
          <div className={styles.sidebarTitle}>Directores cerca de ti</div>
          <div className={styles.directoresList}>
            {directoresCerca.map((d) => (
              <div className={styles.dirItem} key={d.id}>
                <img className={styles.dirAvatar} src={d.avatar} alt={d.nombre} />
                <div>
                  <h4 className={styles.dirName}>{d.nombre}</h4>
                  <p className={styles.dirSub}>{d.subt}</p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
