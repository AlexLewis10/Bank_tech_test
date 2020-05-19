function Account () {
  this.balance = 0
  this.transactionHistory = []
  this.transactionString = 'date || credit || debit || balance'
}

Account.prototype.setBalance = function (amount) {
  this.balance = amount
}

Account.prototype.makeDeposit = function (amount, date) {
  this.balance += amount
  var accountBalance = this.balance
  var transactionDate = this.formatDate(date)
  this.addToTransactionHistory(transactionDate, 'Credit', amount, accountBalance)
}

Account.prototype.makeWithdrawal = function (amount, date) {
  if (amount > this.balance) {
    return 'Not enough Money, cannot withdraw'
  }
  this.balance -= amount
  var accountBalance = this.balance
  var transactionDate = this.formatDate(date)
  this.addToTransactionHistory(transactionDate, 'Debit', amount, accountBalance)
}

Account.prototype.createBankStatement = function () {
  this.resetTransactionString()
  for (var i = 0; i < this.transactionHistory.length; i++) {
    var date = this.transactionHistory[i][0]
    var amount = this.addDecimalPlaces(this.transactionHistory[i][2])
    var balance = this.addDecimalPlaces(this.transactionHistory[i][3])
    if (this.transactionHistory[i][1] === 'Credit') {
      this.addCreditToStatement(date, amount, balance)
    } else {
      this.addDebitToStatement(date, amount, balance)
    }
  }
  return this.transactionString
}

// methods below here should be private

Account.prototype.addCreditToStatement = function (date, amount, balance) {
  var debitString = `\n ${date} || ${amount} || || ${balance}`
  this.transactionString = `${this.transactionString}` + debitString
  return this.transactionString
}

Account.prototype.formatDate = function (date) {
  date = date.replace(/-/g, '/')
  return date
}

Account.prototype.addToTransactionHistory = function (transactionDate, type, amount, accountBalance) {
  this.transactionHistory.unshift([transactionDate, type, amount, accountBalance])
}

Account.prototype.addDecimalPlaces = function (number) {
  return number.toFixed(2)
}
