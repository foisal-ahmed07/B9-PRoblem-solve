function password(obj) {
  if (
    obj.name === undefined ||
    obj.siteName === undefined ||
    obj.birthYear.toString().length !== 4
  ) {
    return "Invalid";
  }

  let firstWord = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
  let passwordString = firstWord + "#" + obj.name + "@" + obj.birthYear;
  return passwordString;
}

console.log(
  password((obj = { name: "kolimuddin", birthYear: 1999, siteName: "google" }))
);

console.log(
  password((obj2 = { name: "foisal", birthYear: 2007, siteName: "facebook" }))
);

console.log(
  password((obj3 = { name: "toky", birthYear: 199, siteName: "facebook" }))
);

console.log(password((obj4 = { name: "kolimuddin", birthYear: 1999 })));
