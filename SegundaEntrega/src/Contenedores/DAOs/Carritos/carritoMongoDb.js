import mongoose from 'mongoose';

const carritoShop = 'carrito';
const carritoSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    stock: Number,
    imagen: String,
});

export const carrito = mongoose.model(carritoShop, carritoSchema);
