function BankStatement () {
  this.transactionString = 'date || credit || debit || balance'
}

BankStatement.prototype.newStatement = function () {
  var string = `${this.transactionString}\n 10/01/2012 || 20.00 || || 20.00`
  return string
}

BankStatement.prototype._addDecimalPlaces = function (number) {
  return number.toFixed(2)
}
