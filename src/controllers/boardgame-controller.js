const createError = require("../utils/createError");

exports.getAllBoardGames = async (req, res, next) => {
  try {
    res.json("getAllBoardGames Controller...");
  } catch (err) {
    next(err);
  }
};

exports.viewBoardGame = async (req, res, next) => {
  try {
    res.json("viewBoardGame Controller...");
  } catch (err) {
    next(err);
  }
};

exports.addToShelf = async (req, res, next) => {
  try {
    res.json("addToShelf Controller");
  } catch (err) {
    next(err);
  }
};