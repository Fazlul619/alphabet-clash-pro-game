function handleKeyboardButtonPress(event) {
  const playerPressed = event.key;
  // stop the game
  if (playerPressed === "Escape") {
    gameOver();
  }
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectAlphabet = currentAlphabet.toLowerCase();
  if (playerPressed === expectAlphabet) {
    const currentScore = getTextElementValueById("current-score");
    const updateScore = currentScore + 1;
    setTextElementValueById("current-score", updateScore);

    removeBackgroundColorById(expectAlphabet);
    continueGame();
  } else {
    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);
    if (updatedLife === 0) {
      gameOver();
    }
  }
}
document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
  // step-1 generate a random alphabet
  const alphabet = getARandomAlphabet();
  //   set randomly generated alphabet to the screen
  const currentAlphabets = document.getElementById("current-alphabet");
  currentAlphabets.innerText = alphabet;
  // set bg color
  setBackgroundColorById(alphabet);
}
function play() {
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");
  // reset function
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);
  continueGame();
}
function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  // update
  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("last-score", lastScore);
  // clear the last selected
  const currentAlphabet = getElementTextById("current-alphabet");
  removeBackgroundColorById(currentAlphabet);
}
