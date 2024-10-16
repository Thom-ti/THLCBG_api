const { express } = require("../models");
const router = express.Router();
const { getAllBoardGames, viewBoardGame, addToShelf } = require("../controllers");

router.get("/", getAllBoardGames);
router.get("/:boardgameId", viewBoardGame);
router.post("/", addToShelf);

module.exports = router;
