function BankStatement (transactionHistory) {
  this.transactionHistory = transactionHistory
  this.transactionString = 'date || credit || debit || balance'
}

BankStatement.prototype.newStatement = function () {
  var string = `${this.transactionString}\n 10/01/2012 || 20.00 || || 20.00`
  return string
}