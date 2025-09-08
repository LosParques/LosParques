-- SCRUM 2 - Creación de tabla de usuarios
CREATE DATABASE ParkServer;

-- ENUM para roles de usuario.
CREATE TYPE rol_usuario AS ENUM ('Admin', 'Director', 'User');

-- SCRUM 3 - Creación de tabla de usuarios
CREATE TABLE USERS (
    user_id SERIAL PRIMARY KEY,
	email VARCHAR(50) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
	cellphone_number VARCHAR(15) NOT NULL,
	group_role rol_usuario DEFAULT 'User'
);

-- Revisar si se crearon.
SELECT * FROM USERS;