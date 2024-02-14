// function play() {
//   // step-1 hide screen
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   //   show playground
//   const PlayGroundSection = document.getElementById("play-ground");
//   PlayGroundSection.classList.remove("hidden");
// }
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
  showElementById("play-ground");
  continueGame();
}
