const repeatNumbers = function(data) {
  let stringOfNum = '';
  let stringChainOfNum = '';

  let m = 1;
  while (m <= data[0][1]) {
    stringOfNum += data[0][0];
    m++;
  }
  stringChainOfNum += stringOfNum;
  stringOfNum = '';

  for (let i = 1; i < data.length; i++) {
    let j = 1;

    while(j <= data[i][1]) {
      stringOfNum += data[i][0];
      j++;
    }
    stringChainOfNum += (', ' + stringOfNum);
    stringOfNum = '';
  }

  console.log(stringChainOfNum);

}

repeatNumbers([[1, 10]]);
repeatNumbers([[1, 2], [2, 3]]);
repeatNumbers([[10, 4], [34, 6], [92, 2]]);