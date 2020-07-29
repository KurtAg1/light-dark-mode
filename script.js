const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

// CONSTANTS
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

// Dark or Light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(color) {
  document.documentElement.setAttribute("data-theme", color);
  nav.style.backgroundColor = `var(--nav-background-${color})`;
  textBox.style.backgroundColor = `var(--text-background-${color})`;
  const display = color.charAt(0).toUpperCase() + color.slice(1);
  toggleIcon.children[0].textContent = `${display} Mode`;
  color === "dark"
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  imageMode(color);
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    localStorage.setItem("theme", "dark");
    toggleDarkLightMode(DARK_THEME); // Dark Mode
  } else {
    localStorage.setItem("theme", "light");
    toggleDarkLightMode(LIGHT_THEME); // Light Mode
  }
}

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  // User has a saved theme
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    toggleDarkLightMode(DARK_THEME);
  }
}
