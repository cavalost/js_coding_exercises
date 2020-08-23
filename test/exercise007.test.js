const {
  sumDigits
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("returns the sum of all the digits of a number", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(0)).toBe(0);
    expect(sumDigits(10)).toBe(1);
    expect(sumDigits(-10)).toBe(1);
    expect(sumDigits(-10.1)).toBe(2);
  });

  test("Throw an error when the function is called without arguments or with undefined", () => {
    const errorMessage = "n is required";
    // To catch the error I have to wrap up the function into another as specified here: https://jestjs.io/docs/en/expect#tothrowerror
    expect(() => sumDigits()).toThrowError(errorMessage);
    expect(()=> sumDigits(undefined)).toThrowError(errorMessage);
  });

  test("Throw an error when n is not a number", () => {
    const errorMessage = "n must be a number";
    // To catch the error I have to wrap up the function into another as specified here: https://jestjs.io/docs/en/expect#tothrowerror
    expect(() => sumDigits(null)).toThrowError(errorMessage);
    expect(()=> sumDigits({})).toThrowError(errorMessage);
    expect(()=> sumDigits('asdf')).toThrowError(errorMessage);
  });
});
