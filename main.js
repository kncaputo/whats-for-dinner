var cookButton = document.querySelector('.button-cook');
var clearButton = document.querySelector('.button-clear');
var addRecipe = document.querySelector('.button-recipe');
var saveRecipe = document.querySelector('.button-new');

cookButton.addEventListener('click', letsCook);
clearButton.addEventListener('click', clear);
addRecipe.addEventListener('click', displayAddRecipeBar);
saveRecipe.addEventListener('click', saveNew);

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function letsCook() {
  var selection = document.getElementById('user-choice').elements['user-choice'].value;
  var randomSelection;
  if (selection === "side") {
    randomSelection = side[getRandomIndex(side)];
    displayDish(randomSelection);
    displayElements();
  }
  if (selection === "mainDish") {
    randomSelection = mainDish[getRandomIndex(mainDish)];
    displayDish(randomSelection);
    displayElements();
  }
  if (selection === "dessert") {
    randomSelection = dessert[getRandomIndex(dessert)];
    displayDish(randomSelection);
    displayElements();
  }
  if (selection === "entireMeal") {
    randomSide = side[getRandomIndex(side)];
    randomMain = mainDish[getRandomIndex(mainDish)];
    randomDessert = dessert[getRandomIndex(dessert)];
    displayMeal(randomSide, randomMain, randomDessert);
    displayElements();
  }
}

function displayDish(randomSelection) {
  document.querySelector('#cook-this').innerText = `${randomSelection}!`;
}

function displayMeal(side, main, dessert) {
  document.querySelector('#cook-this').innerText = `${main} with a side of ${side} and ${dessert} for dessert!`;
}

function displayElements() {
  document.querySelector('.pot').classList.add('hidden');
  document.querySelector('h5').classList.remove('hidden');
  document.querySelector('#cook-this').classList.remove('hidden');
  document.querySelector('.button-clear').classList.remove('hidden');
}

function clear() {
  document.querySelector('.pot').classList.remove('hidden');
  document.querySelector('h5').classList.add('hidden');
  document.querySelector('#cook-this').classList.add('hidden');
  document.querySelector('.button-clear').classList.add('hidden');
}

function displayAddRecipeBar() {
  document.querySelector('footer').classList.toggle('hidden');
}

function saveNew() {
  var recipeType = document.querySelector('#recipe-type').value.toLowerCase();
  var recipeName = document.querySelector('#recipe-name').value.toLowerCase();

  if (recipeType === 'side') {
    side.push(recipeName);
  }
  if (recipeType === 'main dish') {
    mainDish.push(recipeName);
  }
  if (recipeType === 'dessert') {
    dessert.push(recipeName);
    console.log(dessert)
  }
}
