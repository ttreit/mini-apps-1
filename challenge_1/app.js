let playerTurn = 1;
let row1 = [0, 0, 0];
let row2 = [0, 0, 0];
let row3 = [0, 0, 0];


let winnerCheck = function() {

}

let squareOne = function() {
  if (playerTurn === 1) {
    if (row1[0] !== 0) {
      return;
    }
    document.getElementById('one').innerHTML = 'X';
    document.getElementById('one').style = 'Color: red';
    playerTurn = 2;
    row1[0] = 1;
    console.log(row1);


  } else {
    if (row1[0] !== 0) {
      return
    };
    document.getElementById('one').innerHTML = 'O';
    document.getElementById('one').style = 'Color: blue';
    playerTurn = 1;
    row1[0] = 2;
    console.log(row1);

  }
};

let squareTwo = function() {
  if (playerTurn === 1) {
    if (row1[1] !== 0) {
      return;
    }
    document.getElementById('two').innerHTML = 'X';
    document.getElementById('two').style = 'Color: red';
    playerTurn = 2;
    row1[1] = 1;

  } else {
    if (row1[1] !== 0) {
      return;
    }
    document.getElementById('two').innerHTML = 'O';
    document.getElementById('two').style = 'Color: blue';
    playerTurn = 1;
    row1[1] = 2;
  }
};

let squareThree = function() {
  if (playerTurn === 1) {
    if (row1[2] !== 0) {
      return;
    }
    document.getElementById('three').innerHTML = 'X';
    document.getElementById('three').style = 'Color: red';
    playerTurn = 2;
    row1[2] = 1;
    console.log(row1);

  } else {
    if (row1[2] !== 0) {
      return;
    }
    document.getElementById('three').innerHTML = 'O';
    document.getElementById('three').style = 'Color: blue';
    playerTurn = 1;
    row1[2] = 2;
    console.log(row1);
  }
};

let squareFour = function() {
  if (playerTurn === 1) {
    if (row2[0] !== 0) {
      return;
    }
    document.getElementById('four').innerHTML = 'X';
    document.getElementById('four').style = 'Color: red';
    playerTurn = 2;
    row2[0] = 1;
  } else {
    if (row2[0] !== 0) {
      return;
    }
    document.getElementById('four').innerHTML = 'O';
    document.getElementById('four').style = 'Color: blue';
    playerTurn = 1;
    row2[0] = 2;
  }
};

let squareFive = function() {
  if (playerTurn === 1) {
    if (row2[1] !== 0) {
      return;
    }
    document.getElementById('five').innerHTML = 'X';
    document.getElementById('five').style = 'Color: red';
    playerTurn = 2;
    row2[1] = 1

  } else {
    if (row2[1] !== 0) {
      return;
    }
    document.getElementById('five').innerHTML = 'O';
    document.getElementById('five').style = 'Color: blue';
    playerTurn = 1;
    row2[1] = 2;
  }
};

let squareSix = function() {
  if (playerTurn === 1) {
    if (row2[2] !== 0) {
      return;
    }
    document.getElementById('six').innerHTML = 'X';
    document.getElementById('six').style = 'Color: red';
    playerTurn = 2;
    row2[2] = 1;

  } else {
    if (row2[2] !== 0) {
      return;
    }
    document.getElementById('six').innerHTML = 'O';
    document.getElementById('six').style = 'Color: blue';
    playerTurn = 1;
    row2[2] = 2;
  }
};

let squareSeven = function() {
  if (playerTurn === 1) {
    if (row3[0] !== 0) {
      return;
    }
    document.getElementById('seven').innerHTML = 'X';
    document.getElementById('seven').style = 'Color: red';
    playerTurn = 2;
    row3[0] = 1;

  } else {
    if (row3[0] !== 0) {
      return;
    }
    document.getElementById('seven').innerHTML = 'O';
    document.getElementById('seven').style = 'Color: blue';
    playerTurn = 1;
    row3[0] = 2;
  }
};

let squareEight = function() {
  if (playerTurn === 1) {
    if (row3[1] !== 0) {
      return;
    }
    document.getElementById('eight').innerHTML = 'X';
    document.getElementById('eight').style = 'Color: red';
    playerTurn = 2;
    row3[1] = 1;

  } else {
    if (row3[1] !== 0) {
      return;
    }
    document.getElementById('eight').innerHTML = 'O';
    document.getElementById('eight').style = 'Color: blue';
    playerTurn = 1;
    row3[1] = 3;
  }
};


let squareNine = function() {
  if (playerTurn === 1) {
    if (row3[2] !== 0) {
      return;
    }
    document.getElementById('nine').innerHTML = 'X';
    document.getElementById('nine').style = 'Color: red';
    playerTurn = 2;
    row3[2] = 1;

  } else {
    if (row3[2] !== 0) {
      return;
    }
    document.getElementById('nine').innerHTML = 'O';
    document.getElementById('nine').style = 'Color: blue';
    playerTurn = 1;
    row3[2] = 2;

  }
};

document.getElementById('one').onclick = squareOne;
document.getElementById('two').onclick = squareTwo;
document.getElementById('three').onclick = squareThree;
document.getElementById('four').onclick = squareFour;
document.getElementById('five').onclick = squareFive;
document.getElementById('six').onclick = squareSix;
document.getElementById('seven').onclick = squareSeven;
document.getElementById('eight').onclick = squareEight;
document.getElementById('nine').onclick = squareNine;
