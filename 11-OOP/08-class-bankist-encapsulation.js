// From Bankist

// We are creating a class around the functionality in the Bankist app
// There are pieces of the class that we want to protect, that shouldn't
// be accessbile: encapsulation
class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this._pin = pin;
        // protected property
        // can still access, but devs know to not touch
        this._movements = []; // just a convention
        this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public interface

    // Common instead of getter/setter
    getMovements() {
        return this._movements;
    }

    depoist(val) {
        this._movements.push(val);
    }

    withdrawal(val) {
        this.depoist(-val);
    }

    // This shouldn't be accessbile
    _approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.depoist(val);
            console.log('Loan approved');
        }
    }
}

const acct1 = new Account('Jonas', 'EUR', 1111);
console.log(acct1);

acct1.depoist(250);
acct1.withdrawal(140);
acct1.requestLoan(1000);
console.log(acct1);