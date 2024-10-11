const { express } = require("../models");
const router = express.Router();
const { addBoardGame } = require("../controllers");

router.post("/", addBoardGame);

module.exports = router;