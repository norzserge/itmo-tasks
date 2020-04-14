require("fs").readFile("./package.json", (read = (err, data) => err ? console.error(err) : console.log(data.toString())));
