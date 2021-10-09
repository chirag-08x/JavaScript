function newAccount(name, initialBalance) {
  let balance = initialBalance;
  function showBalance() {
    console.log(`Hello ${name} your account balance is ${balance}.`);
  }

  function deposit(amount) {
    balance += amount;
    showBalance();
  }

  function withdraw(amount) {
    if (amount > balance) {
      console.log(`Hey ${name} soory insuffiecient balance.`);
    } else {
      balance -= amount;
      showBalance();
    }
  }

  //   return showBalance
  return { showBalance: showBalance, deposit: deposit, withdraw: withdraw };
}

const chirag = newAccount("chirag", 1000);
const john = newAccount("john", 5000);
const bob = newAccount("bob", 200);

// chirag();
// john();
// bob();

chirag.showBalance();
john.showBalance();
bob.showBalance();

chirag.deposit(500);
chirag.withdraw(100);
chirag.withdraw(5000);
