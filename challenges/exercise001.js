function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  if (!word || typeof word !== "string") throw new Error("word must be a string with at least 1 character");
  return word[0].toUpperCase() + word.substring(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  if (!firstName || typeof firstName !== "string") throw new Error("firstName must be a string with at least 1 character");
  if (!lastName || typeof lastName !== "string") throw new Error("lastName must be a string with at least 1 character");
  return `${firstName[0]}.${lastName[0]}`;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  if (typeof originalPrice !== "number") throw new Error("originalPrice must be a number");
  if (typeof vatRate !== "number") throw new Error("vatRate must be a number");
  return +(originalPrice * (1 + (vatRate / 100))).toFixed(2);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  if (typeof originalPrice !== "number") throw new Error("originalPrice must be a number");
  if (typeof reduction !== "number") throw new Error("reduction must be a number");
  return +(originalPrice * (1 - (reduction / 100))).toFixed(2);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  if (!str || typeof str !== "string") throw new Error("str must be a string with at least 1 character");
  const halfLength = Math.floor(str.length / 2);
  return str.substring(str.length % 2 === 0 ? halfLength - 1: halfLength, halfLength + 1);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  if (typeof word !== "string") throw new Error("word must be a string");
  return word.split('').reverse().join('');

}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  if (!Array.isArray(words)) throw new Error("words must be an array");
  return words.map(word => reverseWord(word)); //note: we assume that all elements are strings
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  if (!Array.isArray(users)) throw new Error("users must be an array");
  //note: we assume that its an array of objects
  return users.reduce((acc, { type }) => {
    return type === 'Linux' ? ++acc : acc;
  }, 0);
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  if (!Array.isArray(scores)) throw new Error("scores must be an array");
  return +(scores.reduce((acc, el ) => acc + el, 0) / scores.length).toFixed(2);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
  if (typeof n !== "number") throw new Error("n must be a number");
  const isFizz = n % 3 === 0;
  const isBuzz = n % 5 === 0;
  if (isFizz) {
    return isBuzz ? "fizzbuzz" : "fizz";
  } else if (isBuzz) {
    return "buzz";
  } else {
    return n;
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
