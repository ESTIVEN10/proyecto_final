require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./db/connection');

const app = express();
const port = 3000;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Test de conexión a DB
app.get('/test-db', (req, res) => {
  db.query('SELECT NOW() AS now', (err, results) => {
    if (err) {
      console.error('Error en la consulta:', err);
      return res.status(500).send('Error en la base de datos');
    }
    res.send(`🕒 Hora actual en RDS: ${results[0].now}`);
  });
});

app.listen(port, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${port}`);
});
