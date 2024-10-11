const errorMiddleware = require("./error-middleware");
const notFoundHandler = require("./not-found");
const authenticate = require("./authenticate");
const upload = require("./upload");
const { registerValidator, loginValidator } = require("./validator");

module.exports = {
  errorMiddleware,
  notFoundHandler,
  authenticate,
  upload,
  registerValidator,
  loginValidator,
};
