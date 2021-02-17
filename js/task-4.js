class StringBuilder {
  constructor(string) {
    this._value = string;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value.split("").push(str);

    return this._value;
  }

  prepend(str) {
    const valuesArr = this._value.split("");
    valuesArr.shift(str);
    return valuesArr;
  }

  pad(str) {
    const valuesArr = this._value.split("");
    valuesArr.shift(str);
    valuesArr.push(str);
    return valuesArr;
  }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value);
