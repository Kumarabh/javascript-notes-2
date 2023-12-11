export enum Gender {
  male = 'Male',
  female = 'Female'
}

export enum UserType {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER'
}

export interface Person {
  firstName: string;
  lastName: string;
  gender: Gender;

}

const john: Person = {
  firstName: 'John',
  lastName: 'Doe',
  gender: Gender.male
}

const james: Person = Object.assign({}, john, { firstName: 'James', lastName: 'Smith'});
const elenor: Person = Object.assign({}, james, {firstName: 'Elenor'});

const userRoles = new Map([
  [john, UserType.USER],
  [james, UserType.USER],
  [elenor, UserType.ADMIN]
])

// for(let [user, role] of userRoles.entries()) {
//   console.log(user.firstName, role);
// }

const users: Person[] = [...userRoles.keys()];
const roles: UserType[] = [...userRoles.values()];

console.log(users);
console.log(roles);
