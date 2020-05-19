function Account () {
  this.balance = 0
  this.transactionHistory = []
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
  var date = this.transactionHistory[0][0]
  var amount = this.transactionHistory[0][2]
  var balance = this.transactionHistory[0][3]
  if (this.transactionHistory[0][1] === 'Credit') {
    return `date || credit || debit || balance \n ${date} || ${amount} || || ${balance}`
  }
  return `date || credit || debit || balance \n ${date} || || ${amount} || ${balance}`
}

// methods below here should be private

Account.prototype.formatDate = function (date) {
  date = date.replace(/-/g, '/')
  return date
}

Account.prototype.addToTransactionHistory = function (transactionDate, type, amount, accountBalance) {
  this.transactionHistory.push([transactionDate, type, amount, accountBalance])
}

Account.prototype.addDecimalPlaces = function (number) {
  return number.toFixed(2)
}
