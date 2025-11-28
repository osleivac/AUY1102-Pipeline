const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    mensaje: '¡Pipeline CI/CD funcionando correctamente!',
    version: '1.0.0',
    estudiantes: 'AUY1102'
  });
});

// Ruta de salud
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Solo iniciar servidor si no estamos en modo test
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
}

module.exports = app;