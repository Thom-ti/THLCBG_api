const { prisma } = require("../src/models");
const bcrypt = require("bcryptjs");

const hashedPassword = bcrypt.hashSync("123456", 10); // hash no async

const boardgameData = [
  {
    name: "Brass: Birmingham",
    boardgameImage:
      "https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__imagepage/img/-17KkOmxbTu2slJTabGrkO8ZW8s=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3490053.jpg",
    minPlayer: 2,
    maxPlayer: 4,
    age: 14,
    type: "CORE",
    category: "Strategy",
    thaiLC: "Lanlalen",
    description:
      "สร้างเครือข่าย ส่งเสริมอุตสาหกรรม และนำการปฏิวัติอุตสาหกรรมมาสู่โลกใบนี้",
  },
];

async function run() {
  await prisma.boardgame.createMany({
    data: boardgameData,
  });
}

console.log("DB seed...");
run();
