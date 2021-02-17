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
}
