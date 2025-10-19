# Parques Front

Este repositorio es del frontend del proyecto de "Parques", el cual está hecho con React + Vite.  
Ahorita solo tiene un login ya realizado y contiene validaciones.  
En este README vienen instrucciones para poder probar y conectar con el backend. 

## Features
- **Inicio de sesión**: Autentica a los usuarios con su nombre de usuario y contraseña. En caso de que no se encuentre, lanzará un error. 
- **Roles**: Cada usuario tiene un rol diferente y verá su pantalla conforme a su rol. Es decir, un admin no ve lo mismo que un usuario "normal". 
- **Mantenimiento**: Las páginas de los roles aún están en proceso, por lo que mostrarán una página en mantenimiento. 

## Tech Stack
- **React + Vite**
- **PostgreSQL**

## Instalation

### Prerequisites
Antes de ejecutar el proyecto, asegúrese de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (>= v16)
- [Docker](https://www.docker.com/) (Para el backend)
- [PostgreSQL](https://www.postgresql.org/) (via Docker en el backend)
- [React](https://react.dev)
- [Vite](https://vite.dev/guide/)

### Steps to get started

1. **Backend**  
   Antes de empezar a probar la funcionalidad del frontend, es necesario clonar el repositorio del backend y seguir las instrucciones del README.  
   Una vez que se asegure de que el backend funciona correctamente, puede continuar con el siguiente paso.  
   - [Parques API](https://github.com/LosParques/parques-api.git)

2. **Clonar el repositorio del frontend**
   ```bash
   git clone https://github.com/LosParques/LosParques.git
   cd LosParques
