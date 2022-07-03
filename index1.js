let squares = "", bombPosition = 0
let bombs = [
  {x: Math.floor(Math.random() * 20 + 1), y: Math.floor(Math.random() * 20 + 1)},
  {x: Math.floor(Math.random() * 20 + 1), y: Math.floor(Math.random() * 20 + 1)},
  {x: Math.floor(Math.random() * 20 + 1), y: Math.floor(Math.random() * 20 + 1)},
  {x: Math.floor(Math.random() * 20 + 1), y: Math.floor(Math.random() * 20 + 1)},
  {x: Math.floor(Math.random() * 20 + 1), y: Math.floor(Math.random() * 20 + 1)},
  {x: Math.floor(Math.random() * 20 + 1), y: Math.floor(Math.random() * 20 + 1)},
  {x: Math.floor(Math.random() * 20 + 1), y: Math.floor(Math.random() * 20 + 1)},
  {x: Math.floor(Math.random() * 20 + 1), y: Math.floor(Math.random() * 20 + 1)},
  {x: Math.floor(Math.random() * 20 + 1), y: Math.floor(Math.random() * 20 + 1)},
  {x: Math.floor(Math.random() * 20 + 1), y: Math.floor(Math.random() * 20 + 1)},
  {x: Math.floor(Math.random() * 20 + 1), y: Math.floor(Math.random() * 20 + 1)},
  {x: Math.floor(Math.random() * 20 + 1), y: Math.floor(Math.random() * 20 + 1)}
]


function minesweeperGame() {
  squares = ""
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

function clickBombs() {
  for (let i = 0; i < bombs.length; ++i){
    document.getElementById(bombs[i].x + '/' + bombs[i].y).classList.remove('cell-grid')
    document.getElementById(bombs[i].x + '/' + bombs[i].y).classList.add('bombColor');
    document.getElementById(bombs[i].x + '/' + bombs[i].y).innerHTML = "B"
  }
  document.getElementById("maxScore").innerHTML = "You lost!"
}

function goodCell(l, c) {
    document.getElementById(l + '/' + c).innerHTML = "0"
}

window.onload = minesweeperGame