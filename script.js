const toggleButton = document.querySelector('.theme-toggle');
const root = document.documentElement;

const THEMES = {
  dark: {
    label: 'Светлая тема',
    value: 'dark',
  },
  light: {
    label: 'Тёмная тема',
    value: 'light',
  },
};

const savedTheme = localStorage.getItem('theme');
const initialTheme = savedTheme === 'light' ? 'light' : 'dark';
root.setAttribute('data-theme', initialTheme);

const updateButton = (theme) => {
  if (!toggleButton) return;
  toggleButton.textContent = THEMES[theme].label;
  toggleButton.setAttribute('aria-pressed', theme === 'light');
};

updateButton(initialTheme);

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    updateButton(nextTheme);
  });
}
