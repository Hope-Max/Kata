const generateBoard = function(whiteQueen, blackQueen) {
  let board = [];

  let i = 0;
  while(i < 8) {
    board.push([0, 0, 0, 0, 0, 0, 0, 0]);
    i++;
  }

  rowOfWhiteQueen = whiteQueen[0];
  columnOfWhiteQueen = whiteQueen[1];
  rowOfBlackQueen = blackQueen[0];
  columnOfBlackQueen = blackQueen[1];

  board[rowOfWhiteQueen][columnOfWhiteQueen] = 1;
  board[rowOfBlackQueen][columnOfBlackQueen] = 1;

  return board;
}

const queenThreat = function(board) {
  let position = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        position.push([i, j]);
      }
    }
  }

  let output;
  let rowOfWhiteQueen = position[0][0];
  let columnOfWhiteQueen = position[0][1];
  let rowOfBlackQueen = position[1][0];
  let columnOfBlackQueen = position[1][1];
  let slope = (columnOfBlackQueen - columnOfWhiteQueen) / (rowOfBlackQueen - rowOfWhiteQueen);
  if (rowOfWhiteQueen === rowOfBlackQueen || columnOfWhiteQueen === columnOfBlackQueen ||  slope === 1 || slope === -1) {
    output = true;
  } else {
    output = false;
  }
  return output;
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));