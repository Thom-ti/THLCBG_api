const createError = require("../utils/createError");

exports.getMyShelf = async (req, res, next) => {
  try {
    res.json("getMyShelf Controller");
  } catch (err) {
    next(err);
  }
};

exports.updateStatus = async (req, res, next) => {
  try {
    res.json("updateStatus Controller");
  } catch (err) {
    next(err);
  }
};

exports.deleteFromShelf = async (req, res, next) => {
  try {
    res.json("deleteFromShelf Controller");
  } catch (err) {
    next(err);
  }
};