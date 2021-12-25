let darkMode = localStorage.getItem('active');
const toggle = document.getElementById('toggle');

const enableDarkMode = () => {
	document.body.classList.add('active');
	toggle.classList.add('active');
	localStorage.setItem('active', 'enabled');
};

const disableDarkMode = () => {
	document.body.classList.remove('active');
	toggle.classList.remove('active');
	localStorage.setItem('active', null);
};

if (darkMode === 'enabled') {
	enableDarkMode();
}

toggle.onclick = function () {
	darkMode = localStorage.getItem('active');
	if (darkMode != 'enabled') {
		enableDarkMode();
		console.log(darkMode);
	} else {
		disableDarkMode();
		console.log(darkMode);
	}
};
