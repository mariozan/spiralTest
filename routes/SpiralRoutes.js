const express = require('express');
const router = express.Router();
const SpiralController = require('../controllers/SpiralController'); //Importando el controllador


// Endpoint para la ruta '/caracol'
router.get('/spiral/:num', (req, res) => {
    const num = parseInt(req.params.num); // Obtener el número del parámetro y convertirlo a entero
    if (isNaN(num) || num < 3 || num > 15) {
      return res.status(400).json({ error: 'El número debe ser un entero entre 3 y 15' });
    }    
    
    const spiral = new SpiralController();
    // Generar la matriz estilo caracol con el número proporcionado
    const result = spiral.generateSpiralMatrix(num);
    res.json({ matrix: result });
  });

module.exports = router