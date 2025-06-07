const express = require('express');
const app = express();
const port = 3000;

const db = require('./db'); // importa la conexión

app.get('/', (req, res) => {
  res.send('App funcionando');
});

app.get('/test-db', (req, res) => {
  db.query('SELECT NOW() AS now', (err, results) => {
    if (err) {
      console.error('❌ Error en la consulta:', err);
      return res.status(500).send('Error en la base de datos');
    }
    res.send(`🕒 Hora en la DB: ${results[0].now}`);
  });
});

app.listen(port, () => {
  console.log(`🚀 App escuchando en http://localhost:${port}`);
});
