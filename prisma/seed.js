const { prisma } = require("../src/models");
const bcrypt = require("bcryptjs");

const hashedPassword = bcrypt.hashSync("123456", 10); // hash no async

const usersData = [
  {
    username: "LemonTi8",
    email: "lemonti@gmail.com",
    password: hashedPassword,
  },
  {
    username: "123456",
    email: "123456@gmail.com",
    password: hashedPassword,
  },
];

const boardgameData = [
  {
    name: "Brass: Birmingham",
    boardgameImage:
      "https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__imagepage/img/-17KkOmxbTu2slJTabGrkO8ZW8s=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3490053.jpg",
    minPlayer: 2,
    maxPlayer: 4,
    age: 14,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Lanlalen",
    description:
      "สร้างเครือข่าย ส่งเสริมอุตสาหกรรม และนำการปฏิวัติอุตสาหกรรมมาสู่โลกใบนี้",
  },
  {
    name: "Ark Nova",
    thaiName: "นาวาสรรพสัตว์",
    boardgameImage:
      "https://cf.geekdo-images.com/SoU8p28Sk1s8MSvoM4N8pQ__imagepage/img/qR1EvTSNPjDa-pNPGxU9HY2oKfs=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6293412.jpg",
    minPlayer: 1,
    maxPlayer: 4,
    age: 14,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Tower Tactic Games",
    description:
      "วางแผนและสร้างสวนสัตว์ที่ทันสมัย รวมถึงจัดการได้อย่างมีประสิทธิภาพ พร้อมกับทำโครงการอนุรักษ์ควบคู่กัน",
  },
  {
    name: "Terraforming Mars",
    thaiName: "พลิกพิภพดาวอังคาร",
    boardgameImage:
      "https://cf.geekdo-images.com/wg9oOLcsKvDesSUdZQ4rxw__imagepage/img/FS1RE8Ue6nk1pNbPI3l-OSapQGc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3536616.jpg",
    minPlayer: 1,
    maxPlayer: 5,
    age: 12,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Siam Board Games",
    description:
      "แข่งขันกับบริษัทอื่น เพื่อปรับสภาพและทำให้ดาวอังคารอยู่อาศัยโดยมนุษย์ได้",
  },
  {
    name: "War of the Ring: Second Edition",
    thaiName: "สงครามแหวนครองพิภพ",
    boardgameImage:
      "https://cf.geekdo-images.com/ImPgGag98W6gpV1KV812aA__imagepage/img/ZHAFxwwPAmpSqOjPb98GZV_x3rA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1215633.jpg",
    minPlayer: 2,
    maxPlayer: 4,
    age: 13,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Legendary Wargame",
    description:
      "กลุ่มพันธมิตรและกลุ่มประชาชนเสรีปะทะกับซารอนเพื่อชะตากรรมของมิดเดิลเอิร์ธ",
  },
  {
    name: "Gloomhaven: Jaws of the Lion",
    thaiName: "คมเขี้ยวราชสีห์",
    boardgameImage:
      "https://cf.geekdo-images.com/_HhIdavYW-hid20Iq3hhmg__imagepage/img/JUEcmeR5Cm5haFjoG5f_Uv8Zlws=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5055631.jpg",
    minPlayer: 1,
    maxPlayer: 4,
    age: 14,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Siam Board Games",
    description:
      "เอาชนะมอนสเตอร์ด้วยการเล่นไพ่เชิงกลยุทธ์ในแคมเปญของ Gloomhaven ที่มีถึง 25 สถานการณ์",
  },
  {
    name: "Spirit Island",
    thaiName: "เกาะภูติพิทักษ์",
    boardgameImage:
      "https://cf.geekdo-images.com/kjCm4ZvPjIZxS-mYgSPy1g__imagepage/img/py7KzNjXVOuVesFZB7LwqCbvALY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7013651.jpg",
    minPlayer: 1,
    maxPlayer: 4,
    age: 13,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Siam Board Games",
    description:
      "เหล่าภูติพิทักษ์ของเกาะอันไกลโพ้น ปกป้องเกาะจากเหล่าผู้รุกรานจากโลกภายนอก",
  },
  {
    name: "7 Wonders Duel",
    boardgameImage:
      "https://cf.geekdo-images.com/zdagMskTF7wJBPjX74XsRw__imagepage/img/HdJ4d4O1P89V4UIhZnL3zoYnjow=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2576399.jpg",
    minPlayer: 2,
    maxPlayer: 2,
    age: 10,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "WDG Distributor",
    description: "สร้างเมืองและสิ่งมหัศจรรย์ทั้ง 7 แข่งกัน",
  },
  {
    name: "Arkham Horror: The Card Game",
    thaiName: "อาถรรพ์แห่งอาร์คัม เดอะการ์ดเกม",
    boardgameImage:
      "https://cf.geekdo-images.com/B5F5ulz0UivNgrI9Ky0euA__imagepage/img/tgpLRvv6AIsClnegErNpAoieeMo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3122349.jpg",
    minPlayer: 1,
    maxPlayer: 2,
    age: 14,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Tower Tactic Games",
    description:
      "ออกสำรวจและไขปริศนาแห่งเมืองอาร์คัม พร้อมกับเผชิญหน้าสิ่งลี้ลับที่คืบคลานในความมืด",
  },
  {
    name: "Lost Ruins of Arnak",
    thaiName: "นครสาบสูญแห่งอาร์นัค",
    boardgameImage:
      "https://cf.geekdo-images.com/6GqH14TJJhza86BX5HCLEQ__imagepage/img/eImUMUWzDaUiHkUBzOL9EFdQY10=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5674958.jpg",
    minPlayer: 1,
    maxPlayer: 4,
    age: 12,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "DICE CUP",
    description:
      "ขึ้นสำรวจเกาะกลางสมุทรเพื่อเก็บเกี่ยวสมบัติล้ำค่า และค้นพบนครสาบสูญแห่งอาร์นัค",
  },
  {
    name: "Wingspan",
    thaiName: "ปีกปักษา",
    boardgameImage:
      "https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__imagepage/img/uIjeoKgHMcRtzRSR4MoUYl3nXxs=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4458123.jpg",
    minPlayer: 1,
    maxPlayer: 5,
    age: 10,
    type: "CORE",
    category: "FAMILY",
    thaiLC: "Siam Board Games",
    description:
      "สร้างสวนแห่งปักษาอันสวยงามขึ้นมาเพื่อดึงดูดปักษีทั้งหลายเข้ามาอยู่อาศัยในสวนของเรา",
  },
  {
    name: "Terra Mystica",
    thaiName: "พิภพมนตรา",
    boardgameImage:
      "https://cf.geekdo-images.com/bre12I1YiXkZr7elvriz4A__imagepage/img/sgQ0huJCNuEtY8L98yF8B_7g6kY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5375624.jpg",
    minPlayer: 2,
    maxPlayer: 5,
    age: 12,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Board Game Academy",
    description:
      "บัญชาชนเผ่ามหัศจรรย์ ขยายอิทธิพลและพื้นที่ปกครอง เข้าร่วมลิทธิเพื่อรวบรวมความศรัทธา",
  },
  {
    name: "Root",
    thaiName: "เกมชิงอธิปไตยแห่งวูดแลนด์ สู่อำนาจและความชอบธรรม",
    boardgameImage:
      "https://cf.geekdo-images.com/JUAUWaVUzeBgzirhZNmHHw__imagepage/img/ZF-dta5ffawuKAkAt2LB-QTIv5M=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4254509.jpg",
    minPlayer: 2,
    maxPlayer: 4,
    age: 10,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Tower Tactic Games",
    description:
      "ตัดสินชะตากรรมของป่า ในขณะที่กลุ่มคนในป่าต่อสู้เพื่อเป้าหมายที่แตกต่างกัน",
  },
  {
    name: "Orléans",
    thaiName: "เมืองออร์เลอ็อง",
    boardgameImage:
      "https://cf.geekdo-images.com/nagl1li6kYt9elV9jbfVQw__imagepagezoom/img/pJ4xcb_3BR7JrWL4aNiLoq6468M=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic6228507.jpg",
    minPlayer: 2,
    maxPlayer: 5,
    age: 12,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Board Game Academy",
    description:
      "ช่างฝีมือ นักปราชญ์ และนักบวช สามารถช่วยให้คุณครองอำนาจสูงสุดได้ แต่ใครจะปรากฏตัวขึ้นมาช่วยคุณกัน?",
  },
  {
    name: "Everdell",
    thaiName: "ดินแดนแห่งมนต์เสน่ห์",
    boardgameImage:
      "https://cf.geekdo-images.com/fjE7V5LNq31yVEW_yuqI-Q__imagepage/img/ijYTk6KGtxLRdIvLsGar13ZHs4c=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3918905.png",
    minPlayer: 1,
    maxPlayer: 4,
    age: 10,
    type: "CORE",
    category: "FAMILY",
    thaiLC: "More Than a Game",
    description:
      "รวบรวมทรัพยากรเพื่อพัฒนาหมู่บ้านที่กลมกลืนกับสัตว์และโครงสร้างในป่า",
  },
  {
    name: "Viticulture Essential Edition",
    thaiName: "วิถีแห่งไวน์",
    boardgameImage:
      "https://cf.geekdo-images.com/l_PRU2lVlX9seScRFcvFlA__imagepage/img/SWmCgt3LzSd05GPn6EW-Yr0m8aE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6500949.jpg",
    minPlayer: 1,
    maxPlayer: 6,
    age: 13,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Tower Tactic Games",
    description:
      "สร้างโรงกลั่นไวน์ที่เจริญรุ่งเรืองที่สุดในอิตาลีจากไร่องุ่นในทัสคานีที่คุณได้รับมรดกมา",
  },
  {
    name: "Kanban EV",
    thaiName: "คังบัน อีวี",
    boardgameImage:
      "https://cf.geekdo-images.com/L2Wn-zUqkcHgqvwvY212Ig__imagepage/img/3ZAolgiUAzj8YUJhTOyrfGTB9Sg=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4924232.jpg",
    minPlayer: 1,
    maxPlayer: 4,
    age: 14,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Thumbs Up",
    description:
      "พนักงานโรงงาน EV ปรับปรุงและสร้างสรรค์นวัตกรรมเพื่อโดดเด่นในการประชุมคณะกรรมการใหญ่",
  },
  {
    name: "Cascadia",
    thaiName: "คาสคาเดีย",
    boardgameImage:
      "https://cf.geekdo-images.com/MjeJZfulbsM1DSV3DrGJYA__imagepage/img/0ksox22FKLq-Z-rsbBlF2IDG9x0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5100691.jpg",
    minPlayer: 1,
    maxPlayer: 4,
    age: 10,
    type: "CORE",
    category: "FAMILY",
    thaiLC: "Tower Tactic Games",
    description:
      "สร้างระบบนิเวศที่กลมกลืนที่สุดในขณะที่คุณแก้ไขปริศนาเกี่ยวกับถิ่นที่อยู่อาศัยและสัตว์ป่าร่วมกัน",
  },
  {
    name: "Mansions of Madness: Second Edition",
    thaiName: "คฤหาสน์วิปลาส",
    boardgameImage:
      "https://cf.geekdo-images.com/LIooA9bTdjnE9qmhjL-UFw__imagepage/img/nhF-Ys7IOrSMNwJVZSjMV2iVjXo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3118622.jpg",
    minPlayer: 1,
    maxPlayer: 5,
    age: 14,
    type: "CORE",
    category: "THEMATIC",
    thaiLC: "Siam Board Games",
    description:
      "ไขปริศนาในอาร์คัมพร้อมทีมสืบสวนของคุณในเกมที่ควบคุมด้วยแอพนี้",
  },
  {
    name: "Sky Team",
    thaiName: "ปฏิการเหนือน่านฟ้า",
    boardgameImage:
      "https://cf.geekdo-images.com/uXMeQzNenHb3zK7Hoa6b2w__imagepage/img/pGD_ZWkXcMk6JsTpFwwBVYk-sdk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7398904.jpg",
    minPlayer: 2,
    maxPlayer: 2,
    age: 12,
    type: "CORE",
    category: "THEMATIC",
    thaiLC: "Tower Tactic Games",
    description: "นักบินและผู้ช่วยนักบินทำงานร่วมกันเพื่อลงจอดเครื่องบิน",
  },
  {
    name: "Power Grid",
    thaiName: "เกมโรงไฟฟ้า",
    boardgameImage:
      "https://cf.geekdo-images.com/yd6LuatytHRhcFCxCf-EEg__imagepage/img/-tc_XLn5RXXaNfQHtlpf4BhyWPM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4459753.jpg",
    minPlayer: 2,
    maxPlayer: 6,
    age: 12,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Siam Board Games",
    description:
      "ประมูล สร้างเครือข่าย และจัดการทรัพยากรในการแข่งขันเพื่อจ่ายพลังงานให้กับเมืองต่างๆ ให้ได้มากที่สุด",
  },
  {
    name: "Agricola",
    thaiName: "อากริโคล่า",
    boardgameImage:
      "https://cf.geekdo-images.com/YCGWJMFwOI5efji2RJ2mSw__imagepage/img/phEZ4Gus0VvAVuT2BVzeISa90Pw=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8093340.jpg",
    minPlayer: 1,
    maxPlayer: 4,
    age: 12,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Tower Tactic Games",
    description: "ทำให้ฟาร์มของคุณเจริญรุ่งเรือง",
  },
  {
    name: "Azul",
    thaiName: "อาซูล",
    boardgameImage:
      "https://cf.geekdo-images.com/aPSHJO0d0XOpQR5X-wJonw__imagepage/img/q4uWd2nXGeEkKDR8Cc3NhXG9PEU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6973671.png",
    minPlayer: 2,
    maxPlayer: 4,
    age: 8,
    type: "CORE",
    category: "FAMILY",
    thaiLC: "Tower Tactic Games",
    description:
      "ประดับผนังพระราชวังของคุณอย่างมีศิลปะด้วยการร่างกระเบื้องที่สวยงามที่สุด",
  },
  {
    name: "7 Wonders",
    thaiName: "7 สิ่งมหัศจรรย์",
    boardgameImage:
      "https://cf.geekdo-images.com/35h9Za_JvMMMtx_92kT0Jg__imagepage/img/WKlTys0Dc3F6x9r05Fwyvs82tz4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7149798.jpg",
    minPlayer: 2,
    maxPlayer: 7,
    age: 10,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Siam Board Games",
    description:
      "ร่างการ์ดเพื่อพัฒนาอารยธรรมโบราณของคุณและสร้างสิ่งมหัศจรรย์ของโลก",
  },
  {
    name: "Revive",
    thaiName: "ปฏิบัติการฟื้นคืนพิภพ",
    boardgameImage:
      "https://cf.geekdo-images.com/V0OZ9QR0pC9G5t5i9MoZTQ__imagepage/img/DJkiIc0KnxJev7jjmF5LnLEkYq8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6950224.jpg",
    minPlayer: 1,
    maxPlayer: 4,
    age: 14,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Quest",
    description: "ฟื้นคืนอารยธรรม 5,000 ปีหลังการล่มสลายของมนุษยชาติ",
  },
  {
    name: "Wingspan Asia",
    thaiName: "ปีกปักษา นกเอเชีย",
    boardgameImage:
      "https://cf.geekdo-images.com/h1dRxq4lNMpuSUSGdgCmfA__imagepage/img/YNHv34MLl6pMMjoQKIJKusbmHbA=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7107431.jpg",
    minPlayer: 1,
    maxPlayer: 2,
    age: 10,
    type: "CORE",
    category: "FAMILY",
    thaiLC: "Siam Board Games",
    description:
      "เดินทางไปเอเชียเพื่อค้นพบนกชนิดใหม่ในเขตอนุรักษ์สัตว์ป่าของคุณ",
  },
  // {
  //   name: ,
  //   thaiName: ,
  //   boardgameImage: ,
  //   minPlayer: ,
  //   maxPlayer: ,
  //   age: ,
  //   type: ,
  //   category: ,
  //   thaiLC: ,
  //   description:
  // },
];

async function run() {
  await prisma.boardgame.createMany({
    data: boardgameData,
  });
  await prisma.user.createMany({
    data: usersData,
  });
}

console.log("DB seed...");
run();
