const express = require('express')
const { Router } = express
const _ = require('underscore')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
const routerApi = Router()

routerApi.use(express.json())

const productos = []

routerApi.post("/carrito", async (req, res) => {
    const id = productos.length + 1;
    const { nombre, precio, imagen } = req.body;
    const producto = { ...req.body, id };
    productos.push(producto);
    res.json(productos);
    
})

routerApi.delete("/carrito/:id", async (req, res) => {
  const id = req.params.id;
  productos[id] = {};
  res.json("Carrito Eliminado");
  });

routerApi.get("/:id/productos", async (req, res) => {
    const id = req.params.id;
    res.json(productos[id]);
  });

  routerApi.post("/:id/productos", async (req, res) => {
    const id = productos.length + 1;
    const { nombre, precio, imagen } = req.body;
    const producto = { ...req.body, id };
    productos.push(producto);
    res.json(productos);
    
})
routerApi.delete("/:id/productos/:id_prod", async (req, res) => {
    const id = req.params.id;
    productos[id] = {};
    res.json("Carrito Eliminado");
    });
  
app.use("/api", routerApi)

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})
server.on('error', error => console.log(`Error en servidor ${error}`))