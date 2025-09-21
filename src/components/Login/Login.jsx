import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import styles from "./Login.module.css";

export default function Login() {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  function redirectByRole(role) {
    // Backend devuelve "Admin", "Director", "User"
    const r = String(role || "").trim();
    if (r === "Admin") return nav("/admin", { replace: true });
    if (r === "Director") return nav("/director", { replace: true });
    return nav("/user", { replace: true }); // por defecto
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        data = { message: text };
      }

      if (!res.ok) {
        if (res.status === 401) {
          setPassword(""); // limpiar campo
          throw new Error("Datos inválidos, verifica usuario o contraseña.");
        }
        throw new Error(data?.message || `Error ${res.status}`);
      }

      // Guardar token y usuario
      localStorage.setItem("token", data.token);
      const decoded = jwtDecode(data.token);
      localStorage.setItem("user", JSON.stringify(decoded));

      // Redirección según rol
      redirectByRole(decoded.role);
    } catch (e) {
      setErr(e.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.container} role="main" aria-labelledby="titulo">
      <section className={styles.card}>
        <h1 id="titulo" className={styles.title}>
          Plataforma Directivos de Parques
        </h1>

        <form autoComplete="off" noValidate onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="user" className={styles.label}>Usuario:</label>
            <input
              id="user"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              aria-required="true"
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="pass" className={styles.label}>Contraseña:</label>
            <div className={styles.passwordWrapper}>
              <input
                id="pass"
                name="password"
                type={showPass ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                aria-required="true"
                className={styles.input}
              />
              <button
                type="button"
                className={styles.togglePass}
                onClick={() => setShowPass(!showPass)}
                aria-label={showPass ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPass ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {err && (
            <p className={styles.error} role="alert" aria-live="assertive">
              {err}
            </p>
          )}

          <div className={styles.actions}>
            <button type="submit" className={styles.button} disabled={loading}>
              {loading ? "Entrando..." : "Inicio de sesión"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}