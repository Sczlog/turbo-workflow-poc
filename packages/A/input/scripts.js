const fs = require("fs");

fs.writeFileSync(
  "./output/file",
  fs.readFileSync("./input/file", "utf-8") +
    fs.readFileSync("../C/extra/file", "utf-8"),
  "utf-8"
);
