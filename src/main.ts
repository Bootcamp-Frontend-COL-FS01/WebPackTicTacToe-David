
import './styles.css';
import './img/1156936.png';

const playerX: string = "X";
const playerO: string = "O";
let currentPlayer: string = playerO;
let winnerName: string;

const cells: string[] = ["1A", "1B", "1C", "2A", "2B", "2C", "3A", "3B", "3C"];

cells.forEach((cell: string) => {
  const element: HTMLElement | null = document.getElementById(cell);
  if (element) {
    element.addEventListener("click", () => {
      makeMove(cell);
    });
  }
});

function makeMove(id: string): void {
  const cell: HTMLElement | null = document.getElementById(id);
  if (cell) {
    cell.innerHTML = currentPlayer;
    currentPlayer = switchPlayer(currentPlayer);
    winnerValidation();
  }
}

function switchPlayer(currentPlayer: string): string {
  return currentPlayer === playerX ? playerO : playerX;
}

function winnerValidation(): void {
  const winConditions: string[][] = [
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
    const element1: HTMLElement | null = document.getElementById(move1);
    const element2: HTMLElement | null = document.getElementById(move2);
    const element3: HTMLElement | null = document.getElementById(move3);

    if (
      element1 && element2 && element3 &&
      element1.innerHTML === "O" &&
      element2.innerHTML === "O" &&
      element3.innerHTML === "O"
    ) {
      winnerName = "O player";
      showWinnerPrompt();
      return;
    } else if (
      element1 && element2 && element3 &&
      element1.innerHTML === "X" &&
      element2.innerHTML === "X" &&
      element3.innerHTML === "X"
    ) {
      winnerName = "X player";
      showWinnerPrompt();
    }
  }
}

function showWinnerPrompt(): void {
  const customPrompt = document.getElementById("custom-prompt");
  if (customPrompt) {
    customPrompt.style.display = "flex";
  }

  const winMessage: string = `${winnerName}, you won!`;
  const winMessageElement = document.getElementById("win-message");
  if (winMessageElement) {
    winMessageElement.textContent = winMessage;
  }
}

const restartButton: HTMLElement | null = document.getElementById('restart-button');
if (restartButton) {
  restartButton.addEventListener('click', () => {
    restartGame();
  });
}

function restartGame(): void {
  const customPrompt: HTMLElement | null = document.getElementById("custom-prompt");
  if (customPrompt) {
    customPrompt.style.display = "none";
  }

  const cells: string[] = ["1A", "1B", "1C", "2A", "2B", "2C", "3A", "3B", "3C"];

  cells.forEach((cell: string) => {
    const element: HTMLElement | null = document.getElementById(cell);
    if (element) {
      element.innerHTML = "";
    }
  });

  const inputX: HTMLInputElement | null = document.getElementById("inputX") as HTMLInputElement;
  if (inputX) {
    inputX.value = "";
  }

  const inputO: HTMLInputElement | null = document.getElementById("inputO") as HTMLInputElement;
  if (inputO) {
    inputO.value = "";
  }
}
