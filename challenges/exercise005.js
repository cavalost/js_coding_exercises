const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  if (!Array.isArray(nums)) throw new Error("nums must be an array");
  if (typeof n !== "number") throw new Error("n must be a number");
  if (!nums.includes(n) || nums.indexOf(n) === nums.length - 1) return null;
  return nums[nums.indexOf(n) + 1];
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  if (typeof str !== "string") throw new Error("str must be a string");
  const strArr = str.split('');
  const result = {1: 0, 0: 0};
  for (const el of strArr) {
    if (el === '1') result['1']++;
    else if (el === '0') result['0']++;
  }
  return result;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  if (typeof n !== "number") throw new Error("n must be a number");
  return +(n.toString().split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
