function Account({ login, password }) {
  this.login = login;
  this.password = password;
}

Account.prototype.getInfo = function () {
  console.log(`login: ${this.login} , password: ${this.password}`);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo();
