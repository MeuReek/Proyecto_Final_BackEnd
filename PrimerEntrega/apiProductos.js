const express = require('express')
const { Router } = express
const _ = require('underscore')
const app = express()

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
const routerApi = Router()

routerApi.use(express.json())

const productos = []

routerApi.get("/productos", async (req, res) => {
    res.json(productos);
  });
  

routerApi.get("/productos/:id", async (req, res) => {
    const id = req.params.id;
    res.json(productos[id]);
  });


routerApi.post("/productos", async (req, res) => {
  const id = productos.length + 1;
  const { nombre, precio, imagen } = req.body;
  const producto = { ...req.body, id };
  productos.push(producto);
  res.json(productos);
    
})

routerApi.put("/productos/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, precio, imagen } = req.body;
  if (id) {
      _.each(productos, (prod, i) => {
          if (prod.id === id) {
              prod.nombre = nombre;
              prod.precio = precio;
              prod.imagen = imagen;
        }
      });
      res.json(productos);
  } else {
      res.json("Error: No se encuentra el producto");
  }
});


routerApi.delete("/productos/:id", async (req, res) => {
  const id = req.params.id;
  productos[id] = {};
  res.json("Producto Eliminado");
  });


app.use("/api", routerApi)

const PORT = 8080

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})
server.on('error', error => console.log(`Error en servidor ${error}`))