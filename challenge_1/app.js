let playerTurn = 1;

let squareOne = function() {
  if (playerTurn === 1) {
    document.getElementById('one').innerHTML = 'X';
    document.getElementById('one').style = 'Color: red';
  } else {
    document.getElementById('one').innerHTML = 'O';
    document.getElementById('one').style = 'Color: blue';
  }
};

let squareTwo = function() {
  if (playerTurn === 1) {
    document.getElementById('two').innerHTML = 'X';
    document.getElementById('two').style = 'Color: red';
  } else {
    document.getElementById('two').innerHTML = 'O';
    document.getElementById('two').style = 'Color: blue';
  }
};

let squareThree = function() {
  if (playerTurn === 1) {
    document.getElementById('three').innerHTML = 'X';
    document.getElementById('three').style = 'Color: red';
  } else {
    document.getElementById('three').innerHTML = 'O';
    document.getElementById('three').style = 'Color: blue';
  }
};

let squareFour = function() {
  if (playerTurn === 1) {
    document.getElementById('four').innerHTML = 'X';
    document.getElementById('four').style = 'Color: red';
  } else {
    document.getElementById('four').innerHTML = 'O';
    document.getElementById('four').style = 'Color: blue';
  }
};

let squareFive = function() {
  if (playerTurn === 1) {
    document.getElementById('five').innerHTML = 'X';
    document.getElementById('five').style = 'Color: red';
  } else {
    document.getElementById('five').innerHTML = 'O';
    document.getElementById('five').style = 'Color: blue';
  }
};

let squareSix = function() {
  if (playerTurn === 1) {
    document.getElementById('six').innerHTML = 'X';
    document.getElementById('six').style = 'Color: red';
  } else {
    document.getElementById('six').innerHTML = 'O';
    document.getElementById('six').style = 'Color: blue';
  }
};

let squareSeven = function() {
  if (playerTurn === 1) {
    document.getElementById('seven').innerHTML = 'X';
    document.getElementById('seven').style = 'Color: red';
  } else {
    document.getElementById('seven').innerHTML = 'O';
    document.getElementById('seven').style = 'Color: blue';
  }
};

let squareEight = function() {
  if (playerTurn === 1) {
    document.getElementById('eight').innerHTML = 'X';
    document.getElementById('eight').style = 'Color: red';
  } else {
    document.getElementById('eight').innerHTML = 'O';
    document.getElementById('eight').style = 'Color: blue';
  }
};


let squareNine = function() {
  if (playerTurn === 1) {
    document.getElementById('nine').innerHTML = 'X';
    document.getElementById('nine').style = 'Color: red';
  } else {
    document.getElementById('nine').innerHTML = 'O';
    document.getElementById('nine').style = 'Color: blue';
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
