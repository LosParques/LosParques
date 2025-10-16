import { useEffect, useState } from "react";
import styles from "./PantallaDirectores.module.css";
import { post } from "../../api";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function PantallaDirectores() {
  const [directores, setDirectores] = useState([]);

  useEffect(() => {
    // Versión inicial con mock
    async function fetchData() {
      try {
        const data = await post("/directores/list", {}); // ajusta endpoint
        setDirectores(data);
      } catch {
        setDirectores([
          { id: 1, nombre: "Director Norte", lat: 25.6866, lng: -100.3161 },
          { id: 2, nombre: "Director Centro", lat: 19.4326, lng: -99.1332 },
        ]);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.pantallaDirectoresContainer}>
      <h1 className={styles.title}>Directores</h1>
      <h2 className={styles.subtitle}>Lista y mapa interactivo</h2>

      <div className={styles.content}>
        <div className={styles.list}>
          {directores.map((d) => (
            <div key={d.id} className={styles.listItem}>
              {d.nombre}
            </div>
          ))}
        </div>

        <MapContainer
          center={[23.6345, -102.5528]}
          zoom={5}
          className={styles.map}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {directores.map((d) => (
            <Marker key={d.id} position={[d.lat, d.lng]}>
              <Popup>{d.nombre}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
