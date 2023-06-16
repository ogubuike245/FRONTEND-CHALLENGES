const slider = document.getElementById("themeSwitcher");
const displayArea = document.getElementById("displayArea");

// Set a given theme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// Set theme on reload from local storage
(function () {
  const theme = localStorage.getItem("theme");
  setTheme(theme);

  if (theme === "theme-one") {
    slider.value = 1;
  } else if (theme === "theme-two") {
    slider.value = 2;
  } else if (theme === "theme-three") {
    slider.value = 3;
  }
})();

// Select theme by clicking on thumb of input range type
function selectTheme() {
  const theme = slider.value;
  switch (theme) {
    case "1":
      setTheme("theme-one");
      break;
    case "2":
      setTheme("theme-two");
      break;
    case "3":
      setTheme("theme-three");
      break;
  }
}

// Select theme by clicking on numbers above input range type
document.querySelectorAll("p").forEach(function (item) {
  item.addEventListener("click", function () {
    slider.value = item.innerHTML;
    selectTheme();
    console.log(item.innerHTML);
  });
});

// Display inputted digit
function display(number) {
  const variable = number.toString();
  displayArea.value += variable;
  const stringVariable = parseFloat(variable.split(".")[0]);

  // const formatter = new Intl.NumberFormat('en-us');
  // console.log(formatter.format(variable));

  console.log(stringVariable);

  return stringVariable.toLocaleString("en");
}

// Calculate result
function solve() {
  const expression = displayArea.value.trim();
  if (expression === "") {
    // TODO: set up proper notification box
    alert("Please enter an expression");
  } else {
    try {
      const result = eval(expression);
      displayArea.value = result;
      return result;
    } catch (e) {
      // TODO: set up proper notification box
      alert("Invalid expression");
    }
  }
}

// Reset display
function clearScreen() {
  displayArea.value = "";
}

// Delete last digit
function backSpace() {
  displayArea.value = displayArea.value.slice(0, -1);
}

// TODO: add animations when button is clicked
