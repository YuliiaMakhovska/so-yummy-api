const { FoundingError } = require("../middleware/errorHandler");

const { getListIngredientsService } = require("../services/ingredientsService");

const getListIngredientsController = async (req, res, next) => {
  const ingredients = await getListIngredientsService();
  if (ingredients) {
    res.status(200).json({
      message: "getting ingredients list succes",
      code: 200,
      ingredients,
    });
  } else throw new FoundingError("ingredients list not found");
};

const searchRecipesByIngredientsController = async (req, res, next) => {
  res.status(200).json({ message: "ok", code: 200 });
};

module.exports = {
  getListIngredientsController,
  searchRecipesByIngredientsController,
};
