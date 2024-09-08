function deleteInvalid(array) {
    if(!Array.isArray(array)){  //Array.isArray(array) === false;
        return "Invalid Error"
    }
  let numberArray = [];
  for (const element of array) {
    if (typeof element === "number" && isNaN(element) === false) {
      numberArray.push(element);
    }
  }
  return numberArray;
}

console.log(
  deleteInvalid([1, null, undefined, 54, "foisal", NaN, -21, 64, { ob: 21 }])
);

console.log(deleteInvalid(["i", {num:2}, NaN]))
console.log(deleteInvalid([1, 2, -3]))
console.log(deleteInvalid({num:[1, 2, -3]}))
