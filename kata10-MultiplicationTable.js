const multiplicationTable = function(maxValue) {
  let array = [];
  let subArray = [];
  let subArrayOne = [];

  let m = 1;
  while(m <= maxValue) {
    subArrayOne.push(m);
    m++;
  }
  array.push(subArrayOne);
  
  for (i = 1; i < maxValue; i++) {
    subArray = subArrayOne.map(num => {
      return num * subArrayOne[i]
    })
    array.push(subArray);
  }
  
  for (j = 0; j < maxValue; j++) {
    console.log(array[j].toString().replaceAll(',', ' '));
  }
}

multiplicationTable(1);
multiplicationTable(5);
multiplicationTable(10);