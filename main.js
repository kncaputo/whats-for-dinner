var addRecipe = document.querySelector('.button-recipe');
var clearDisplay = document.querySelector('.button-clear');
var clearFormButton = document.querySelector('.button-clear-form');
var cookButton = document.querySelector('.button-cook');
var cookThis = document.querySelector('#cook-this');
var cookThisHeading = document.querySelector('h5');
var pot = document.querySelector('.pot');
var saveRecipe = document.querySelector('.button-new');

addRecipe.addEventListener('click', displayAddRecipeBar);
clearDisplay.addEventListener('click', clear);
cookButton.addEventListener('click', letsCook);
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
  cookThis.innerText = `${randomSelection}!`;
}

function displayMeal(side, main, dessert) {
  cookThis.innerText = `${main} with a side of ${side} and ${dessert} for dessert!`;
}

function displayElements() {
  pot.classList.add('hidden');
  cookThisHeading.classList.remove('hidden');
  cookThis.classList.remove('hidden');
  clearDisplay.classList.remove('hidden');
}

function clear() {
  pot.classList.remove('hidden');
  cookThisHeading.classList.add('hidden');
  cookThis.classList.add('hidden');
  clearDisplay.classList.add('hidden');
}

function displayAddRecipeBar() {
  document.querySelector('footer').classList.toggle('hidden');
}

function saveNew() {
  var recipeType = document.querySelector('#recipe-type').value.toLowerCase();
  var recipeName = document.querySelector('#recipe-name').value.toLowerCase();

  if (recipeType === 'side') {
    if (!side.includes(recipeName)) {
      side.push(recipeName);
      alert('Recipe Added');
    } else {
      alert('This recipe already exsists');
    }
  }
  if (recipeType === 'main dish') {
    if (!mainDish.includes(recipeName)) {
      mainDish.push(recipeName);
      alert('Recipe Added');
    } else {
      alert('This recipe already exsists');
    }
  }
  if (recipeType === 'dessert') {
    if (!dessert.includes(recipeName)) {
      dessert.push(recipeName);
      alert('Recipe Added');
    } else {
      alert('This recipe alredy exsists');
    }
  }
  displayClearForm();
}

function displayClearForm() {
  clearFormButton.classList.remove('hidden');
  clearFormButton.addEventListener('click', clearForm);
}

function clearForm() {
  document.getElementById("recipe-type").value = "";
  document.getElementById("recipe-name").value = "";
  clearFormButton.classList.add('hidden');
}
