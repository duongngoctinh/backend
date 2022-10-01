const categoryRoute = require("./category");
const productRoute = require("./products");

const routes = (app) => {
  app.use("/category", categoryRoute);
  app.use("/product", productRoute);
};

module.exports = routes;
