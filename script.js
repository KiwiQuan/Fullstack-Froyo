const flavorsInput = prompt(
  "Please enter a list of ice cream flavors (separated by commas):",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
console.log(flavorsInput);

const flavorsList = flavorsInput.split(",");
console.log(flavorsList);

// put duplicate flavors from flavorsList into an object with a value of how many times they are in the flavorsList

//
function flavorCount(flavorsList) {
  const flavorsObject = {};

  for (let i = 0; i < flavorsList.length; i++) {
    const flavor = flavorsList[i];
    if (flavorsObject[flavor]) {
      flavorsObject[flavor] += 1;
    } else {
      flavorsObject[flavor] = 1;
    }
  }
  return flavorsObject;
}

for (const flavor in flavorCount(flavorsList)) {
  console.log(`${flavor}: ${flavorCount(flavorsList)[flavor]}`);
}
