const { express } = require("../models");
const router = express.Router();
const {
  getAllPosts,
  viewPost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers");

router.get("/", getAllPosts);
router.get("/:postId", viewPost);
router.post("/", createPost);
router.patch("/:postId", updatePost);
router.delete("/:postId", deletePost);

module.exports = router;