const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host:               process.env.DB_HOST,
  port:               process.env.DB_PORT,
  user:               process.env.DB_USER,
  password:           process.env.DB_PASSWORD,
  database:           process.env.DB_NAME,
  connectionLimit:    parseInt(process.env.DB_POOL_LIMIT, 10),
  waitForConnections: true,
  queueLimit:         0,
});

pool.query('SELECT 1')
  .then(() => console.log('Conectado a la Base de Datos'))
  .catch(err => {
    console.error('Error de conexión:', err.message);
    process.exit(1);
  });

module.exports = pool;