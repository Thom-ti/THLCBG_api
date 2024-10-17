const { express } = require("../models");
const router = express.Router();
const {
  getMyShelf,
  updateStatus,
  deleteFromShelf,
} = require("../controllers");

router.get("/", getMyShelf);
router.patch("/:boardgameId", updateStatus);
router.delete("/:boardgameId", deleteFromShelf);

module.exports = router;