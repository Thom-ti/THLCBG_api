const { express } = require("../models");
const router = express.Router();
const { getAllBoardGames, viewBoardGame, addToShelf } = require("../controllers");

router.get("/", getAllBoardGames);
router.get("/:id", viewBoardGame);
router.post("/:id", addToShelf);

module.exports = router;
