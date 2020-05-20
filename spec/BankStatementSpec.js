/* eslint-disable no-undef */

describe('BankStatement', function () {
  var statement

  beforeEach(function () {
    statement = new BankStatement(['10/01/2012', 'Credit', 20, 20])
  })

  describe('can return a bank statement', function () {
    it('returns a bank statement with a credit', function () {
      expect(statement.newStatement()).toEqual('date || credit || debit || balance\n 10/01/2012 || 20.00 || || 20.00')
    })
  })
})
