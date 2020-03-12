const fs = require("fs");
let buffer = "";
const rdStr = fs.createReadStream("1.txt", { highWaterMark: 1 });
rdStr.on("data", d => {
  buffer = buffer + (+d + 1);
});
rdStr.on("end", () => fs.createWriteStream("1.txt").write(buffer));
