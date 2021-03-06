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
      account._setBalance(3000)
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
      account._setBalance(30)
      account.makeWithdrawal(20, '10-01-16')
      expect(account.balance).toEqual(10)
    })

    it('user cannot withdraw more money than they have', function () {
      account._setBalance(30)
      expect(account.makeWithdrawal(40)).toEqual('Not enough Money, cannot withdraw')
    })
  })

  describe('date is put into the correct format', function () {
    it('when given a full date with 2 dashes it returns the date in the correct format', function () {
      expect(account._formatDate('10-01-2012')).toEqual('10/01/2012')
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
      account._setBalance(30)
      account.makeWithdrawal(20, '10-01-2012')
      expect(account.transactionHistory).toEqual([['10/01/2012', 'Debit', 20, 10]])
    })

    // This test now useless superseded by the one after?
    it('can add multiple transactions to transaction history', function () {
      for (var i = 0; i < 4; i++) {
        account.makeDeposit(20, '10-01-2012')
      }
      expect(account.transactionHistory).toEqual([['10/01/2012', 'Credit', 20, 80], ['10/01/2012', 'Credit', 20, 60], ['10/01/2012', 'Credit', 20, 40], ['10/01/2012', 'Credit', 20, 20]])
    })

    it('the most recent transaction is at the front of the transaction history array', function () {
      // Create helper method with acceptance criteria?
      account.makeDeposit(1000, '10-01-2012')
      account.makeDeposit(2000, '13-01-2012')
      account.makeWithdrawal(500, '14-01-2012')
      expect(account.transactionHistory).toEqual([['14/01/2012', 'Debit', 500, 2500], ['13/01/2012', 'Credit', 2000, 3000], ['10/01/2012', 'Credit', 1000, 1000]])
    })
  })

  describe('can return a bank statement', function () {
    it('returns a bank statement with a credit', function () {
      account.makeDeposit(20, '10-01-2012')
      expect(account.createBankStatement()).toEqual('date || credit || debit || balance\n 10/01/2012 || 20.00 || || 20.00')
    })

    it('returns a bank statement with a debit', function () {
      account._setBalance(30)
      account.makeWithdrawal(20, '05-02-2013')
      expect(account.createBankStatement()).toEqual('date || credit || debit || balance\n 05/02/2013 || || 20.00 || 10.00')
    })

    it('returns an ordered bank statement', function () {
      account.makeDeposit(1000, '10-01-2012')
      account.makeDeposit(2000, '13-01-2012')
      account.makeWithdrawal(500, '14-01-2012')
      expect(account.createBankStatement()).toEqual('date || credit || debit || balance\n 14/01/2012 || || 500.00 || 2500.00\n 13/01/2012 || 2000.00 || || 3000.00\n 10/01/2012 || 1000.00 || || 1000.00')
    })
  })
})
