let squares = "", bombPosition = 0, clickCounter = 50
let bombs = []

function minesweeperGame() {
  squares = ""
  generateBombs()
  for (let line = 1; line <= 20; ++line)
    for (let column = 1; column <= 20; ++column){
      let bombFound = 0
      for (let i = 0; i < bombs.length; ++i)
        if(line == bombs[i].x && column == bombs[i].y){
          ++bombFound
          console.log(bombFound)
        }
      if (bombFound > 0)
        squares += '<button id="' + line + '/' + column + '"class=cell-grid onclick=clickBombs();></button>'
      else
        squares += '<button id="' + line + '/' + column + '"class=cell-grid onclick=goodCell(' + line + ',' + column + ')></button>'
    }
      
  document.getElementById("minesweeperGrid").innerHTML = squares
}

function generateBombs(){
  for (let n = 0; n < 50; ++n)
    bombs[n] = {x: Math.floor(Math.random() * 20 + 1), y: Math.floor(Math.random() * 20 + 1)}
}

function clickBombs() {
  for (let i = 0; i < bombs.length; ++i){
    document.getElementById(bombs[i].x + '/' + bombs[i].y).classList.remove('cell-grid')
    document.getElementById(bombs[i].x + '/' + bombs[i].y).classList.add('bombColor');
    document.getElementById(bombs[i].x + '/' + bombs[i].y).innerHTML = "B"
  }
  document.getElementById("maxScore").innerHTML = "You lost!"
}

function goodCell(l, c) {
  ++clickCounter
  let numberOfBombsAround = 0
  for (let i = 1, s = l - 1; i <= 3; ++i, ++s)
    for (let j = 1, r = c - 1; j <= 3; ++j, ++r)
      for (let k = 0; k < bombs.length; ++k)
        if(bombs[k].x == s && bombs[k].y == r)
          ++numberOfBombsAround
  document.getElementById(l + '/' + c).innerHTML = numberOfBombsAround
  if (clickCounter == 400)
    document.getElementById("maxScore").innerHTML = "Congratulations! You won!"
}

window.onload = minesweeperGame