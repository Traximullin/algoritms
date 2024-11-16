class Bank {
    balance: number[];

    constructor(balance: number[]) {
        this.balance = balance;
    }

    transfer(account1, account2, money) {
        if (this.balance.length < account1 || this.balance.length < account2)
            return false;
        
        if (this.balance[account1 - 1] - money < 0)
            return false;

        this.balance[account2 - 1] += money;
        this.balance[account1 - 1] -= money;
        
        return true;

    };

    deposit(account, money) {
        if (this.balance.length < account)
            return false;

        this.balance[account - 1] += money;
        
        return true;
    };

    withdraw(account, money) {
        const diff = this.balance[account - 1] - money;
        
        if (isNaN(diff) || diff < 0)
            return false;
        
        this.balance[account - 1] = diff;
        
        return true;
    };

}


const bank = new Bank([10, 100, 20, 50, 30])

console.log(bank.withdraw(10, 10))