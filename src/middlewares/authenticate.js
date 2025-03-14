const { jwt, prisma } = require("../models");
const createError = require("../utils/createError");

const authenticate = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization || !authorization.startsWith("Bearer ")) {
      return createError(401, "Unauthorized");
    }

    const token = authorization.split(" ")[1].trim();
    if (!token) {
      return createError(401, "Unauthorized");
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const foundUser = await prisma.user.findUnique({
      where: {
        id: payload.user.id,
      },
    });

    if (!foundUser) {
      return createError(401, "Unauthorized");
    }

    const { password, createdAt, updatedAt, ...userData } = foundUser;
    req.user = userData;
    next(); // *** ห้ามลืม next() ***
  } catch (err) {
    next(err);
  }
};

module.exports = authenticate;
