


// const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: light)');

// const button = document.querySelector("[data-theme-toggle]");
// const localStorageTheme = localStorage.getItem("theme");
// const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

// console.log('prefersDarkTheme',prefersDarkTheme);
// console.log('prefersDarkTheme 2', window.matchMedia('(prefers-color-scheme'));
function changeMode(e){
  var currentMode = e.target.getAttribute("data-value")
if (currentMode == "light") {
  document.querySelector('body').classList.add('dark');
  document.querySelector('body').classList.remove('light');
  e.target.setAttribute("data-value","dark")
  e.target.classList.remove("buttonDark")
  e.target.classList.add("buttonLight")
  e.target.textContent = "To Light"

} else {
  document.querySelector('body').classList.add('light');
  document.querySelector('body').classList.remove('dark');
  e.target.setAttribute("data-value","light")
  e.target.classList.add("buttonDark")
  e.target.classList.remove("buttonLight")
  e.target.textContent = "To Dark"
} 
}
const switcherButton=document.getElementById ("Toggle-Dark-or-Light")

switcherButton.addEventListener("click",changeMode)