const { prisma } = require("../src/models");
const bcrypt = require("bcryptjs");

const hashedPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10); // hash no async

const userData = [
  {
    username: "LemonTi8",
    email: "lemonti@gmail.com",
    password: hashedPassword,
    role: "ADMIN",
  },
  {
    username: "123456",
    email: "123456@gmail.com",
    password: hashedPassword,
  },
  {
    username: "CoolHansome",
    email: "coolhansome@gmail.com",
    password: hashedPassword,
  },
  {
    username: "InwZa007",
    email: "InwZa007@gmail.com",
    password: hashedPassword,
  },
  {
    username: "Codecamp",
    email: "codecamp@gmail.com",
    password: hashedPassword,
  },
];

const postData = [
  {
    title: "Hello World!",
    type: "GENERAL",
    content: "This is the first post!",
    userId: 1,
  },
  {
    title: "Hello World!",
    type: "GENERAL",
    content: "This is the second post!",
    userId: 3,
  },
  {
    title: "กฎการใช้งานเว็บไซต์",
    type: "ADMIN",
    content:
      "1. ห้ามเสนอข้อความหรือเนื้อหาอันเป็นการวิพากษ์วิจารณ์หรือพาดพิงสถาบันมหากษัตริย์และราชวงศ์ เป็นอันขาด 2. ห้ามเสนอข้อความหรือเนื้อหาที่ส่อไปในทางหยาบคาย ก้าวร้าว เกินกว่าที่บรรทัดฐานของสังคมจะยอมรับได้ 3. ห้ามเสนอข้อความหรือเนื้อหาที่ส่อไปในทาง ลามก อนาจาร รุนแรง อุจาด 4. ห้ามเสนอข้อความอันมีเจตนาใส่ความบุคคลอื่น ให้ได้รับการดูหมิ่นเกลียดชังจากบุคคลอื่น โดยไม่มีแหล่งที่มาของข้อมูลอ้างอิงที่ชัดเจน 5. ห้ามเสนอข้อความอันเป็นการท้าทาย ชักชวน โดยมีเจตนาก่อให้เกิดการทะเลาะวิวาท หรือก่อให้เกิดความวุ่นวายขึ้น โดยมูลแห่งความขัดแย้งดังกล่าว ไม่ใช่การแสดงความคิดเห็นโดยเสรีเช่นวิญญูชน พึงกระทำ 6. ห้ามเสนอข้อความกล่าวโจมตี หรือวิพากษ์วิจารณ์ในทางเสียหายต่อ ศาสนา หรือคำสอนของศาสนาใด ๆ ทุกศาสนา 7. ห้ามใช้นามแฝงอันเป็นชื่อจริงของผู้อื่น โดยมีเจตนาทำให้สาธารณชนเข้าใจผิด และเจ้าของชื่อผู้นั้นได้รับความเสียหาย หรือเสื่อมเสียชื่อเสียง 8. ห้ามเสนอข้อความอันอาจเป็นเหตุให้เกิดความขัดแย้งขึ้นในระหว่างสถาบันการศึกษา หรือระหว่างสังคมใด ๆ 9. ห้ามเสนอข้อมูลส่วนตัวของผู้อื่น เช่น อีเมลหรือหมายเลขโทรศัพท์ โดยมีเจตนากลั่นแกล้งให้ผู้อื่นได้รับความเดือดร้อนรำคาญ โดยเฉพาะอย่างยิ่งกรณีเบอร์โทรศัพท์ เนื่องจากเป็นข้อมูลที่มีโอกาสผิดพลาดคลาดเคลื่อน และเป็นสื่อที่สามารถใช้ในการกลั่นแกล้งได้ง่ายกว่าชนิดอื่น 10. ห้ามเสนอข้อความหรือเนื้อหาอันเป็นสิ่งที่เกี่ยวข้องกับสิ่งผิดกฎหมายหรือศีลธรรมอันดีของสังคม",
    userId: 1,
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
    name: "Gloomhaven: Jaws of the Lion",
    thaiName: "กลูมเฮเวน: คมเขี้ยวราชสีห์",
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
    name: "The Lord of the Rings: Duel for Middle-earth",
    thaiName: "ลอร์ดออฟเดอะริงส์: มหาสงครามชิงพิภพ",
    boardgameImage:
      "https://cf.geekdo-images.com/EybxJlUc9rz7F7HVFLqsdw__original/img/Ts4M5eOW38r2oTvJmkx0uwNodv4=/0x0/filters:format(jpeg)/pic8378939.jpg",
    minPlayer: 2,
    maxPlayer: 2,
    age: 10,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "WDG Distributor",
    description:
      "สวมบทบาทเป็นฝ่ายคณะพันธมิตรแห่งแหวนหรือฝ่ายเซารอน และกำหนดชะตากรรมของมิดเดิลเอิร์ธ",
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
    name: "Agricola (Revised Edition)",
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
    name: "The White Castle",
    thaiName: "ปราสาทกระสาขาว",
    boardgameImage:
      "https://cf.geekdo-images.com/qXT1U-nFh9PE8ujfdmI7dA__imagepage/img/zfTFhCz8g6OeJi8V1HkDpaDbSzw=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7754663.jpg",
    minPlayer: 1,
    maxPlayer: 4,
    age: 12,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Tower Tactic Games",
    description:
      "ขึ้นเป็นตระกูลที่มีอิทธิพลมากที่สุดในฐานที่มั่นฮิเมจิของญี่ปุ่น",
  },
  {
    name: "Harmonies",
    thaiName: "ฮาร์โมนี่",
    boardgameImage:
      "https://cf.geekdo-images.com/A_XP2_VN3ugyqPhezowB_w__imagepage/img/eEOGt-VTMXD5zwTzFO9M4Lg7pkI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8026369.png",
    minPlayer: 1,
    maxPlayer: 4,
    age: 10,
    type: "CORE",
    category: "FAMILY",
    thaiLC: "Tower Tactic Games",
    description:
      "สร้างภูมิทัศน์และที่อยู่อาศัยของคุณเองเพื่อเชิญชวนเหล่าสัตว์เข้ามา",
  },
  {
    name: "SCOUT",
    boardgameImage:
      "https://cf.geekdo-images.com/cf0xxkevbwTGF3VUZymKjg__imagepage/img/c1nUYPglSR9Br_zPKasdnwi4q78=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6398727.png",
    minPlayer: 2,
    maxPlayer: 5,
    age: 9,
    type: "CORE",
    category: "FAMILY",
    thaiLC: "Tower Tactic Games",
    description:
      "แข่งกันแย่งชิงนักแสดงของอีกฝ่าย เพื่อจัดการแสดงละครสัตว์ที่โดดเด่น",
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
    name: "Decrypto",
    thaiName: "รหัสลับอัจฉริยะ",
    boardgameImage:
      "https://cf.geekdo-images.com/hHZWXnUTMYDd_KTAM6Jwlw__imagepage/img/txjLrQy6eZNhk1caOxfTPn54mac=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3759421.jpg",
    minPlayer: 3,
    maxPlayer: 8,
    age: 12,
    type: "CORE",
    category: "PARTY",
    thaiLC: "WDG Distributor",
    description:
      "ถอดรหัสของฝ่ายตรงข้ามก่อนที่พวกเขาจะถอดรหัสของคุณ อย่าให้ถูกจับได้",
  },
  {
    name: "Architects of the West Kingdom",
    thaiName: "สถาปนิกแห่งนครตะวันตก",
    boardgameImage:
      "https://cf.geekdo-images.com/OAX7HfOz-9N60StgADzd0g__imagepage/img/5ywjRTCEspI8ImeRWZWTgeuhl4g=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3781944.png",
    minPlayer: 1,
    maxPlayer: 5,
    age: 12,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "DICE CUP",
    description:
      "คุณจะเป็นผู้รับใช้ของกษัตริย์ที่มีคุณธรรมหรือชั่วร้าย? สร้างเส้นทางสู่ความรุ่งโรจน์ของคุณ",
  },
  {
    name: "The Quest for El Dorado",
    thaiName: "ล่าขุมทรัพย์นครทองคำ",
    boardgameImage:
      "https://cf.geekdo-images.com/b5VyYjNfAxJ4Z-Dx2UWlqg__imagepage/img/oGGZLnPoBVdO4ZlNquRvuzaQmrU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7945692.jpg",
    minPlayer: 2,
    maxPlayer: 4,
    age: 10,
    type: "CORE",
    category: "RACING",
    thaiLC: "WDG Distributor",
    description: "วิ่งแข่งขันผ่านป่าทึบในอเมริกาใต้เพื่อตามหาเมืองทองคำในตำนาน",
  },
  {
    name: "Patchwork",
    thaiName: "เย็บปักถักร้อย",
    boardgameImage:
      "https://cf.geekdo-images.com/wLW7pFn0--20lEizEz5p3A__imagepage/img/qDuX2TRjK3utCghPRUfrG42fcFk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2270442.jpg",
    minPlayer: 2,
    maxPlayer: 2,
    age: 8,
    type: "CORE",
    category: "FAMILY",
    thaiLC: "Tower Tactic Games",
    description:
      "ต่อชิ้นผ้าเข้าด้วยกันและไม่เว้นช่องว่าง เพื่อเป็นผู้เชี่ยวชาญด้านกระดุม",
  },
  {
    name: "Ultimate Railroads",
    thaiName: "กำเนิดทางรถไฟเปลี่ยนโลก",
    boardgameImage:
      "https://cf.geekdo-images.com/zwAQWL7YfL8kC5Bgp67soQ__imagepage/img/EQFYL4GsqMcuhGX6-EYWbPkOef8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6378170.jpg",
    minPlayer: 1,
    maxPlayer: 4,
    age: 12,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Lanlalen",
    description:
      "สร้างทางรถไฟในรัสเซีย เยอรมนี สหรัฐอเมริกา และอื่น ๆ ในชุดสะสมขนาดใหญ่ชุดนี้",
  },
  {
    name: "Wyrmspan",
    thaiName: "ปีกมังกร",
    boardgameImage:
      "https://cf.geekdo-images.com/oXUkkh9uq3zBVWQ8mbgMfQ__imagepage/img/DaWOlDtxDRns4ibNr1_NYlicTw8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7947338.png",
    minPlayer: 1,
    maxPlayer: 5,
    age: 14,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Siam Board Games",
    description: "สร้างวิหารขนาดใหญ่สำหรับมังกรทุกรูปร่างและขนาด!",
  },
  {
    name: "Codenames",
    thaiName: "โค้ดเนมส์",
    boardgameImage:
      "https://cf.geekdo-images.com/F_KDEu0GjdClml8N7c8Imw__imagepage/img/rc_Do8f5v41nWEGcwHE1eKAkIfI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2582929.jpg",
    minPlayer: 2,
    maxPlayer: 8,
    age: 14,
    type: "CORE",
    category: "PARTY",
    thaiLC: "DICE CUP",
    description:
      "มอบคำใบ้อันชาญฉลาดเพียงคำเดียวให้กับทีมของคุณเพื่อช่วยให้พวกเขาสามารถมองเห็นตัวแทนของพวกเขาในสนามได้",
  },
  {
    name: "Pandemic",
    thaiName: "เกมโรคระบาด",
    boardgameImage:
      "https://cf.geekdo-images.com/S3ybV1LAp-8SnHIXLLjVqA__imagepage/img/kIBu-2Ljb_ml5n-S8uIbE6ehGFc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1534148.jpg",
    minPlayer: 2,
    maxPlayer: 4,
    age: 8,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Siam Board Games",
    description:
      "ทีมผู้เชี่ยวชาญของคุณต้องป้องกันไม่ให้โลกประสบกับการระบาดของไวรัส",
  },
  {
    name: "Cartographers",
    thaiName: "นักเขียนแผนที่แห่งนาลอส",
    boardgameImage:
      "https://cf.geekdo-images.com/GifbnAmsA4lfEcDkeaC9VA__imagepage/img/TvxriorE7sP7kHcUQAgLGoJP7ZQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4397932.png",
    minPlayer: 1,
    maxPlayer: 100,
    age: 10,
    type: "CORE",
    category: "FAMILY",
    thaiLC: "Tower Tactic Games",
    description:
      "สำรวจดินแดนในนามของราชินีและวาดแผนที่ที่ดีที่สุดเพื่อรับความโปรดปรานจากองค์ราชินี",
  },
  {
    name: "Nucleum",
    thaiName: "นิวเคลียม",
    boardgameImage:
      "https://cf.geekdo-images.com/fIVUaMvbfy6GCOgfxt7xaw__imagepage/img/pGB5F9H0ZHo_i027V2XSdx1r8og=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7647168.jpg",
    minPlayer: 1,
    maxPlayer: 4,
    age: 14,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Tower Tactic Games",
    description: "กลายเป็นผู้นำของการปฏิวัติอุตสาหกรรมในไทม์ไลน์ที่แตกต่างกัน",
  },
  {
    name: "It's a Wonderful World",
    thaiName: "สร้างโลกมหัศจรรย์",
    boardgameImage:
      "https://cf.geekdo-images.com/od4vDTdXGPSVc-kjLqM11w__imagepage/img/j25VMfEYxUIIp7tk_F8QCv96Z0g=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4651175.jpg",
    minPlayer: 1,
    maxPlayer: 5,
    age: 14,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "DICE CUP",
    description:
      "จัดระเบียบโลกดิสโทเปียที่ 'สมบูรณ์แบบ' ให้กับตัวเอง ทำโครงการให้เสร็จและจัดสรรทรัพยากรให้เต็มที่",
  },
  {
    name: "Ticket to Ride: Europe",
    thaiName: "เกมต่อรถไฟยุโรป",
    boardgameImage:
      "https://cf.geekdo-images.com/0K1AOciqlMVUWFPLTJSiww__imagepage/img/pC5hC440R46jn4EpfdYV5rL4VOc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic66668.jpg",
    minPlayer: 2,
    maxPlayer: 5,
    age: 8,
    type: "CORE",
    category: "FAMILY",
    thaiLC: "WDG Distributor",
    description:
      "สร้างเส้นทางรถไฟทั่วทั้งยุโรปในภาคต่อของเกมกระดานยอดนิยมสำหรับครอบครัว",
  },
  {
    name: "Stone Age",
    thaiName: "อารยธรรมยุคหิน",
    boardgameImage:
      "https://cf.geekdo-images.com/elmZegVZ6gp4_5izUgxGQQ__imagepage/img/rC8YvN1x0vj-3ot8WK9YDzDxORU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1632539.jpg",
    minPlayer: 2,
    maxPlayer: 4,
    age: 10,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Lanlalen",
    description:
      "ชนเผ่าในยุคก่อนประวัติศาสตร์ต้องดิ้นรนเพื่อเอาชีวิตรอดและปรับตัว เผ่าใดจะก้าวขึ้นสู่จุดสูงสุด?",
  },
  {
    name: "Praga Caput Regni",
    thaiName: "ปราก มหานครแห่งจักรวรรดิ",
    boardgameImage:
      "https://cf.geekdo-images.com/aUPeXVwc40xrgud2XeZwyA__imagepage/img/ZZJm8Ip3ANP5TUcOEiZKs5Sti9k=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5671087.png",
    minPlayer: 1,
    maxPlayer: 4,
    age: 14,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Undercut Games",
    description:
      "ชาวเมืองผู้มั่งมีในยุคกลางของปรากจัดโครงการก่อสร้างเพื่อให้ได้รับความโปรดปรานจากกษัตริย์",
  },
  {
    name: "Unmatched: Cobble & Fog",
    thaiName: "สัประยุทธสุดขั้ว ภาคคืนหมอกและตรอกหิน",
    boardgameImage:
      "https://cf.geekdo-images.com/iyIO6udRfIn0xM1rIxyO2g__imagepage/img/g7x-HM-q7WTn6RqUsIFQYhwBK7Y=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5056685.jpg",
    minPlayer: 2,
    maxPlayer: 4,
    age: 9,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "DICE CUP",
    description:
      "วีรบุรุษจากวรรณกรรมยุควิกตอเรียเข้าร่วมการต่อสู้จนถึงแก่ชีวิต",
  },
  {
    name: "Jaipur",
    thaiName: "ชัยปุระ",
    boardgameImage:
      "https://cf.geekdo-images.com/_LTujSe_o16nvjDC-J0seA__imagepage/img/X7qZxqheM7_ADLuPhC11b_9IhYw=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5100947.jpg",
    minPlayer: 2,
    maxPlayer: 2,
    age: 10,
    type: "CORE",
    category: "FAMILY",
    thaiLC: "Siam Board Games",
    description:
      "ค้าขายสินค้าเพื่อเป็นพ่อค้าที่ร่ำรวยที่สุดในเกมสั้น ๆ สำหรับสองคนนี้",
  },
  {
    name: "Arkham Horror: The Card Game (Revised Edition)",
    thaiName: "อาถรรพ์แห่งอาร์คัม เดอะการ์ดเกม",
    boardgameImage:
      "https://cf.geekdo-images.com/RdCWCXPnBGSxoOhk5Hkq_g__imagepage/img/IjAnsFhA0onPRgYnLLsRG3PZHcI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6530423.jpg",
    minPlayer: 1,
    maxPlayer: 4,
    age: 14,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Tower Tactic Games",
    description:
      "ออกสำรวจและไขปริศนาแห่งเมืองอาร์คัม พร้อมกับเผชิญหน้าสิ่งลี้ลับที่คืบคลานในความมืด",
  },
  {
    name: "Sagrada",
    thaiName: "ซากราดา",
    boardgameImage:
      "https://cf.geekdo-images.com/PZt3EAAGV3dFIVuwMR0AEw__imagepage/img/F8DS3hdZfVIcxVpPSZV7DMLrPJ4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3525224.jpg",
    minPlayer: 1,
    maxPlayer: 4,
    age: 14,
    type: "CORE",
    category: "FAMILY",
    thaiLC: "Lanlalen",
    description:
      "ประดิษฐ์หน้าต่างกระจกสีที่สวยงามที่สุดโดยวางลูกเต๋าโปร่งใสหลากสีสันอย่างระมัดระวัง",
  },
  {
    name: "Modern Art",
    thaiName: "ยอดนักประมูล",
    boardgameImage:
      "https://cf.geekdo-images.com/wLto-xaabHwKQe_Bc4iD1Q__imagepage/img/zLttqNoD_8ukBx9b2boUAHWTMec=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3458036.png",
    minPlayer: 3,
    maxPlayer: 5,
    age: 10,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "More Than a Game",
    description:
      "การประมูลสี่ประเภทที่ท้าทายผู้เล่นในเกมการเก็งกำไรทางศิลปะคลาสสิกนี้",
  },
  {
    name: "The Resistance: Avalon",
    thaiName: "อวาลอน",
    boardgameImage:
      "https://cf.geekdo-images.com/LPa6rsGcv8S0-OeNjCOAEQ__imagepage/img/3xVP5JSdSfFbo2c1nnZS5xxGhfI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1398895.jpg",
    minPlayer: 5,
    maxPlayer: 10,
    age: 13,
    type: "CORE",
    category: "PARTY",
    thaiLC: "Lanlalen",
    description:
      "คุณจะไว้ใจใครได้บ้าง? เกมตัดช้อยส์ที่ดำเนินเรื่องภายในอาณาจักรในตำนานของกษัตริย์อาเธอร์",
  },
  {
    name: "Forest Shuffle",
    thaiName: "ฟอเรสต์ ชัฟเฟิ่ล",
    boardgameImage:
      "https://cf.geekdo-images.com/08bC8NviSTNc4Zvur4pueA__imagepage/img/2L2NC1klY9Hiwa0xqImGgLNzrTM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7578350.jpg",
    minPlayer: 2,
    maxPlayer: 5,
    age: 10,
    type: "CORE",
    category: "FAMILY",
    thaiLC: "WDG Distributor",
    description: "รวบรวมต้นไม้ที่มีคะแนนมากที่สุดและดึงดูดสัตว์ป่ามา",
  },
  {
    name: "Azul: Summer Pavilion",
    thaiName: "พระราชวังฤดูร้อน",
    boardgameImage:
      "https://cf.geekdo-images.com/843kZ6WR0HfyXWEybA6L7A__imagepage/img/mSBHURzdEuArNvhdQzHmsChf31k=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4930887.jpg",
    minPlayer: 2,
    maxPlayer: 4,
    age: 8,
    type: "CORE",
    category: "FAMILY",
    thaiLC: "Tower Tactic Games",
    description:
      "คุณคือช่างฝีมือที่กำลังสร้างสรรค์ลวดลายอันโดดเด่นภายในพระราชวังของกษัตริย์",
  },
  {
    name: "A Game of Thrones: The Board Game (Second Edition)",
    thaiName: "เกมล่าบัลลังก์",
    boardgameImage:
      "https://cf.geekdo-images.com/M_7UvwZvuxBVjxdadsa5AA__imagepage/img/AuKDe6Q4lyGdm6rTS2JUEXvhTbQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1077906.jpg",
    minPlayer: 3,
    maxPlayer: 6,
    age: 14,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Siam Board Games",
    description:
      "สร้างพันธมิตรและทำลายมัน! ขณะที่คุณมุ่งมั่นที่จะเป็นหนึ่งและพิชิตเวสเทอรอส",
  },
  {
    name: "Carcassonne",
    thaiName: "การ์กาซอน",
    boardgameImage:
      "https://cf.geekdo-images.com/okM0dq_bEXnbyQTOvHfwRA__imagepagezoom/img/Uot8PDJpJKZ7asDoB9Pw3zb3jnc=/fit-in/1200x900/filters:no_upscale():strip_icc()/pic6544250.png",
    minPlayer: 2,
    maxPlayer: 5,
    age: 7,
    type: "CORE",
    category: "FAMILY",
    thaiLC: "Lanlalen",
    description:
      "สร้างภูมิทัศน์ยุคกลางของฝรั่งเศสซึ่งประกอบด้วยบ้านเมือง วิหารอาราม และฟาร์มไร่",
  },
  {
    name: "Splendor",
    thaiName: "เกมค้าเพชร",
    boardgameImage:
      "https://cf.geekdo-images.com/vNFe4JkhKAERzi4T0Ntwpw__imagepage/img/JXnPzdgTeDkRrxESA86gnCw4Zws=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8234167.png",
    minPlayer: 2,
    maxPlayer: 4,
    age: 10,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Siam Board Games",
    description:
      "สวมบทเป็นพ่อค้าในยุคฟื้นฟูศิลปวิทยา แข่งขันกันเพื่อแย่งชิงอัญมณี ได้มาซึ่งทรัพย์สิน และเอาใจขุนนาง",
  },
  {
    name: "Dead of Winter: A Crossroads Game",
    thaiName: "เหมันต์มรณะ",
    boardgameImage:
      "https://cf.geekdo-images.com/g4mV4BH-ZrhMUVgil-yV1A__imagepage/img/CJ6erNGmKfFGhR6ZbxXbBI7XaoE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3016500.jpg",
    minPlayer: 2,
    maxPlayer: 5,
    age: 13,
    type: "CORE",
    category: "THEMATIC",
    thaiLC: "Siam Board Games",
    description:
      "ขณะที่คุณดิ้นรนเพื่อให้ผู้รอดชีวิตมีชีวิตอยู่ คุณจะให้คุณค่ากับความต้องการแบบกลุ่มหรือแบบส่วนตัวอย่างไร?",
  },
  {
    name: "Ticket to Ride",
    thaiName: "เกมต่อรถไฟ",
    boardgameImage:
      "https://cf.geekdo-images.com/ZWJg0dCdrWHxVnc0eFXK8w__imagepage/img/FcSGmLeIStNfb0l_qKSuOyz-rHY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic38668.jpg",
    minPlayer: 2,
    maxPlayer: 5,
    age: 8,
    type: "CORE",
    category: "FAMILY",
    thaiLC: "Siam Board Games",
    description:
      "สร้างทางรถไฟของคุณข้ามอเมริกาเหนือเพื่อเชื่อมต่อเมืองต่าง ๆ และผลิตตั๋วให้เสร็จสมบูรณ์",
  },
  {
    name: "Calico",
    thaiName: "คาลิโก้",
    boardgameImage:
      "https://cf.geekdo-images.com/qGkU6XsF1448F_A4P8TY5Q__imagepage/img/bYx0eGf8Mf6JOKYAuz2axP2K72U=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8124431.jpg",
    minPlayer: 1,
    maxPlayer: 4,
    age: 10,
    type: "CORE",
    category: "FAMILY",
    thaiLC: "DICE CUP",
    description: "เย็บผ้าห่ม เก็บกระดุม ล่อแมว!",
  },
  {
    name: "Cyclades",
    thaiName: "สงครามมหาเทพโอลิมปัส",
    boardgameImage:
      "https://cf.geekdo-images.com/6QbaJOS8acWkJ6gSYI0KaQ__imagepage/img/nsZYZovWCEFL3MsohH7GWycMmno=/fit-in/900x600/filters:no_upscale():strip_icc()/pic584779.jpg",
    minPlayer: 2,
    maxPlayer: 5,
    age: 13,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Tower Tactic Games",
    description: "แข่งขันกันประมูลเพื่อเอาใจทวยเทพ และแย่งชิงพื้นที่ครอบครอง",
  },
  {
    name: "Camel Up (Second Edition)",
    boardgameImage:
      "https://cf.geekdo-images.com/qnR2V3YsW963_JaVznBjsw__imagepage/img/MQFGpkRRlGiCxBmdP16-MT7Gmbo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8584959.jpg",
    minPlayer: 3,
    maxPlayer: 8,
    age: 8,
    type: "CORE",
    category: "PARTY",
    thaiLC: "Tower Tactic Games",
    description:
      "วางเดิมพันว่าอูฐตัวไหนจะชนะเป็นอันดับแรก และการวิ่งสุดอลหม่านที่อูฐขี่ซ้อนกันได้ พร้อมอุปสรรคขัดขวางการวิ่งในสนามแข่ง",
  },
  {
    name: "Century: Golem Edition",
    boardgameImage:
      "https://cf.geekdo-images.com/1bihoShOuqaCuZJXB3Q2gQ__imagepage/img/kzKg1kM2QIHzqG80smivWExOtPQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3936124.jpg",
    minPlayer: 2,
    maxPlayer: 5,
    age: 8,
    type: "CORE",
    category: "FAMILY",
    thaiLC: "Tower Tactic Games",
    description:
      "คว้าคริสตัลอันมีค่าและสังเคราะห์มันเพื่อสร้างโกเล็มอันน่าอัศจรรย์",
  },
  {
    name: "Unmatched: Battle of Legends, Volume One",
    thaiName: "สัประยุทธ์สุดขั้ว: ภาคสมรภูมิแห่งตำนาน ชุดที่ 1",
    boardgameImage:
      "https://cf.geekdo-images.com/4AlLbprNustr9G7pbkGRuw__imagepage/img/dU9nyqzF1TBO7j2eBeJOB_Jkr5k=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4621579.jpg",
    minPlayer: 2,
    maxPlayer: 4,
    age: 9,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "DICE CUP",
    description:
      "วีรบุรุษและเหล่าร้ายในตำนาน (พร้อมสหายร่วมอุดมการณ์) ต่อสู้กันจนถึงชีวิต",
  },
  {
    name: "Deception: Murder in Hong Kong",
    thaiName: "แฟ้มคดีปริศนา (CS Files)",
    boardgameImage:
      "https://cf.geekdo-images.com/1COY3oeK9aN2_XNimKaNww__imagepage/img/C6vLzxqHIAtA39Owy2erCo9x9ic=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3033330.jpg",
    minPlayer: 4,
    maxPlayer: 12,
    age: 14,
    type: "CORE",
    category: "PARTY",
    thaiLC: "DICE CUP",
    description:
      "ตีความหลักฐานทางนิติเวชเพื่อคลี่คลายคดีฆาตกรรม ระวังไว้ คนร้ายอยู่ในหมู่พวกเรานี่แหละ!",
  },
  {
    name: "MicroMacro: Crime City",
    thaiName: "เมืองอาชญากร นครย่อส่วน",
    boardgameImage:
      "https://cf.geekdo-images.com/1M-1d6fr3U9t670MCVOTeg__imagepage/img/ONEG4bYSuDz3rKQsd5mtaa3Z188=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5896816.jpg",
    minPlayer: 1,
    maxPlayer: 4,
    age: 12,
    type: "CORE",
    category: "FAMILY",
    thaiLC: "Siam Board Games",
    description: "ค้นหาเบาะแสจุดเล็ก ๆ น้อย ๆ เพื่อไขคดีใหญ่ ๆ",
  },
  {
    name: "Zombicide: Black Plague",
    boardgameImage:
      "https://cf.geekdo-images.com/kVHuMBxmathfnq42XINBQg__imagepage/img/bcAP5usD-DobalBN6rRIyN6sJQk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2482309.jpg",
    minPlayer: 1,
    maxPlayer: 6,
    age: 14,
    type: "CORE",
    category: "THEMATIC",
    thaiLC: "More Than a Game",
    description: "ร่วมมือกันฆ่าซอมบี้ในยุคกลาง! แล้วฆ่าซอมบี้ให้มากที่สุด!",
  },
  {
    name: "Samurai",
    boardgameImage:
      "https://cf.geekdo-images.com/o9-sNXmFS_TLAb7ZlZ4dRA__imagepage/img/yXniplPYXixomNLic5j_DsgF9xI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3211873.jpg",
    minPlayer: 2,
    maxPlayer: 4,
    age: 10,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Lanlalen",
    description:
      "แข่งขันกันครองใจประชาชนทั้ง 3 วรรณะ เพื่อรวมญี่ปุ่นภายใต้การปกครองของคุณ",
  },
  {
    name: "The Princes of Florence",
    thaiName: "เจ้าชายแห่งฟลอเรนซ์",
    boardgameImage:
      "https://cf.geekdo-images.com/GdXWqyTfO8F_M9hFtfo-HA__imagepage/img/P0nqirno9L6dp1P4HP-dj6PVfVI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7565506.jpg",
    minPlayer: 1,
    maxPlayer: 5,
    age: 12,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Board Game Academy & Lunar Cafe",
    description:
      "ดึงดูดช่างฝีมือและนักวิชาการให้มาเยี่ยมชมพระราชวังของคุณด้วยการสร้างและจัดวางภูมิทัศน์",
  },
  {
    name: "Mind MGMT",
    thaiName: "ไมนด์ แมเนจเมนท์",
    boardgameImage:
      "https://cf.geekdo-images.com/hYP-VIJGRFR8yB78-UN7Rg__imagepage/img/1X9-5PelilGBlFjFaGQKtLrVcAI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5154610.jpg",
    minPlayer: 1,
    maxPlayer: 5,
    age: 13,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "DICE CUP",
    description:
      "ผู้เล่นคนอื่น ๆ จะสามารถตามหาผู้สรรหา และจับกุมพวกเขาได้ก่อนที่ MIND MGMT จะชนะเกมแล้วเข้าควบคุมโลกใบนี้ได้หรือไม่?",
  },
  {
    name: "Bitoku",
    thaiName: "ราชาภูต",
    boardgameImage:
      "https://cf.geekdo-images.com/sMP4YfVfwv6vvh_y7EcXzA__imagepage/img/WvpJxV4zbrQC4VgM2gF-LlATsto=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6182978.jpg",
    minPlayer: 1,
    maxPlayer: 4,
    age: 12,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Tower Tactic Games",
    description:
      "แข่งขันกันเป็นราชาภูติแห่งพงไพร ออกสำรวจและช่วยเหลือเหล่าดวงวิญญาณที่หลงทาง",
  },
  {
    name: "Kemet: Blood and Sand",
    thaiName: "โลหิตอาบผืนทราย",
    boardgameImage:
      "https://cf.geekdo-images.com/IU-az-0jlIpoUxDHCCclNw__imagepage/img/bdlv2Rb3gKbs_6301geR_OROz7c=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6230640.jpg",
    minPlayer: 2,
    maxPlayer: 5,
    age: 13,
    type: "CORE",
    category: "STRATEGY",
    thaiLC: "Tower Tactic Games",
    description:
      "เล่นเป็นเทพเจ้าอียิปต์ผู้ทำสงครามและสร้างกองทัพที่แข็งแกร่งที่สุดเพื่อครอบครองอียิปต์",
  },
  // {
  //   name: ,
  //   thaiName: ,
  //   boardgameImage: ,
  //   minPlayer: ,
  //   maxPlayer: ,
  //   age: ,
  //   type: "CORE",
  //   category: ,
  //   thaiLC: ,
  //   description:
  // },
];

async function run() {
  await prisma.user.createMany({
    data: userData,
  });
  await prisma.post.createMany({
    data: postData,
  });
  await prisma.boardgame.createMany({
    data: boardgameData,
  });
}

console.log("DB seed...");
run();
