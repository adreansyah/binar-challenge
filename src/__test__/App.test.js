import { render, screen } from '@testing-library/react';
import App from 'App';
import { anything, ArrayOutputValue, exceptionsMethodTest, isFalse, isTrue } from 'helper/generics';

describe("menghitung bilangan dengan penjumlahan", () => {
  test("menghitung 5 + 5 adalah 10", () => {
    expect(anything(5, 5)).toBe(10)
  })
})

describe("Memerikas jenis data type", () => {

  test("nilai function ini harusnya true", () => {
    expect(isTrue).toBeTruthy()
  })

  test("nilai function ini seharusnya false", () => {
    expect(isFalse()).toBeFalsy()
  })

})

describe("Exceptions method", () => {
  test("You are using a wrong JDK", () => {
    expect(() => exceptionsMethodTest()).toThrow(/JDK/)
    // expect(() => exceptionsMethodTest()).toThrow(Error)
  })
})

describe("TESTING array output", () => {
  test("output should [joni,jono,joni] is a jono", () => {
    expect(ArrayOutputValue()).toContain("joni")
    expect(new Set(ArrayOutputValue())).toContain("joni")
  })
})
