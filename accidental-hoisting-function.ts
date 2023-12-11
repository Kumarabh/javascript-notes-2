function test() {
  a = 10;
  b = 20;
  c = 30;
}
test();

var a = 100;
let b = 200;
const c = 300;

console.log(a); // 100
console.log(b); // Cannot access before initialliztion
console.log(c); // Cannot access before initialliztion
