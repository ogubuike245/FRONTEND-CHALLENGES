// ### TWO COLOR MODE THEME SWITCHER USING LOCAL STORAGE TO SAVE STATES

// CUSTOM FUNCTION TO HANDLE CHANGE OF THEME MODES
function setTheme(ThemeName) {
  localStorage.setItem("theme", ThemeName);
  return (document.body.className = ThemeName);
}
function setHidden(element, state) {
  localStorage.setItem("HiddenState", element.className);
  return (element.style.visibility = state) && (element.style.opacity = "0");
}
function setVisible(element, state) {
  localStorage.setItem("VisibleState", element.className);
  return (element.style.visibility = state) && (element.style.opacity = "1");
}

// TOGGLE BETWEEN BOTH  THEME MODES FROM LOCAL STORAGE
const darkModeSwitch = document.getElementById("dark");
const lightModeSwitch = document.getElementById("light");

function darkTheme() {
  setTheme("dark-theme");
  setHidden(darkModeSwitch, "hidden");
  setVisible(lightModeSwitch, "visible");
  document.body.style.backgroundImage =
    "url('../assets/images/bg-desktop-dark.jpg') ";
}
function lightTheme() {
  setTheme("light-theme");
  setHidden(lightModeSwitch, "hidden");
  setVisible(darkModeSwitch, "visible");
  document.body.style.backgroundImage =
    "url('../assets/images/bg-desktop-light.jpg')";
}

// LOAD THE LAST APPLIED THEME FROM LOCAL STORAGE
(function SelectTheme() {
  let Theme = localStorage.getItem("theme");
  let HiddenState = localStorage.getItem("HiddenState");
  setTheme(Theme);
  if (HiddenState == null) return setHidden(lightModeSwitch, "hidden");
  if (HiddenState == "lightSwitch") return lightTheme();
  if (HiddenState == "darkSwitch") return darkTheme();
  // if (HiddenState == "lightSwitch") return setHidden(lightModeSwitch, "hidden");
  // if (HiddenState == "darkSwitch") return setHidden(lightModeSwitch, "hidden");
})();

// ### TWO COLOR THEME SWITCHER ENDS HERE
