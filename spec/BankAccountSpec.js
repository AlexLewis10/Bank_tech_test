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
      account.makeDeposit(20)
      expect(account.balance).toEqual(20)
    })
  })

  describe('User can make a withdrawal', function () {
    it('user can withdraw an amount and the balance is updated', function () {
      expect(account.makeWithdrawal(20)).toEqual(20)
    })
  })
})
