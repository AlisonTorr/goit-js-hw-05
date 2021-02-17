class StringBuilder {
  constructor(string) {
    this._value = string;
  }

  get value() {
    return this._value;
  }

  append(str) {
    const valuesArr = this._value.split("");
    valuesArr.push(str);
    return valuesArr;
  }

  prepend(str) {
    const valuesArr = this._value.split("");
    valuesArr.shift(str);
    return valuesArr;
  }

  pad(str) {
    const valuesArr = this._value.split("");
    valuesArr.shift(str).push(str);
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
