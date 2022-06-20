import mongoose from "mongoose";
import * as model from "./Contenedores/productosMongoDb.js"

CRUD();

async function CRUD(){
    try{
        const URL = "mongodb://localhost:27017/ecommerce";
        let conexion = await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true    
        });
        console.log("Conexión a MongoDB correcta");

        console.log("Creando producto");
        const producto = [{
                        id: 1,
                        nombre: "Producto 1", 
                        descripcion: "Descripción del producto 1",
                        codigo: 1, 
                        foto: "foto1.jpg", 
                        precio: 100, 
                        stock: 10}]
        let productoCreado = await model.productosmdb.create(producto);
        console.log(`${productoCreado} Producto creado`);

        console.log("Listando productos");
        let productos = await model.productosmdb.find({});
        console.table(productos);

        console.log("Actualizando producto");
        let productoActualizado = await model.productosmdb.updateOne({id: 1}, {$set: {nombre: "Producto 1 modificado"}});
        console.log(`${productoActualizado} Producto actualizado`);

    }catch(error){
        console.log(error);
    }
};