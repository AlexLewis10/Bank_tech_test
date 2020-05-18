function Account () {
  this.balance = 0
  this.transactionHistory = []
}

Account.prototype.setBalance = function (amount) {
  this.balance = amount
}

Account.prototype.makeDeposit = function (amount, date) {
  this.balance += amount
  var transactionDate = this.formatDate(date)
  this.addToTransactionHistory(transactionDate, 'Debit', this.balance)
}

Account.prototype.makeWithdrawal = function (amount, date) {
  if (amount > this.balance) {
    return 'Not enough Money, cannot withdraw'
  }
  this.balance -= amount
  return this.formatDate(date)
}

// methods below here should be private

Account.prototype.formatDate = function (date) {
  date = date.replace(/-/g, '/')
  return date
}

Account.prototype.addToTransactionHistory = function (date, type, balance) {
  this.transactionHistory.push([date, type, balance])
}
