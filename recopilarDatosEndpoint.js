// Enlazamos con el archivo de conexion
const { conexion } = require('./basedatos/conexion');
const express = require('express');
const cors = require('cors');

// Iniciamos app
console.log("App de node iniciada");

// Conexion a la base de datos
conexion();

//Crear el servidor de node con express
const app = express();
const puerto = 3900;

// Configurar Cors
app.use(cors());

// Convertir body a objeto js
app.use(express.json());


// Recopilar datos de endpoint
app.get("/download", async (req, res) => {
    console.log("Se está ejecutando el endpoint /download");

    // URL del archivo que se desea recibir
    const url = 'https://jsonplaceholder.typicode.com/todos';

    try {
        // Hacer la solicitud al endpoint y obtener los datos JSON
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
});

// Con variables
let jsonData; // Variable para almacenar los datos JSON

app.get("/download", async (req, res) => {
  console.log("Se está ejecutando el endpoint /download");

  // URL del archivo que se desea recibir
  const url = 'https://jsonplaceholder.typicode.com/todos';

  try {
    // Hacer la solicitud al endpoint y obtener los datos JSON
    const response = await fetch(url);
    jsonData = await response.json(); // Asignar los datos JSON a la variable jsonData
    console.log(jsonData);
    res.status(200).json(jsonData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
});
// Otra forma
const axios = require('axios');

app.get("/download", async (req, res) => {
  console.log("Se está ejecutando el endpoint /download");

  // URL del archivo que se desea recibir
  const url = 'https://jsonplaceholder.typicode.com/todos';

  try {
    // Hacer la solicitud al endpoint y obtener los datos JSON utilizando axios
    const response = await axios.get(url);
    const data = response.data;
    console.log(data);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
});




// Crear rutas

// Crear servidor y escuchar peticiones  http
app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
})