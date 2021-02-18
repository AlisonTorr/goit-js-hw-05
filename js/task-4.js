class StringBuilder {
  constructor(string) {
    this._value = string;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value.split("").push(str);
    this._value.join("");

    return this._value;
  }

  prepend(str) {
    this._value.split("");
    this._value.shift(str);
    this._value.join("");

    return this._value;
  }

  pad(str) {
    this._value.split("");
    this._value.shift(str);
    this._value.push(str);
    this._value.join("");

    return this._value;
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value);
