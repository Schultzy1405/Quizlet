


const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: light)');

const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

console.log('prefersDarkTheme',prefersDarkTheme);
console.log('prefersDarkTheme 2', window.matchMedia('(prefers-color-scheme'));
if (prefersDarkTheme.matches) {
  document.querySelector('body').classList.add('dark');
  document.querySelector('body').classList.remove('light');

} else {
    document.querySelector('body').classList.add('light');
  document.querySelector('body').classList.remove('dark');
} 