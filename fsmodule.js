const fs = require("fs");
fs.readFile("file.txt", "utf8", (err, data) => {
  console.log(err, data);
});
console.log("finished reading file");
