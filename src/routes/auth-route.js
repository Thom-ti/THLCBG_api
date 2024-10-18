const { express } = require("../models");
const router = express.Router();
const {
  register,
  login,
  forgotPassword,
  currentUser,
} = require("../controllers");
const {
  registerValidator,
  loginValidator,
  authenticate,
} = require("../middlewares");

router.post("/register", registerValidator, register);
router.post("/login", loginValidator, login);
router.post("/forgot-password", forgotPassword);
router.post("/current-user", authenticate, currentUser);

module.exports = router;
