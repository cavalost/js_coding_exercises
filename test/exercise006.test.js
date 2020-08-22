const {
  sumMultiples,
  isValidDNA
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

describe("isValidDNA", () => {
  test("returns true when there is a valid DNA", () => {
    expect(isValidDNA("GCT")).toBe(true);
    expect(isValidDNA("CGTA")).toBe(true);
  });

  test("returns false when there isn't a valid DNA", () => {
    expect(isValidDNA("")).toBe(false);
    expect(isValidDNA("E")).toBe(false);
    expect(isValidDNA("CGTAB")).toBe(false);
  });

  test("Throw an error when the function is called without arguments or with undefined", () => {
    const errorMessage = "str is required";
    // To catch the error I have to wrap up the function into another as specified here: https://jestjs.io/docs/en/expect#tothrowerror
    expect(() => isValidDNA()).toThrowError(errorMessage);
    expect(()=> isValidDNA(undefined)).toThrowError(errorMessage);
  });

  test("Throw an error when arr is not a string", () => {
    const errorMessage = "str must be a string";
    // To catch the error I have to wrap up the function into another as specified here: https://jestjs.io/docs/en/expect#tothrowerror
    expect(() => isValidDNA(null)).toThrowError(errorMessage);
    expect(()=> isValidDNA({})).toThrowError(errorMessage);
    expect(()=> isValidDNA(1234)).toThrowError(errorMessage);
    expect(()=> isValidDNA([])).toThrowError(errorMessage);
  });
});
