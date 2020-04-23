const { o3: obj } = require("./protochain");
let arrProto = [];

// recursion method
const result = (object) => {
  // base case
  if (Reflect.getPrototypeOf(object) === null) {
    return false;
  } else {
    arrProto.push(Reflect.getPrototypeOf(object).name);
    // deepening recursion
    result(Reflect.getPrototypeOf(object));
  }
};

result(obj);
console.log(arrProto); // [ 'JavaScript', 'LiveScript', 'Mocha' ]

export default arrProto;
