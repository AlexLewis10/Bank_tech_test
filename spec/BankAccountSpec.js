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
      expect(account.transactionHistory).toEqual([['10/01/2012', 'Credit', 20]])
    })

    it('receives a transaction from withdrawal and passes to transaction history', function () {
      account.setBalance(30)
      account.makeWithdrawal(20, '10-01-2012')
      expect(account.transactionHistory).toEqual([['10/01/2012', 'Debit', 10]])
    })

    it('can add multiple transactions to transaction history', function () {
      for (var i = 0; i < 4; i++) {
        account.makeDeposit(20, '10-01-2012')
      }
      expect(account.transactionHistory).toEqual([['10/01/2012', 'Credit', 20], ['10/01/2012', 'Credit', 40], ['10/01/2012', 'Credit', 60], ['10/01/2012', 'Credit', 80]])
    })
  })
})
