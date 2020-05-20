/* eslint-disable no-undef */

describe('BankStatement', function () {
  var statement

  beforeEach(function () {
    statement = new BankStatement()
  })

  describe('can return a bank statement', function () {
    it('returns a bank statement with a credit', function () {
      expect(statement.newStatement([['10/01/2012', 'Credit', 20, 20]])).toEqual('date || credit || debit || balance\n 10/01/2012 || 20.00 || || 20.00')
    })

    it('returns a bank statement with a debit', function () {
      expect(statement.newStatement([['05/02/2013', 'Debit', 20, 10]])).toEqual('date || credit || debit || balance\n 05/02/2013 || || 20.00 || 10.00')
    })

    it('returns an ordered bank statement', function () {
      expect(statement.newStatement([['14/01/2012', 'Debit', 500, 2500], ['13/01/2012', 'Credit', 2000, 3000], ['10/01/2012', 'Credit', 1000, 1000]])).toEqual('date || credit || debit || balance\n 14/01/2012 || || 500.00 || 2500.00\n 13/01/2012 || 2000.00 || || 3000.00\n 10/01/2012 || 1000.00 || || 1000.00')
    })
  })

  describe('updates each line to add to the bank statement', function () {
    it('it returns a line for credit', function () {
      expect(statement._addCreditToStatement('10/01/2012', '1000.00', '1000.00')).toEqual('date || credit || debit || balance\n 10/01/2012 || 1000.00 || || 1000.00')
    })

    it('it returns a line for debit', function () {
      expect(statement._addDebitToStatement('11/01/2012', '500.00', '500.00')).toEqual('date || credit || debit || balance\n 11/01/2012 || || 500.00 || 500.00')
    })
  })

  describe('adds decimal places to amount and balance from transactionHistory', function () {
    it('adds two decimal places to the amount', function () {
      expect(statement._addDecimalPlaces(20)).toEqual('20.00')
    })
  })
})
