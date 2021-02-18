class StringBuilder {
  constructor(string) {
    this._value = string;
  }

  get value() {
    return this._value;
  }

  append(str) {
    this._value.split("").push(str).join("");

    return this._value;
  }

  prepend(str) {
    const valuesArr = this._value.split("").join("");
    valuesArr.shift(str);
    return valuesArr;
  }

  pad(str) {
    let valuesArr = this._value.split("");
    valuesArr.shift(str);
    valuesArr.push(str);
    valuesArr.join("");
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
