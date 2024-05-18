const sum = require('../utils/test')

test('Test util sum', async () => {
  expect(sum(5, 5)).toBe(10)
  expect(sum(3, 5)).toBe(8)
})
