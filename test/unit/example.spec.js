'use strict'

const { test } = use('Test/Suite')('Example')

test('make sure 2 + 2 is 4', async ({ assert }) => {
  assert.equal(2 + 2, 4)
})

test('make sure 9 * 9 is 81', async ({ assert }) => {
  assert.equal(9 * 9, 81)
})
