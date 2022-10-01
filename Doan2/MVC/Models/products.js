const mongoose = require("mongoose");

const Products = new mongoose.Schema(
  {
    user_id: String,
    category_product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tbl_categories_products",
    },
    name: String,
    description: String,
    content: String,
    img: String,
    hotproducts: String,
    price: Number,
  },
  { timestamps: true }
);

class ProductsModel {
  constructor() {
    this.init = mongoose.model("tbl_product", Products);
  }

  async createProduct(obj) {
    const product = new this.init(obj);
    return await product.save();
  }

  async updateProduct(_id, obj) {
    const result = await this.init
      .updateOne({ _id }, obj)
      .then((res) => true)
      .catch((err) => false);
    return result;
  }
}

module.exports = new ProductsModel();
