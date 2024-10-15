const { prisma, bcrypt, jwt } = require("../models");
const createError = require("../utils/createError");

exports.register = async (req, res, next) => {
  try {
    const { username, email, password, confirmPassword } = req.input;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return createError(400, "Email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.json({ newUser });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.input;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return createError(400, "User not found");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return createError(400, "Invalid password");
    }

    const payload = {
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "14d",
    });

    res.json({ user: payload, token });
  } catch (err) {
    next(err);
  }
};

exports.forgotPassword = async (req, res, next) => {
  try {
    res.json("Forgot Password Controller...");
  } catch (err) {
    next(err);
  }
};
