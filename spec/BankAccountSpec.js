/* eslint-disable no-undef */
describe('Account', function () {
  var account

  beforeEach(function () {
    account = new Account()
  })

  describe('Account has a balance', function () {
    it('has a balance', function () {
      expect(account.balance).toEqual(0)
    })

    it('balance can be set', function () {
      expect(account.setBalance()).toEqual(3000)
    })
  })
})
