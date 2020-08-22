function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  if (typeof sandwich !== "object") throw new Error("sandwich must be an object");
  if (!Array.isArray(sandwich.fillings)) throw new Error("fillings must be an array");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  if (typeof person !== "object") throw new Error("person must be an object");
  if (typeof person.city !== "string") throw new Error("city must be an object");
  return person.city === "Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  if (typeof people !== "number") throw new Error("people must be a number");
  let remainPeople = people;
  let buses = 0;
  do {
    buses++;
    remainPeople -= 40;
  }
  while (remainPeople > 0);
  return buses;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if (!Array.isArray(arr)) throw new Error("arr must be an array");
  return arr.filter(el => el === "sheep").length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  if (typeof person !== "object") throw new Error("person must be an object");
  if (typeof person.address !== "object") throw new Error("address must be an object");
  if (typeof person.address.postCode !== "string") throw new Error("postCode must be a string");
  if (typeof person.address.city !== "string") throw new Error("city must be a string");
  return person.address.postCode[0] === "M" && isFromManchester(person.address);
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
