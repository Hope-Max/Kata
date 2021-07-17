const blocksAway = function(directioins) {
  let output = {};
  let array = [];

  for (let i = 0; i < directioins.length; i += 2) {
    array.push([directioins[i], directioins[i + 1]]);
  }

  let orientation;
  let x = 0;
  let y = 0;
  if (array[0][0] === 'right') {
    orientation = 'east';
    x += array[0][1];
  } else if (array[0][0] === 'left') {
    orientation = 'north';
    y += array[0][1];
  }

  for (let j = 1; j < array.length; j++) {
    let directioin = array[j][0];
    let moves = array[j][1];

    if (orientation === 'east' && directioin === 'right') {
      orientation = 'south';
      y -= moves;
    } else if (orientation === 'east' && directioin === 'left') {
      orientation = 'north';
      y += moves;
    } else if (orientation === 'south' && directioin === 'right') {
      orientation = 'west';
      x -= moves;
    } else if (orientation === 'south' && directioin === 'left') {
      orientation = 'east';
      x += moves;
    } else if (orientation === 'west' && directioin === 'right') {
      orientation = 'north';
      y += moves;
    } else if (orientation === 'west' && directioin === 'left') {
      orientation = 'south';
      y -= moves;
    } else if (orientation === 'north' && directioin === 'right') {
      orientation = 'east';
      x += moves;
    } else if (orientation === 'north' && directioin === 'left') {
      orientation = 'west';
      x -= moves;
    }
  }

  if (x >= 0) {
    output['east'] = x;
  } else {
    output['west'] = -x;
  }

  if (y >= 0) {
    output['north'] = y;
  } else {
    output['south'] = -y;
  }

  return output;
}


console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));