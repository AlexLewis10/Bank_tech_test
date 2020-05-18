function Account () {
  this.balance = 0
}

Account.prototype.setBalance = function (balance) {
  this.balance = balance
}

Account.prototype.makeDeposit = function (amount) {
  this.balance += amount
}