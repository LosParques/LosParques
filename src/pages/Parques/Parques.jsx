import { useNavigate } from "react-router-dom";
import styles from "./Parques.module.css";

// 👇 Ajusta estas rutas a tu estructura real
import imgDesierto from "../../assets/parquenacionaldesiertodelosleones.jpg";
import imgGrutas from "../../assets/parquenacionalgrutasdecacahuamilpa.jpg";
import imgIztaPopo from "../../assets/parquenacionalIztaccíhuatl-popocatépetl.jpg";
import imgColima from "../../assets/parquenacionalvolcannevadodecolima.jpg";

export default function Parques() {
  const nav = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    nav("/login", { replace: true });
  }

  const parks = [
    { 
      id: 1, 
      img: imgIztaPopo, 
      titulo: "Parque nacional Iztaccíhuatl-Popocatépetl",
      descripcion: "Ubicado en México, Morelos y Puebla. Declarado el 8 de noviembre de 1935. Área: 40,590 ha."
    },
    { 
      id: 2, 
      img: imgGrutas, 
      titulo: "Parque nacional Grutas de Cacahuamilpa",
      descripcion: "Ubicado en Guerrero. Declarado el 20 de enero de 1936. Área: 1,600 ha."
    },
    { 
      id: 3, 
      img: imgColima, 
      titulo: "Parque nacional Volcán Nevado de Colima",
      descripcion: "Ubicado en Colima y Jalisco. Declarado el 5 de septiembre de 1936. Área: 9,375 ha."
    },
    { 
      id: 4, 
      img: imgDesierto, 
      titulo: "Parque nacional Desierto de los Leones",
      descripcion: "Ubicado en Ciudad de México. Declarado el 27 de noviembre de 1917. Área: 1,866 ha."
    },
  ];

  return (
    <div className={`${styles.parquesContainer} ${styles.withTopBar}`}>
      {/* NAVBAR - Coherente con Director */}
      <nav className={styles.navBar}>
        <div className={styles.navBrand}>Directores de Parques</div>
        <div className={styles.navLinks}>
          <span className={styles.navLink} onClick={() => nav("/director")} role="link">
            Inicio
          </span>
          <span className={`${styles.navLink} ${styles.active}`} role="link">
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

      {/* Layout principal: sidebar filtros + lista de tarjetas */}
      <div className={styles.pageGrid}>
        {/* Sidebar Filtros */}
        <aside className={styles.panel}>
          <div className={styles.sidebarTitle}>Filtros</div>
          
          <div className={styles.filterBlock}>
            <div className={styles.filterLabel}>Ubicación</div>
            <select className={styles.filterSelect} defaultValue="">
              <option value="" disabled>Selecciona...</option>
              <option>CDMX</option>
              <option>Guerrero</option>
              <option>Estado de México</option>
              <option>Colima</option>
              <option>Morelos</option>
              <option>Puebla</option>
              <option>Jalisco</option>
            </select>
          </div>

          <div className={styles.filterBlock}>
            <div className={styles.filterLabel}>Tipo</div>
            <select className={styles.filterSelect} defaultValue="">
              <option value="" disabled>Selecciona...</option>
              <option>Volcán</option>
              <option>Cueva/Gruta</option>
              <option>Bosque</option>
              <option>Desierto</option>
            </select>
          </div>

          <div className={styles.filterBlock}>
            <div className={styles.filterLabel}>Área</div>
            <select className={styles.filterSelect} defaultValue="">
              <option value="" disabled>Selecciona...</option>
              <option>Menos de 2,000 ha</option>
              <option>2,000 - 10,000 ha</option>
              <option>Más de 10,000 ha</option>
            </select>
          </div>
        </aside>

        {/* Lista de Parques */}
        <main className={styles.contentPanel}>
          <div className={styles.sectionTitle}>Parques Nacionales de México</div>
          <div className={styles.parkList}>
            {parks.map((p) => (
              <article key={p.id} className={styles.parkCard}>
                <img src={p.img} alt={p.titulo} className={styles.parkImage} />
                <div className={styles.parkInfo}>
                  <h3 className={styles.parkTitle}>{p.titulo}</h3>
                  <p className={styles.parkDescription}>{p.descripcion}</p>
                  <button className={styles.parkButton} onClick={() => alert(`Más información sobre ${p.titulo}`)}>
                    Ver detalles
                  </button>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}