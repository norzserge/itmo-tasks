const Timer = require("timerpromise");

(async () => {
  console.time("Total timer");
  console.time("First timer");
  await new Timer(3).start.then(() => console.timeEnd("First timer"));
  console.time("Second timer");
  await new Timer(2).start.then(() => console.timeEnd("Second timer"));
  console.timeEnd("Total timer");
})();
