"use strict";

//1

const usersName = ["Mike", "Bob", "Nicola"];
const users = {};

[users.mike, users.bob, users.nicola] = usersName;
console.log(users);

//2

const salaries = {
  Mike: 1500,
  Bob: 1800,
  Nicola: 1700,
};

function maxSalary(salaries) {
  const users = Object.entries(salaries);
  let maxSalary = 0;
  let user = "";

  for (const [name, salary] of users) {
    if (salary > maxSalary) {
      maxSalary = salary;
      user = name;
    }
  }
  return console.log(user);
}

maxSalary(salaries);

//3


const userS = {mike: 'Mike', bob: 'Bob', nicola: 'Nicola'}
let {mike : userMike, bob : userBob, nicola : userNicola} = userS
console.log(userMike, userBob, userNicola);
 

