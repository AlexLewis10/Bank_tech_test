/* eslint-disable no-undef */

describe('BankStatement', function () {
  var statement

  beforeEach(function () {
    statement = new BankStatement()
  })

  describe('can return a bank statement', function () {
    it('returns a bank statement with a credit', function () {
      expect(statement.newStatement(['10/01/2012', 'Credit', 20, 20])).toEqual('date || credit || debit || balance\n 10/01/2012 || 20.00 || || 20.00')
    })
  })

  describe('updates each line to add to the bank statement', function () {
    it('it returns a line for credit', function () {
      expect(statement._addCreditToStatement('10/01/2012', '1000.00', '1000.00')).toEqual('date || credit || debit || balance\n 10/01/2012 || 1000.00 || || 1000.00')
    })
  })

  describe('adds decimal places to amount and balance from transactionHistory', function () {
    it('adds two decimal places to the amount', function () {
      expect(statement._addDecimalPlaces(20)).toEqual('20.00')
    })
  })
})
