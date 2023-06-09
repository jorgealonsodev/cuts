const mysql = require('mysql');

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'usuario',
    password: 'contraseña',
    database: 'basedatos'
});

// Conexión a la base de datos
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

// Ruta para obtener objetos JSON desde la base de datos
app.get('/probando/:id', (req, res) => {
    console.log('Se ha ejecutado el endpoint probando');

    const id = req.params.id;

    // Consulta a la base de datos para obtener el objeto JSON según el ID.
    const query = 'SELECT * FROM tabla WHERE id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error al realizar la consulta:', err);
            return res.status(500).json({ error: 'Error en la base de datos' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Objeto no encontrado' });
        }

        const objetoJSON = results[0]; // Suponiendo que solo se espera un resultado

        return res.status(200).json(objetoJSON);
    });
});
