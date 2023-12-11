import { Gender, Person } from "../common/model";

function greet(this: any, greeting1, greeting2) {
  return `${greeting1} ${this.firstName} ${this.lastName}, ${greeting2}`;
}

const person: Person = {
  firstName: 'John',
  lastName: 'Doe',
  gender: Gender.male
}

const callResult: string = greet.call(person, 'Hello', 'How r u ?');
console.log(callResult);

const applyResult: string = greet.apply(person, ['Hii', 'How Are you ?']);
console.log(applyResult);

const bindResult = greet.bind(person, 'Hey', 'What is up ?');
console.log(bindResult());

const bindResult2 = greet.bind(person);
console.log(bindResult2('Hey', 'What is up ?'));
