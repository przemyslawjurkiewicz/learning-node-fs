var fs = require("fs");
var colors = require("colors");

fs.readdir("./", "utf-8", function(err, data) {
  console.log("Pobrano zawartość katalogu.".green);
  var dirList = data;
  fs.writeFile("./dirContentsList.txt", dirList.join("\n"), function(err) {
    if (err) throw err;
    console.log("Zapisano do pliku dirContentsList.txt !".blue);
    fs.readFile("./dirContentsList.txt", "utf-8", function(err, data) {
      console.log("Dane po zapisie:".red);
      console.log(data);
    });
  });
});
