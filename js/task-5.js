class Car {
  constructor({ maxSpeed, speed, isOn, distance, price }) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this._price = price;
  }

  static getSpecs() {
    console.log(
      `maxSpeed: ${this.maxSpeed}, speed: ${this.speed}, isOn: ${this.isOn}, distance: ${this.distance},  price: ${this.price}`
    );
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
    this.speed = 0;
  }

  accelerate(value) {
    const accSpeed = this.speed + value;
    this.speed = accSpeed <= this.maxSpeed ? accSpeed : this.speed;
  }

  decelerate(value) {
    const decSpeed = this.speed - value;
    this.speed = decSpeed >= 0 ? decSpeed : this.speed;
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
