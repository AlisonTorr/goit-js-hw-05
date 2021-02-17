class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance},  price: ${price}`
    );
  }

  constructor(maxSpeed, speed, isOn, distance, price) {
    this.maxSpeed = max.Speed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    return (this._prce = newPrice);
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
  }

  accelerate(value) {
    this.speed += value;
    const totalSpeed = this.speed < this.maxSpeed ? this.speed : this.maxSpeed;
    return totalSpeed;
  }

  decelerate(value) {
    const decSpeed = this.speed - value;
    const totalSpeed = decSpeed > 0 ? decSpeed : this.speed;
    return totalSpeed;
  }

  drive(hours) {
    if (this.isOn) {
      this.distance = hours * this.speed;
    }
    return this.distance;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
