require("dotenv").config();
const {
  errorMiddleware,
  notFoundHandler,
  authenticate,
} = require("./middlewares");
const { express, app, cors, morgan } = require("./models");
const {
  authRoute,
  boardgameRoute,
  postRoute,
  shelfRoute,
  adminRoute,
} = require("./routes");

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/auth", authRoute);
app.use("/boardgames", authenticate, boardgameRoute);
app.use("/posts", authenticate, postRoute);
app.use("/myshelf", authenticate, shelfRoute);
app.use("/admin", authenticate, adminRoute);

app.use("*", notFoundHandler);
app.use(errorMiddleware);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
