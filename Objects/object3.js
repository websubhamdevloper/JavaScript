const person = {
  name: "Subham Kundu",
  age: 21,
};

const address = {
  city: "Siliguri",
  zip: "734001",
};

const merged = Object.assign({}, person, address);
console.log(merged);
console.log(person);
console.log(address);
const username = person.name;
const userAge = person.age;
console.log(username);
console.log(userAge);
