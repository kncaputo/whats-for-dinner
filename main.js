// Add Random Side, Main and Dessert Functionality
//
// - When a user selects a dish option (don't worry about "Entire Meal" yet) and then clicks the "Let's Cook!" button, the user sees a random dish from the list of possible dishes for that category
// - When the dish name appears, the cookpot icon disappears
var cookButton = document.querySelector('.button-cook');

var selectedDish;

cookButton.addEventListener('click', letsCook);

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function letsCook() {
  var selection = document.getElementById('user-choice').elements['user-choice'].value;
  var randomSelection;
  if (selection === "side") {
    randomSelection = mainDish[getRandomIndex(side)];
  }
  if (selection === "mainDish") {
    randomSelection = mainDish[getRandomIndex(mainDish)];
  }
  if (selection === "dessert") {
    randomSelection = mainDish[getRandomIndex(dessert)];
  }
  if (selection === "entireMeal") {
    randomSelection = mainDish[getRandomIndex(mainDish)];
  }
  toggleSelection(randomSelection);
}
//
// function randomDish() {
//
// }
//
function toggleSelection(randomSelection) {
  // document.querySelector('#cook-this').classList.
  console.log(randomSelection)
}
