class Account {
  constructor(name, initialBalance) {
    this.name = name;
    this.initialBalance = initialBalance;
    this.bankName = "HDFC";
  }
  // We can also set up bankname over here
  // bankName = "HDFC";
  deposit(amount) {
    this.initialBalance += amount;
    console.log(
      `Hello my name is ${this.name} and my account balance is ${this.initialBalance}.`
    );
  }
}

const john = new Account("John", 100);
console.log(john);
console.log(john.name);
john.deposit(500);
console.log(john.bankName);
