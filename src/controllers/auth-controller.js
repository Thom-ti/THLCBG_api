const createError = require("../utils/createError");

exports.register = async (req, res, next) => {
  try {
    res.json("Register Controller...");
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    res.json("Login Controller...");
  } catch (err) {
    next(err);
  }
};

exports.forgotPassword = async (req, res, next) => {
  try {
    res.json("Forgot Password Controller...");
  } catch (err) {
    next(err);
  }
};