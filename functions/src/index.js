const gossConcat = require("goss_concat");
function setRGB(r = 255, g = 255, b = 255) {
  return gossConcat("rgb(", r, ",", g, ",", b, ")");
}

console.log(setRGB(125, 54, 34));
