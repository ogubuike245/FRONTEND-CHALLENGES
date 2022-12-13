let inputOne = document.getElementById("slider__area_valueOne");
let inputTwo = document.getElementById("slider__area_valueTwo");
let inputThree = document.getElementById("slider__area_valueThree");
let slider = document.querySelector("input[type='range']");

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

inputOne.addEventListener("click", function () {
  slider.value = inputOne.innerHTML;
  setTheme("theme-one");
});
inputTwo.addEventListener("click", function () {
  slider.value = inputTwo.innerHTML;
  setTheme("theme-two");
});
inputThree.addEventListener("click", function () {
  slider.value = inputThree.innerHTML;
  setTheme("theme-three");
});

// TODO: DISPLAY INPUTTED DIGIT

function display(number) {
  variable = document.getElementById("displayArea").value += number;
  return number;
}

//FIXME: ADD CALCULATION FUNCTIONS

// TODO: EQUALS
function solve() {
  displayArea = document.getElementById("displayArea").value;
  if (displayArea == "") {
    //TODO: SET UP PROPER NOTIFICATION BOX
    alert("empty BOX");
  } else {
    let Variable = eval(document.getElementById("displayArea").value);
    document.getElementById("displayArea").value = Variable;
  }

  return Variable;
}

// TODO: ADDITION
function addition() {}

// TODO: SUBTRACTION
function subtraction() {}

// TODO: MULTIPLICATION
function multiplication() {}

// TODO: DIVISION
function division() {}

// TODO: RESET
function clearScreen() {
  document.getElementById("displayArea").value = "";
}

//TODO: DELETE
function backSpace() {
  displayArea.value = displayArea.value.slice(0, -1);
}
// TODO: ADD ANIMATIONS WHEN BUTTON IS CLICKED

// TODO: THEME SWITCHER

// Immediately invoked function to set the theme on initial load
(function () {
  let Item = localStorage.getItem("theme");

  if (Item === "theme-one") {
    setTheme("theme-one");
  } else if (Item === "theme-two") {
    setTheme("theme-two");
  } else {
    setTheme("theme-three");
  }
})();
