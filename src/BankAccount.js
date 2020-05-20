function Account () {
  this.balance = 0
  this.transactionHistory = []
}

Account.prototype.makeDeposit = function (amount, date) {
  this.balance += amount
  var accountBalance = this.balance
  var transactionDate = this._formatDate(date)
  this._addToTransactionHistory(transactionDate, 'Credit', amount, accountBalance)
}

Account.prototype.makeWithdrawal = function (amount, date) {
  if (amount > this.balance) {
    return 'Not enough Money, cannot withdraw'
  }
  this.balance -= amount
  var accountBalance = this.balance
  var transactionDate = this._formatDate(date)
  this._addToTransactionHistory(transactionDate, 'Debit', amount, accountBalance)
}

Account.prototype.createBankStatement = function () {
  var statement = new BankStatement()
  statement = statement.newStatement(this.transactionHistory)
  return statement
}

Account.prototype._formatDate = function (date) {
  date = date.replace(/-/g, '/')
  return date
}

Account.prototype._addToTransactionHistory = function (transactionDate, type, amount, accountBalance) {
  this.transactionHistory.unshift([transactionDate, type, amount, accountBalance])
}

// Method made only for testing purposes
Account.prototype._setBalance = function (amount) {
  this.balance = amount
}
