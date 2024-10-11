const createError = require("../utils/createError");

exports.getAllPosts = async (req, res, next) => {
  try {
    res.json("getAllPosts Controller...");
  } catch (err) {
    next(err);
  }
};

exports.viewPost = async (req, res, next) => {
  try {
    res.json("viewPost Controller...");
  } catch (err) {
    next(err);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    res.json("createPost Controller...");
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    res.json("updatePost Controller...");
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    res.json("deletePost Controller...");
  } catch (err) {
    next(err);
  }
};