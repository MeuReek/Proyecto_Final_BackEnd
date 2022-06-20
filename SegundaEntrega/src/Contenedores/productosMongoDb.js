import mongoose from "mongoose";

const coleccionProductos = "productos";
const ProductoSchema = new mongoose.Schema({
    id: {type: Number, required: true,},
    date: {type: Date, required: true, default: Date.now},
    nombre: {type: String, required: true, max: 100},
    descripcion: {type: String, required: true},
    codigo: {type: Number, required: true},
    foto: {type: String, required: true},
    precio: {type: Number, required: true},
    stock: {type: Number, required: true},
});

export const productosmdb = mongoose.model(coleccionProductos, ProductoSchema);

