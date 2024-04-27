function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) return [];
  const rangeArray = rangeOfNumbers(startNum + 1, endNum);
  rangeArray.unshift(startNum);
  return rangeArray;
}
console.log(rangeOfNumbers(1, 5));