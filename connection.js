const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

connection.connect(err => {
  if (err) {
    console.error('❌ Error al conectar a RDS:', err.stack);
    return;
  }
  console.log('✅ Conectado a RDS como ID:', connection.threadId);
});

module.exports = connection;
