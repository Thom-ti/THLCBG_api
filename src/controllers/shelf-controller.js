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
          orderBy: {
            boardgame: {
              name: "asc", // เรียงจากน้อยไปมาก (A-Z) หรือใช้ 'desc' ถ้าต้องการเรียงจากมากไปน้อย (Z-A)
            },
          },
        },
      },
    });
    res.json({ shelf });
  } catch (err) {
    next(err);
  }
};

exports.updateStatus = async (req, res, next) => {
  try {
    const { boardgameId } = req.params;
    const { id } = req.user;
    const { status } = req.body;

    const findShelf = await prisma.shelf.findFirst({
      where: {
        userId: Number(id),
      },
    });

    if (!findShelf) {
      return createError(400, "Shelf not found");
    }

    if (findShelf.userId !== Number(id)) {
      return createError(401, "Cannot update from another user's shelf");
    }

    const updateStatus = await prisma.shelfBoardgame.update({
      where: {
        shelfId_boardgameId: {
          boardgameId: Number(boardgameId),
          shelfId: Number(findShelf.id),
        },
      },
      data: {
        status,
      },
    });

    res.json({ updateStatus });
  } catch (err) {
    next(err);
  }
};

exports.deleteFromShelf = async (req, res, next) => {
  try {
    const { boardgameId } = req.params;
    const { id } = req.user;

    const findShelf = await prisma.shelf.findFirst({
      where: {
        userId: Number(id),
      },
    });

    if (!findShelf) {
      return createError(400, "Shelf not found");
    }

    if (findShelf.userId !== Number(id)) {
      return createError(401, "Cannot delete from another user's shelf");
    }

    const deleteBoardgame = await prisma.shelfBoardgame.delete({
      where: {
        shelfId_boardgameId: {
          boardgameId: Number(boardgameId),
          shelfId: Number(findShelf.id),
        },
      },
    });

    res.json("Deleted from shelf successfully");
  } catch (err) {
    next(err);
  }
};
