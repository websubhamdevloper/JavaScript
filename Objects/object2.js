const calculator = {
  x: 10,
  y: 20,
  add: function () {
    return this.x + this.y;
  },
  multiply: function (factor) {
    return (this.x + this.y) * factor;
  },
};

console.log(calculator.add());
console.log(calculator.multiply(5));
