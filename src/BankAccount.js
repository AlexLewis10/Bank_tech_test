function Account () {
  this.balance = 0
}

Account.prototype.setBalance = function (amount) {
  this.balance = amount
}

Account.prototype.makeDeposit = function (amount, date) {
  this.balance += amount
  return this.formatDate(date)
}

Account.prototype.makeWithdrawal = function (amount, date) {
  if (amount > this.balance) {
    return 'Not enough Money, cannot withdraw'
  }
  this.balance -= amount
  return this.formatDate(date)
}

Account.prototype.formatDate = function (date) {
  date = date.replace(/-/g, '/')
  return date
}
