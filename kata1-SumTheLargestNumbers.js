const sumLargestNumbers = function(data) {
  let LargestOne;
  let LargestTwo;
  if (data[0] >= data[1]) {
    LargestOne = data[0];
    LargestTwo = data[1];
  } else {
    LargestOne = data[1];
    LargestTwo = data[0];
  } 
  for (let i = 2; i < data.length; i++) {
    if (data[i] >= LargestOne) {
      LargestTwo = LargestOne;
      LargestOne = data[i];
    } else if (data[i] < LargestOne && data[i] >= LargestTwo) {
      LargestTwo = data[i]
    }
  }
  return (LargestOne + LargestTwo);
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));