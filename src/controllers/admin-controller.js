const { prisma, path, fs } = require("../models");
const cloudinary = require("../config/cloudinary");
const createError = require("../utils/createError");

exports.addBoardGame = async (req, res, next) => {
  try {
    const {
      name,
      thaiName,
      minPlayer,
      maxPlayer,
      age,
      type,
      category,
      thaiLC,
      description,
    } = req.body;

    const haveFile = !!req.file;
    let uploadResult = {};

    if (haveFile) {
      uploadResult = await cloudinary.uploader.upload(req.file.path, {
        overwrite: true,
        public_id: path.parse(req.file.path).name,
      });
      fs.unlink(req.file.path);
    }

    const boardgame = await prisma.boardgame.create({
      data: {
        name,
        thaiName,
        boardgameImage: uploadResult.secure_url || "",
        minPlayer: Number(minPlayer),
        maxPlayer: Number(maxPlayer),
        age: Number(age),
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
