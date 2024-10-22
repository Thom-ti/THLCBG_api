const { prisma } = require("../models");
const createError = require("../utils/createError");

exports.getAllPosts = async (req, res, next) => {
  try {
    const data = await prisma.post.findMany({
      include: {
        user: {
          select: {
            id: true,
            username: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    res.json({ data });
  } catch (err) {
    next(err);
  }
};

exports.viewPost = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const post = await prisma.post.findUnique({
      where: { id: Number(postId) },
    });

    if (!post) {
      return createError(400, "Post not found");
    }

    const data = await prisma.post.findUnique({
      where: { id: Number(postId) },
      include: {
        user: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });
    res.json({ data });
  } catch (err) {
    next(err);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const { title, type, content } = req.body;
    const { id } = req.user;
    const data = await prisma.post.create({
      data: {
        title,
        type,
        content,
        userId: Number(id),
      },
    });

    res.json({ data });
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const { title, type, content } = req.body;
    const { postId } = req.params;
    const { id, role } = req.user;

    const post = await prisma.post.findUnique({
      where: { id: Number(postId) },
    });

    if (!post) {
      return createError(400, "Post not found");
    }

    const postOwnerId = await prisma.post.findFirst({
      where: { id: Number(postId) },
      select: {
        userId: true,
      },
    });

    if (role !== "ADMIN" && postOwnerId.userId !== id) {
      return createError(403, "You are not the owner of this post");
    }

    const data = await prisma.post.update({
      where: { id: Number(postId) },
      data: {
        title,
        type,
        content,
      },
    });

    res.json({ data });
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const { id, role } = req.user;

    const post = await prisma.post.findUnique({
      where: { id: Number(postId) },
    });

    if (!post) {
      return createError(400, "Post not found");
    }

    const postOwnerId = await prisma.post.findUnique({
      where: { id: Number(postId) },
      select: {
        userId: true,
      },
    });

    if (role !== "ADMIN" && postOwnerId.userId !== id) {
      return createError(403, "You are not the owner of this post");
    }

    const data = await prisma.post.delete({
      where: { id: Number(postId) },
    });
    res.json("Delete post successfully");
  } catch (err) {
    next(err);
  }
};
