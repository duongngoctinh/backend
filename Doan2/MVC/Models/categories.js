const mongoose = require("mongoose");

const Categories = new mongoose.Schema(
  {
    user_id: {
      type: String,
    },
    name: { type: String },
  },
  { timestamps: true }
);

class CategoriesModel {
  constructor() {
    this.init = mongoose.model("tbl_categories_product", Categories);
  }

  async createCategories(user_id, name) {
    const category = new this.init({
      user_id,
      name,
    });
    return await category.save();
  }
}

module.exports = new CategoriesModel();
