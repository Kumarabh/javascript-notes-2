// let and const can't be hoisted

// hoisting tricky example:-
{
  a = 10;
  b = 20;
  c = 30;
}

var a = 100; // 100
let b = 200; // Error: cannot access b before initiallization
const c = 300; // Error: cannot access a before initiallization
console.log(a);
