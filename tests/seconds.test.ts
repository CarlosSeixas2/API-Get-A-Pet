import { expect, test } from '@jest/globals'
import { describe } from 'node:test'

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!')
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow()
  expect(() => compileAndroidCode()).toThrow(Error)

  // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK')
  expect(() => compileAndroidCode()).toThrow(/JDK/)

  // Or you can match an exact error message using a regexp like below
  //   expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/) // Test fails
  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/) // Test pass
})

describe('Promise Teste', () => {
  function MyPromise(a: number) {
    return new Promise((resolve, reject) => {
      if (a <= 0) {
        reject(new Error('Error'))
      } else {
        resolve('Success')
      }
    })
  }

  test('Promise resolve', async () => {
    await expect(MyPromise(1)).resolves.toBe('Success')
  })

  test('Promise reject', async () => {
    await expect(MyPromise(0)).rejects.toThrow('Error')
  })
})
