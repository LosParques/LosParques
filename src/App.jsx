import { Routes, Route, Navigate } from "react-router-dom";
import Protected from "./components/Protected";
import RoleGuard from "./components/RoleGuard";
import Login from "./components/Login/Login";
import User from "./pages/User/User";
import Admin from "./pages/Admin/Admin";
import Director from "./pages/Director/Director";

// 🔹 NUEVO: página en blanco temporal para Parques
import Parques from "./pages/Parques/Parques";

export default function App() {
  return (
    <Routes>
      {/* /login por defecto */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />

      {/* Rutas protegidas */}
      <Route element={<Protected />}>
        <Route element={<RoleGuard allow={['User']} />}>
          <Route path="/user" element={<User />} />
        </Route>

        <Route element={<RoleGuard allow={['Admin']} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        {/* 🔹 Rutas solo para Director */}
        <Route element={<RoleGuard allow={['Director']} />}>
          <Route path="/director" element={<Director />} />
          {/* 🔹 NUEVO: Parques (pantalla en blanco provisional) */}
          <Route path="/parques" element={<Parques />} />
        </Route>
      </Route>
    </Routes>
  );
}









// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Login from "./components/Login/Login";

// export default function App() {
//   return <Login />;
// }
// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App
