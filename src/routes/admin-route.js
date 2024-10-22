const { express } = require("../models");
const router = express.Router();
const { addBoardGame, deleteBoardGame } = require("../controllers");

router.post("/", addBoardGame);
router.delete("/:boardgameId", deleteBoardGame);

module.exports = router;