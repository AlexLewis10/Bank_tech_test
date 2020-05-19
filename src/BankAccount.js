function Account () {
  this.balance = 0
  this.transactionHistory = []
  this.transactionString = 'date || credit || debit || balance'
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
  this._resetTransactionString()
  for (var i = 0; i < this.transactionHistory.length; i++) {
    var date = this.transactionHistory[i][0]
    var amount = this._addDecimalPlaces(this.transactionHistory[i][2])
    var balance = this._addDecimalPlaces(this.transactionHistory[i][3])
    if (this.transactionHistory[i][1] === 'Credit') {
      this._addCreditToStatement(date, amount, balance)
    } else {
      this._addDebitToStatement(date, amount, balance)
    }
  }
  return this.transactionString
}

Account.prototype._addCreditToStatement = function (date, amount, balance) {
  var creditString = `\n ${date} || ${amount} || || ${balance}`
  this.transactionString = `${this.transactionString}` + creditString
  return this.transactionString
}

Account.prototype._addDebitToStatement = function (date, amount, balance) {
  var debitString = `\n ${date} || || ${amount} || ${balance}`
  this.transactionString = `${this.transactionString}` + debitString
  return this.transactionString
}

Account.prototype._resetTransactionString = function () {
  this.transactionString = 'date || credit || debit || balance'
}

Account.prototype._formatDate = function (date) {
  date = date.replace(/-/g, '/')
  return date
}

Account.prototype._addToTransactionHistory = function (transactionDate, type, amount, accountBalance) {
  this.transactionHistory.unshift([transactionDate, type, amount, accountBalance])
}

Account.prototype._addDecimalPlaces = function (number) {
  return number.toFixed(2)
}

// Method made only for testing purposes
Account.prototype._setBalance = function (amount) {
  this.balance = amount
}
