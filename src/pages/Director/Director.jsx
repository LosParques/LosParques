import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Solución para iconos de Leaflet en React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

import styles from "./Director.module.css";

/* Imágenes locales en src/assets/ */
import imgDesierto from "../../assets/parquenacionaldesiertodelosleones.jpg";
import imgIztacci from "../../assets/parquenacionalgrutasdecacahuamilpa.jpg";
import imgCacahua from "../../assets/parquenacionalIztaccíhuatl-popocatépetl.jpg";
import imgColima from "../../assets/parquenacionalvolcannevadodecolima.jpg";

export default function WelcomeDirector() {
  const nav = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    nav("/login", { replace: true });
  }

  // Coordenadas centrales de México
  const centerMexico = [23.6345, -102.5528];
  const zoomLevel = 5;

  // Marcadores para algunos parques nacionales
  const parquesMarcadores = [
    {
      id: 1,
      nombre: "Parque nacional Desierto de los Leones",
      posicion: [19.3225, -99.3058],
      info: "Ubicado en la Ciudad de México, declarado el 27 de noviembre de 1917"
    },
    {
      id: 2,
      nombre: "Parque nacional Iztaccíhuatl-Popocatépetl",
      posicion: [19.1022, -98.6428],
      info: "Ubicado en México, Morelos y Puebla, declarado el 8 de noviembre de 1935"
    },
    {
      id: 3,
      nombre: "Parque nacional Grutas de Cacahuamilpa",
      posicion: [18.6697, -99.5211],
      info: "Ubicado en Guerrero, declarado el 20 de enero de 1936"
    },
    {
      id: 4,
      nombre: "Parque nacional Volcán Nevado de Colima",
      posicion: [19.5633, -103.6083],
      info: "Ubicado en Colima y Jalisco, declarado el 5 de septiembre de 1936"
    }
  ];

  // Lista de directores (placeholder)
  const directoresCerca = [
    { id: 1, nombre: "Laura Gómez",   subt: "Parque ecológico", avatar: "https://i.pravatar.cc/96?img=47" },
    { id: 2, nombre: "Carlos Pérez",  subt: "Parque ecológico", avatar: "https://i.pravatar.cc/96?img=52" },
    { id: 3, nombre: "Miguel Torres", subt: "Parque ecológico", avatar: "https://i.pravatar.cc/96?img=15" },
    { id: 4, nombre: "Ana Gutiérrez", subt: "Parque ecológico", avatar: "https://i.pravatar.cc/96?img=32" },
    { id: 5, nombre: "Juan Medina",   subt: "Parque ecológico", avatar: "https://i.pravatar.cc/96?img=68" },
  ];

  // 4 Parques nacionales (datos tomados del cuadro de Wikipedia que me pasaste)
  const parquesDestacados = [
    {
      id: 1,
      nombre: "Parque nacional Desierto de los Leones",
      estados: "Ciudad de México",
      fecha: "27 de noviembre de 1917",
      area: "1,866 ha",
      notas: "",
      img: imgDesierto,
    },
    {
      id: 2,
      nombre: "Parque nacional Iztaccíhuatl-Popocatépetl",
      estados: "México • Morelos • Puebla",
      fecha: "8 de noviembre de 1935",
      area: "40,590 ha",
      notas:
        "Reserva de la Biosfera de Los Volcanes (2010). Incluye Parque nacional Zoquiapan y áreas anexas.",
      img: imgIztacci,
    },
    {
      id: 3,
      nombre: "Parque nacional Grutas de Cacahuamilpa",
      estados: "Guerrero",
      fecha: "20 de enero de 1936",
      area: "1,600 ha",
      notas: "",
      img: imgCacahua,
    },
    {
      id: 4,
      nombre: "Parque nacional Volcán Nevado de Colima",
      estados: "Colima • Jalisco",
      fecha: "5 de septiembre de 1936",
      area: "9,375 ha",
      notas: "",
      img: imgColima,
    },
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

      {/* Layout mapa + sidebar */}
      <div className={styles.pageGrid}>
        <section className={`${styles.panel} ${styles.mapBox}`}>
          {/* Reemplazar el placeholder con el mapa Leaflet */}
          <div className={styles.mapLeaflet}>
            <MapContainer
              center={centerMexico}
              zoom={zoomLevel}
              scrollWheelZoom={true}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {parquesMarcadores.map((parque) => (
                <Marker key={parque.id} position={parque.posicion}>
                  <Popup>
                    <strong>{parque.nombre}</strong>
                    <br />
                    {parque.info}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </section>

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

      {/* Galería de Parques Destacados con tarjeta en hover */}
      <div className={styles.section}>
        <div className={styles.sectionTitle}>Parques destacados</div>
        <div className={styles.gallery}>
          {parquesDestacados.map((p) => (
            <div key={p.id} className={styles.galleryItem}>
              <img src={p.img} alt={p.nombre} />
              <div className={styles.hoverCard}>
                <h4 className={styles.cardTitle}>{p.nombre}</h4>
                <div className={styles.cardRow}>
                  <span className={styles.cardKey}>Estado(s):</span>
                  <span className={styles.cardVal}>{p.estados}</span>
                </div>
                <div className={styles.cardRow}>
                  <span className={styles.cardKey}>Declaración:</span>
                  <span className={styles.cardVal}>{p.fecha}</span>
                </div>
                <div className={styles.cardRow}>
                  <span className={styles.cardKey}>Área:</span>
                  <span className={styles.cardVal}>{p.area}</span>
                </div>
                {p.notas && (
                  <div className={styles.cardRow}>
                    <span className={styles.cardKey}>Notas:</span>
                    <span className={styles.cardVal}>{p.notas}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}