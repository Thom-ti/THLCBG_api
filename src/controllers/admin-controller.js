const createError = require("../utils/createError");

exports.addBoardGame = async (req, res, next) => {
  try {
    res.json("addBoardGame Controller...");
  } catch (err) {
    next(err);
  }
};