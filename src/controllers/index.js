const { register, login, forgotPassword, currentUser } = require("./auth-controller");
const {
  getAllBoardGames,
  viewBoardGame,
  addToShelf,
} = require("./boardgame-controller");
const {
  getAllPosts,
  viewPost,
  createPost,
  updatePost,
  deletePost,
} = require("./post-controller");
const {
  getMyShelf,
  updateStatus,
  deleteFromShelf,
} = require("./shelf-controller");
const { addBoardGame } = require("./admin-controller");

module.exports = {
  register,
  login,
  forgotPassword,
  currentUser,
  getAllBoardGames,
  viewBoardGame,
  addToShelf,
  getAllPosts,
  viewPost,
  createPost,
  updatePost,
  deletePost,
  getMyShelf,
  updateStatus,
  deleteFromShelf,
  addBoardGame,
};
