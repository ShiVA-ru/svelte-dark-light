const STORAGE_KEY = 'theme';

let defaultTheme = 'light';
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

console.log('prefersDark', prefersDark);

defaultTheme = prefersDark ? 'dark' : 'light';
console.log('defaultTheme', defaultTheme);

const getTheme = () => {
	if (typeof localStorage !== 'undefined') {
		if (localStorage.getItem(STORAGE_KEY)) {
			return localStorage.getItem(STORAGE_KEY);
		} else {
			return defaultTheme;
		}
	}
	return defaultTheme;
};

const setTheme = (theme) => {
	document.documentElement.dataset.theme = theme;
};

setTheme(getTheme());

const themeObserver = new MutationObserver(() => {
	const nextTheme = document.documentElement.dataset.theme;

	if (nextTheme) {
		localStorage.setItem(STORAGE_KEY, nextTheme);
	}
});

themeObserver.observe(document.documentElement, {
	attributes: true,
	attributeFilter: ['data-theme']
});

const toggleTheme = () => {
	const currentTheme = getTheme();
	const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
	setTheme(nextTheme);
};

window.toggleTheme = toggleTheme;
