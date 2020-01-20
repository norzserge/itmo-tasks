const curryPow = x => y => x ** y;
/*
const partiPow = function(x) {
  return function(y) {
    return y ** x;
  };
};
*/
const partiPow = x => y => y ** x;

const qv = partiPow(2);
const cb = partiPow(3);

console.log(qv(5));
console.log(cb(5));
