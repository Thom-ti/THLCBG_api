const { express } = require("../models");
const router = express.Router();
const { register, login, forgotPassword } = require("../controllers");
const { registerValidator, loginValidator } = require("../middlewares");

router.post("/register", registerValidator, register);
router.post("/login", loginValidator, login);
router.post("/forgot-password", forgotPassword);

module.exports = router;
