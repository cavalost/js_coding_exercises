const {
  sumMultiples
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("returns the sum of all numbers multiple of 3 or 5", () => {
    expect(sumMultiples([5, 3, 2])).toBe(8);
    expect(sumMultiples([5, 3, 15, 8, 9, 15])).toBe(47);
  });

  test("if the number is not multiple of 3 or 5 or it's an empty array, returns 0", () => {
    expect(sumMultiples([1, 2, 0, 7, 8, 11])).toBe(0);
    expect(sumMultiples([])).toBe(0);
  });

  test("Throw an error when the function is called without arguments or with undefined", () => {
    const errorMessage = "arr is required";
    // To catch the error I have to wrap up the function into another as specified here: https://jestjs.io/docs/en/expect#tothrowerror
    expect(() => sumMultiples()).toThrowError(errorMessage);
    expect(()=> sumMultiples(undefined)).toThrowError(errorMessage);
  });

  test("Throw an error when arr is not an array", () => {
    const errorMessage = "arr must be an array";
    // To catch the error I have to wrap up the function into another as specified here: https://jestjs.io/docs/en/expect#tothrowerror
    expect(() => sumMultiples(null)).toThrowError(errorMessage);
    expect(()=> sumMultiples({})).toThrowError(errorMessage);
    expect(()=> sumMultiples(1234)).toThrowError(errorMessage);
    expect(()=> sumMultiples('asdf')).toThrowError(errorMessage);
  });
});
