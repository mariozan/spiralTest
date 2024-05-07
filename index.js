const express = require('express') //Importo la libreria
const cors = require('cors')

const app = express() //Inicializacion de la variable que usara la libreria
const port = 3000; // Escuchar la ejecucion del servidor

app.use(cors());

const spiralRoutes = require('./routes/SpiralRoutes');

app.get('/', (req, res) => {
    //Informacion a modificar
    res.send("Hello world")
})

/** Configuraciones express */
app.use(express.urlencoded({extended: true})) // Acceder a la informacion de las urls
app.use(express.json()) // Analizar informacion en formato JSON

app.use('/', spiralRoutes)


/** Ejecucion del servidor */
app.listen(port, () => {
    console.log('Listen on ' + port)
})

module.exports = app