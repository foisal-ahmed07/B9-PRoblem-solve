// problem 2
function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid";
  }
  let lastLetter = name.slice(-1).toLowerCase();
  let result = false;
  let checkArray = ["a", "y", "i", "e", "o", "u"];

  for (let char of checkArray) {
    if (char === lastLetter) {
      result = true;
    }
  }
  // let result = checkArray.includes(lastLetter);
  return result ? "Good Name" : "Bad Name";
}

console.log(checkName("salman"));
console.log(checkName("RAFEE"));
console.log(checkName("Jhanker"));
console.log(checkName(542));
console.log(checkName(["Jhanker"]));
