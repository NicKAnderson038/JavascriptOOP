class Car {
  static comparePrice(car1, car2) {
    return Math.abs(car1.price - car2.price);
  }
  constructor(color, price) {
    Object.assign(this, { color, price });
  }
  combine() {
    return console.log(`The ${this.color} costs $${this.price}`);
  }
}

const car1 = new Car("Nissan Path Finder", 20000);
const car2 = new Car("Honda Fit", 15000);
console.log(car1.combine(), car2.combine());

// static objects can be ran on the class only.
console.log(
  `The difference between the cars is $${Car.comparePrice(car1, car2)}.`
);
