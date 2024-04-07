const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: light)');

const body = document.querySelector('body');

// Function to toggle between dark and light themes
function toggleTheme() {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
    }
}

// Toggle theme when the button is clicked
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Set initial theme based on user's preference
if (prefersDarkTheme.matches) {
    body.classList.add('dark');
} else {
    body.classList.add('light');
}