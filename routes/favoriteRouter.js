const express = require("express");

const { asyncWrapper } = require("../middleware/errorHandler");

const {
  getFavoriteRecipesController,
  patchFavoriteRecipesController,
} = require("../controllers/favoriteController");

const router = express.Router();

router.get("/", asyncWrapper(getFavoriteRecipesController));
router.patch("/:idRecipes", asyncWrapper(patchFavoriteRecipesController));

module.exports = { favoriteRouter: router };
