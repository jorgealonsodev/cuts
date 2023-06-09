app.get("/probando/:id", (req, res) => {
    console.log("Se ha ejecutado el endpoint probando");

    // Obtenemos el parámetro "id" de la solicitud
    const id = req.params.id;

    // Creamos un objeto JSON diferente según el valor del parámetro "id"
    let objetoJSON;
    
    if (id === "1") {
        objetoJSON = {
            "curso": "autor",
            "autor": "Jorge Alonso",
            "url": "miweb.es"
        };
    } else if (id === "2") {
        objetoJSON = {
            "curso": "Nevo",
            "autor": "Pepe Alonso",
            "url": "miweb.es"
        };
    } else {
        // Si el valor del parámetro "id" no coincide con ninguno de los casos anteriores, devolvemos un objeto de error
        return res.status(404).json({ "error": "Objeto no encontrado" });
    }

    // Devolvemos el objeto JSON correspondiente
    return res.status(200).json(objetoJSON);
});
