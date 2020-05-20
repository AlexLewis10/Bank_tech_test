function BankStatement () {
  this.transactionString = 'date || credit || debit || balance'
}

BankStatement.prototype.newStatement = function (transactionHistory) {
  for (var i = 0; i < transactionHistory.length; i++) {
    var date = transactionHistory[i][0]
    var amount = this._addDecimalPlaces(transactionHistory[i][2])
    var balance = this._addDecimalPlaces(transactionHistory[i][3])
    if (transactionHistory[i][1] === 'Credit') {
      this._addCreditToStatement(date, amount, balance)
    } else {
      this._addDebitToStatement(date, amount, balance)
    }
  }
  return this.transactionString
}

BankStatement.prototype._addCreditToStatement = function (date, amount, balance) {
  var creditString = `\n ${date} || ${amount} || || ${balance}`
  this.transactionString = `${this.transactionString}` + creditString
  return this.transactionString
}

BankStatement.prototype._addDebitToStatement = function (date, amount, balance) {
  var debitString = `\n ${date} || || ${amount} || ${balance}`
  this.transactionString = `${this.transactionString}` + debitString
  return this.transactionString
}

BankStatement.prototype._addDecimalPlaces = function (number) {
  return number.toFixed(2)
}

