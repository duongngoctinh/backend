const categories = require("../Models/categories");

const CategoriesControllers = {
  handleCreateCategory: async function (req, res) {
    try {
      const { user_id, name } = req.body;
      const result = await categories.createCategories(
        user_id,
        name.toLowerCase()
      );
      const isSave = Boolean(result);
      const message = {
        error: !isSave,
        message: isSave
          ? "Categories add successfully"
          : "Categories add failed",
      };
      return res.json(message);
    } catch (error) {}
  },
};

module.exports = CategoriesControllers;
