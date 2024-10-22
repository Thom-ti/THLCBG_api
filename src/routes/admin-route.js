const { express } = require("../models");
const router = express.Router();
const { upload } = require("../middlewares");
const { addBoardGame, deleteBoardGame } = require("../controllers");

router.post("/", upload.single("boardgameImage"), addBoardGame);
router.delete("/:boardgameId", deleteBoardGame);

module.exports = router;
