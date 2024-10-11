const { express } = require("../models");
const router = express.Router();
const {
  getMyShelf,
  updateStatus,
  deleteFromShelf,
} = require("../controllers");

router.get("/", getMyShelf);
router.patch("/:id", updateStatus);
router.delete("/:id", deleteFromShelf);

module.exports = router;