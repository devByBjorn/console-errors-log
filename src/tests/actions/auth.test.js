import { login, logout } from '../../actions/auth'

test('should run login action', () => {
  const uid = '123abc'
  const runFunc = login(uid)
  expect(runFunc).toEqual({
    type: 'LOGIN',
    uid: '123abc'
  })
})

test('should run logout action', () => {
  expect(logout()).toEqual({
    type: 'LOGOUT'
  })
})