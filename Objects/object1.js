const person = {
  name: "subham Kundu",
  age: 21,
  city: "siliguri",
};

console.log(person.name);
console.log(person.age);
console.log(person.city);

const car = {
  brand: "Tata",
  model: "safari",
};

car.color = "Black";
car["year"] = 2026;

console.log(car.brand);
console.log(car.model);
console.log(car.year);
console.log(car.color);

const book = {
  title: "JavaScript Basics",
  author: "Subham Kundu",
  pages: 350,
};

delete book.pages;

console.log(book);
console.log("title" in book);
console.log("pages" in book);
console.log(book.hasOwnProperty("author"));

const student = {
  name: "Subham Kundu",
  grade: "A",
  subject: "Mathematics",
};

const keys = Object.keys(student);
const values = Object.values(student);

console.log(keys);
console.log(values);
