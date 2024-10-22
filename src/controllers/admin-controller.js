const { prisma } = require("../models");
const createError = require("../utils/createError");

exports.addBoardGame = async (req, res, next) => {
  try {
    const {
      name,
      thaiName,
      boardgameImage,
      minPlayer,
      maxPlayer,
      age,
      type,
      category,
      thaiLC,
      description,
    } = req.body;

    const boardgame = await prisma.boardgame.create({
      data: {
        name,
        thaiName,
        boardgameImage,
        minPlayer,
        maxPlayer,
        age,
        type,
        category,
        thaiLC,
        description,
      },
    });

    res.json({ boardgame });
  } catch (err) {
    next(err);
  }
};

exports.deleteBoardGame = async (req, res, next) => {
  try {
    const { boardgameId } = req.params;
    const findBoardgame = await prisma.boardgame.findFirst({
      where: {
        id: Number(boardgameId),
      },
    });

    if (!findBoardgame) {
      return createError(400, "Boardgame not found");
    }

    const boardgame = await prisma.boardgame.delete({
      where: {
        id: Number(boardgameId),
      },
    });

    res.json("Delete boardgame successfully");
  } catch (err) {
    next(err);
  }
};
