// Closure
function greet(userName: string) {

  return function(greet: string) {
    return `${greet}, ${userName}`
  }
}

const greetFn = greet('John Doe');
console.log(greetFn('Hello'));
