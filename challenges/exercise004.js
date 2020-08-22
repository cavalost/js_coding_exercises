function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  if (!Array.isArray(nums)) throw new Error("nums must be an array");
  return nums.filter(el => el < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  if (!Array.isArray(names)) throw new Error("names must be an array");
  if (typeof char !== "string") throw new Error("char must be a string");
  return names.filter(el => el[0] === char);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  if (!Array.isArray(words)) throw new Error("words must be an array");
  return words.filter(el => el.substring(0, 3) === "to ");
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  if (!Array.isArray(nums)) throw new Error("nums must be an array");
  return nums.filter(el => Number.isInteger(el));
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  if (typeof users !== "object") throw new Error("users must be an object");
  return users.map(el => el.data.city.displayName);
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  if (!Array.isArray(nums)) throw new Error("nums must be an array");
  return nums.map(el => +(Math.sqrt(el).toFixed(2)));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
