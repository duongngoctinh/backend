const ProductsControllers = require("../Controllers/productControllers");

const express = require("express");
const Route = express.Router();

Route.post("/create", ProductsControllers.handleCreateProduct);
Route.put("/update", ProductsControllers.handleUpdateProduct);

module.exports = Route;
