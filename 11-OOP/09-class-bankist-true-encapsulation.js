// From Bankist

// This is implementing class fields
// This stuff is in 'stage 3' proposal

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods

class Account {
    // 1) public field (instances not prototype)
    locale = navigator.language;


    // 2) private fields
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        //this._movements = [];
        //this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}`);
    }

    // 3. Public Methods

    // Common instead of getter/setter
    getMovements() {
        return this.#movements;
    }

    depoist(val) {
        this.#movements.push(val);
    }

    withdrawal(val) {
        this.depoist(-val);
    }

    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.depoist(val);
            console.log('Loan approved');
        }
    }

    // 4) Private Methods
    // not fully baked
    #approveLoan(val) {
        return true;
    }
}

const acct1 = new Account('Jonas', 'EUR', 1111);
console.log(acct1);

acct1.depoist(250);
acct1.withdrawal(140);
acct1.requestLoan(1000);
console.log(acct1);

//console.log(acct1.#movements); // error