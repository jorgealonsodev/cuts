const { Schema, model } = require("mongoose");

// Diseñamos el tipo de esquema que va a llevar el articulo

const ArticuloSchema = Schema(
    {
        titulo: {
            type: String,
            require: true
        },
        contenido: {
            type: String,
            require: true
        },
        fecha: {
            type: String,
            default: Date.now
        },
        imagen: {
            type: String,
            default: "imagen.png"
        }
    }
);

// Le ponemos un nombre al modelo y le indicamos la colecion que vamos a usar.
module.exports = model("Articulo", ArticuloSchema, "articulos");