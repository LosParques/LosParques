import "./Login.css";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí pondrás la llamada a tu API cuando tengas backend:
    // fetch("http://localhost:3000/login", { ... })
    alert("Login enviado (mock)");
  };

  return (
    <main className="card" role="main" aria-labelledby="titulo">
      <h1 id="titulo">Plataforma Directivos de Parques</h1>

      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Correo electrónico :</label>
          <input id="email" name="email" type="email" placeholder="" />
        </div>

        <div className="field">
          <label htmlFor="pass">Contraseña:</label>
          <input id="pass" name="password" type="password" placeholder="" />
        </div>

        <div className="actions">
          <button type="submit">Inicio de sesión</button>
        </div>
      </form>
    </main>
  );
}