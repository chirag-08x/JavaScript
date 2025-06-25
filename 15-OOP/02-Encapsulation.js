class BankAccount {
    // Private field, not accessible out this class
    #balance = 0;

    constructor(name){
        this.name = name;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance(){
        console.log(`Hello ${this.name} your account balance is ${this.#balance}`)
    }
}

const acc = new BankAccount("chirag");
acc.deposit(500);
acc.deposit(1200);

acc.getBalance()
// console.log(acc.#balance) // error accessing it.