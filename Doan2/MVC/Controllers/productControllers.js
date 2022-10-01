const ProductsModel = require("../Models/products");

const ProductsControllers = {
  async handleCreateProduct(req, res) {
    try {
      const {
        user_id,
        category_product_id,
        name,
        description,
        content,
        img,
        hotproduct,
        price,
      } = req.body;
      const result = await ProductsModel.createProduct({
        user_id,
        category_product_id,
        name,
        description,
        content,
        img,
        hotproduct,
        price,
      });
      return res.json({
        result,
      });
    } catch (error) {}
  },

  async handleUpdateProduct(req, res, next) {
    try {
      const { product_id, ...obj } = req.body;
      const result = await ProductsModel.updateProduct(product_id, obj);
      const message = {
        error: !result,
        message: result
          ? "Update product successfully"
          : "Update product failed",
      };
      return res.json(message);
    } catch (error) {}
  },
};

module.exports = ProductsControllers;
