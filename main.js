
const playerX = "X";
const playerO = "O";
let currentPlayer = playerO;
let winnerName;

const cells = ["1A", "1B", "1C", "2A", "2B", "2C", "3A", "3B", "3C"];

cells.forEach(cell => {
  const element = document.getElementById(cell);
  element.addEventListener("click", () => {
    makeMove(cell);
  });
});

function makeMove(id) {
  const cell = document.getElementById(id);
  cell.innerHTML = currentPlayer;
  currentPlayer = switchPlayer(currentPlayer);
  winnerValidation();
}

function switchPlayer(currentPlayer) {
  if (currentPlayer === playerX) {
    return playerO;
  }
  if (currentPlayer === playerO) {
    return playerX;
  }
}

function winnerValidation() {
  const winConditions = [
    ["1A", "1B", "1C"],
    ["2A", "2B", "2C"],
    ["3A", "3B", "3C"],
    ["1A", "2A", "3A"],
    ["1B", "2B", "3B"],
    ["1C", "2C", "3C"],
    ["1A", "2B", "3C"],
    ["3A", "2B", "1C"],
  ];

  for (const condition of winConditions) {
    const [move1, move2, move3] = condition;
    const element1 = document.getElementById(move1);
    const element2 = document.getElementById(move2);
    const element3 = document.getElementById(move3);

    if (
      element1.innerHTML === "O" &&
      element2.innerHTML === "O" &&
      element3.innerHTML === "O"
    ) {
      winnerName = "O player";
      showWinnerPrompt();
      return;
    } else if (
      element1.innerHTML === "X" &&
      element2.innerHTML === "X" &&
      element3.innerHTML === "X"
    ) {
      winnerName = "X player";
      showWinnerPrompt();
    }
  }
}


function showWinnerPrompt() {
  document.getElementById("custom-prompt").style.display = "flex";
  const winMessage = `${winnerName}, you won!`;
  document.getElementById("win-message").textContent = winMessage;
}



const restartButton =  document.getElementById('restart-button');
restartButton.addEventListener( 'click', () => {
  restartGame();
}  )

function restartGame() {
  document.getElementById("custom-prompt").style.display = "none";
  let A1 = document.getElementById("1A");
  let B1 = document.getElementById("1B");
  let C1 = document.getElementById("1C");
  let A2 = document.getElementById("2A");
  let B2 = document.getElementById("2B");
  let C2 = document.getElementById("2C");
  let A3 = document.getElementById("3A");
  let B3 = document.getElementById("3B");
  let C3 = document.getElementById("3C");

  A1.innerHTML = "";
  B1.innerHTML = "";
  C1.innerHTML = "";
  A2.innerHTML = "";
  B2.innerHTML = "";
  C2.innerHTML = "";
  A3.innerHTML = "";
  B3.innerHTML = "";
  C3.innerHTML = "";

  document.getElementById("inputX").value = "";
  document.getElementById("inputO").value = "";
}


