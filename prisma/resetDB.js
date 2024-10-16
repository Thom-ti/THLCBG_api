require("dotenv").config();
const { prisma } = require("../src/models");

async function run() {
  await prisma.$executeRawUnsafe("DROP DATABASE thlcbg");
  await prisma.$executeRawUnsafe("CREATE DATABASE thlcbg");
}

console.log("Reset DB...");
run();
