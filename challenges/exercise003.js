function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  if (!Array.isArray(nums)) throw new Error("nums must be an array");
  return nums.map(el => Math.pow(el, 2));
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  if (!Array.isArray(words)) throw new Error("words must be an array");
  let result = words[0];
  for (let i = 1; i < words.length; i++) {
    result += words[i][0].toUpperCase() + words[i].substring(1);
  }
  return result;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  if (typeof people !== "object") throw new Error("people must be an object");
  return people.reduce((acc, { subjects }) => acc + subjects.length, 0);
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
