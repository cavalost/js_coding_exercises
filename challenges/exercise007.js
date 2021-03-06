/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  if (typeof n !== "number") throw new Error("n must be a number");
  return n.toString().split('').reduce((acc, el) => ['.', '-', '+'].includes(el) ? acc : (+el + acc), 0);
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step = 1) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  if (typeof start !== "number") throw new Error("start must be a number");
  if (typeof end !== "number") throw new Error("end must be a number");
  if (typeof step !== "number") throw new Error("step must be a number");
  if (start >= end) throw new Error("start cannot be bigger nor equal than end");
  const result = [];
  for (let j = start; j <= end; j += step) {
    result.push(j > end ? end : j);
  }
  return result;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  if (!Array.isArray(users)) throw new Error("users must be an array");
  if (typeof date !== "string") throw new Error("date must be a string");
  if (!Date.parse(date)) throw new Error("date must be a valid date");
  return users.reduce((acc, user) => {
    const screenTimeDay = user.screenTime.find(el => el.date === date);
    if (screenTimeDay) {
      const dayCounter = Object.values(screenTimeDay.usage).reduce((counter, el) => el + counter, 0);
      if (dayCounter > 100) {
        acc.push(user.username);
      }
    }
    return acc;
  }, []);
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (typeof hexStr !== "string") throw new Error("hexStr must be a string");
  if (hexStr.length !== 7 || hexStr[0] !== "#") throw new Error("hexStr doesn't have a valid format");
  const hex2rgb = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };
  const hex = [hexStr.substring(1, 3), hexStr.substring(3, 5), hexStr.substring(5, 7)];
  const rgb = [];
  for (const color of hex) {
    const firstNumber = hex2rgb[color[0]];
    const secondNumber = hex2rgb[color[1]];
    if (firstNumber === undefined) throw new Error("hexStr doesn't have a valid format");
    if (secondNumber === undefined) throw new Error("hexStr doesn't have a valid format");
    rgb.push((firstNumber * 16 ) + secondNumber);
  }
  return `rgb(${rgb.toString()})`;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  if (!Array.isArray(board)) throw new Error("board must be an array");
  const boardLength = board.length;
  if (board.some(row => row.length !== boardLength)) throw new Error("board must be a square matrix");
  let result = null;
  let xHasWon = false;
  let zeroHasWon = false;
  let xVertical = Array(boardLength).fill(0);
  let zeroVertical = Array(boardLength).fill(0);
  let xDiagonal = 0;
  let zeroDiagonal = 0;
  let xDiagonalReverse = 0;
  let zeroDiagonalReverse = 0;
  board.forEach((row, index) => {
    let xHorizontal = 0;
    let zeroHorizontal = 0;
    row.forEach((cell, rowIndex) => {
      if (cell === "X") {
        xVertical[rowIndex]++;
        xHorizontal++;
      }
      if (cell === "0") {
        zeroVertical[rowIndex]++;
        zeroHorizontal++;
      }
    });
    if (row[index] === "X") {
      xDiagonal++;
    }
    if (row[index] === "0") {
      zeroDiagonal++;
    }
    if (row[boardLength - 1 - index] === "X") {
      xDiagonalReverse++;
    }
    if (row[boardLength - 1 - index] === "0") {
      zeroDiagonalReverse++;
    }
    if (xHorizontal === boardLength) {
      xHasWon = true;
    }
    if (zeroHorizontal === boardLength) {
      zeroHasWon = true;
    }
  });
  if (xVertical.includes(boardLength) || xDiagonal === boardLength || xDiagonalReverse === boardLength) {
    xHasWon = true;
  }
  if (zeroVertical.includes(boardLength) || zeroDiagonal === boardLength || zeroDiagonalReverse === boardLength) {
    zeroHasWon = true;
  }
  if (xHasWon && !zeroHasWon) {
    result = "X";
  } else if (!xHasWon && zeroHasWon) {
    result = "0";
  }
  return result;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
