const fs = require("fs");

let text =fs.readFileSync("del.txt", "utf-8");
text = text.replace("browser", "Rohan");
console.log("the content of the file is")
console.log(text);

console.log("creating a new file");
fs.writeFileSync("rohan.txt", text);