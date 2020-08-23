const {
  sumDigits,
  createRange,
  getScreentimeAlertList
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

describe("createRange", () => {
  test("create a range of numbers between a start and an end and increased by a step with th default value of 1", () => {
    expect(createRange(1, 3)).toStrictEqual([1, 2, 3]);
    expect(createRange(1, 3, 1)).toStrictEqual([1, 2, 3]);
    expect(createRange(3, 11, 2)).toStrictEqual([3, 5, 7, 9, 11]);
    expect(createRange(-1, 1, 2)).toStrictEqual([-1, 1]);
    expect(createRange(1.1, 3.1, 2)).toStrictEqual([1.1, 3.1]);
  });

  test("Throw an error when the function is called without arguments or with undefined", () => {
    const startErrorMessage = "start is required";
    const endErrorMessage = "end is required";
    // To catch the error I have to wrap up the function into another as specified here: https://jestjs.io/docs/en/expect#tothrowerror
    expect(() => createRange()).toThrowError(startErrorMessage);
    expect(()=> createRange(undefined)).toThrowError(startErrorMessage);
    expect(() => createRange(2)).toThrowError(endErrorMessage);
    expect(()=> createRange(2, undefined)).toThrowError(endErrorMessage);
  });

  test("Throw an error when any of the parameters are not a number", () => {
    const startErrorMessage = "start must be a number";
    const endErrorMessage = "end must be a number";
    const stepErrorMessage = "step must be a number";
    // To catch the error I have to wrap up the function into another as specified here: https://jestjs.io/docs/en/expect#tothrowerror
    expect(() => createRange(null, 2)).toThrowError(startErrorMessage);
    expect(()=> createRange({}, 2)).toThrowError(startErrorMessage);
    expect(()=> createRange('asdf', 2)).toThrowError(startErrorMessage);
    expect(() => createRange(2, null)).toThrowError(endErrorMessage);
    expect(()=> createRange(2, {})).toThrowError(endErrorMessage);
    expect(()=> createRange(2, 'asdf')).toThrowError(endErrorMessage);
    expect(() => createRange(1, 2, null)).toThrowError(stepErrorMessage);
    expect(()=> createRange(1, 2, {})).toThrowError(stepErrorMessage);
    expect(()=> createRange(1, 2, 'asdf')).toThrowError(stepErrorMessage);
  });

  test("Throw an error when start is bigger or equal than end", () => {
    const errorMessage = "start cannot be bigger nor equal than end";
    // To catch the error I have to wrap up the function into another as specified here: https://jestjs.io/docs/en/expect#tothrowerror
    expect(() => createRange(2, 1)).toThrowError(errorMessage);
    expect(()=> createRange(2, 2)).toThrowError(errorMessage);
  });
});

describe("getScreentimeAlertList", () => {
  test("return users that have consumed more than 100 mins in a given day", () => {
    const users =  [
      {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
              { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
              { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
              { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
              { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
          ]
     },
     {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 131} }
        ]
     },
    ];
    expect(getScreentimeAlertList(users, "2019-05-04")).toStrictEqual(["beth_1234"]);
    expect(getScreentimeAlertList(users, "2019-06-14")).toStrictEqual(["sam_j_1989"]);
    expect(getScreentimeAlertList(users, "2019-05-02")).toStrictEqual(["beth_1234", "sam_j_1989"]);
    expect(getScreentimeAlertList(users, "2019-06-13")).toStrictEqual([]);
    expect(getScreentimeAlertList(users, "2019-06-17")).toStrictEqual([]);
  });

  test("Throw an error when users is not an array", () => {
    const errorMessage = "users must be an array";
    // To catch the error I have to wrap up the function into another as specified here: https://jestjs.io/docs/en/expect#tothrowerror
    expect(() => getScreentimeAlertList(null, "")).toThrowError(errorMessage);
    expect(()=> getScreentimeAlertList({}, "")).toThrowError(errorMessage);
    expect(()=> getScreentimeAlertList('asdf', "")).toThrowError(errorMessage);
    expect(() => getScreentimeAlertList(2, "")).toThrowError(errorMessage);
  });

  test("Throw an error when date is not a valid date string", () => {
    const notStringErrorMessage = "date must be a string";
    const notDateErrorMessage = "date must be a valid date";
    // To catch the error I have to wrap up the function into another as specified here: https://jestjs.io/docs/en/expect#tothrowerror
    expect(() => getScreentimeAlertList([], 0)).toThrowError(notStringErrorMessage);
    expect(()=> getScreentimeAlertList([], null)).toThrowError(notStringErrorMessage);
    expect(()=> getScreentimeAlertList([], "a")).toThrowError(notDateErrorMessage);
    expect(() => getScreentimeAlertList([], "2019-a-01")).toThrowError(notDateErrorMessage);
  });
});
