const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
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

describe("getComplementaryDNA", () => {
  test("returns the complementary DNA", () => {
    expect(getComplementaryDNA("GCT")).toBe("CGA");
    expect(getComplementaryDNA("CGTA")).toBe("GCAT");
  });

  test("Throw an error when the function is called without arguments or with undefined", () => {
    const errorMessage = "str is required";
    // To catch the error I have to wrap up the function into another as specified here: https://jestjs.io/docs/en/expect#tothrowerror
    expect(() => getComplementaryDNA()).toThrowError(errorMessage);
    expect(()=> getComplementaryDNA(undefined)).toThrowError(errorMessage);
  });

  test("Throw an error when arr is not a string", () => {
    const errorMessage = "str must be a string";
    // To catch the error I have to wrap up the function into another as specified here: https://jestjs.io/docs/en/expect#tothrowerror
    expect(() => getComplementaryDNA(null)).toThrowError(errorMessage);
    expect(()=> getComplementaryDNA({})).toThrowError(errorMessage);
    expect(()=> getComplementaryDNA(1234)).toThrowError(errorMessage);
    expect(()=> getComplementaryDNA([])).toThrowError(errorMessage);
  });
});

describe("isItPrime", () => {
  test("returns if the number is prime or not", () => {
    expect(isItPrime(9)).toBe(false);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(11)).toBe(true);
  });

  test("Throw an error when the function is called without arguments or with undefined", () => {
    const errorMessage = "n is required";
    // To catch the error I have to wrap up the function into another as specified here: https://jestjs.io/docs/en/expect#tothrowerror
    expect(() => isItPrime()).toThrowError(errorMessage);
    expect(()=> isItPrime(undefined)).toThrowError(errorMessage);
  });

  test("Throw an error when n is not a number", () => {
    const errorMessage = "n must be a number";
    // To catch the error I have to wrap up the function into another as specified here: https://jestjs.io/docs/en/expect#tothrowerror
    expect(() => isItPrime(null)).toThrowError(errorMessage);
    expect(()=> isItPrime({})).toThrowError(errorMessage);
    expect(()=> isItPrime("asdf")).toThrowError(errorMessage);
    expect(()=> isItPrime([])).toThrowError(errorMessage);
  });
});

describe("createMatrix", () => {
  test("returns an array of n arrays with the item filled in each one", () => {
    expect(createMatrix(1, 0)).toStrictEqual([[0]]);
    expect(createMatrix(2, true)).toStrictEqual([[true, true], [true, true]]);
    expect(createMatrix(3, 'foo')).toStrictEqual([['foo', 'foo', 'foo'], ['foo', 'foo', 'foo'], ['foo', 'foo', 'foo']]);
  });

  test("Throw an error when the function is called without arguments or with undefined", () => {
    const nErrorMessage = "n is required";
    const fillErrorMessage = "fill is required";
    // To catch the error I have to wrap up the function into another as specified here: https://jestjs.io/docs/en/expect#tothrowerror
    expect(() => createMatrix()).toThrowError(nErrorMessage);
    expect(()=> createMatrix(undefined)).toThrowError(nErrorMessage);
    expect(()=> createMatrix(1)).toThrowError(fillErrorMessage);
    expect(()=> createMatrix(1, undefined)).toThrowError(fillErrorMessage);
  });

  test("Throw an error when n is not a number", () => {
    const errorMessage = "n must be a number";
    // To catch the error I have to wrap up the function into another as specified here: https://jestjs.io/docs/en/expect#tothrowerror
    expect(() => createMatrix(null, 0)).toThrowError(errorMessage);
    expect(()=> createMatrix({}, 'foo')).toThrowError(errorMessage);
    expect(()=> createMatrix("asdf", null)).toThrowError(errorMessage);
    expect(()=> createMatrix([], {})).toThrowError(errorMessage);
  });
});

describe("areWeCovered", () => {
  test("returns if there are enough employees on a given day", () => {
    const staff = [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Charles", rota: ["Thursday", "Monday", "Tuesday", "Wednesday"] },
    ];
    expect(areWeCovered(staff, 'Tuesday')).toBe(true);
    expect(areWeCovered(staff, 'Monday')).toBe(false);
    expect(areWeCovered(staff, 'Friday')).toBe(false);
  });

  test("Throw an error when the function is called without arguments or with undefined", () => {
    const staffErrorMessage = "staff is required";
    const dayErrorMessage = "day is required";
    // To catch the error I have to wrap up the function into another as specified here: https://jestjs.io/docs/en/expect#tothrowerror
    expect(() => areWeCovered()).toThrowError(staffErrorMessage);
    expect(()=> areWeCovered(undefined)).toThrowError(staffErrorMessage);
    expect(()=> areWeCovered([])).toThrowError(dayErrorMessage);
    expect(()=> areWeCovered([], undefined)).toThrowError(dayErrorMessage);
  });

  test("Throw an error when staff is not an array", () => {
    const errorMessage = "staff must be an array";
    // To catch the error I have to wrap up the function into another as specified here: https://jestjs.io/docs/en/expect#tothrowerror
    expect(() => areWeCovered(null, 0)).toThrowError(errorMessage);
    expect(()=> areWeCovered({}, 'foo')).toThrowError(errorMessage);
    expect(()=> areWeCovered("asdf", null)).toThrowError(errorMessage);
  });

  test("Throw an error when day is not a valid day of the week", () => {
    const notStringErrorMessage = "day must be a string";
    const weekErrorMessage = "day must be a valid day of the week";
    // To catch the error I have to wrap up the function into another as specified here: https://jestjs.io/docs/en/expect#tothrowerror
    expect(() => areWeCovered([], 0)).toThrowError(notStringErrorMessage);
    expect(()=> areWeCovered([], false)).toThrowError(notStringErrorMessage);
    expect(()=> areWeCovered([], "Sasunday")).toThrowError(weekErrorMessage);
  });
});
