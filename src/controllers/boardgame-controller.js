const { prisma } = require("../models");
const createError = require("../utils/createError");

exports.getAllBoardGames = async (req, res, next) => {
  try {
    const data = await prisma.boardgame.findMany();
    res.json({ data });
  } catch (err) {
    next(err);
  }
};

exports.viewBoardGame = async (req, res, next) => {
  try {
    const { boardgameId } = req.params;
    const boardgame = await prisma.boardgame.findFirst({
      where: {
        id: Number(boardgameId),
      },
    });
    res.json({ boardgame });
  } catch (err) {
    next(err);
  }
};

exports.addToShelf = async (req, res, next) => {
  try {
    const { id } = req.user;
    const findId = await prisma.shelf.findFirst({
      where: {
        userId: Number(id),
      },
    });

    if (!findId) {
      const data = await prisma.shelf.create({
        data: {
          userId: Number(id),
          shelfBoardgames: {
            create: {
              boardgameId: Number(req.body.id),
            },
          },
        },
      });
      return res.json({ data });
    }

    const findBG = await prisma.shelfBoardgame.findFirst({
      where: {
        boardgameId: Number(req.body.id),
        shelfId: Number(findId.id),
      },
    });

    if (findBG) {
      return createError(400, "Already added to shelf");
    }

    const data = await prisma.shelf.update({
      where: {
        id: Number(findId.id),
      },
      data: {
        shelfBoardgames: {
          create: {
            boardgameId: Number(req.body.id),
          },
        },
      },
    });
    res.json("Completed Add to Shelf");
  } catch (err) {
    next(err);
  }
};
