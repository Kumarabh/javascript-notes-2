// let and const can't be hoisted

// Example 1: 

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


// Example 2:


// var a = 10;
// let b = 20;
// const c = 30;

// {
//   a = 100;
//   b = 200;
//   // c = 300; // Error
//   // console.log(a, b, c);
// }

// console.log(a, b, c); // 100, 200, 30
