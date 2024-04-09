/**
 * @class TransactionController
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
class TransactionController {
  constructor(service, view) {
    this.service = service;
    this.view = view;

    // Explicit this binding
    this.service.bindTransactionListChanged(this.onTransactionListChanged);
    this.view.bindAddTransaction(this.handleAddTransaction);
    this.view.bindDeleteTransaction(this.handleDeleteTransaction);

    // Display initial handleAddTransactions
    this.onTransactionListChanged(this.service.transactions);
  }

  onTransactionListChanged = transactions => {
    this.view.displayTransactions(transactions);
  };

  handleAddTransaction = (text, amount) => {
    this.service.addTransaction(text, amount);
  };

  handleDeleteTransaction = id => {
    this.service.deleteTransaction(id);
  };

}
