import { expect, describe, test } from '@jest/globals'

function sum(a: number, b: number): number {
  return a + b
}

describe('Sum', () => {
  test('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})

// describe('Atribuition', () => {
//   test('Atribuition', () => {
//     interface Idata {
//       [key: string]: number
//     }

//     const data: Idata = { one: 1 }
//     data.two = 2

//     expect(data).toEqual({ one: 1, two: 2 })
//   })
// })

// describe('adicionando números de ponto flutuante', () => {
//   test('0.1 + 0.2 = 0.3', () => {
//     const value = 0.1 + 0.2
//     // expect(value).toBe(0.3) // Isso não vai funcionar por causa de um erro de arredondamento
//     expect(value).toBeCloseTo(0.3) // Isso funciona.
//   })
// })

// describe('Verificando se o leite está contido', () => {
//   const shoppingList = [
//     'fraldas',
//     'kleenex',
//     'sacos de lixo',
//     'papel toalha',
//     'leite',
//   ]

//   test('a lista de compras tem leite nela', () => {
//     expect(shoppingList).toContain('leite')
//     expect(new Set(shoppingList)).toContain('leite')
//   })
// })

// TobeNull correspondente a null
// TobeUndefined correspondente a undefined
// TobeDefined correspondente a qualquer valor diferente de undefined
// TobeTruthy correspondente a qualquer valor que seja avaliado como true
// TobeFalsy correspondente a qualquer valor que seja avaliado como false
// TobeGreaterThan correspondente a um valor maior que o valor passado
// TobeGreaterThanOrEqual correspondente a um valor maior ou igual ao valor passado
// TobeLessThan correspondente a um valor menor que o valor passado
// TobeLessThanOrEqual correspondente a um valor menor ou igual ao valor passado
// TobeCloseTo correspondente a um valor próximo ao valor passado
// TobeInstanceOf correspondente a uma instância de um objeto
