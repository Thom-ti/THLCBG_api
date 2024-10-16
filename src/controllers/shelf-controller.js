const { prisma } = require("../models");
const createError = require("../utils/createError");

exports.getMyShelf = async (req, res, next) => {
  try {
    const shelf = await prisma.shelf.findMany({
      where: {
        userId: Number(req.user.id),
      },
      include: {
        shelfBoardgames: {
          include: {
            boardgame: true,
          },
        }
      }
    });
    res.json({ shelf });
  } catch (err) {
    next(err);
  }
};

exports.updateStatus = async (req, res, next) => {
  try {
    res.json("updateStatus Controller");
  } catch (err) {
    next(err);
  }
};

exports.deleteFromShelf = async (req, res, next) => {
  try {
    res.json("deleteFromShelf Controller");
  } catch (err) {
    next(err);
  }
};
