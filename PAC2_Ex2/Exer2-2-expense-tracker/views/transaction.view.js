/**
 * @class TransactionView
 *
 * Visual representation of the model.
 */
class TransactionView {
  constructor() {
    this.balance = document.getElementById('balance');
    this.money_plus = document.getElementById('money-plus');
    this.money_minus = document.getElementById('money-minus');
    this.transactionList = document.getElementById('list');
    this.form = document.getElementById('form');
    this.text = document.getElementById('text');
    this.amount = document.getElementById('amount');

    this._initLocalListeners();
    this._temporaryText = '';
  }

  get _amount() {
    return Number(this.amount.value);
  }

  get _text() {
    return this.text.value;
  }

  _resetInput() {
    this.amount.value = '';
    this.text.value = '';
  }

  // Update temporary state
  _initLocalListeners() {
    this.transactionList.addEventListener('input', (event) => {
      if (event.target.className === 'editable') {
        this._temporaryText = event.target.innerText;
      }
    });
  }

  displayTransactions(transactions) {
    // Delete all nodes
    while (this.transactionList.firstChild) {
      this.transactionList.removeChild(this.transactionList.firstChild);
    }

    // Show default message
    if (transactions.length > 0) {
      // Create nodes
      transactions.forEach((transaction) => {
        // Get sign
        const sign = transaction.amount < 0 ? '-' : '+';
        const item = document.createElement('li');
        item.id = transaction.id;

        // Add class based on value
        item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
        item.innerHTML = `<span contenteditable="true" class="editable">${transaction.text}</span> <span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete-btn">x</button>`;
        this.transactionList.appendChild(item);
      });
      // update total, income, expense
      const amounts = transactions.map((transaction) => transaction.amount);
      this.updateValues(amounts);
    } else {
      this.balance.innerText = '$0.00';
      this.money_plus.innerText = '$0.00';
      this.money_minus.innerText = '$0.00';
    }

    // Debugging
    console.log(transactions);
  }

  updateValues(amounts) {
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts
      .filter((item) => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
    const expense = (amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    this.balance.innerText = `$${total}`;
    this.money_plus.innerText = `$${income}`;
    this.money_minus.innerText = `$${expense}`;
  }

  bindAddTransaction(handler) {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (this._text && this._amount) {
        handler(this._text, this._amount);
        this._resetInput();
      }
    });
  }

  bindDeleteTransaction(handler) {
    this.transactionList.addEventListener('click', (event) => {
      if (event.target.className === 'delete-btn') {
        const id = event.target.parentElement.id;
        handler(id);
      }
    });
  }

  bindEditTransaction(handler) {
    this.transactionList.addEventListener('focusout', (event) => {
      if (this._temporaryText) {
        const id = event.target.parentElement.id;
        handler(id, this._temporaryText);
        this._temporaryText = '';
      }
    });
  }
}
