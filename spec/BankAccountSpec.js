/* eslint-disable no-undef */
describe('Account', function () {
  var account

  beforeEach(function () {
    account = new Account()
  })

  describe('Account has a balance', function () {
    it('unless balance is set, account has 0', function () {
      expect(account.balance).toEqual(0)
    })

    it('balance can be set', function () {
      account.setBalance(3000)
      expect(account.balance).toEqual(3000)
    })
  })

  describe('User can make a deposit', function () {
    it('user can deposit an amount and the balance is updated', function () {
      account.makeDeposit(20, '10-01-16')
      expect(account.balance).toEqual(20)
    })
  })

  describe('User can make a withdrawal', function () {
    it('user can withdraw an amount and the balance is updated', function () {
      account.setBalance(30)
      account.makeWithdrawal(20, '10-01-16')
      expect(account.balance).toEqual(10)
    })

    it('user cannot withdraw more money than they have', function () {
      account.setBalance(30)
      expect(account.makeWithdrawal(40)).toEqual('Not enough Money, cannot withdraw')
    })
  })

  describe('date is put into the correct format', function () {
    it('when given a full date with 2 dashes it returns the date in the correct format', function () {
      expect(account.formatDate('10-01-2012')).toEqual('10/01/2012')
    })
  })

  describe('transaction is added to an array', function () {
    it('user has a transaction history array', function () {
      expect(account.transactionHistory).toEqual([])
    })

    it('receives a transaction from deposit and passes to transaction history', function () {
      account.makeDeposit(20, '10-01-2012')
      expect(account.transactionHistory).toEqual([['10/01/2012', 'Credit', 20, 20]])
    })

    it('receives a transaction from withdrawal and passes to transaction history', function () {
      account.setBalance(30)
      account.makeWithdrawal(20, '10-01-2012')
      expect(account.transactionHistory).toEqual([['10/01/2012', 'Debit', 20, 10]])
    })

    it('can add multiple transactions to transaction history', function () {
      for (var i = 0; i < 4; i++) {
        account.makeDeposit(20, '10-01-2012')
      }
      expect(account.transactionHistory).toEqual([['10/01/2012', 'Credit', 20, 20], ['10/01/2012', 'Credit', 20, 40], ['10/01/2012', 'Credit', 20, 60], ['10/01/2012', 'Credit', 20, 80]])
    })
  })

  describe('can return a bank statement', function () {
    it('returns a bank statement with a credit', function () {
      account.makeDeposit(20, '10-01-2012')
      expect(account.createBankStatement()).toEqual('date || credit || debit || balance \n 10/01/2012 || 20 || || 20')
    })

    it('returns a bank statement with a debit', function () {
      account.setBalance(30)
      account.makeWithdrawal(20, '05-02-2013')
      expect(account.createBankStatement()).toEqual('date || credit || debit || balance \n 05/02/2013 || || 20 || 10')
    })
  })

  describe('adds decimal places to amount and balance from transactionHistory', function () {
    it('adds two decimal places to the amount', function () {
      expect(account.addDecimalPlaces(20)).toEqual('20.00')
    })
  })
})
