const CategoriesControllers = require("../Controllers/categoryControllers");

const express = require("express");
const Route = express.Router();

Route.post("/create", CategoriesControllers.handleCreateCategory);

module.exports = Route;
