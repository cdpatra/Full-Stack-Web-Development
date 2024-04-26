function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let arrIndex = 0; arrIndex < arr.length; arrIndex++) {
    for (let eleIndex = 0; eleIndex < arr[arrIndex].length; eleIndex++) {
      product *= arr[arrIndex][eleIndex];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
