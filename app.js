require('dotenv').config();
const { Client } = require('pg');

async function testConnection() {
  const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
    await client.connect();
    console.log("Conexión exitosa a PostgreSQL");

    const res = await client.query("SELECT NOW();");
    console.log("Hora del servidor:", res.rows[0].now);

  } catch (err) {
    console.error("Error de conexión:", err.message);
  } finally {
    await client.end();
  }
}
testConnection();
