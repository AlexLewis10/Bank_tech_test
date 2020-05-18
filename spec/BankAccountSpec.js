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

    it('user can add the date in when making a deposit', function () {
      expect(account.makeDeposit(20, '10-01-2012')).toEqual('10/01/2012')
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

    it('user can add the date in when making a withdrawal', function () {
      account.setBalance(30)
      expect(account.makeWithdrawal(20, '10-01-2012')).toEqual('10/01/2012')
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

    it('can add a transaction to transaction history', function () {
      account.addToTransactionHistory('I am a transaction')
      expect(account.transactionHistory).toEqual([['I am a transaction']])
    })
  })
})
